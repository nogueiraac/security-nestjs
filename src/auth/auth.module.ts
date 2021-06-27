import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';


@Module({
    imports: [ UsersModule ],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService]
})
export class AuthModule {}
