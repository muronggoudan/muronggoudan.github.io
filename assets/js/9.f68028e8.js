(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(e,t,_){"use strict";_.r(t);var v=_(42),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"浏览器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[e._v("#")]),e._v(" 🤔浏览器")]),e._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#介绍下重绘和回流-repaint-reflow-以及如何进行优化。"}},[e._v("介绍下重绘和回流（Repaint & Reflow），以及如何进行优化。")])]),_("li",[_("a",{attrs:{href:"#说说浏览器和node事件循环的区别"}},[e._v("说说浏览器和Node事件循环的区别")])]),_("li",[_("a",{attrs:{href:"#cookie和token都存放在header中-为什么不会劫持token"}},[e._v("cookie和token都存放在header中，为什么不会劫持token？")])]),_("li",[_("a",{attrs:{href:"#浏览器缓存读取规则"}},[e._v("浏览器缓存读取规则")])]),_("li",[_("a",{attrs:{href:"#为什么通常在发送数据埋点请求的时候使用的是-1x1-像素的透明-gif-图片"}},[e._v("为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？")])]),_("li",[_("a",{attrs:{href:"#介绍下如何实现-token-加密"}},[e._v("介绍下如何实现 token 加密")])]),_("li",[_("a",{attrs:{href:"#如何实现浏览器多个标签页之间的通信"}},[e._v("如何实现浏览器多个标签页之间的通信")])]),_("li",[_("a",{attrs:{href:"#扫描二维码登录网页是什么原理"}},[e._v("扫描二维码登录网页是什么原理")])]),_("li",[_("a",{attrs:{href:"#如何生成一次性链接"}},[e._v("如何生成一次性链接")])]),_("li",[_("a",{attrs:{href:"#浏览器输入url之后都发生了些什么"}},[e._v("浏览器输入URL之后都发生了些什么？")])])])]),_("p"),e._v(" "),_("h2",{attrs:{id:"介绍下重绘和回流-repaint-reflow-以及如何进行优化。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍下重绘和回流-repaint-reflow-以及如何进行优化。"}},[e._v("#")]),e._v(" 介绍下重绘和回流（Repaint & Reflow），以及如何进行优化。")]),e._v(" "),_("p",[e._v("两者都是浏览器渲染流水线上的重要流程：")]),e._v(" "),_("ul",[_("li",[e._v("回流：涉及DOM树变更，流程更长，需要调整DOM树（非常耗时），计算样式，重新生成图层树，重新绘制。")]),e._v(" "),_("li",[e._v("重绘：只涉及样式计算，流程较短，计算样式，重新生成图层树，重新绘制。")]),e._v(" "),_("li",[e._v("优化：尽量少操作DOM，或者一次性操作；使用"),_("code",[e._v("display:none")]),e._v("，或者"),_("code",[e._v("documentFragment")]),e._v("；少触发强制布局。")])]),e._v(" "),_("h2",{attrs:{id:"说说浏览器和node事件循环的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说说浏览器和node事件循环的区别"}},[e._v("#")]),e._v(" 说说浏览器和Node事件循环的区别")]),e._v(" "),_("p",[e._v("浏览器端的事件循环：")]),e._v(" "),_("p",[e._v("浏览器异步流程的处理模型，即浏览器底层有一个异步队列，当浏览器压栈执行代码的时候，如果需要暂时无法处理的任务，将会把任务放进异步队列中，等待压栈执行，如果执行时继续发现有无法执行的任务，将会继续把任务放进丢进异步队列中，重复此过程，其中浏览器端为保证一些任务的执行效率问题，将任务颗粒度细化为微任务和宏任务。")]),e._v(" "),_("p",[e._v("Node端的事件循环：")]),e._v(" "),_("p",[e._v("Node异步非阻塞I/O模型的基石，一共分为6个阶段：")]),e._v(" "),_("ol",[_("li",[e._v("timers阶段")]),e._v(" "),_("li",[e._v("I/O callbacks阶段")]),e._v(" "),_("li",[e._v("idle,prepare阶段")]),e._v(" "),_("li",[e._v("poll阶段")]),e._v(" "),_("li",[e._v("check阶段")]),e._v(" "),_("li",[e._v("close callback阶段")])]),e._v(" "),_("h2",{attrs:{id:"cookie和token都存放在header中-为什么不会劫持token"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cookie和token都存放在header中-为什么不会劫持token"}},[e._v("#")]),e._v(" cookie和token都存放在header中，为什么不会劫持token？")]),e._v(" "),_("p",[e._v("CSRF安全问题的主要原因是，cookie会在浏览器请求cookie path匹配的请求时自动携带，属于浏览器默认行为，常会被用来冒用用户身份做一些敏感操作。而token放在header中属于业务行为，需要在业务代码中完成，如果是CSRF攻击伪造的单个请求将不会带上")]),e._v(" "),_("h2",{attrs:{id:"浏览器缓存读取规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存读取规则"}},[e._v("#")]),e._v(" 浏览器缓存读取规则")]),e._v(" "),_("ul",[_("li",[e._v("强缓存：\n"),_("ul",[_("li",[e._v("HTTP 1.0: Expires")]),e._v(" "),_("li",[e._v("HTTP 1.1: Cache-Control")])])]),e._v(" "),_("li",[e._v("协商缓存\n"),_("ul",[_("li",[e._v("If-Modifies-Since/Last-Modify")]),e._v(" "),_("li",[e._v("If-None-Match/Etag")])])])]),e._v(" "),_("h2",{attrs:{id:"为什么通常在发送数据埋点请求的时候使用的是-1x1-像素的透明-gif-图片"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么通常在发送数据埋点请求的时候使用的是-1x1-像素的透明-gif-图片"}},[e._v("#")]),e._v(" 为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？")]),e._v(" "),_("ul",[_("li",[e._v("资源请求可以跨域")]),e._v(" "),_("li")]),e._v(" "),_("h2",{attrs:{id:"介绍下如何实现-token-加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍下如何实现-token-加密"}},[e._v("#")]),e._v(" 介绍下如何实现 token 加密")]),e._v(" "),_("h4",{attrs:{id:"为什么操作dom慢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么操作dom慢"}},[e._v("#")]),e._v(" 为什么操作dom慢")]),e._v(" "),_("ul",[_("li",[e._v("渲染流水线很长")])]),e._v(" "),_("h2",{attrs:{id:"如何实现浏览器多个标签页之间的通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何实现浏览器多个标签页之间的通信"}},[e._v("#")]),e._v(" 如何实现浏览器多个标签页之间的通信")]),e._v(" "),_("ul",[_("li",[e._v("websocket")]),e._v(" "),_("li",[e._v("localstorage")]),e._v(" "),_("li",[e._v("postmessage")])]),e._v(" "),_("h2",{attrs:{id:"扫描二维码登录网页是什么原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#扫描二维码登录网页是什么原理"}},[e._v("#")]),e._v(" 扫描二维码登录网页是什么原理")]),e._v(" "),_("h2",{attrs:{id:"如何生成一次性链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何生成一次性链接"}},[e._v("#")]),e._v(" 如何生成一次性链接")]),e._v(" "),_("h2",{attrs:{id:"浏览器输入url之后都发生了些什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器输入url之后都发生了些什么"}},[e._v("#")]),e._v(" 浏览器输入URL之后都发生了些什么？")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("DNS域名解析")]),e._v(" "),_("ul",[_("li",[e._v("递归查询：浏览器缓存 -> 本地hosts缓存 -> 本地DNS解析器缓存 -> 本地DNS服务器")]),e._v(" "),_("li",[e._v("迭代查询：本地DNS服务器 -> 根域名服务器 | 顶级域名服务器 | 权威域名服务器")])])]),e._v(" "),_("li",[_("p",[e._v("TCP握手")]),e._v(" "),_("ul",[_("li",[e._v("第一次握手：报文SYN位标注为1，Sequence Number为x，客户端状态：SYN_SEND")]),e._v(" "),_("li",[e._v("第二次握手：报文SYN位标注为1，Acknowledgment Number为 x + 1，Sequence Number为y，服务端状态：SYN_RECV")]),e._v(" "),_("li",[e._v("第三次握手：Acknowledgment Number为y + 1，客户端和服务端都进入ESTABLISHED状态")])])]),e._v(" "),_("li",[_("p",[e._v("SSL握手")]),e._v(" "),_("ul",[_("li",[e._v("客户端发送协议版本 会话ID 加密组件 压缩方法 初始随机数")]),e._v(" "),_("li",[e._v("服务器发送证书")])])]),e._v(" "),_("li",[_("p",[e._v("协商缓存")])]),e._v(" "),_("li",[_("p",[e._v("TCP挥手")]),e._v(" "),_("ul",[_("li",[e._v("客户端设置Sequence Number，和Acknowledgment Number，FIN报文段为1，进入FIN_WAIT_1状态")]),e._v(" "),_("li",[e._v("服务端返回Sequence Number + 1，和Acknowledgment Number + 1，进入FIN_WAIT_2状态")]),e._v(" "),_("li",[e._v("服务端向客户端发送FIN报文，并且状态切换为LAST_ACK状态")]),e._v(" "),_("li",[e._v("客户端收到服务端发送的FIN报文，服务端发送ACK报文，进如TIME_WAIT状态，服务端收到报文之后就关闭链接。客户端等待2MSL依然没有收到回复后，关闭")])])]),e._v(" "),_("li",[_("p",[e._v("浏览器渲染")]),e._v(" "),_("ul",[_("li",[e._v("HTML解析器开始解析HTML字节流")]),e._v(" "),_("li",[e._v("渲染\b引擎解析css生成样式表")]),e._v(" "),_("li",[e._v("按照层叠上下文规则创建层树LayerTree")]),e._v(" "),_("li")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);