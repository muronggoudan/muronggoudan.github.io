(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{510:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" ⭐️XSS")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#存储型xss"}},[t._v("存储型XSS")])]),s("li",[s("a",{attrs:{href:"#反射型xss"}},[t._v("反射型XSS")])]),s("li",[s("a",{attrs:{href:"#dom型xss"}},[t._v("DOM型XSS")])]),s("li",[s("a",{attrs:{href:"#输入过滤"}},[t._v("输入过滤")])]),s("li",[s("a",{attrs:{href:"#预防存储型和反射型-xss-攻击"}},[t._v("预防存储型和反射型 XSS 攻击")]),s("ul",[s("li",[s("a",{attrs:{href:"#纯前端渲染"}},[t._v("纯前端渲染")])]),s("li",[s("a",{attrs:{href:"#转义-html"}},[t._v("转义 HTML")])])])]),s("li",[s("a",{attrs:{href:"#预防-dom-型-xss-攻击"}},[t._v("预防 DOM 型 XSS 攻击")])]),s("li",[s("a",{attrs:{href:"#content-security-policy"}},[t._v("Content Security Policy")])]),s("li",[s("a",{attrs:{href:"#输入内容长度控制"}},[t._v("输入内容长度控制")])]),s("li",[s("a",{attrs:{href:"#其他安全措施"}},[t._v("其他安全措施")])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"一、-什么是xss攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、-什么是xss攻击"}},[t._v("#")]),t._v(" 一、 什么是XSS攻击？")]),t._v(" "),s("p",[t._v("Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。")]),t._v(" "),s("p",[t._v("为了和 CSS 区分，这里把攻击的第一个字母改成了 X，于是叫做 XSS。")]),t._v(" "),s("p",[t._v("XSS 的本质是：恶意代码未经过滤，与网站正常的代码混在一起；浏览器无法分辨哪些脚本是可信的，导致恶意脚本被执行。")]),t._v(" "),s("p",[t._v("而由于直接在用户的终端执行，恶意代码能够直接获取用户的信息，或者利用这些信息冒充用户向网站发起攻击者定义的请求。")]),t._v(" "),s("p",[t._v("在部分情况下，由于输入的限制，注入的恶意脚本比较短。但可以通过引入外部的脚本，并由浏览器执行，来完成比较复杂的攻击策略。\n这里有一个问题：用户是通过哪种方法“注入”恶意脚本的呢？")]),t._v(" "),s("p",[t._v("不仅仅是业务上的“用户的 UGC 内容”可以进行注入，包括 URL 上的参数等都可以是攻击的来源。在处理输入时，以下内容都不可信：")]),t._v(" "),s("ul",[s("li",[t._v("来自用户的 UGC 信息")]),t._v(" "),s("li",[t._v("来自第三方的链接")]),t._v(" "),s("li",[t._v("URL 参数")]),t._v(" "),s("li",[t._v("POST 参数")]),t._v(" "),s("li",[t._v("Referer （可能来自不可信的来源）")]),t._v(" "),s("li",[t._v("Cookie （可能来自其他子域注入）")])]),t._v(" "),s("h1",{attrs:{id:"二、-根据攻击来源-xss攻击可以分为三类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、-根据攻击来源-xss攻击可以分为三类"}},[t._v("#")]),t._v(" 二、 根据攻击来源，XSS攻击可以分为三类")]),t._v(" "),s("p",[t._v("根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM 型三种。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("存储区")]),t._v(" "),s("th",[t._v("插入点")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("存储型 XSS")]),t._v(" "),s("td",[t._v("后端数据库")]),t._v(" "),s("td",[t._v("HTML")])]),t._v(" "),s("tr",[s("td",[t._v("反射型 XSS")]),t._v(" "),s("td",[t._v("URL")]),t._v(" "),s("td",[t._v("HTML")])]),t._v(" "),s("tr",[s("td",[t._v("DOM 型 XSS")]),t._v(" "),s("td",[t._v("后端数据库/前端存储/URL")]),t._v(" "),s("td",[t._v("前端 JavaScript")])])])]),t._v(" "),s("p",[t._v("存储区：恶意代码存放的位置。"),s("br"),t._v("\n插入点：由谁取得恶意代码，并插入到网页上。")]),t._v(" "),s("h2",{attrs:{id:"存储型xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储型xss"}},[t._v("#")]),t._v(" 存储型XSS")]),t._v(" "),s("p",[t._v("存储型 XSS 的攻击步骤：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者将恶意代码提交到目标网站的数据库中。")]),t._v(" "),s("li",[t._v("用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。")]),t._v(" "),s("li",[t._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。")]),t._v(" "),s("li",[t._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),t._v(" "),s("p",[t._v("这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。")]),t._v(" "),s("h2",{attrs:{id:"反射型xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射型xss"}},[t._v("#")]),t._v(" 反射型XSS")]),t._v(" "),s("p",[t._v("反射型 XSS 的攻击步骤：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),t._v(" "),s("li",[t._v("用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。")]),t._v(" "),s("li",[t._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。")]),t._v(" "),s("li",[t._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),t._v(" "),s("p",[t._v("反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。")]),t._v(" "),s("p",[t._v("反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。")]),t._v(" "),s("p",[t._v("由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。")]),t._v(" "),s("p",[t._v("POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。")]),t._v(" "),s("h2",{attrs:{id:"dom型xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom型xss"}},[t._v("#")]),t._v(" DOM型XSS")]),t._v(" "),s("p",[t._v("DOM 型 XSS 的攻击步骤：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),t._v(" "),s("li",[t._v("用户打开带有恶意代码的 URL。")]),t._v(" "),s("li",[t._v("用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。")]),t._v(" "),s("li",[t._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),t._v(" "),s("p",[t._v("DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。")]),t._v(" "),s("h1",{attrs:{id:"三、-预防xss攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、-预防xss攻击"}},[t._v("#")]),t._v(" 三、 预防XSS攻击：")]),t._v(" "),s("p",[t._v("防止 HTML 中出现注入；防止 JavaScript 执行时，执行恶意代码。")]),t._v(" "),s("p",[t._v("通过前面的介绍可以得知，XSS 攻击有两大要素：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者提交恶意代码。")]),t._v(" "),s("li",[t._v("浏览器执行恶意代码。\n针对第一个要素：我们是否能够在用户输入的过程，过滤掉用户输入的恶意代码呢？")])]),t._v(" "),s("h2",{attrs:{id:"输入过滤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入过滤"}},[t._v("#")]),t._v(" 输入过滤")]),t._v(" "),s("p",[t._v("在用户提交时，由前端过滤输入，然后提交到后端。这样做是否可行呢？")]),t._v(" "),s("p",[t._v("答案是不可行。一旦攻击者绕过前端过滤，直接构造请求，就可以提交恶意代码了。")]),t._v(" "),s("p",[t._v("那么，换一个过滤时机：后端在写入数据库前，对输入进行过滤，然后把“安全的”内容，返回给前端。这样是否可行呢？")]),t._v(" "),s("p",[t._v("我们举一个例子，一个正常的用户输入了 "),s("code",[t._v("5 < 7")]),t._v(" 这个内容，在写入数据库前，被转义，变成了 "),s("code",[t._v("5 &lt; 7")]),t._v("。\n问题是：在提交阶段，我们并不确定内容要输出到哪里。\n这里的“并不确定内容要输出到哪里”有两层含义：")]),t._v(" "),s("ol",[s("li",[t._v("用户的输入内容可能同时提供给前端和客户端，而一旦经过了 escapeHTML()，客户端显示的内容就变成了乱码( "),s("code",[t._v("5 &lt; 7")]),t._v(" )。")]),t._v(" "),s("li",[t._v("在前端中，不同的位置所需的编码也不同。")])]),t._v(" "),s("ul",[s("li",[t._v("当 5 < 7 作为 HTML 拼接页面时，可以正常显示：")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("comment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("5 "),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v(" 7"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("当 "),s("code",[t._v("5 &lt; 7")]),t._v(" 通过 Ajax 返回，然后赋值给 JavaScript 的变量时，前端得到的字符串就是转义后的字符。这个内容不能直接用于 Vue 等模板的展示，也不能直接用于内容长度计算。不能用于标题、alert 等。")])]),t._v(" "),s("p",[t._v("所以，输入侧过滤能够在某些情况下解决特定的 XSS 问题，但会引入很大的不确定性和乱码问题。在防范 XSS 攻击时应避免此类方法。")]),t._v(" "),s("p",[t._v("当然，对于明确的输入类型，例如数字、URL、电话号码、邮件地址等等内容，进行输入过滤还是必要的。")]),t._v(" "),s("p",[t._v("既然输入过滤并非完全可靠，我们就要通过“防止浏览器执行恶意代码”来防范 XSS。这部分分为两类：")]),t._v(" "),s("ol",[s("li",[t._v("防止 HTML 中出现注入。")]),t._v(" "),s("li",[t._v("防止 JavaScript 执行时，执行恶意代码。")])]),t._v(" "),s("h2",{attrs:{id:"预防存储型和反射型-xss-攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预防存储型和反射型-xss-攻击"}},[t._v("#")]),t._v(" 预防存储型和反射型 XSS 攻击")]),t._v(" "),s("p",[t._v("存储型和反射型 XSS 都是在服务端取出恶意代码后，插入到响应 HTML 里的，攻击者刻意编写的“数据”被内嵌到“代码”中，被浏览器所执行。")]),t._v(" "),s("p",[t._v("预防这两种漏洞，有两种常见做法：")]),t._v(" "),s("ol",[s("li",[t._v("改成纯前端渲染，把代码和数据分隔开。")]),t._v(" "),s("li",[t._v("对 HTML 做充分转义。")])]),t._v(" "),s("h3",{attrs:{id:"纯前端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纯前端渲染"}},[t._v("#")]),t._v(" 纯前端渲染")]),t._v(" "),s("p",[t._v("纯前端渲染的过程：")]),t._v(" "),s("ol",[s("li",[t._v("浏览器先加载一个静态 HTML，此 HTML 中不包含任何跟业务相关的数据。")]),t._v(" "),s("li",[t._v("然后浏览器执行 HTML 中的 JavaScript。")]),t._v(" "),s("li",[t._v("JavaScript 通过 Ajax 加载业务数据，调用 DOM API 更新到页面上。")])]),t._v(" "),s("p",[t._v("在纯前端渲染中，我们会明确的告诉浏览器：下面要设置的内容是文本（.innerText），还是属性（.setAttribute），还是样式（.style）等等。浏览器不会被轻易的被欺骗，执行预期外的代码了。")]),t._v(" "),s("p",[t._v("但纯前端渲染还需注意避免 DOM 型 XSS 漏洞（例如 onload 事件和 href 中的 javascript:xxx 等，请参考下文”预防 DOM 型 XSS 攻击“部分）。")]),t._v(" "),s("p",[t._v("在很多内部、管理系统中，采用纯前端渲染是非常合适的。但对于性能要求高，或有 SEO 需求的页面，我们仍然要面对拼接 HTML 的问题。")]),t._v(" "),s("h3",{attrs:{id:"转义-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转义-html"}},[t._v("#")]),t._v(" 转义 HTML")]),t._v(" "),s("p",[t._v("如果拼接 HTML 是必要的，就需要采用合适的转义库，对 HTML 模板各处插入点进行充分的转义。")]),t._v(" "),s("p",[t._v("常用的模板引擎，如 doT.js、ejs、FreeMarker 等，对于 HTML 转义通常只有一个规则，就是把 & < > \" ' / 这几个字符转义掉，确实能起到一定的 XSS 防护作用，但并不完善：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("XSS 安全漏洞")]),t._v(" "),s("th",[t._v("简单转义是否有防护作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("HTML 标签文字内容")]),t._v(" "),s("td",[t._v("有")])]),t._v(" "),s("tr",[s("td",[t._v("HTML 属性值")]),t._v(" "),s("td",[t._v("有")])]),t._v(" "),s("tr",[s("td",[t._v("CSS 内联样式")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("内联 JavaScript")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("内联 JSON")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("跳转链接")]),t._v(" "),s("td",[t._v("无")])])])]),t._v(" "),s("p",[t._v("所以要完善 XSS 防护措施，我们要使用更完善更细致的转义策略。\n例如 Java 工程里，常用的转义库为 org.owasp.encoder。以下代码引用自 org.owasp.encoder 的官方说明。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- HTML 标签内文字内容 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("<%= Encode.forHtml(UNTRUSTED) %>"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- HTML 标签属性值 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= Encode.forHtml(UNTRUSTED) %>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- CSS 属性值 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token style-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<= Encode."),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forCssString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UNTRUSTED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" %>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- CSS URL --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token style-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<= Encode."),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forCssUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UNTRUSTED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" %>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- JavaScript 内联代码块 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<%= Encode.forJavaScript(UNTRUSTED) %>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- JavaScript 内联代码块内嵌 JSON --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" __INITIAL_STATE__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<%= Encoder.forJavaScript(data.to_json) %>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- HTML 标签内联监听器 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("<%= Encode.forJavaScript(UNTRUSTED) %>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(");"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  click me\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- URL 参数 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/search?value=<%= Encode.forUriComponent(UNTRUSTED) %>&order=1#top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- URL 路径 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/page/<%= Encode.forUriComponent(UNTRUSTED) %>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!--\n  URL.\n  注意：要根据项目情况进行过滤，禁止掉 "javascript:" 链接、非法 scheme 等\n--\x3e')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("<%=\n  urlValidator.isValid(UNTRUSTED) ?\n    Encode.forHtml(UNTRUSTED) :\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/404"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n%>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  link\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("可见，HTML 的编码是十分复杂的，在不同的上下文里要使用相应的转义规则。")]),t._v(" "),s("h2",{attrs:{id:"预防-dom-型-xss-攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预防-dom-型-xss-攻击"}},[t._v("#")]),t._v(" 预防 DOM 型 XSS 攻击")]),t._v(" "),s("p",[t._v("DOM 型 XSS 攻击，实际上就是网站前端 JavaScript 代码本身不够严谨，把不可信的数据当作代码执行了。")]),t._v(" "),s("p",[t._v("在使用 .innerHTML、.outerHTML、document.write() 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 .textContent、.setAttribute() 等。")]),t._v(" "),s("p",[t._v("如果用 Vue/React 技术栈，并且不使用 v-html/dangerouslySetInnerHTML 功能，就在前端 render 阶段避免 innerHTML、outerHTML 的 XSS 隐患。")]),t._v(" "),s("p",[t._v("DOM 中的内联事件监听器，如 location、onclick、onerror、onload、onmouseover 等，"),s("code",[t._v("<a>")]),t._v(" 标签的 href 属性，JavaScript 的 eval()、setTimeout()、setInterval() 等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些 API，很容易产生安全隐患，请务必避免。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 内联事件监听器中包含恶意代码 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UNTRUSTED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onerror")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UNTRUSTED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("data:image/png,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 链接内包含恶意代码 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UNTRUSTED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setTimeout()/setInterval() 中调用恶意代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNTRUSTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNTRUSTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// location 调用恶意代码")]),t._v("\nlocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UNTRUSTED'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eval() 中调用恶意代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNTRUSTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("复制代码如果项目中有用到这些的话，一定要避免在字符串中拼接不可信数据。")]),t._v(" "),s("h1",{attrs:{id:"其他-xss-防范措施"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他-xss-防范措施"}},[t._v("#")]),t._v(" 其他 XSS 防范措施")]),t._v(" "),s("p",[t._v("虽然在渲染页面和执行 JavaScript 时，通过谨慎的转义可以防止 XSS 的发生，但完全依靠开发的谨慎仍然是不够的。以下介绍一些通用的方案，可以降低 XSS 带来的风险和后果。")]),t._v(" "),s("h2",{attrs:{id:"content-security-policy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy"}},[t._v("#")]),t._v(" Content Security Policy")]),t._v(" "),s("p",[t._v("严格的 CSP 在 XSS 的防范中可以起到以下的作用：")]),t._v(" "),s("ul",[s("li",[t._v("禁止加载外域代码，防止复杂的攻击逻辑。")]),t._v(" "),s("li",[t._v("禁止外域提交，网站被攻击后，用户的数据不会泄露到外域。")]),t._v(" "),s("li",[t._v("禁止内联脚本执行（规则较严格，目前发现 GitHub 使用）。")]),t._v(" "),s("li",[t._v("禁止未授权的脚本执行（新特性，Google Map 移动版在使用）。")]),t._v(" "),s("li",[t._v("合理使用上报可以及时发现 XSS，利于尽快修复问题。")])]),t._v(" "),s("p",[t._v("关于 CSP 的详情，请关注前端安全系列后续的文章。")]),t._v(" "),s("h2",{attrs:{id:"输入内容长度控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入内容长度控制"}},[t._v("#")]),t._v(" 输入内容长度控制")]),t._v(" "),s("p",[t._v("对于不受信任的输入，都应该限定一个合理的长度。虽然无法完全防止 XSS 发生，但可以增加 XSS 攻击的难度。")]),t._v(" "),s("h2",{attrs:{id:"其他安全措施"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他安全措施"}},[t._v("#")]),t._v(" 其他安全措施")]),t._v(" "),s("ul",[s("li",[t._v("HTTP-only Cookie: 禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。")]),t._v(" "),s("li",[t._v("验证码：防止脚本冒充用户提交危险操作。")])]),t._v(" "),s("h1",{attrs:{id:"xss-的检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-的检测"}},[t._v("#")]),t._v(" XSS 的检测")]),t._v(" "),s("p",[t._v("上述经历让小明收获颇丰，他也学会了如何去预防和修复 XSS 漏洞，在日常开发中也具备了相关的安全意识。但对于已经上线的代码，如何去检测其中有没有 XSS 漏洞呢？")]),t._v(" "),s("p",[t._v("经过一番搜索，小明找到了两个方法：")]),t._v(" "),s("ol",[s("li",[t._v("使用通用 XSS 攻击字符串手动检测 XSS 漏洞。")]),t._v(" "),s("li",[t._v("使用扫描工具自动检测 XSS 漏洞。")])]),t._v(" "),s("p",[t._v("在Unleashing an Ultimate XSS Polyglot一文中，小明发现了这么一个字符串：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("jaVasCript:/*-/*`/*\\`/*'/*\"/**/(/* */oNcliCk=alert() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/<\/scRipt/--!>\\x3csVg/<sVg/oNloAd=alert()//>\\x3e\n")])])]),s("p",[t._v("复制代码它能够检测到存在于 HTML 属性、HTML 文字内容、HTML 注释、跳转链接、内联 JavaScript 字符串、内联 CSS 样式表等多种上下文中的 XSS 漏洞，也能检测 eval()、setTimeout()、setInterval()、Function()、innerHTML、document.write() 等 DOM 型 XSS 漏洞，并且能绕过一些 XSS 过滤器。")]),t._v(" "),s("p",[t._v("小明只要在网站的各输入框中提交这个字符串，或者把它拼接到 URL 参数上，就可以进行检测了。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://xxx/search?keyword=jaVasCript%3A%2F*-%2F*%60%2F*%60%2F*%27%2F*%22%2F**%2F(%2F*%20*%2FoNcliCk%3Dalert()%20)%2F%2F%250D%250A%250d%250a%2F%2F%3C%2FstYle%2F%3C%2FtitLe%2F%3C%2FteXtarEa%2F%3C%2FscRipt%2F--!%3E%3CsVg%2F%3CsVg%2FoNloAd%3Dalert()%2F%2F%3E%3E\n")])])]),s("p",[t._v("复制代码除了手动检测之外，还可以使用自动扫描工具寻找 XSS 漏洞，例如 Arachni、Mozilla HTTP Observatory、w3af 等。")]),t._v(" "),s("h1",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")])])}),[],!1,null,null,null);a.default=e.exports}}]);