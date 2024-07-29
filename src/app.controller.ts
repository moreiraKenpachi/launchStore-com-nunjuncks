import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getViewName(@Res() res: Response): void {
    const message: string = this.appService.getViewName();

    return res.render('parts/section', { message });
  }
}
