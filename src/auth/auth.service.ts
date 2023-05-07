import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/shared/bcrypt';
import { UserService } from 'src/user/user.service';
import { Auth } from './auth.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly service: UserService,
    private jwtService: JwtService,
  ) {}
  async login(user: Auth) {
    const checkUser = await this.service.findByEmail(user.email);
    if (checkUser && checkUser != 'no user found with ID: ${email}') {
      const isValidLogin = await comparePassword(
        user.password,
        checkUser.password,
      );
      if (isValidLogin) {
        // return 'jwtToken';
        const payload = { email: checkUser.email, sub: checkUser._id };
        return {
          access_token: await this.jwtService.signAsync(payload),
          firstName: checkUser.firstName,
          lastName: checkUser.lastName,
          email: checkUser.email,
        };
      } else {
        return 'Invalid Login';
      }
    } else {
      return 'Invalid Login';
    }
  }
}
