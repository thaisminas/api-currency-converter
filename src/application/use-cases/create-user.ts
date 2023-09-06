import { Injectable } from '@nestjs/common';
import UUIDGenerator from '../../domain/identity/UUID-generator';
import { UserRepository } from '../../infra/database/repositories/user-repository';
import { Logger } from '../../utils/logger/Logger';
import { InputUser, OutputUser } from '../../utils/types/user-type';

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository, private logger: Logger) {}
  async execute(data: InputUser): Promise<OutputUser> {
    const uuid = UUIDGenerator.create();
    await this.userRepository.create(uuid, data);
    this.logger.log(`User created with id: ${uuid}`);
    return {
      id: uuid,
    };
  }
}
