import { Category } from "./Category";
import { ProductType } from "./ProductType";

export class SSD extends Category {
  public productType: ProductType = ProductType.SSD;

  constructor(title: string, imageUrl: string, basePrice: number) {
    super(title, imageUrl, basePrice, ProductType.SSD);
  }
}
