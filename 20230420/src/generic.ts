const echo = <T>(a: T): T => {
  console.log(a);
  return a;
};

interface Props {
  name: string;
  id: string;
}

const props: Props = {
  name: "Hynn",
  id: "Choihwoong",
};

echo<Props>(props);

const push = <T>(a: T): T[] => {
  const result = [a];
  console.log(result);
  return result;
};

push(1);
push("Test");

const reverses = <T>(a: T): number | string => {
  const params =
    typeof a === "number" ? (a.toString() as string) : (a as string);
  const response = params.split("").reverse().join("");
  return typeof a === "number" ? parseInt(response) : response;
};

const reverses1 = <T>(x: T): T => {
  const params = typeof x === "number" ? x.toString() : (x as string);
  const result = params.split("").reverse().join("");

  if (typeof x === "number") return parseInt(result) as T;
  if (typeof x === "string") return result as T;
  return x;
};
