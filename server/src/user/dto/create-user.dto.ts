import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  username: string;

  @IsString()
  provider: string;

  @IsString()
  providerId: string;
}
