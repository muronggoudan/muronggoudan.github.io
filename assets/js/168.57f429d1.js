(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{521:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),e("blockquote",[e("p",[t._v("Javascript与HTML之间的交互是通过事件实现的. 事件, 就是文档或者浏览器窗口中发生的一些特定的交互瞬间. 可以使用侦听器(或者处理程序)来预订事件, 以便事件发生时执行相应的代码. 这种在传统软件工程中被称为观察者模式的模型, 支持页面的行为(Javascript代码)与页面的外观(HTML和CSS代码)之间的松散耦合.")])]),t._v(" "),e("blockquote",[e("p",[t._v("Tip: 主要浏览器都已经实现了DOM2级")])]),t._v(" "),e("h2",{attrs:{id:"_13-1-事件流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-事件流"}},[t._v("#")]),t._v(" 13.1 事件流")]),t._v(" "),e("blockquote",[e("p",[t._v("事件流描述的是从页面中接收事件的顺序.")])]),t._v(" "),e("h3",{attrs:{id:"_13-1-1-事件冒泡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-1-事件冒泡"}},[t._v("#")]),t._v(" 13.1.1 事件冒泡")]),t._v(" "),e("p",[t._v("IE的事件流叫做事件冒泡, 即事件开始是由最具体的元素(文档中嵌套最深的那个节点)接受, 然后逐级向上传播到较为不具体的节点(文档).")]),t._v(" "),e("h3",{attrs:{id:"_13-1-2-事件捕获"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-2-事件捕获"}},[t._v("#")]),t._v(" 13.1.2 事件捕获")]),t._v(" "),e("p",[t._v("事件捕获的思想是不太具体的节点应该更早的接受事件, 而具体的节点应该最后接收到事件. 事件捕获的用意在于在事件到达预定目标之前捕获它.")]),t._v(" "),e("blockquote",[e("p",[t._v("Tip: DOM2要求从"),e("code",[t._v("document")]),t._v("开始捕获, 但是浏览器的实现都是从"),e("code",[t._v("window")]),t._v("对象开始的")])]),t._v(" "),e("h3",{attrs:{id:"_13-1-3-dom事件流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-3-dom事件流"}},[t._v("#")]),t._v(" 13.1.3 DOM事件流")]),t._v(" "),e("p",[t._v("DOM2级事件规定的事件流包括三个阶段: 事件捕获阶段, 处于目标阶段和事件冒泡阶段. 首先发生的是事件捕获, 为截获事件提供了机会. 然后是实际的目标接收到事件. 最后一个阶段是冒泡阶段, 可以在这个阶段对事件作出响应.\n在DOM事件流中, 实际的目标在捕获阶段不会接收到事件. 这意味着在捕获阶段, 事件从"),e("code",[t._v("document")]),t._v("到"),e("code",[t._v("<html>")]),t._v("再到"),e("code",[t._v("<body>")]),t._v("就停止了(针对"),e("code",[t._v("html>body>div")]),t._v("结构).下一个阶段是'处于目标'阶段, 于是时间在目标上发生, 并在事件处理中看成是冒泡阶段的一个部分. 然后, 冒泡发生, 事件又传播回文档.")]),t._v(" "),e("h2",{attrs:{id:"_13-2-事件处理程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-事件处理程序"}},[t._v("#")]),t._v(" 13.2 事件处理程序")]),t._v(" "),e("h3",{attrs:{id:"_13-2-1-html事件处理程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-1-html事件处理程序"}},[t._v("#")]),t._v(" 13.2.1 HTML事件处理程序")]),t._v(" "),e("p",[t._v("HTML添加句柄方式 为DOM绑定事件处理程序")]),t._v(" "),e("h3",{attrs:{id:"_13-2-2-dom0级事件处理程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-2-dom0级事件处理程序"}},[t._v("#")]),t._v(" 13.2.2 DOM0级事件处理程序")]),t._v(" "),e("p",[t._v("通过Javascript指定事件处理程序的传统方式, 就是将一个函数赋值给一个事件处理程序属性.")]),t._v(" "),e("p",[t._v("通过把事件处理程序的属性置为"),e("code",[t._v("null")]),t._v("可以删除事件处理程序.\ne.g.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("btn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onclick "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"_13-2-3-dom2级事件处理程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-3-dom2级事件处理程序"}},[t._v("#")]),t._v(" 13.2.3 DOM2级事件处理程序")]),t._v(" "),e("p",[t._v("DOM2级定义了两个方法用来绑定和移除事件处理程序:")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("addEventListener()")])]),t._v(" "),e("li",[e("code",[t._v("removeEventListener()")])])]),t._v(" "),e("p",[t._v("Usage:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("EventTarget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useCapture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nEventTarget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useCapture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Tip: 事件处理程序中的"),e("code",[t._v("this")]),t._v("指向"),e("code",[t._v("EventTarget")])])]),t._v(" "),e("h3",{attrs:{id:"_13-2-4-ie事件处理程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-4-ie事件处理程序"}},[t._v("#")]),t._v(" 13.2.4 IE事件处理程序")]),t._v(" "),e("p",[t._v("IE定义了两个方法用来绑定和移除事件处理程序:")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("attachEvent()")])]),t._v(" "),e("li",[e("code",[t._v("detachEvent()")])])]),t._v(" "),e("p",[t._v("Usage:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("EventTarget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventNameWithOn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nEventTarget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("detachEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventNameWithOn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("因为ie8以前版本不支持事件捕获, 所以事件处理程序都会被绑定到事件冒泡阶段.")]),t._v(" "),e("blockquote",[e("p",[t._v("Tip: 事件处理程序中的"),e("code",[t._v("this")]),t._v("指向"),e("code",[t._v("window")]),t._v(", 而且事件处理程序执行的顺序和绑定的先后顺序"),e("strong",[t._v("相反")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"_13-2-5跨浏览器的事件处理程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-5跨浏览器的事件处理程序"}},[t._v("#")]),t._v(" 13.2.5跨浏览器的事件处理程序")]),t._v(" "),e("p",[t._v("事件绑定移除的兼容性写法")]),t._v(" "),e("h2",{attrs:{id:"_13-3-事件对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-3-事件对象"}},[t._v("#")]),t._v(" 13.3 事件对象")]),t._v(" "),e("h3",{attrs:{id:"_13-3-1-dom中的事件对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-3-1-dom中的事件对象"}},[t._v("#")]),t._v(" 13.3.1 DOM中的事件对象")]),t._v(" "),e("p",[t._v("DOM中所有事件对象都会支持的属性和方法:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("属性/方法")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("读/写")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("bubbles")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("表明事件是否冒泡")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("cancelable")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("表明是否可以取消事件的默认行为")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("currentTarget")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("其事件处理程序当前正在处理事件的那个元素")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("defaultPrevented")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("为"),e("code",[t._v("true")]),t._v("表示已经调用了"),e("code",[t._v("preventDefault()")]),t._v("(DOM3)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("detail")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Integer")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("与事件相关的细节信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("eventPhase")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Integer")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("调用事件处理程序的阶段: "),e("code",[t._v("1")]),t._v("表示捕获阶段, "),e("code",[t._v("2")]),t._v("表示'处于目标阶段', "),e("code",[t._v("3")]),t._v("表示冒泡阶段")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("preventDefault()")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Function")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("取消事件的默认行为. 如果"),e("code",[t._v("cancelable")]),t._v("为"),e("code",[t._v("true")]),t._v(", 则可以使用这个方法")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("stopImmdiatePropagation")]),t._v("()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Function")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("取消事件的进一步捕获或冒泡, 同时阻止任何事件处理程序被调用(DOM3)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("stopPropagation()")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Function")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("取消事件的进一步捕获或冒泡. 如果"),e("code",[t._v("bubbles")]),t._v("为"),e("code",[t._v("true")]),t._v(", 则可以使用这个方法.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("target")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Element")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("事件的目标")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("trusted")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("为"),e("code",[t._v("true")]),t._v("表示事件是浏览器生成的. 为"),e("code",[t._v("false")]),t._v("表示是由开发人员通过"),e("code",[t._v("javascript")]),t._v("创建的(DOM3)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("type")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("String")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("被触发的事件类型")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("view")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("AbstractView")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("与事件关联的抽象视图. 等同于发生事件的"),e("code",[t._v("window")]),t._v("对象")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("Tip: 在事件处理程序内部, 对象"),e("code",[t._v("this")]),t._v("始终等于"),e("code",[t._v("currentTarget")]),t._v("的值, 而"),e("code",[t._v("target")]),t._v("则只包含事件的实际目标.")])]),t._v(" "),e("h3",{attrs:{id:"_13-3-2-ie中的事件对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-3-2-ie中的事件对象"}},[t._v("#")]),t._v(" 13.3.2 IE中的事件对象")]),t._v(" "),e("p",[t._v("DOM0级方式添加的事件处理程序, "),e("code",[t._v("event")]),t._v("对象作为"),e("code",[t._v("window")]),t._v("的一个属性存在, 可以通过"),e("code",[t._v("window.event")]),t._v("访问, 如果是"),e("code",[t._v("attachEvent()")]),t._v("添加的那么就会有一个"),e("code",[t._v("event")]),t._v("对象作为参数被传入事件处理函数中(也同时可以通过"),e("code",[t._v("window.event")]),t._v("访问).")]),t._v(" "),e("p",[t._v("IE中所有事件对象都会支持的属性和方法:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("属性/方法")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("读/写")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("cancelBubble")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("读写")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值是"),e("code",[t._v("false")]),t._v(", 但将其设置为"),e("code",[t._v("true")]),t._v("就可以取消事件冒泡")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("returnValue")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("读写")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值是"),e("code",[t._v("true")]),t._v(", 但将其设置为"),e("code",[t._v("false")]),t._v("就可以取消事件的默认行为")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("srcElement")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Element")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("事件的目标")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("type")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("String")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("被触发的事件的类型")])])])]),t._v(" "),e("h3",{attrs:{id:"_13-3-3-夸浏览器的时间对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-3-3-夸浏览器的时间对象"}},[t._v("#")]),t._v(" 13.3.3 夸浏览器的时间对象")]),t._v(" "),e("p",[t._v("访问事件对象的兼容性写法")]),t._v(" "),e("h3",{attrs:{id:"附"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附"}},[t._v("#")]),t._v(" 附:")]),t._v(" "),e("p",[t._v("事件绑定移除和访问事件对象兼容性写法")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EventUtils "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attachEvent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("removeEventListener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detachEvent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("detachEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" event "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" event "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTarget")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preventDefault"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnValue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stopPropagation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelBubble "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"_13-4-事件类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-4-事件类型"}},[t._v("#")]),t._v(" 13.4 事件类型")]),t._v(" "),e("h3",{attrs:{id:"_13-4-1-ui事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-4-1-ui事件"}},[t._v("#")]),t._v(" 13.4.1 UI事件")]),t._v(" "),e("ul",[e("li",[t._v("load: 当页面完全加载后在window上触发 当所有框架都加在完毕时在框架集上触发 当图像加载完毕时在img上触发 或者当嵌入的内容加载完毕时在object上触发")]),t._v(" "),e("li",[t._v("unload: 当页面完全卸载后在window上触发 当所有框架都卸载后在框架集上触发 或者当嵌入的内容卸载完毕后在object上触发")]),t._v(" "),e("li",[t._v("abort: 当用户停止下载过程时 如果嵌入的内容没有加载完 则在object上触发")]),t._v(" "),e("li",[t._v("error: 当发生js错误时在window上触发 当无法加载图像时在img元素上面触发 当无法加载嵌入内容时在object元素上面触发 或者当有一个或多个框架无法加载时在框架集上触发")]),t._v(" "),e("li",[t._v("select: 当用户选择文本框中的一或者多个字符时触发")]),t._v(" "),e("li",[t._v("resize: 当窗口或者框架的大小变化时在window或者框架上触发")]),t._v(" "),e("li",[t._v("scroll: 当用户滚动带滚动条的元素中的内容时 在该元素上触发 body元素中包含所加载页面的滚动条")])]),t._v(" "),e("h4",{attrs:{id:"_1-load事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-load事件"}},[t._v("#")]),t._v(" 1. load事件")]),t._v(" "),e("p",[t._v("case ONE"),e("br"),t._v(" "),e("code",[t._v("window.onload")]),t._v("\n当页面完全加载后(包括所有的头像 js文件 css文件等外部资源) 就会触发window上面的load事件")]),t._v(" "),e("p",[t._v("case TWO"),e("br"),t._v(" "),e("code",[t._v("image.onload")])]),t._v(" "),e("blockquote",[e("p",[t._v("Tip: 新元素不一定要从添加到文档后才开始下载 只要设置了src就会开始下载 同样的功能也可以使用DOM0级的Image对象实现")])]),t._v(" "),e("p",[t._v("case THREE"),e("br"),t._v(" "),e("code",[t._v("script.onload & link.onload")])]),t._v(" "),e("blockquote",[e("p",[t._v("Tip: 与图像不同的是 只有在设置了script的src或者link标签的href 并将该元素添加到文档后 才会开始下载资源")])]),t._v(" "),e("h4",{attrs:{id:"_2-unload事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-unload事件"}},[t._v("#")]),t._v(" 2. unload事件")]),t._v(" "),e("h4",{attrs:{id:"_3-resize事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-resize事件"}},[t._v("#")]),t._v(" 3. resize事件")]),t._v(" "),e("blockquote",[e("p",[t._v("Tip: 可以通过"),e("strong",[t._v("节流")]),t._v("方式优化性能")])]),t._v(" "),e("h4",{attrs:{id:"_3-scroll事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-scroll事件"}},[t._v("#")]),t._v(" 3. scroll事件")]),t._v(" "),e("h3",{attrs:{id:"_13-4-2-焦点事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-4-2-焦点事件"}},[t._v("#")]),t._v(" 13.4.2 焦点事件")]),t._v(" "),e("p",[t._v("主要有6个焦点事件")]),t._v(" "),e("ul",[e("li",[t._v("blur: 在元素失去焦点时触发 这个事件不会冒泡")]),t._v(" "),e("li",[t._v("DOMFocusIn 废弃")]),t._v(" "),e("li",[t._v("DOMFocusOut 废弃")]),t._v(" "),e("li",[t._v("focus: 在元素获得焦点时触发 这个事件不会冒泡")]),t._v(" "),e("li",[t._v("focusin: 在元素获得焦点时触发 这个事件与HTML事件focus等价 但他冒泡")]),t._v(" "),e("li",[t._v("focusout: 在元素失去焦点时触发 这个事件时HTML事件blur的通用版本")])]),t._v(" "),e("p",[t._v("当元素从页面中的一个元素移动到另一个元素 会依次触发下列事件:")]),t._v(" "),e("ol",[e("li",[t._v("focusout 在失去焦点的元素上触发")]),t._v(" "),e("li",[t._v("focusin 在获得焦点的元素上触发")]),t._v(" "),e("li",[t._v("blur 在失去焦点的元素上触发")]),t._v(" "),e("li",[t._v("DOMFocusOut 在失去焦点的元素上触发")]),t._v(" "),e("li",[t._v("foucs 在获得焦点的元素上触发")]),t._v(" "),e("li",[t._v("DOMFocusIn 在获得焦点的元素上触发")])]),t._v(" "),e("h3",{attrs:{id:"_13-4-3-鼠标与滚轮事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-4-3-鼠标与滚轮事件"}},[t._v("#")]),t._v(" 13.4.3 鼠标与滚轮事件")]),t._v(" "),e("p",[t._v("DOM3级定义了9个鼠标事件:")]),t._v(" "),e("ul",[e("li",[t._v("click")]),t._v(" "),e("li",[t._v("dbclick")]),t._v(" "),e("li",[t._v("mousedown")]),t._v(" "),e("li",[t._v("mouseenter(DOM3) 在鼠标光标从元素外部首次移动到元素范围之内时触发 这个事件不冒泡")]),t._v(" "),e("li",[t._v("mouseleave(DOM3) 在位于元素上方的鼠标光标移动到元素范围之外时触发 这个事件不冒泡 而且在光标移动到后代元素上不会触发")]),t._v(" "),e("li",[t._v("mousemove")]),t._v(" "),e("li",[t._v("mouseout 在鼠标指针位于一个元素上方 然后用户将其移入另一个元素时触发 又移入的另一个元素可能位于前一个元素的外部 也可能是这个元素的子元素")]),t._v(" "),e("li",[t._v("mouseover 在鼠标指针位于一个元素外部 然后用户将其首次移入另一个元素边界之内时触发")]),t._v(" "),e("li",[t._v("mouseup")])]),t._v(" "),e("p",[t._v("只有在同一个元素上相继触发mousedown和mouseup事件 才会触发click事件 如果mousedown或mouseup中的一个被取消 就不会触发click事件 类似的 只有触发两次click事件 才会触发一次dbclick事件 如果有代码阻止了连续两次触发click事件 那么不会触发dbclick事件 这四个事件触发的顺序始终如下")]),t._v(" "),e("ol",[e("li",[t._v("mousedown")]),t._v(" "),e("li",[t._v("mouseup")]),t._v(" "),e("li",[t._v("click")]),t._v(" "),e("li",[t._v("mousedown")]),t._v(" "),e("li",[t._v("mouseup")]),t._v(" "),e("li",[t._v("click")]),t._v(" "),e("li",[t._v("dbclick")])]),t._v(" "),e("h4",{attrs:{id:"_1-客户区坐标位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-客户区坐标位置"}},[t._v("#")]),t._v(" 1. 客户区坐标位置")]),t._v(" "),e("p",[t._v("clientX clientY")]),t._v(" "),e("h4",{attrs:{id:"_2-页面坐标位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-页面坐标位置"}},[t._v("#")]),t._v(" 2. 页面坐标位置")]),t._v(" "),e("p",[t._v("pageX pageY")]),t._v(" "),e("h4",{attrs:{id:"_3-屏幕坐标位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-屏幕坐标位置"}},[t._v("#")]),t._v(" 3. 屏幕坐标位置")]),t._v(" "),e("p",[t._v("screenX screenY")]),t._v(" "),e("h4",{attrs:{id:"_4-修改键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改键"}},[t._v("#")]),t._v(" 4. 修改键")]),t._v(" "),e("h4",{attrs:{id:"_5-相关元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-相关元素"}},[t._v("#")]),t._v(" 5. 相关元素")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("EventUtil "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRelationTarget")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relatedTarget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relatedTarget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"_6-鼠标按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-鼠标按钮"}},[t._v("#")]),t._v(" 6. 鼠标按钮")]),t._v(" "),e("h4",{attrs:{id:"_7-更多的事件信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-更多的事件信息"}},[t._v("#")]),t._v(" 7. 更多的事件信息")]),t._v(" "),e("h4",{attrs:{id:"_8-鼠标滚轮事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-鼠标滚轮事件"}},[t._v("#")]),t._v(" 8. 鼠标滚轮事件")]),t._v(" "),e("h4",{attrs:{id:"_9-触摸设备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-触摸设备"}},[t._v("#")]),t._v(" 9. 触摸设备")]),t._v(" "),e("h4",{attrs:{id:"_10-无障碍问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-无障碍问题"}},[t._v("#")]),t._v(" 10. 无障碍问题")]),t._v(" "),e("h3",{attrs:{id:"_13-4-4-键盘与文本事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-4-4-键盘与文本事件"}},[t._v("#")]),t._v(" 13.4.4 键盘与文本事件")])])}),[],!1,null,null,null);a.default=n.exports}}]);