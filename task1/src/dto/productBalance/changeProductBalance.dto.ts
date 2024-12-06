import { IsBoolean, IsInt, Min } from 'class-validator';

export class ChangeProductBalanceDto {
  @IsInt()
  @Min(0)
  productPlu: number;

  @IsInt()
  @Min(1)
  shopId: number;

  @IsInt()
  @Min(1)
  amount: number;

  @IsBoolean()
  forOrder: boolean;
}
