import { IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  provider: string;

  @IsString()
  socialId: string;

  @IsString()
  thumbnail: string;
}
