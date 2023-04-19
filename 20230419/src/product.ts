interface Discount {
  getDiscCountPrice(price: number): number;
}

class FlateDiscount implements Discount {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  getDiscCountPrice(price: number): number {
    return price - this.amount;
  }
}

class PercentDiscount implements Discount {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  getDiscCountPrice(price: number): number {
    return price * (1 - this.amount);
  }
}

class Products {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}

// 상속도 가능하지만 확장성에 이슈가 발생할 수 있음
/* 
class ProductDiscount extends Products {
    private discount: number;
    constructor(name: string, price: number, discount: number) {
        super(name, price);
        this.discount = discount;
    }
}
*/

class ProductDiscount {
  private product: Products;
  private discount: number;

  constructor(product: Products, discount: number) {
    this.product = product;
    this.discount = discount;
  }

  getPrice(): void {
    console.log(this.discount);
  }
}

const prod = new Products("MacBookPro", 2300000);
const prod2 = new Products("iPhone", 1000000);
const ProdWithPercentDiscount = new PercentDiscount(0.15);
const ProductWithDiscount2 = new ProductDiscount(prod2, 50000);

ProdWithPercentDiscount.getDiscCountPrice(prod.getPrice());
