# TypeScript 실행

1. Typescript Compailer Install

```sh
npm init -y
npm install -D typescript
```

2. Package.json 내의 script 추가

```json
{
  "build": "tsc message.ts"
}
```

3. 파일명을 지정하면, 해당 파일을 찾고, 파일명을 지정하지 않을 경우, tsc 의 명령어리스트가 출력됨
4. 파일명 지정 후 build 시 해당 TypeScript 를 JavaScript 로 변환
5. `--outDir [경로]` 설정시 지정된 경로에 저장함
6. `--target [문법명]` 설정시, 지정한 문법으로 변환
7. `--project, -p` 설정시, 특정 파일의 config 지정


- 명령줄

```bash
> typescript@1.0.0 build
> tsc

Version 5.0.4
tsc: The TypeScript Compiler - Version 5.0.4
                                                                                                                     TS
COMMON COMMANDS

  tsc
  Compiles the current project (tsconfig.json in the working directory.)

  tsc app.ts util.ts
  Ignoring tsconfig.json, compiles the specified files with default compiler options.

  tsc -b
  Build a composite project in the working directory.

  tsc --init
  Creates a tsconfig.json with the recommended settings in the working directory.

  tsc -p ./path/to/tsconfig.json
  Compiles the TypeScript project located at the specified path.

  tsc --help --all
  An expanded version of this information, showing all possible compiler options

  tsc --noEmit
  tsc --target esnext
  Compiles the current project, with additional settings.

COMMAND LINE FLAGS

     --help, -h  Print this message.

    --watch, -w  Watch input files.

          --all  Show all compiler options.

  --version, -v  Print the compiler's version.

         --init  Initializes a TypeScript project and creates a tsconfig.json file.

  --project, -p  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.

    --build, -b  Build one or more projects and their dependencies, if out of date

   --showConfig  Print the final configuration instead of building.

COMMON COMPILER OPTIONS

               --pretty  Enable color and formatting in TypeScript's output to make compiler errors easier to read.
                  type:  boolean
               default:  true

      --declaration, -d  Generate .d.ts files from TypeScript and JavaScript files in your project.
                  type:  boolean
               default:  `false`, unless `composite` is set

       --declarationMap  Create sourcemaps for d.ts files.
                  type:  boolean
               default:  false

  --emitDeclarationOnly  Only output d.ts files and not JavaScript files.
                  type:  boolean
               default:  false

            --sourceMap  Create source map files for emitted JavaScript files.
                  type:  boolean
               default:  false

           --target, -t  Set the JavaScript language version for emitted JavaScript and include compatible library declarations.
                one of:  es3, es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, esnext
               default:  es5

           --module, -m  Specify what module code is generated.
                one of:  none, commonjs, amd, umd, system, es6/es2015, es2020, es2022, esnext, node16, nodenext
               default:  undefined

                  --lib  Specify a set of bundled library declaration files that describe the target runtime environment.
           one or more:  es5, es6/es2015, es7/es2016, es2017, es2018, es2019, es2020, es2021, es2022, es2023, esnext, dom, dom.iterable, webworker, webworker.importscripts, webworker.iterable, scripthost, es2015.core, es2                         015.collection, es2015.generator, es2015.iterable, es2015.promise, es2015.proxy, es2015.reflect, es2015.symbol, es2015.symbol.wellknown, es2016.array.include, es2017.object, es2017.sharedmemory, e                         s2017.string, es2017.intl, es2017.typedarrays, es2018.asyncgenerator, es2018.asynciterable/esnext.asynciterable, es2018.intl, es2018.promise, es2018.regexp, es2019.array, es2019.object, es2019.str                         ing, es2019.symbol/esnext.symbol, es2019.intl, es2020.bigint/esnext.bigint, es2020.date, es2020.promise, es2020.sharedmemory, es2020.string, es2020.symbol.wellknown, es2020.intl, es2020.number, es                         2021.promise/esnext.promise, es2021.string, es2021.weakref/esnext.weakref, es2021.intl, es2022.array, es2022.error, es2022.intl, es2022.object, es2022.sharedmemory, es2022.string/esnext.string, es                         2022.regexp, es2023.array/esnext.array, esnext.intl, decorators, decorators.legacy
               default:  undefined

              --allowJs  Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files.
                  type:  boolean
               default:  false

              --checkJs  Enable error reporting in type-checked JavaScript files.
                  type:  boolean
               default:  false

                  --jsx  Specify what JSX code is generated.
                one of:  preserve, react, react-native, react-jsx, react-jsxdev
               default:  undefined

              --outFile  Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output.

               --outDir  Specify an output folder for all emitted files.

       --removeComments  Disable emitting comments.
                  type:  boolean
               default:  false

               --noEmit  Disable emitting files from a compilation.
                  type:  boolean
               default:  false

               --strict  Enable all strict type-checking options.
                  type:  boolean
               default:  false

                --types  Specify type package names to be included without being referenced in a source file.

      --esModuleInterop  Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility.
                  type:  boolean
               default:  false

You can learn about all of the compiler options at https://aka.ms/tsc
```
