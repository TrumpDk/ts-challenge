// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

// ============= Your Code Here =============
// convert string to array as 'property' only exists on array object
// there is no rest operator for string in ts?

type ConvertStringToArray<S extends string> = S extends `${infer first}${infer remaining}` ? [first, ...ConvertStringToArray<remaining>] : []

type LengthOfString<S extends string> =  ConvertStringToArray<S>['length']
