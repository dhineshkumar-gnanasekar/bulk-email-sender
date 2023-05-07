import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { encryptPassword, comparePassword } from 'src/shared/bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: User) {
    const checkUser = await this.findByEmail(user.email);
    if (!checkUser) {
      user.password = await encryptPassword(user.password);
      const createdUser = new this.userModel(user);
      return createdUser.save();
    } else {
      return 'User Already Exist';
    }
  }

  async find(id: string) {
    console.log('find', id);
    const foundUser = this.userModel.findById(id);
    if (foundUser) {
      return foundUser;
    } else {
      return 'no user found with ID: ${id}';
    }
  }

  async findByEmail(email: string) {
    const foundUser = this.userModel.findOne({ email });
    if (foundUser) {
      return foundUser;
    } else {
      return 'no user found with ID: ${email}';
    }
  }
}
