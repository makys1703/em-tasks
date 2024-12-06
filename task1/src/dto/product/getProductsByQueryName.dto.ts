import {
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  NotContains
} from 'class-validator';

export class GetProductsByQueryNameDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(32)
  @NotContains(' ')
  name?: string;
}
