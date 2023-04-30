# Function

## Function Overload

```ts
function reverse3(x: number): number;
function reverse3(x: string): string;
function reverse3(x: string | number) {
  const res = x.toString().split("").reverse().join("");
  if (typeof x === "number") return parseInt(res);
  return res;
}
```

## generic

```ts
const echo = <T>(a: T): T => {
  console.log(a);
  return a;
};
```

Generic 문법
T = Type 매개변수
a = value 매개변수

## TypeScript is OOP

OOP => BlockChain
동적타입 언어

OOP 기본 4 원칙

캡슐화(Encapsulation): 캡슐화는 데이터와 그 데이터를 조작하는 함수를 하나의 '객체'라는 단위로 묶는 것을 의미합니다. 이렇게 하면 외부에서 객체의 내부 데이터에 직접 접근하는 것을 제한할 수 있고, 데이터를 조작하는 방법을 숨길 수 있습니다. 이를 통해 코드의 안정성을 높이고, 유지 보수를 용이하게 합니다.

상속(Inheritance): 상속은 한 클래스가 다른 클래스의 속성과 메서드를 물려받을 수 있게 하는 원칙입니다. 이를 통해 코드의 재사용성이 높아지며, 중복된 코드를 줄일 수 있습니다.

다형성(Polymorphism): 다형성은 한 인터페이스, 함수 등이 다양한 형태로 동작하는 것을 의미합니다. 예를 들어, 같은 메서드 이름이지만 인수에 따라 다르게 동작하거나, 상속받은 클래스에서 부모 클래스의 메서드를 재정의(오버라이딩)하는 것 등이 있습니다.

추상화(Abstraction): 추상화는 복잡한 시스템을 간단한 개념으로 변환하는 과정입니다. 예를 들어, 복잡한 로직을 숨기고 사용자가 쉽게 이해할 수 있는 인터페이스를 제공하는 것이 추상화의 예입니다.

OOP is SOLID

S : SRP(Single Responsibility Principle)
O : OCP(Open/Closed Principle)
L : LSP(Liskov Substitution Principle)
I : ISP(Interface Segregation Principle)
D : DIP(Dependency Inversion Principle)

## 접근제어자

1. Public, Private

Default is Public
Private 를 설정시 외부에서 접근불가
