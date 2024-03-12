import { Category } from "./Category";
import { ProductType } from "./ProductType";

export class Phone extends Category {
  public productType: ProductType = ProductType.Phone;

  constructor(title: string, imageUrl: string, basePrice: number) {
    super(title, imageUrl, basePrice, ProductType.Phone);
  }
}
