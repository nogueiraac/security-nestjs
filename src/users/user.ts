import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Resolver } from 'dns';
import { Document } from 'mongoose';
import { Role } from 'src/auth/role.enum';

@Schema()
export class User extends Document {

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: Role, enum: Role, default: Role.USER })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User)