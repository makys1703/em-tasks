import { IsInt, Min } from 'class-validator';

export class CreateProductBalanceDto {
  @IsInt()
  @Min(0)
  productPlu: number;

  @IsInt()
  @Min(1)
  shopId: number;
}
