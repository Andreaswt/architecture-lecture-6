import { Category } from "./Category";
import { ProductType } from "./ProductType";

export class PlayStation extends Category {
  public productType: ProductType = ProductType.PlayStation;

  constructor(title: string, imageUrl: string, basePrice: number) {
    super(title, imageUrl, basePrice, ProductType.PlayStation);
  }
}
