// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]


// ============= Your Code Here =============
type Unshift<T extends any[], U> = [U, ...T];


// type Unshift<T extends any[], U> = U extends Array<any> ? [...U, ...T] : [U, ...T];

// const test: Unshift<[1, 2, 3], boolean> = [false, 1, 2, 3];
