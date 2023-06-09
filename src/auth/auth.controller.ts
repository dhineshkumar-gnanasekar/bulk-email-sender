import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Auth } from './auth.schema';
import { AuthService } from './auth.service';
import { Public } from './auth.custom.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async Login(@Body() loginUser: Auth) {
    try {
      return this.service.login(loginUser);
    } catch (e) {
      console.log(e, 'e');
    }
  }

  @Get('profile')
  getProfile(@Body() req) {
    return req.user;
  }
}
