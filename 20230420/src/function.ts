function add(x: number, y: number): number {
  return x + y;
}

const add2 = function (x: number, y: number): number {
  return x + y;
};

const add3 = (x: number, y: number): number => {
  return x + y;
};

const add4 = (x: number, y: number): number => x + y;

const hello = (name?: string): void => {
  if (name) {
    console.log(name.length);
    console.log(`Hello ${name}`);
  } else {
    console.log(`Hello`);
  }
};

// hello();
// hello("John");

const reverse = (x: string | number): string | number => {
  const result = x.toString().split("").reverse().join("");
  console.log(result);
  return result;
};

const reverse2 = (x: string | number): string | number => {
  const res = x.toString().split("").reverse().join("");
  if (typeof x === "number") return parseInt(res);
  return res;
};

// reverse(123);
// reverse("hello");

// console.log(reverse2(123));
// console.log(reverse2("hello"));

// Function Overload

function reverse3(x: number): number;
function reverse3(x: string): string;
function reverse3(x: string | number) {
  const res = x.toString().split("").reverse().join("");
  if (typeof x === "number") return parseInt(res);
  return res;
}

const result = reverse3("test");
const result2 = reverse3(123);
