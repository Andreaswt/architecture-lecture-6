import { Category } from "./Category";
import { ProductType } from "./ProductType";

export class Laptop extends Category {
  constructor(title: string, imageUrl: string, basePrice: number) {
    super(title, imageUrl, basePrice, ProductType.Laptop);
  }
}
