/**
	1.this：默认指向实例，单独使用，有可能报错。
	2.本质上，ES6类只是ES5构造函数的一层包装。故Point.name =point
**/
class Logger{
	constructor(){
		this.printName=this.printName.bind(this);//在构造方法中绑定this，这样就不会找不到print方法
		
		this.printName2=(name="银子")=>{//使用接头函数绑定ths
			this.print(`hello ${name}`);
		}
	}
	printName(name="银狐"){
		this.print(`hello ${name}`);
	}
	print(text){
		console.log(text);
	}
}
const logger=new Logger();
const {printName}=logger;
//printName();//报错，printName中this，默认指向Logger的实例。 如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境
console.log("class name值：",Logger.name," 实例拿不到name",logger.name);//Logger undefined

/**
Class继承：通过extends
	1.class ColorPoint  extends Point{}: ColorPoint类继承Point类的所有属性和方法
	2.ES5继承，实质是先创造子类的实例对象this，再将父类的方法添加到this上面（Parent.apply(this)）。
	  ES6继承，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
	3.子类__proto__属性，是构造函数的继承，指向父类；
	  子类prototype属性的__proto__属性，方法的继承,指向父类prototype属性
	4.class B extends A {
		
	  } //A可以是任何有prototype属性的函数，除了Function.prototype
	  
	  eg:
		class B extends Object{} A就是构造函数Object的复制，A的实例就是Object的实例
		class B{}不进行继承，则就是 A.__proto__ === Function.prototype // true
		class A extends null {}
	  
	5.Object.getPrototypeOf从子类获取弗雷  
	  **/
class Point{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	
}
class ColorPoint extends Point{
	constructor(x,y,color){
		//this.color = color; // ReferenceError
		super(x,y);//子类继承父类，必须使用super。。。。关键字在super作用？？？
		this.color=color;//正确
	}
}
let cp=new ColorPoint(25, 8, 'green');//"cp同时是ColorPoint和Point两个类的实例:"
console.log("cp是ColorPoint的实例:",cp instanceof ColorPoint);//true
console.log("cp是Point的实例:",cp instanceof Point);//true

console.log("子类__proto__属性，是构造函数的继承，指向父类",ColorPoint.__proto__===Point);//true
console.log("子类prototype属性的__proto__属性,指向父类prototype属性",ColorPoint.prototype.__proto__===Point.prototype);//true
console.log("ColorPoint是否继承Point类:",Object.getPrototypeOf(ColorPoint)===Point);//true








