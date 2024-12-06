import { IsInt, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsInt()
  plu: number;

  @IsString()
  @MinLength(2)
  @MaxLength(32)
  name: string;
}
