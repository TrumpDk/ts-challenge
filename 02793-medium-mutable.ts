// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,
]

type errors = [
  // @ts-expect-error
  Mutable<'string'>,
  // @ts-expect-error
  Mutable<0>,
]


// ============= Your Code Here =============
// '-' is used to remove the readonly modifier from the properties, see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-operators, Improved control over mapped type modifiers
type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}
