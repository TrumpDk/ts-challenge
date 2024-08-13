// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]


type ReplaceResolver<Prefix extends string, Suffix extends string, From extends string, To extends string> = Suffix extends `${From extends '' ? undefined : From}${infer D}` ? `${Prefix}${To}${D}` : Suffix extends `${infer _Prefix}${infer _Suffix}` ? ReplaceResolver<`${Prefix}${_Prefix}`, _Suffix, From, To>: `${Prefix}${Suffix}`

// ============= Your Code Here =============
type Replace<S extends string, From extends string, To extends string> = S extends `${infer Prefix}${infer Suffix}` ? ReplaceResolver<Prefix, Suffix, From, To> : S
