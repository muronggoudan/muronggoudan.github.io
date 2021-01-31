(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{386:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"messagechannel-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messagechannel-api"}},[a._v("#")]),a._v(" MessageChannel API")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#属性"}},[a._v("属性")]),s("ul",[s("li",[s("a",{attrs:{href:"#messagechannel-port1-只读"}},[a._v("MessageChannel.port1 只读")])]),s("li",[s("a",{attrs:{href:"#messagechannel-port2-只读"}},[a._v("MessageChannel.port2 只读")])])])]),s("li",[s("a",{attrs:{href:"#构造函数"}},[a._v("构造函数")]),s("ul",[s("li",[s("a",{attrs:{href:"#messagechannel"}},[a._v("MessageChannel()")])])])]),s("li",[s("a",{attrs:{href:"#示例"}},[a._v("示例")])])])]),a._v("\nChannel Messaging API的MessageChannel 接口允许我们创建一个新的消息通道，并通过它的两个MessagePort 属性发送数据。"),s("p"),a._v(" "),s("blockquote",[s("p",[a._v("Note: 此特性在 Web Worker 中可用。")])]),a._v(" "),s("h2",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[a._v("#")]),a._v(" 属性")]),a._v(" "),s("h3",{attrs:{id:"messagechannel-port1-只读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messagechannel-port1-只读"}},[a._v("#")]),a._v(" MessageChannel.port1 只读")]),a._v(" "),s("p",[a._v("返回channel的port1。")]),a._v(" "),s("h3",{attrs:{id:"messagechannel-port2-只读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messagechannel-port2-只读"}},[a._v("#")]),a._v(" MessageChannel.port2 只读")]),a._v(" "),s("p",[a._v("返回channel的port2。")]),a._v(" "),s("h2",{attrs:{id:"构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[a._v("#")]),a._v(" 构造函数")]),a._v(" "),s("h3",{attrs:{id:"messagechannel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messagechannel"}},[a._v("#")]),a._v(" MessageChannel()")]),a._v(" "),s("p",[a._v("返回一个带有两个MessagePort属性的MessageChannel新对象。")]),a._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),s("p",[a._v("在以下代码块中，您可以看到使用MessageChannel构造函数实例化了一个channel对象。当iframe加载完毕，我们使用MessagePort.postMessage方法把一条消息和MessageChannel.port2传递给iframe。handleMessage处理程序将会从iframe中（使用MessagePort.onmessage监听事件）接收到信息，将数据其放入innerHTML中。")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" channel "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MessageChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" para "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'p'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" ifr "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'iframe'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" otherWindow "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ifr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("contentWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nifr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"load"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" iframeLoaded"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("iframeLoaded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  otherWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello from the main page!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("channel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("port2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\nchannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("port1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("onmessage "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" handleMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("handleMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  para"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);