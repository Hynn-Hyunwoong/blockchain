const reversesT = <T>(x: T): T => {
  let result: unknown = undefined;

  if (typeof x === "string") {
    result = x.split("").reverse().join("");
  } else if (typeof x === "number") {
    result = parseInt(x.toString().split("").reverse().join(""));
  } else if (x instanceof Array) {
    result = x.reverse();
  } else if (typeof x === "object" && x !== null) {
    const parmas = x;
    result = Object.fromEntries(Object.entries(parmas).reverse());
    console.log(result);
  }

  return result as T;
};
