// type - interface
// 인터페이스란 객체의 타입을 정의하는 것이다.

interface Interface {
  name: string;
  price: number;
}

const product: Interface = { name: "test", price: 1000 };
const result = product.price;
console.log(result);

interface Board {
  readonly id: number;
  subject: string;
  content: string;
  readonly writer: string;
  readonly registerDate: Date;
  hit: number;
  updateDate: Date;
  like?: number;
  // ? : 선택적 프로퍼티
  // readonly : 읽기 전용 프로퍼티
}

export const board: Board = {
  id: 0,
  subject: "",
  content: "",
  writer: "",
  registerDate: new Date(),
  hit: 0,
  updateDate: new Date(),
};

console.log(board);

class IBoard {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const product3 = new IBoard("test", 1000);

console.log(typeof product3);
