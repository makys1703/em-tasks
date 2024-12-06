import { IsInt, IsOptional, Min } from 'class-validator';

export class GetProductBalanceByQueryFiltersDto {
  @IsInt()
  @Min(0)
  @IsOptional()
  productPlu?: number;

  @IsInt()
  @IsOptional()
  shopId?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  countFrom?: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  countTo?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  orderCountFrom?: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  orderCountTo?: number;
}
