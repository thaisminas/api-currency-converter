import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUser } from '../../../application/use-cases/create-user';
import { InputUser, OutputUser } from '../../../utils/types/user-type';
import { isString } from '@nestjs/common/utils/shared.utils';
import * as EmailValidator from 'email-validator';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private user: CreateUser) {}

  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'Created',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'invalid data , please provide a valid data!',
  })
  @ApiTags('users')
  async createUser(@Body() data: InputUser): Promise<OutputUser> {
    if (!isString(data.name) || !EmailValidator.validate(data.email)) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'invalid data, please provide a valid data!',
      });
    }
    return await this.user.execute(data);
  }
}
