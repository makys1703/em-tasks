import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ActionRepository {
  async createAction(data) {
    return await prisma.action
      .create({ data })
      .finally(() => prisma.$disconnect());
  }

  async getActionsByFilters(filters) {
    return await prisma.action
      .findMany({
        where: {
          plu: filters.plu ?? undefined,
          shopId: filters.shopId ?? undefined,
          action: filters.action
            ? {
                contains: filters.action
              }
            : undefined,
          date:
            filters.dateFrom && filters.dateFrom
              ? {
                  gte: filters.dateFrom,
                  lte: filters.dateTo
                }
              : undefined
        },
        take: filters.limit ?? undefined,
        skip: filters.page > 1 ? (filters.page - 1) * filters.limit : 0,
        orderBy: {
          date: 'desc'
        }
      })
      .finally(() => prisma.$disconnect());
  }
}

export const actionRepository = new ActionRepository();
