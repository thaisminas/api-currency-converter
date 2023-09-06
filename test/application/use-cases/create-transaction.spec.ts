// import {
//   CreateTransaction,
//   GetCurrencyConversionData,
// } from '../../../src/application/use-cases';
// import { TransactionRepository } from '../../../src/infra/database/repositories/transaction-repository';
// import { UserRepository } from '../../../src/infra/database/repositories/user-repository';
// import { Logger } from 'sequelize/types/utils/logger';
//
// describe('CreateTransaction', () => {
//   let createTransaction: CreateTransaction;
//   let transactionRepository: TransactionRepository;
//   let userTransaction: UserRepository;
//   let getCurrencyConversionData: GetCurrencyConversionData;
//   let logger: Logger;
//
//   beforeEach(() => {
//     transactionRepository = new TransactionRepository();
//     userTransaction = new UserRepository();
//     getCurrencyConversionData = new GetCurrencyConversionData();
//     logger = new Logger();
//     createTransaction = new CreateTransaction(
//       transactionRepository,
//       userTransaction,
//       getCurrencyConversionData,
//       logger,
//     );
//   });
//
//   it('should return false for invalid data', async () => {
//     const inputData = {
//       // Invalid data, missing properties
//     };
//
//     const result = await createTransaction.execute(inputData);
//
//     expect(result).toBe(false);
//   });
//
//   it('should create a transaction for valid data', async () => {
//     const inputData = {
//       userId: 'validUserId',
//       originCurrency: 'BRL',
//       destinationCurrency: 'USD',
//       originValue: 100,
//       // Add other required properties
//     };
//
//     const result = await createTransaction.execute(inputData);
//
//     // Assert the result as needed
//   });
// });
//
// describe('CreateTransaction', () => {
//   let createTransaction: CreateTransaction;
//
//   beforeEach(() => {
//     createTransaction = new CreateTransaction(/* ...dependencies */);
//   });
//
//   it('should return true for valid data', async () => {
//     const inputData = {
//       userId: 'validUserId',
//       originCurrency: 'BRL',
//       destinationCurrency: 'USD',
//       originValue: 100,
//     };
//
//     const isValid = await createTransaction['isValidData'](inputData);
//
//     expect(isValid).toBe(true);
//   });
//
//   it('should return false for invalid data', async () => {
//     const inputData = {
//       userId: 'validUserId',
//       originCurrency: 'INVALID',
//       destinationCurrency: 'USD',
//       originValue: 100,
//     };
//
//     const isValid = await createTransaction['isValidData'](inputData);
//
//     expect(isValid).toBe(false);
//   });
// });
