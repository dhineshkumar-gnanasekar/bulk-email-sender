import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  async find(@Param('id') id: string) {
    console.log('id', id);
    return await this.service.find(id);
  }

  @Post('newuser')
  async create(@Body() user: User) {
    console.log('user');
    return await this.service.create(user);
  }
}
