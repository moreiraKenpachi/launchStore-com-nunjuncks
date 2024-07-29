/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  getViewName(): string {
    return 'preparando o projeto MVC!';
  }
}
