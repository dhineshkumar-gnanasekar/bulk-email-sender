import { IsEmail, IsNotEmpty } from 'class-validator';

export class Auth {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
