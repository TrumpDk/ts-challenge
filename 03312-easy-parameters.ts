// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]

// https://juejin.cn/post/7251792725070610491
// https://zhuanlan.zhihu.com/p/556696062?utm_id=0

// ============= Your Code Here =============
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => any ? U : never
// 想要啥就把Infer放在那里，infer必须搭配extends使用
