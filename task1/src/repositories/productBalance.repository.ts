import { PrismaClient } from '@prisma/client';
import { CreateProductBalanceDto } from '../dto/productBalance/createProductBalance.dto';
import { ChangeProductBalanceDto } from '../dto/productBalance/changeProductBalance.dto';
import { GetProductBalanceByQueryFiltersDto } from '../dto/productBalance/getProductBalanceByQueryFilters.dto';
import { ProductBalanceDto } from '../dto/productBalance/productBalance.dto';
import { ProductBalanceByQueryFiltersDto } from '../dto/productBalance/productBalanceByQueryFilters.dto';

const prisma = new PrismaClient();

class ProductBalanceRepository {
  async createProductBalance(
    data: CreateProductBalanceDto
  ): Promise<ProductBalanceDto> {
    try {
      return await prisma.productBalance.create({
        data: {
          ...data,
          shopId: data.shopId,
          count: 0,
          orderCount: 0
        }
      });
    } finally {
      prisma.$disconnect();
    }
  }

  async increaseProductBalance({
    amount,
    productPlu,
    shopId,
    forOrder
  }: ChangeProductBalanceDto): Promise<ProductBalanceDto> {
    try {
      return await prisma.productBalance.update({
        data: {
          count: {
            increment: forOrder ? 0 : amount
          },
          orderCount: {
            increment: forOrder ? amount : 0
          }
        },
        where: {
          productPlu_shopId: {
            productPlu: productPlu,
            shopId: shopId
          }
        }
      });
    } finally {
      prisma.$disconnect();
    }
  }

  async decreaseProductBalance({
    amount,
    productPlu,
    shopId,
    forOrder
  }: ChangeProductBalanceDto): Promise<ProductBalanceDto> {
    try {
      return await prisma.productBalance.update({
        data: {
          count: {
            decrement: forOrder ? 0 : amount
          },
          orderCount: {
            decrement: forOrder ? amount : 0
          }
        },
        where: {
          count: forOrder
            ? undefined
            : {
                gte: amount
              },
          orderCount: !forOrder
            ? undefined
            : {
                gte: amount
              },
          productPlu_shopId: {
            productPlu: productPlu,
            shopId: shopId
          }
        }
      });
    } finally {
      prisma.$disconnect();
    }
  }

  async getProductBalanceByFilters(
    filters: GetProductBalanceByQueryFiltersDto
  ): Promise<ProductBalanceByQueryFiltersDto[]> {
    try {
      return await prisma.productBalance.findMany({
        where: {
          productPlu: filters.productPlu && {
            equals: filters.productPlu
          },
          shopId: filters.shopId && {
            equals: filters.shopId
          },
          count:
            filters.countFrom !== undefined || filters.countTo !== undefined
              ? {
                  lte: filters.countTo,
                  gte: filters.countFrom
                }
              : undefined,
          orderCount:
            filters.orderCountFrom !== undefined ||
            filters.orderCountTo !== undefined
              ? {
                  gte: filters.orderCountFrom,
                  lte: filters.orderCountTo ? filters.orderCountTo : undefined
                }
              : undefined
        },
        select: {
          productPlu: true,
          shopId: true,
          count: true,
          orderCount: true,
          product: {
            select: {
              name: true
            }
          }
        },
        orderBy: {
          count: 'desc'
        }
      });
    } finally {
      prisma.$disconnect();
    }
  }
}

export const productBalanceRepository = new ProductBalanceRepository();
