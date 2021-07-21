import { Controller, Request, Post, UseGuards, Get, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { UsersService } from './users/users.service';
import { User } from './users/user';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { Role } from './auth/role.enum';
import { Roles } from './auth/decorators/roles.decorator';
import { RolesGuard } from './auth/guards/roles.guard';

@Controller()
export class AppController {

  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService
    ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any){
    console.log(` app.controller ${JSON.stringify(req.user)}`)
    return this.authService.login(req.user);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }
}
