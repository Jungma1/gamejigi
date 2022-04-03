import { IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  provider: string;

  @IsString()
  social_id: string;

  @IsString()
  thumbnail: string;
}
