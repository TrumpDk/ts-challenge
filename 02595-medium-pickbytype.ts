// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]


// ============= Your Code Here =============
// to remove the key from the object if the value is not the type we want
type PickByType<T, U> = { [key in keyof T as T[key] extends U ? key : never]: T[key] }