import {
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserModel } from '../../../domain/model/user-model';
import { UserDto } from '../../../application/dto/UserDto';
import { TransactionModel } from '../../../domain/model/transaction-model';
import { Logger } from '../../../utils/logger/Logger';
import { InputUser } from "../../../utils/types/user-type";

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof UserModel,
    private logger: Logger,
  ) {}

  async create(userId: string, userData: InputUser): Promise<void> {
    await this.userRepository.create({
      id: userId,
      name: userData.name,
      email: userData.email,
    });
  }

  async findUser(userId: string): Promise<UserModel | boolean> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (user === null) {
      this.logger.warn(`not found user for ID ${userId}`);
      return false;
    }
    return user;
  }
}
