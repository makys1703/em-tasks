import { PrismaClient } from '@prisma/client';
import { CreateProductDto } from '../dto/product/createProduct.dto';
import { ProductDto } from '../dto/product/product.dto';
import { GetProductsByQueryFiltersDto } from '../dto/product/getProductsByQueryFilters.dto';

const prisma = new PrismaClient();

class ProductRepository {
  async createProduct(data: CreateProductDto): Promise<ProductDto> {
    try {
      console.log('REPO: createProducts dto: ', data);
      return await prisma.product.create({ data });
    } finally {
      console.log('FINALLY CALLBACK');
      prisma.$disconnect();
    }
  }

  async getProductsByFilters({
    plu,
    name
  }: GetProductsByQueryFiltersDto): Promise<ProductDto[]> {
    try {
      console.log('REPO: getProductsByFilters dto', { plu, name });
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
      console.log('FINALLY CALLBACK');
      prisma.$disconnect();
    }
  }
}

export const productRepository = new ProductRepository();
