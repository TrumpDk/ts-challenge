// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

type errors = [
  // @ts-expect-error
  FlipArguments<'string'>,
  // @ts-expect-error
  FlipArguments<{ key: 'value' }>,
  // @ts-expect-error
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>,
]


// ============= Your Code Here =============
// use array to reverse the arguments
// a tuple array can be converted to a tuple type when it is used as a type annotation in a function
type Reverse<T extends any[]> = T extends [infer Head, ...infer Tail] ? [...Reverse<Tail>, Head] : []
type FlipArguments<T> = T extends (...args: infer Args) => infer R ? (...args: Reverse<Args>) => R : never

// type Test<T> = T extends (...args: infer Args) => infer R ? Args : never;
// type test = Test<(foo: string, bar: number) => boolean>
// type test2 = Reverse<test>
// type test3 = (...args: test2) => boolean
