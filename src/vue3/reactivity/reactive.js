import { isObject } from "../shared/utils"
import { mutableHandler } from './mutableHandler'
console.log(mutableHandler)
function reactive(target) {
  // target:数据 mutableHandler:
  return createReactiveObject(target, mutableHandler)
}

function createReactiveObject(target, baseHandler) {
  if (!isObject(target)) {
    return target
  }
  const observer = new Proxy(target, baseHandler)

  return observer
}

// const proxy = new Proxy(target, {
//   get(target, key, receiver) {
//      const res =Reflect.get(target,key,receiver)
//     return res
//   },
//   set(target, key, value, receiver) {
// const res = Reflect.set(target,key,value,receiver)
// target[key] = value
// return res
//   }
// })

export {
  reactive
}