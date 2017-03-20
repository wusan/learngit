/**
Class语法
	1.“类”的方法，不需要加function关键字，直接把函数定义放进去了就可以了。
    2.方法之间不需要逗号分隔，加了会报错！！
**/
class Point{
	constructor(x,y){//构造方法
		this.x=x;//this代表实例对象
		this.y=y;
	}
	toString(){
		return '('+this.x+','+this.y+')';
	}
	a9(){
		console.log("ddd")
	}
}
/**
	类的数据类型就是函数，类本身就指向构造函数
**/
console.log("typeof Point:",typeof Point);//function
console.log("Point === Point.prototype.constructor:",Point === Point.prototype.constructor);//true

class Bar{
	doA(){
		console.log("这是prototype上的方法");
	}
}
var a=new Bar();
a.doA();//"这是prototype上的方法"
console.log("a是Bar类的实例，它的constructor方法就是B类原型的constructor方法: ",a.constructor===Bar.prototype.constructor);//true

/**
class Point {
  constructor(){}
  doA(){}, doB(){}
}
// 等同于
Point.prototype = {
  doA(){},
  doB(){}
};
**/



/**
5. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign 
assign /əˈsaɪn/ 分配，归属
Object.assign(target, ...sources) 将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
	1.target:目标对象  sources:多个源对象
	2.Object.assign 会跳过那些值为 null 或 undefined 的源对象
能代替for in 一个个对象属性复制吗 ？？？测试。。
for(a in obj){
	b[a]=obj[a];
}	
**/
var obj = { a: 1,b:12 };
var copy = Object.assign({c:3}, obj,{d:4});
console.log(copy); //{c: 3, a: 1, b: 12, d: 4}

var newA=Object.assign(Point.prototype,{
	m3(){console.log('复制的啦');}
},Bar.prototype);
console.log("copy Class",newA,Point.prototype,newA,newA.doA);
//没有都复制到newA
/*
for(var attr in newA.prototype){
	console.log("newA",attr);
}
http://es6.ruanyifeng.com/#docs/class
*/