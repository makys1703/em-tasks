import { IsInt, IsOptional, Min } from 'class-validator';

export class GetProductsByQueryPluDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  plu: number;
}
