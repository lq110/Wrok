// es6 import 和 export 的使用
//讲解 moudle 用的
// export 和import
//  1.导出
// 写法一
export let a = 1;
export let b = 2;

// 写法二
let a = 1;
let b = 2;
export { a, b }
// 2.引用
//只要看到export
import { a, b } from 'a.js'//利用解构赋值方式
// 或者
import * as obj from 'a.js'
//可以直接调用引用的对象
// 利用
// import * as obj from "../api";
// console.log(obj.getBanner.toString());


// moudle export default 和 import
// 1.export default 后边可跟具体的值
// a.js
let a = 1;
export default a

// 或者
export default 1
export { }
function get() { }
export default get
// 2.默认导出的引入
export xxx from 'a.js'
// xxx自定义名字

// 综合写在一起 export default 和 export 可以同时使用
// a.js
export let a = 1
export default 2
// b.js
import { a } from 'a.js'
import xx from 'a.js'
// 可以用逗号作为分割符写在一起
import { a }, xx from 'a.js'
