// 원시타입 - Number
const numbers: number = 10;
const flat: number = 3.14;
const nan: number = NaN;
const infinity: number = Infinity;

// 원시타입 - String
const names: string = "Mark";

// 원시타입 - Boolean
const isTrue: boolean = true;

// 원시타입 - null
const n: null = null;

// 원시타입 - undefined
const u: undefined = undefined;

// 원시타입 - symbol
const symbol: symbol = Symbol();

// 원시타입 - bigint
// const bigInt: bigint = 10n;
// 이 타입은 ES2020에서 지원되는 타입이다.

// 참조타입 - Function
// Type : void 는 함수나 method 에서 사용
// 매개변수를 받을 경우, 매개변수의 타입을 지정해줘야 한다.
export const prints = (str: string): void => {
  console.log("print");
};

prints("test123");

function prints2(): void {
  console.log("print2");
}

const sumset = (a: number, b: number): number => a + b;
const result1 = sumset(10, 20);
console.log(result1);

// Type : never 는 함수나 method 에서 사용
// 함수의 끝에 도달하지 않고, 무한루프에 빠지거나, 예외가 발생하는 경우 사용

const throwErr = (): never => {
  throw new Error("test");
};

const testcatch = (): number => {
  try {
    return 10;
  } catch (e) {
    throw new Error("test");
  }
};

// 참조타입 - Object
// Type : object 는 객체를 나타내는 타입이다.

const obj: Object = {};
const arr: Object = [];
const test: Object = () => {};

// any 타입
// any 타입은 어떤 타입이든 할당할 수 있다.

//unknown 타입
//unknown 타입은 어떤 타입이든 할당할 수 있다.

//any 와 unknown 의 차이점
//any 타입은 어떤 타입이든 할당할 수 있지만, unknown 타입은 할당된 값에 따라 타입이 결정된다.

const a: unknown = 10;

if (typeof a === "number") {
}

const b: any = 10;

if (typeof b === "number") {
}

const getValue = (value: unknown) => {
  return value;
};

const fn = getValue("Hey");
