/**
	1.一个模块就是一个文件。文件内部的所有变量，外部无法获取。
		必须使用export关键字输出需要暴露的变量
	2.通常 export输出的变量就是本来的名字，但as可以重命名
    3.export输出的接口，与其对应的值是动态绑定关系，
		即通过该接口，可以取到模块内部实时的值。	
		[重要] 测试失败，有可能是编译的问题。。直接编译为es5，装成浏览器测试也许会正确
	4.export可以出现在模块的任何位置，只要处于模块顶层就可以。
		如果处于块级作用域内，就会报错，import命令也是如此。
		因为：因为处于条件代码块之中，就没法做静态优化了，违背了ES6模块的设计初衷	
**/
var firstName="yc";
var year="2017";
var month='3.15';
let HousePos="zhouyang";

var fun2=(year,month)=>{
	return year+month;
};
var comeBackCityTime="1999年香港回归";
setTimeout(function(){
	comeBackCityTime="澳门回归"
},500);
export {
	firstName,
	year,
	fun2,//输出Fun
	HousePos as housePos,  //暴露出 2个 名字 housePos 和 HousePos
	comeBackCityTime
};//export输出这些变量
