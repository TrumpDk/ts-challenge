// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

type test = TupleToUnion<[123, '456', true]>

// ============= Your Code Here =============
// type TupleToUnion<T extends any[]> = keyof {
//   [K in T[number]]: K
// }

// type TupleToUnion<T extends any[]> = T[number]

// type TupleToUnion<T> = T extends Array<infer U> ? U : never;

// invalid rule, need to be figure out
type TupleToUnion<T> = T extends [infer U] ? U : never;