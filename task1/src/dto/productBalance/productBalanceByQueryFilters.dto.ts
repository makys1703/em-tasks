import { ProductBalanceDto } from './productBalance.dto';
import { ProductDto } from '../product/product.dto';

export class ProductBalanceByQueryFiltersDto extends ProductBalanceDto {
  product: Pick<ProductDto, 'name'>;
}
