import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

  constructor(
    private userService: UsersService,
  ) {}

  async validadeUser(userEmail: string, userPassword:string){
    const user = await this.userService.getByEmail(userEmail);
    if (user && user.password === userPassword){
      const { _id, name, email} = user;
      return { id: _id, name, email }; 
    }
    return null
  }
}
