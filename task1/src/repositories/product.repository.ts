import { PrismaClient } from '@prisma/client';
import { CreateProductDto } from '../dto/product/createProduct.dto';
import { ProductDto } from '../dto/product/product.dto';
import { GetProductsByQueryFiltersDto } from '../dto/product/getProductsByQueryFilters.dto';

const prisma = new PrismaClient();

class ProductRepository {
  async createProduct(data: CreateProductDto): Promise<ProductDto> {
    try {
      return await prisma.product.create({ data });
    } finally {
      prisma.$disconnect();
    }
  }

  async getProductsByFilters({
    plu,
    name
  }: GetProductsByQueryFiltersDto): Promise<ProductDto[]> {
    try {
      return await prisma.product.findMany({
        where: {
          plu: {
            equals: plu
          },
          name: {
            contains: name
          }
        }
      });
    } finally {
      prisma.$disconnect();
    }
  }
}

export const productRepository = new ProductRepository();
