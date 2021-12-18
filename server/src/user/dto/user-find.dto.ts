import { IsString } from 'class-validator';

export class UserFindDto {
  @IsString()
  id: string;
}
