/**
1.import 加载1.js,它接受一对大括号，里面指定要从其他模块导入的变量名。
  大括号中的变量名，必须与被导入模块（1.js）对外接口的名称相同。
2.import和export 一样 用as 将输入的变量重命名 
3.from：模块文件的位置，相对路径或绝对路径，.js路径可以省略。
	如果只是模块名，不带有路径，则必须有配置文件，告诉 Js 引擎该模块的位置
4.import具有提升作用，提升到整个模块的头部，首先执行。	

	foo();
	import {foo} from 'my_module'  my_module是模块文件名，因为不带有路径，必须通过配置，告诉引擎怎么取到这个模块
	
	类似于变量定义的提升。。。。
5.import是静态执行，不能使用表达式和变量.
	// 报错
	import { 'f' + 'oo' } from 'my_module';

	// 报错
	let module = 'my_module';
	import { foo } from module;

	// 报错
	if (x === 1) {
		import { foo } from 'module1';
	} else {
		import { foo } from 'module2';
	}

6.import语句会执行所加载的模块
		import "./2";  仅执行2模块，但是不输入任何值
		
7.如果引用多次同一个import语句，则只执行一次，而不会执行多次。
	import 'lodash';
	import 'lodash';
	上面代码加载了两次lodash，但只执行一次。【防止在某个文件中代码量的不同的位置引用了多次，导致执行了多次】
	
8.	虽然foo和bar在两个语句中加载，但是它们对应的是同一个my_module实例。
	也就是说，import语句是 Singleton 模式。		

	import { foo } from 'my_module';
	import { bar } from 'my_module';

	// 等同于
	import { foo, bar } from 'my_module';
**/
import {
		firstName,	//firstName名字与1.js中的export的名字一致
		year,
		fun2,
		housePos as HP,//这里另起名字后，就无法在 下面用housePos 
		comeBackCityTime
} from './1';

import "./2";//import语句会执行所加载的模块  但不进行引用其变量等。。


console.log("1.js模块中输出变量",firstName,year);
console.log("1.js模块中输出fun",fun2("2018","08"));
//console.log("housePos是1.js模块中通过as另起的名字",housePos);//这里另起名字后，就无法在 下面用housePos 
console.log("import又对 housePos起新的名字",HP);//使用了新名字
console.log("export输出的接口可动态实时获得模块内的值",comeBackCityTime);
