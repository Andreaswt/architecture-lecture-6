import { DISCOUNTRATE, TAXRATE } from "../constants";
import { ProductType } from "./ProductType";

export class Category {
  public title: string;
  public imageUrl: string;
  public basePrice: number;
  public taxRate: number = TAXRATE;
  public discountRate: number = DISCOUNTRATE;
  public productType: ProductType;

  constructor(
    title: string,
    imageUrl: string,
    basePrice: number,
    productType: ProductType
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.basePrice = basePrice;
    this.productType = productType;
  }

  public getPrice(): number {
    return this.basePrice * (1 - this.discountRate) * this.taxRate;
  }

  public getPriceWithoutTaxes(): number {
    return this.basePrice * (1 - this.discountRate);
  }
}
