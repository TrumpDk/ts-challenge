// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]


// ============= Your Code Here =============

// https://github.com/microsoft/TypeScript/issues/31751
// actually isNever is a distributed condition type, e.g. IsNever<T | B> = IsNever<T> | IsNever<B>
// but as never is an empty union, there is no member in never, so IsNever will never be called and IsNever will return never directly 
type IsNever<T> = [T] extends [never] ? true : false;
