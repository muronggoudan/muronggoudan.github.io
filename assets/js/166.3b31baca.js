(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{523:function(t,a,v){"use strict";v.r(a);var _=v(42),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"浏览器中的网络"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的网络"}},[t._v("#")]),t._v(" 🤔浏览器中的网络")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#超文本传输协议http-o-9"}},[t._v("超文本传输协议HTTP/O.9")]),v("ul",[v("li",[v("a",{attrs:{href:"#特点"}},[t._v("特点")])])])]),v("li",[v("a",{attrs:{href:"#被浏览器推动的http-1-0"}},[t._v("被浏览器推动的HTTP/1.0")]),v("ul",[v("li",[v("a",{attrs:{href:"#需求"}},[t._v("需求")])]),v("li",[v("a",{attrs:{href:"#http-1-0另外亮点"}},[t._v("HTTP/1.0另外亮点")])])])]),v("li",[v("a",{attrs:{href:"#http-1-1"}},[t._v("HTTP/1.1")]),v("ul",[v("li",[v("a",{attrs:{href:"#http-1-1为网络效率所做的优化"}},[t._v("HTTP/1.1为网络效率所做的优化")])]),v("li",[v("a",{attrs:{href:"#http-1-1的主要问题"}},[t._v("HTTP/1.1的主要问题")])])])]),v("li",[v("a",{attrs:{href:"#http-2-多路复用"}},[t._v("HTTP/2 多路复用")])]),v("li",[v("a",{attrs:{href:"#http-2其他优化"}},[t._v("HTTP/2其他优化")])]),v("li",[v("a",{attrs:{href:"#http-2的一些问题"}},[t._v("HTTP/2的一些问题")]),v("ul",[v("li",[v("a",{attrs:{href:"#tcp的队头阻塞"}},[t._v("TCP的队头阻塞")])]),v("li",[v("a",{attrs:{href:"#tcp建立连接的延时"}},[t._v("TCP建立连接的延时")])]),v("li",[v("a",{attrs:{href:"#tcp协议僵化"}},[t._v("TCP协议僵化")])])])]),v("li",[v("a",{attrs:{href:"#quic协议"}},[t._v("QUIC协议")])]),v("li",[v("a",{attrs:{href:"#http-3的挑战"}},[t._v("HTTP/3的挑战")])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"超文本传输协议http-o-9"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#超文本传输协议http-o-9"}},[t._v("#")]),t._v(" 超文本传输协议HTTP/O.9")]),t._v(" "),v("h3",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),v("ul",[v("li",[t._v("只有一个请求行，并没有HTTP请求头和请求题")]),t._v(" "),v("li",[t._v("服务器也没有返回头信息，只需要返回数据")]),t._v(" "),v("li",[t._v("文件内容以ASCII字符流来传输的")])]),t._v(" "),v("h2",{attrs:{id:"被浏览器推动的http-1-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#被浏览器推动的http-1-0"}},[t._v("#")]),t._v(" 被浏览器推动的HTTP/1.0")]),t._v(" "),v("h3",{attrs:{id:"需求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),v("ul",[v("li",[t._v("各种静态资源，图片，音视频等，所以需要支持多种类型的文件下载 ## HTTP/1. 0如何通过请求头和响应头支持多种不同类型的数据")]),t._v(" "),v("li",[t._v("浏览器需要识别服务器返回的数据是什么类型(Accept: text/html)-")]),t._v(" "),v("li",[t._v("由于会釆用压缩传输，所以需要知道压缩算法(Accept-encoding: gzip， deflate， br)")]),t._v(" "),v("li",[t._v("语言版本(AcceptTanguage: zh-CN， zh)")]),t._v(" "),v("li",[t._v("文件编码类型(Accept-Charset: ISO-8895T， utf-8) 响应头中对应会返回")]),t._v(" "),v("li",[t._v("content-encoding: br")]),t._v(" "),v("li",[t._v("content-type: text/html; charset:UTF-8")])]),t._v(" "),v("h3",{attrs:{id:"http-1-0另外亮点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0另外亮点"}},[t._v("#")]),t._v(" HTTP/1.0另外亮点")]),t._v(" "),v("ul",[v("li",[t._v("支持状态码")]),t._v(" "),v("li",[t._v("cache机制")]),t._v(" "),v("li",[t._v("用户代理字段")])]),t._v(" "),v("h2",{attrs:{id:"http-1-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP/1.1")]),t._v(" "),v("ul",[v("li",[t._v("改进持久连接(connection: keep-alive)")]),t._v(" "),v("li",[t._v("不成熟的HTTP管线化，如果有请求因为某些原因没有及时返回，那么就会阻塞后面所有的请求，这就是著名队头阻塞问题")]),t._v(" "),v("li",[t._v("提供虚拟机的支持，通过host字段来分辨一台主机中的多台虚拟主机")]),t._v(" "),v("li",[t._v("对动态生成的内容提供了完美支持，HTTP/1. 1通过引入chunk transfer机制来解决这个问题，服务器会将数据分割成若千个任意大小的数据块，每个数据块发送时会附上上个数据块的长度，最后使用一个零长度的块作为发送 数据完成的标志。这样就提供了对动态内容的致辞")]),t._v(" "),v("li",[t._v("客戶端cookie、安全机制")])]),t._v(" "),v("h3",{attrs:{id:"http-1-1为网络效率所做的优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1为网络效率所做的优化"}},[t._v("#")]),t._v(" HTTP/1.1为网络效率所做的优化")]),t._v(" "),v("ul",[v("li",[t._v("增加了持久链接")]),t._v(" "),v("li",[t._v("浏览器为每个域名最多同时维护6个TCP连接")]),t._v(" "),v("li",[t._v("使用CDN的实现域名分片机制")])]),t._v(" "),v("h3",{attrs:{id:"http-1-1的主要问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1的主要问题"}},[t._v("#")]),t._v(" HTTP/1.1的主要问题")]),t._v(" "),v("ul",[v("li",[t._v("带宽利用")]),t._v(" "),v("li",[t._v("TCP慢启动")]),t._v(" "),v("li",[t._v("同时开启了多条TCP连接，那么这些连接会竞争固定的带宽")]),t._v(" "),v("li",[t._v("HTTP/1.1队头阻塞问题")])]),t._v(" "),v("h2",{attrs:{id:"http-2-多路复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-2-多路复用"}},[t._v("#")]),t._v(" HTTP/2 多路复用")]),t._v(" "),v("p",[t._v("一个域名只使用一个TCP长连接来传输数据，这样整个页面的资源下载过程只需要一次慢启动，同时也避免了多个TCP连接竞争带宽所带来的问题。")]),t._v(" "),v("p",[t._v("实现：")]),t._v(" "),v("ul",[v("li",[t._v("新增二进制分帧层")]),t._v(" "),v("li",[t._v("浏览器准备好数据")]),t._v(" "),v("li",[t._v("经过二进制分帧层处理后，会被转换成一个个带有ID编号的帧，通过协议栈将这些帧发送给服务器")]),t._v(" "),v("li",[t._v("服务器收到帧之后，会将所有相同ID的帧合并成一条完整的请求信息")]),t._v(" "),v("li",[t._v("服务端同样也是会将数据经二进制分帧层处理后传递给浏览器")])]),t._v(" "),v("h2",{attrs:{id:"http-2其他优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-2其他优化"}},[t._v("#")]),t._v(" HTTP/2其他优化")]),t._v(" "),v("ul",[v("li",[t._v("可以设置请求的优先级")]),t._v(" "),v("li",[t._v("服务器推送，服务器可以提前将数据推送给浏览器，特别是当首屏加载时，主动推送静态资源将会很有必要")]),t._v(" "),v("li",[t._v("头部压缩")])]),t._v(" "),v("h2",{attrs:{id:"http-2的一些问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-2的一些问题"}},[t._v("#")]),t._v(" HTTP/2的一些问题")]),t._v(" "),v("p",[t._v("HTTP/2的一个核心特性是使用了多路复用技术，因此它可以通过一个TCP连接来发送多个URL请求。多路复用技术能充分利用带宽，最大限度规避了TCP的慢启动所带来的问题，同时还实现了头部压缩、服务器推送等功能，使得页面资源的传输速度得到了大幅提升。在HTTP/1.1时代，为了提升并行下载效率，浏览器为每个域名维护了6个TCP连接；而釆用HTTP/2之后，浏览器只需要为每个域名维护1个TCP持久连接，同时还解决了HTTP/1.1队头阻塞的问题。")]),t._v(" "),v("h3",{attrs:{id:"tcp的队头阻塞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp的队头阻塞"}},[t._v("#")]),t._v(" TCP的队头阻塞")]),t._v(" "),v("p",[t._v("虽然HTTP/2解决了应用层面的队头阻塞问题，不过和HTTP/1.1 一样，HTTP/2依然是基于TCP协议的，而TCP最初就是为了单连接而设计的。你可以把TCP连接看成是两台计算机之前的一个虚拟管道，计算机的一端将要传输的数据按照顺序放入管道，最终数据会以相同的顺序出现在管道的另外一头。\n在TCP传输过程中，由于单个数据包的丢失而造成的阻塞称为TCP上的队头阻塞。HTTP/2中，多个请求是跑在一个TCP管道中的，如果任意一路数据流出现了丢包的情况，那么就会阻塞该TCP链接中的所有请求。而在HTTP/1.1中浏览器会为每个域名开启6个TCP连接，如果其中1个TCP连接发生了队头阻塞，那么其他的5个连接依然可以继续传输数据。")]),t._v(" "),v("h3",{attrs:{id:"tcp建立连接的延时"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp建立连接的延时"}},[t._v("#")]),t._v(" TCP建立连接的延时")]),t._v(" "),v("p",[t._v("TCP简历连接时的握手过程以及TSL建立连接时的握手过程，会耗费过多的RTT")]),t._v(" "),v("h3",{attrs:{id:"tcp协议僵化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议僵化"}},[t._v("#")]),t._v(" TCP协议僵化")]),t._v(" "),v("p",[t._v("网络硬件基础设施更新迭代节奏太慢。通常都是使用操作系统内核来实现TCP协议，上层无法修改，同时操作系统迭代更新也会很慢")]),t._v(" "),v("h2",{attrs:{id:"quic协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#quic协议"}},[t._v("#")]),t._v(" QUIC协议")]),t._v(" "),v("ul",[v("li",[t._v("实现了类似TCP的流量控制、传输可靠性功能")]),t._v(" "),v("li",[t._v("集成了TLS加密功能")]),t._v(" "),v("li",[t._v("实现了HTTP/2中的多路复用功能")]),t._v(" "),v("li",[t._v("实现了快速握手功能")])]),t._v(" "),v("h2",{attrs:{id:"http-3的挑战"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-3的挑战"}},[t._v("#")]),t._v(" HTTP/3的挑战")]),t._v(" "),v("ul",[v("li",[t._v("第一，从目前的情况来看，服务器和浏览器端都没有对HTTP/3提供比较完整的支持Chrome虽然在数年前就开始支持Google版本的QUIC，但是这个版本的QUIC和官方的QUIC存在着非常大的差异。")]),t._v(" "),v("li",[t._v("第二，部署HTTP/3也存在着非常大的问题。因为系统内核对UDP的优化远远没有达到TCP的优化程度，这也是阻碍QUIC的一个重要原因。")]),t._v(" "),v("li",[t._v("第三，中间设备僵化的问题。这些设备对UDP的优化程度远远低于TCP，据统计使用QUIC协议时，大约有3%~7%的丢包率。")])]),t._v(" "),v("p",[t._v("关于HTTP/3的未来，我有下面两点判断：")]),t._v(" "),v("ul",[v("li",[t._v("从标准制定到实践再到协议优化还需要走很长一段路")]),t._v(" "),v("li",[t._v("因为动了底层协议，所以HTTP/3的增长会比较缓慢，这和HTTP/2有着本质的区别。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);