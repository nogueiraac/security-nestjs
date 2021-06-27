import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private userModel: Model <User>
  ) {}

  
  async getByEmail(email: string){
    return await this.userModel.findOne({ email: email }).exec();
  }

  async getAll(): Promise <User[]> {
    return this.userModel.find().exec();
  }
}
