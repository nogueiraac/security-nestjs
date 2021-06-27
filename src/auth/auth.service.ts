import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validadeUser(userEmail: string, userPassword:string){
    const user = await this.userService.getByEmail(userEmail);
    if (user && user.password === userPassword){
      const { _id, name, email} = user;
      return { id: _id, name, email }; 
    }
    return null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
