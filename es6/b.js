/**
5.模块的整体加载
  除了加载列举单个变量，也可以整体加载。
  即用星号指定一个object，所有输出值都加载在这个对象上
**/
import * as circleA from './circle';
console.log("圆面积:"+circleA.area(4));
console.log("圆周长:"+circleA.circumference(4));
/**
模块整体加载赋值到circleA，是静态的，故不允许运行时改变
**/