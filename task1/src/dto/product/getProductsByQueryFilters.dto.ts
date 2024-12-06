import {
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
  NotContains
} from 'class-validator';

export class GetProductsByQueryFiltersDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  plu?: number;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(32)
  @NotContains(' ')
  name?: string;
}
