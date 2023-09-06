import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { OutputApiExchangeRate } from '../../utils/types/api-exchange-rate-type';

@Injectable()
export class ApiExchangeRates {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async getRates(): Promise<OutputApiExchangeRate> {
    const apiKey = this.configService.get<string>('API_KEY');
    try {
      const response = await this.httpService
        .get<OutputApiExchangeRate>(
          `http://api.exchangeratesapi.io/latest?base=EUR&access_key=${apiKey}`,
        )
        .toPromise();
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch exchange rates',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
