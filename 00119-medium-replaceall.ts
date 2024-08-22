// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]

// ============= Your Code Here =============
// type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${From}${infer Prefix}${infer Suffix}`
// ? `${To}${ReplaceAll<`${Prefix}${Suffix}`, From, To>}`
// : S extends `${infer Prefix}${From}${infer Suffix}`
// ? `${Prefix}${To}${ReplaceAll<Suffix, From, To>}`
// : S extends `${infer All}${From}`
// ? `${All}${To}` : S

// string like 'ab' can be treated as empty '' combined with 'ab', 'ab' combined with '' and 'a' + '' + 'b'
// so there just need one if else branch

type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer Prefix}${From}${infer Suffix}`
? From extends '' ? S : `${Prefix}${To}${ReplaceAll<Suffix, From, To>}` : S