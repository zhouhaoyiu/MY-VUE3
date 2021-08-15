import { reactive } from "./reactive"
import { hasOwnProperty, isEqual, isObject } from "../shared/utils"

const get = createGetter()
const set = createSetter()

function createGetter() {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    console.log('响应式获取' + target[key])
    if (isObject(res)) {
      return reactive(res)
    }
    return res
  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const isKeyExist = hasOwnProperty(target, key)
    const oldValue = target[key]
    const res = Reflect.set(target, key, value, receiver)
    if (!isKeyExist) {
      console.log('响应式新增' + value)
    }
    else if (!isEqual(value, oldValue)) {
      console.log('响应式修改' + key + '=' + value)
    }
    // console.log('响应式设置' + key + '=' + value)
    return res
  }
}


const mutableHandler = {
  get,
  set
}

export {
  mutableHandler
}