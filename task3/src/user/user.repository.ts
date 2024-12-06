import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CountUsersWithProblems } from './model/countUsersWithProblems.model';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: DatabaseService) {}

  async countUsersWithProblems(): Promise<CountUsersWithProblems> {
    try {
      const response = await this.prisma.user.aggregate({
        _count: {
          problems: true
        },
        where: {
          problems: {
            equals: true
          }
        }
      });
      return {
        usersWithProblems: response._count.problems
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUserProblems(): Promise<void> {
    try {
      await this.prisma.user.updateMany({
        data: {
          problems: false
        },
        where: {
          problems: true
        }
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
