(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{437:function(t,a,r){"use strict";r.r(a);var s=r(42),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"函数的扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数的扩展"}},[t._v("#")]),t._v(" ⭐️函数的扩展")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#函数参数的默认值"}},[t._v("函数参数的默认值")]),r("ul",[r("li",[r("a",{attrs:{href:"#基本用法"}},[t._v("基本用法")])]),r("li",[r("a",{attrs:{href:"#与结构赋值默认值结合使用"}},[t._v("与结构赋值默认值结合使用")])]),r("li",[r("a",{attrs:{href:"#参数默认值的位置"}},[t._v("参数默认值的位置")])]),r("li",[r("a",{attrs:{href:"#函数的-length-属性"}},[t._v("函数的 length 属性")])]),r("li",[r("a",{attrs:{href:"#作用域"}},[t._v("作用域")])])])]),r("li",[r("a",{attrs:{href:"#rest参数"}},[t._v("rest参数")])]),r("li",[r("a",{attrs:{href:"#严格模式"}},[t._v("严格模式")])]),r("li",[r("a",{attrs:{href:"#name属性"}},[t._v("name属性")])]),r("li",[r("a",{attrs:{href:"#箭头函数"}},[t._v("箭头函数")]),r("ul",[r("li",[r("a",{attrs:{href:"#使用注意点"}},[t._v("使用注意点")])])])]),r("li",[r("a",{attrs:{href:"#尾调用优化"}},[t._v("尾调用优化")]),r("ul",[r("li",[r("a",{attrs:{href:"#什么是尾调用"}},[t._v("什么是尾调用")])]),r("li",[r("a",{attrs:{href:"#尾调用优化"}},[t._v("尾调用优化")])]),r("li",[r("a",{attrs:{href:"#尾递归"}},[t._v("尾递归")])]),r("li",[r("a",{attrs:{href:"#尾递归函数的改写"}},[t._v("尾递归函数的改写")])]),r("li",[r("a",{attrs:{href:"#严格模式"}},[t._v("严格模式")])]),r("li",[r("a",{attrs:{href:"#尾递归优化的实现"}},[t._v("尾递归优化的实现")])])])]),r("li",[r("a",{attrs:{href:"#函数参数的尾逗号"}},[t._v("函数参数的尾逗号")])]),r("li",[r("a",{attrs:{href:"#function-prototyoe-tostring"}},[t._v("Function.prototyoe.toString")])]),r("li",[r("a",{attrs:{href:"#catch命令的参数省略"}},[t._v("catch命令的参数省略")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"函数参数的默认值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数参数的默认值"}},[t._v("#")]),t._v(" 函数参数的默认值")]),t._v(" "),r("h3",{attrs:{id:"基本用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),r("h3",{attrs:{id:"与结构赋值默认值结合使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#与结构赋值默认值结合使用"}},[t._v("#")]),t._v(" 与结构赋值默认值结合使用")]),t._v(" "),r("h3",{attrs:{id:"参数默认值的位置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数默认值的位置"}},[t._v("#")]),t._v(" 参数默认值的位置")]),t._v(" "),r("p",[t._v("如果传入undefined，将触发该参数等于默认值，null则没有这个效果。")]),t._v(" "),r("h3",{attrs:{id:"函数的-length-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数的-length-属性"}},[t._v("#")]),t._v(" 函数的 length 属性")]),t._v(" "),r("p",[t._v("指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。")]),t._v(" "),r("h3",{attrs:{id:"作用域"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),r("p",[t._v("一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。")]),t._v(" "),r("h2",{attrs:{id:"rest参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest参数"}},[t._v("#")]),t._v(" rest参数")]),t._v(" "),r("p",[t._v("注意，rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。")]),t._v(" "),r("p",[t._v("函数的length属性，不包括 rest 参数。")]),t._v(" "),r("h2",{attrs:{id:"严格模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#严格模式"}},[t._v("#")]),t._v(" 严格模式")]),t._v(" "),r("p",[t._v("从 ES5 开始，函数内部可以设定为严格模式。")]),t._v(" "),r("p",[t._v("ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。")]),t._v(" "),r("h2",{attrs:{id:"name属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#name属性"}},[t._v("#")]),t._v(" name属性")]),t._v(" "),r("p",[t._v("如果将一个具名函数赋值给一个变量，则ES5和ES6的name属性都返回这个具名函数原本的名字。")]),t._v(" "),r("p",[t._v("Function构造函数返回的函数实例，name属性的值为anonymous。")]),t._v(" "),r("p",[t._v("bind返回的函数，name属性值会加上bound前缀。")]),t._v(" "),r("h2",{attrs:{id:"箭头函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[t._v("#")]),t._v(" 箭头函数")]),t._v(" "),r("h3",{attrs:{id:"使用注意点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用注意点"}},[t._v("#")]),t._v(" 使用注意点")]),t._v(" "),r("p",[t._v("箭头函数有几个使用注意点。")]),t._v(" "),r("ol",[r("li",[t._v("函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。")]),t._v(" "),r("li",[t._v("不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。")]),t._v(" "),r("li",[t._v("不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。")]),t._v(" "),r("li",[t._v("不可以使用yield命令，因此箭头函数不能用作 Generator 函数。")]),t._v(" "),r("li",[t._v("bind，call，apply方法无效。第一个参数会忽略，只响应参数。")])]),t._v(" "),r("h2",{attrs:{id:"尾调用优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尾调用优化"}},[t._v("#")]),t._v(" 尾调用优化")]),t._v(" "),r("h3",{attrs:{id:"什么是尾调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是尾调用"}},[t._v("#")]),t._v(" 什么是尾调用")]),t._v(" "),r("h3",{attrs:{id:"尾调用优化-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尾调用优化-2"}},[t._v("#")]),t._v(" 尾调用优化")]),t._v(" "),r("h3",{attrs:{id:"尾递归"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尾递归"}},[t._v("#")]),t._v(" 尾递归")]),t._v(" "),r("h3",{attrs:{id:"尾递归函数的改写"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尾递归函数的改写"}},[t._v("#")]),t._v(" 尾递归函数的改写")]),t._v(" "),r("ol",[r("li",[t._v("函数柯里化")]),t._v(" "),r("li",[t._v("函数默认值")])]),t._v(" "),r("h3",{attrs:{id:"严格模式-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#严格模式-2"}},[t._v("#")]),t._v(" 严格模式")]),t._v(" "),r("p",[t._v("ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。")]),t._v(" "),r("p",[t._v("这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。")]),t._v(" "),r("ul",[r("li",[t._v("func.arguments：返回调用时函数的参数。")]),t._v(" "),r("li",[t._v("func.caller：返回调用当前函数的那个函数。")])]),t._v(" "),r("p",[t._v("尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。")]),t._v(" "),r("h3",{attrs:{id:"尾递归优化的实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尾递归优化的实现"}},[t._v("#")]),t._v(" 尾递归优化的实现")]),t._v(" "),r("p",[t._v("蹦床函数（trampoline）可以将递归执行转为循环执行。")]),t._v(" "),r("h2",{attrs:{id:"函数参数的尾逗号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数参数的尾逗号"}},[t._v("#")]),t._v(" 函数参数的尾逗号")]),t._v(" "),r("p",[t._v("ES2017 允许函数的最后一个参数有尾逗号（trailing comma）。")]),t._v(" "),r("p",[t._v("此前，函数定义和调用时，都不允许最后一个参数后面出现逗号。")]),t._v(" "),r("h2",{attrs:{id:"function-prototyoe-tostring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#function-prototyoe-tostring"}},[t._v("#")]),t._v(" Function.prototyoe.toString")]),t._v(" "),r("p",[t._v("ES2019 对函数实例的toString()方法做出了修改。")]),t._v(" "),r("p",[t._v("toString()方法返回函数代码本身，以前会省略注释和空格。")]),t._v(" "),r("h2",{attrs:{id:"catch命令的参数省略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#catch命令的参数省略"}},[t._v("#")]),t._v(" catch命令的参数省略")]),t._v(" "),r("p",[t._v("JavaScript 语言的try...catch结构，以前明确要求catch命令后面必须跟参数，接受try代码块抛出的错误对象。很多时候，catch代码块可能用不到这个参数。但是，为了保证语法正确，还是必须写。ES2019 做出了改变，允许catch语句省略参数。")])])}),[],!1,null,null,null);a.default=v.exports}}]);