<!--
 * @Author: zch1999 1901394767@qq.com
 * @Date: 2020-12-06 15:14:17
 * @LastEditors: zch1999 1901394767@qq.com
 * @LastEditTime: 2023-08-27 23:45:51
 * @FilePath: /blog/myblog/docs/study/handwriting/bind.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 手写 bind

## apply,call 和 bind 的作用

> apply() 方法调用一个函数, 其具有一个指定的 this 值，以及作为一个数组（或类似数组的对象）提供的参数<br/>
> call 基本和 apply 作用一样，只是第二个参数不一样，它可以有多个参数,它和 apply 都会立即执行<br/>
> bind 是接受多个参数，并返回一个函数，它并不会立即执行

## 手写 apply

```js
Function.prototype.apply = function(context, args) {
  context = context || window;
  args = args || [];
  context.fn = this;
  let result = eval("context.fn(...args)");

  delete context.fn;
  return result;
};
```

## 手写 call

```js
Function.prototype.call = function(context, ...args) {
  context = context || window;
  let fn = Symbol("fn");
  context.fn = this;

  let result = eval("context.fn(...args)");

  delete context.fn;
  return result;
};
```

## 手写 bind

```js
Function.prototype.myBind = function(objThis, ...params) {
  // 先传一部分参数
  const thisFn = this; //  存储源函数的this
  let fToBind = function(...secondParams) {
    //  最后还是要执行的
    const isNew = this instanceof fToBind; // new 调用
    const context = isNew ? this : Object(objThis); // this 覆盖为上下文对象
    return thisFn.call(context, ...params, ...secondParams); //
  };
  if (thisFn.prototype) {
    fToBind.prototype = Object.create(thisFn.prototype);
  }

  return fToBind;
};
```
