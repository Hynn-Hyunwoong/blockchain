// class 유지보수를 위한 interface

interface IProduct {
  readonly productIdx: number;
  readonly type: string;
  model: string;
  price: number;
  stock?: number;
  discountAmount?: number;
}

class Product {
  productIdx: number;
  type: string;
  model: string;
  price: number;
  stock?: number;
  discountAmount?: number;
  constructor(
    productIdx: number,
    type: string,
    model: string,
    price: number,
    stock?: number,
    discountAmount?: number
  ) {
    this.productIdx = productIdx;
    this.type = type;
    this.model = model;
    this.price = price;
    this.stock = stock;
    this.discountAmount = discountAmount;
  }
  getProductIdx(): number {
    return this.productIdx;
  }
  getType(): string {
    return this.type;
  }
  getName(): string {
    return this.model;
  }

  setDiscountAmount(Amount: number): void {
    this.discountAmount = Amount;
  }
  getPrice(): number {
    if (this.discountAmount === undefined) {
      return this.price;
    } else {
      return this.price - this.discountAmount;
    }
  }

  getStock(): number | undefined {
    return this.stock;
  }
  getTotalPrice(): number | undefined {
    if (this.stock === undefined) {
      return undefined;
    } else {
      return this.price * this.stock;
    }
  }
}

const product = new Product(1, "test", "test", 1000);
