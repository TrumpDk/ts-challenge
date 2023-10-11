// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick2<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick2<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick2<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {
  [k in K]: T[k]
}

type MyPick2<T, K> = Record<Extract<keyof T, K>, T[Extract<keyof T, K>]>;

// const test: MyPick2<Todo, 'title' | 'completed'> = {title: 'sdf', sss: 'sss'}
// here is a doubt about these two types above
