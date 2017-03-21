/**
	super关键字：即可当函数用也可当对象用
	1.当函数调用：代表父类的构造函数.ES6要求，子类的构造函数必须执行一次super函数
	       super()只能用在子类的构造函数中，用在其他地方报错
				m(){
					super(); // 报错
				}		
	2.作为对象：指向父类的原型对象prototype,故无法访问构造函数上的属性或方法	
	3.ES6规定:通过super调用父类的方法时，super会绑定子类的this


	
**/
	
class A{
	constructor(){
		this.a="super访问不到";
		this.xyz="父类---999";
	}
	p(){
		console.log("父类的p方法");
	}
	print() {
		console.log("66:",this.xyz);
	}
}
class B extends A{
	constructor(){
		super();//代表调用父类的构造函数。必须，否则报错
		/**
			super()相当于：A.prototype.constructor.call(this)
			this是子类的
		**/
		super.p();//当对象使用：
		
		/**
			super为A.prototype    super.p() 相当于A.prototype.p()
		**/
		
		this.xyz="子类——————888";
		
	}
	get m2(){
		return super.a;//访问不到的。。
	}
	getX(){
		super.print();//调用父类的print方法，但this是子类的 。
		this.print();//调用子类的print方法。
	}
	print() {
		console.log("77:",this.xyz);
	}
}
let a2=new B();
console.log(a2.a);//可以访问
//console.log(a2.m2());//报错。。  get的用法。。。。
a2.getX();/**
	66: 子类——————888 
	77: 子类——————888
**/


class A2 {
  constructor() {
    this.x = 1;
  }
  c6(){
	  console.log(this.x)
  }
}

class B2 extends A2 {
  constructor() {
    super();
    this.x = 2222;
    super.x = 300;//无效。。。。
  }
  a3(){
	console.log("super.x:",super.x,A2.x); // undefined  undefined
    console.log("this.x:",this.x); // 2222  
  }
}

let b2 = new B2();
b2.a3()
let a8 = new A2();
a8.c6();//1

/**
实例的__proto__属性
	1.子类的原型的原型，是父类的原型，即子类实例的__proto__的__proto 等于父类实例的 __proto__
	2.通过子类实例的__proto__.__proto__属性，可以修改父类实例的行为
**/
console.log("子类的原型的原型，是父类的原型",b2.__proto__.__proto__===a8.__proto__);//true
b2.__proto__.__proto__.printName = function () {
  console.log('巴拉巴拉');
};//子类实例的__proto__.__proto__属性，修改父类实例的method
a8.printName();//巴拉巴拉

