import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';
import { User } from './users/user';

@Controller()
export class AppController {

  constructor(private readonly usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any){
    return req.user
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }
}
