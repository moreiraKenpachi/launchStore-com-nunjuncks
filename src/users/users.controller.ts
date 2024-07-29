/* eslint-disable prettier/prettier */
import { Controller, Get, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getViewName(@Res() res: Response): void {
    const message: string = this.usersService.getViewName();

    return res.render('index', { message });
  }
}
