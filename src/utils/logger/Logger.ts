import { LoggerService } from '@nestjs/common';
import { writeFileSync } from 'fs';

export class Logger implements LoggerService {
  log(message: string) {
    const date = new Date().toISOString();
    const logMessage = `[${date}] [log] ${message}\n`;
    writeFileSync('./files/logger.txt', logMessage, { flag: 'a' });
    console.error(logMessage);
  }
  error(message: string, trace: string) {
    const date = new Date().toISOString();
    const logMessage = `[${date}] [error] ${message}\n${trace}\n`;
    writeFileSync('logger.txt', logMessage, { flag: 'a' });
    console.error(logMessage, trace);
  }

  warn(message: string) {
    const date = new Date().toISOString();
    const logMessage = `[${date}] [warn] ${message}\n`;
    writeFileSync('logger.txt', logMessage, { flag: 'a' });
    console.error(logMessage);
  }
}
