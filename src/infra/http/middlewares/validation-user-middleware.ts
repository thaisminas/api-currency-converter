import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../../database/repositories/user-repository';

@Injectable()
export class ValidationUserMiddleware implements NestMiddleware {
  constructor(private readonly userRepository: UserRepository) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const dataBody = req.body.userId;
    const dataParam = req.params[0];
    const userId = dataBody === undefined ? dataParam : dataBody;

    const user = await this.userRepository.findUser(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    next();
  }
}
