/**
 * 将任何构造函数转换为返回单个实例的函数，无论构造函数被调用多少次，都只实例化一次。
 */
type AnyConstructor = new (...args: any[]) => any;
const singleTon = function <T extends AnyConstructor>(classType: T) {
  let instance: T;
  return new Proxy(classType, {
    construct(target, args) {
      return instance ? instance : instance = new target(...args);
    }
  })
}

export {
  singleTon
}

export default singleTon