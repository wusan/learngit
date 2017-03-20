/**
	1.类中所有方法都是不可枚举的
	2.类的属性名，可使用表达式
	3.
	  a.constructor方法是类的默认方法，通过new生成对象实例时，自动调用
	  b.如果没有显式定义，则会自动添加一个空的：constructor(){}
	  c.constructor中的this指向实例对象，但可修改进而指向另一个对象
	  d.类的constructor，不用new没法调用，会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行
	4.必须用new 实例化类，缺少则报错。  
**/
let methodName="getArr";
class Point{
	constructor(x,y){
		
	}
	a3(){
		console.log("prototype上的 方法")
	}
	[methodName](){//类的属性名，使用表达式
		
	}
}
console.log(Object.keys(Point.prototype));//[]
/**
	5.Object.getOwnPropertyNames(objA)返回一个objA的所有自身属性的属性名（包括不可枚举属性）组成的数组
**/
console.log(Object.getOwnPropertyNames(Point.prototype) );//['constructor','a3',"getArr";]

class Foo{
	constructor(){
		//return Object.create(null);//返回新对象，结果导致实例对象不是Foo类的实例。
		return Point.constructor;
	}
	a3(){
		
	}
}
console.log("更改实例对象：[为什么是错的]",new Foo() instanceof Foo,new Foo() instanceof Point);//false  false 

//var point=Point(2);//错误
var point2=new Point(2);//正确
//6.obj.hasOwnProperty(prop) :判断某个对象是否含有指定的属性的 Boolean，但不会找到prototype上的属性和方法
console.log("hasOwnProperty ",point2.hasOwnProperty("a3"));//false




/**
7.类的所有实例共享一个原型对象
8.通过__proto__为class添加方法.
  但是：使用实例的__proto__属性改写原型，影响所有实例对象，故谨慎使用
**/
var p2=new Point(2,3);
var p3=new Point(3,4);
console.log('类的所有实例共享一个原型对象',p2.__proto__===p2.__proto__);//true
p2.__proto__.printName=function(){console.log('yc');}
p2.printName();//yc
p3.printName();//yc



/**
9.Class不存在变量提升
	new Foo()  错误的写法
	class Foo();
10.Class也可以用表达式定义	
**/
const MyClass=class Me{//MyClass是类名，Me只能在Class内部使用，指代当期类
	getName(){
		console.log("Me.name:",Me.name);//Me
	}
}
//也可省略：const MyClass = class { /* ... */ };
let inst=new MyClass();
inst.getName();
//let inst2=new Me();//Me is not defind


/**
11.立即执行的calss.. eg:person是一个立即执行的类的实例
12.es6依然不支持私有方法。
   a.可通过加下划线区分。
   b.通过Symbol的唯一性，将私有方法名命名为一个Symbol值
**/

const key2=Symbol("key2");
const search=Symbol("search");

let person=new class{
	constructor(name){
		this.name=name;
	}
	
	sayName(){//公有方法
		console.log("公有",this.name);
		this._bar('98私有')
		this[search](key2);
	}
	_bar(baz){//私有方法
		console.log(baz)
	}
	//私有方法
	[search](key2){
		this[search]=key2;
		console.log("Symbol实现的私有",this[search]);//Symbol(key2)
	}
	
}("张三");

person.sayName();//张三





















































