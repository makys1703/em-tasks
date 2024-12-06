import { Controller, Get, Put } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('user')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get()
  async countUsersWithProblems() {
    return await this.userRepository.countUsersWithProblems();
  }

  @Put()
  async updateUserProblemsAndGetCount() {
    try {
      const countReponse = await this.userRepository.countUsersWithProblems();

      if (!countReponse.usersWithProblems) {
        return countReponse;
      }

      await this.userRepository.updateUserProblems();
      return countReponse;
    } catch (error) {
      throw new Error(error);
    }
  }
}
