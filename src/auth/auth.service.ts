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
    console.log(`teste fodase: ${user}`)
    if (user && user.password === userPassword){
      const { _id, name, email, roles} = user;
      console.log(`teste fodase2: ${user}`)
      return { id: _id, name, email, roles }; 
    }
    return null
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.id, roles: user.roles, useremail: user.email };
    console.log(` Payload: ${JSON.stringify(payload)}`)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
