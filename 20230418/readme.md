# Type-Script

OOP Write Logic

## Type-Script Benefit

1. Previous Validate Error (Running Code)
2. Fast-Development
3. 환경이 갖추어지면 개발속도에 장점을 더할 수 있음

## Weak-Point

1. 엄격함
2. 기존의 JavaScript 에서 자동으로 형변환등이 일어나는것이 반해, TypeScript 는 Type 지정으로 인해, 오류가 발생함

- Example

3. Not have run-time
4. TypeScript 의 구동은 TypeScript -> Transfiler -> JavaScript
5. 즉 TypeScript 만으로는 실행되는 구성이 없으므로, Babel 과 같은 트랜스파일러의 존재를 통해 변환된 후 실행하는 구조

```js
const sum = (a+b) => a+b
```

### Test message.ts

- node message
- node message.ts

#### Node를 사용한 실행 테스트

1. Node 에서는 기본적으로 확장자를 지정지 않으면, "js" 파일을 기본적으로 찾았지만, "ts"는 읽지 못함
2. "ts"를 지정하여 실행시, "cannot module"이 아닌 "Missing Initializer" 오류가 발생

3. 실행테스트 1-1

```bash
node:internal/modules/cjs/loader:1078
  throw err;
  ^

Error: Cannot find module '/Users/hynn/Desktop/VSCode20230417/20230418/message'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1075:15)
    at Module._load (node:internal/modules/cjs/loader:920:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
```

```bash
/Users/hynn/Desktop/VSCode20230417/20230418/message.ts:1
const message: string = "Hello World";
      ^^^^^^^

SyntaxError: Missing initializer in const declaration
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1176:20)
    at Module._compile (node:internal/modules/cjs/loader:1218:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.15.0
```

```bash
let message: string = "Hello World";
           ^

SyntaxError: Unexpected token ':'
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1176:20)
    at Module._compile (node:internal/modules/cjs/loader:1218:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
```

- 즉, Node 환경에서는 Run-time 이 존재하지 않기 때문에, Typescript 파일을 실행할 수 없다는 것이 증명됨.
- 기존의 JavaScript 와는 다르게 TypeScript 는 변수에 "타입"을 지정하기 때문에, 이러한 코드는 JavaScript 에서 통용되지 않는 방식이기 때문

## How to running TypeScript

1. TypeScript Compailer
2. Use transpailer
3. Webpack bundling
