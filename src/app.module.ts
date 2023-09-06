import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TransactionController } from './infra/http/controller/transaction-controller';
import { ApiExchangeRates } from './infra/api/api-exchange-rates';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { serviceProviders } from './ioc-providers/service-provider';
import { providers } from './ioc-providers/providers';
import { UserController } from './infra/http/controller/user-controller';
import { UserRepository } from './infra/database/repositories/user-repository';
import { databaseProviders } from './ioc-providers/database-provider';
import { TransactionRepository } from './infra/database/repositories/transaction-repository';
import { TransactionModel } from "./domain/model/transaction-model";
import { ValidationUserMiddleware } from "./infra/http/middlewares/validation-user-middleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [TransactionController, UserController],
  providers: [
    ...databaseProviders,
    ...serviceProviders,
    ...providers,
    ConfigService,
    ApiExchangeRates,
    UserRepository,
    TransactionRepository,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidationUserMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST }, 'user/(.*)')
      .forRoutes('*');
  }
}
