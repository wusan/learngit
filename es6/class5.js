/**
	Class的取值函数(getter)、存值函数(setter)
**/
class MyClass{
	constructor(){
		
	}
	get p2(){
		console.log('getter p2时自动调用');
	}
	set p2(val){
		console.log('setter p2时自动调用',val);
	}
}
let inst=new MyClass();
inst.p2=300;//自动执行：set p2(val)
inst.p2;//自动执行： get p2()

/**
静态方法static
	1.static关键字，表示方法不被实例继承，而是直接通过类来调用
	2.父类的静态方法，可以被子类继承
	3.Class内部只有静态方法，没有静态属性
**/
class Foo{
	static p2(){
		console.log("hello");
	}
}
Foo.p2();//hello               通过类调用而不是实例
var f2=new Foo();
//f2.p2();					 //报错,不能 通过实例调用

class Bar extends Foo{
	
}
Bar.p2();//hello
Bar.a2=300;//这样实现静态属性
/**
new.target属性
	1.new.target属性:（构造函数）返回new命令作用于的那个构造函数。
					如果构造函数不是通过new命令调用的，new.target会返回undefined，

	2.Class内部调用new.target，返回当前Class
	3.子类继承父类时，new.target会返回子类	
**/
function Person(name){
	if(new.target!==undefined){
		this.name=name;
	}else{
		throw new  Error("必须使用new生成实例")
	}
}
var per=new Person('a3');
//Person('a3');//报错。。。。。


class Rectangle {
  constructor(length, width) {
    console.log("Class内部调用new.target，返回当前Class:",new.target === Rectangle, " new.target值：",new.target===Square);//false false
  }
}


class Square extends Rectangle {
  constructor(length) {
    super(length, length);
	console.log("kk:",new.target===Square);//true
  }
}

var obj = new Rectangle(3, 4); // 输出 true
var obj = new Square(3);// 输出 false
//利用这个特点，可以写出不能独立使用、必须继承后才能使用的类

class PersonC{
	constructor(){
		if(new.target===PersonC){
			throw new  Error("本类不能实例化");
		}
	}
}
class Man extends PersonC{
	constructor(){
		super();
	}
}
var y= new Man();//正确
//var x= new PersonC();//错误
