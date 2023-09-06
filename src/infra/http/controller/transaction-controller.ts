import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { CreateTransaction } from '../../../application/use-cases/create-transaction';
import { ApiExchangeRates } from '../../api/api-exchange-rates';
import { GetTransactionList } from '../../../application/use-cases/get-transaction-list';
import UUIDValidator from '../../../utils/helper/UUID-validator';
import {
  InputCreateTransaction,
  InputTransaction,
  OutputTransaction,
} from '../../../utils/types/transaction-type';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller()
export class TransactionController {
  constructor(
    private getValueConvertedCurrency: CreateTransaction,
    private apiExchangeRatesClient: ApiExchangeRates,
    private getTransactionList: GetTransactionList,
  ) {}
  @Post('currency-converter')
  @ApiCreatedResponse({
    status: 201,
    description: 'Created',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'invalid data , please provide a valid data!',
  })
  @ApiBadRequestResponse({
    status: 404,
    description: 'User not found!',
  })
  @ApiTags('transactions')
  async createTransaction(@Body() data: InputCreateTransaction) {
    const isConvertedCurrencyData =
      await this.getValueConvertedCurrency.execute(data);
    if (!isConvertedCurrencyData) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'invalid data , please provide a valid data!',
      });
    }
    return isConvertedCurrencyData;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'invalid data , please provide a valid data!',
  })
  @ApiBadRequestResponse({
    status: 404,
    description: 'User not found!',
  })
  @ApiTags('transactions')
  async getTransactionsList(
    @Param() inputData: InputTransaction,
  ): Promise<OutputTransaction[]> {
    if (!UUIDValidator.uuidValidate(inputData.id)) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'invalid id, please provide a valid id!',
      });
    }
    return await this.getTransactionList.execute(inputData.id);
  }
}
