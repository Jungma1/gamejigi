import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserProfileUpdateDto {
  @IsNumber()
  @IsNotEmpty()
  no: number;

  @IsString()
  @IsNotEmpty()
  displayName: string;

  @IsString()
  shortWord: string;

  @IsString()
  thumbnail: string;

  @IsString()
  blogUrl: string;

  @IsString()
  githubUrl: string;
}
