(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{385:function(a,t,r){"use strict";r.r(t);var e=r(42),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"渲染流水线中的光栅化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染流水线中的光栅化"}},[a._v("#")]),a._v(" 🤔渲染流水线中的光栅化")]),a._v(" "),r("p",[a._v("Rasterization，光栅化，又称为栅格化，它用于执行绘图指令生成像素的颜色值。")]),a._v(" "),r("h2",{attrs:{id:"渲染流水线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染流水线"}},[a._v("#")]),a._v(" 渲染流水线")]),a._v(" "),r("ol",[r("li",[a._v("DOM/View - 构建或者改变 DOM 树（UI Toolkit 一般称为 View 或者 Widget）；")]),a._v(" "),r("li",[a._v("Style/Layout - 计算样式和重排版（又称为布局）；\n3.Layerize - 图层化，将不同的 DOM/View 子树按一定的规则归属到不同的图层，构建或者更新图层树/列表；")]),a._v(" "),r("li",[a._v("Paint - 绘制图层，输出 DisplayList（2D 绘图指令的列表）；")]),a._v(" "),r("li",[a._v("Rasterization - 执行 DisplayList 中的绘图指令，生成图层区域的像素颜色值；")]),a._v(" "),r("li",[a._v("Composite - 将光栅化的结果最终输出到目标 Surface，如果目标 Surface 是一个 On Screen Window，那也就是输出到显示屏上；")])]),a._v(" "),r("h2",{attrs:{id:"光栅化策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#光栅化策略"}},[a._v("#")]),a._v(" 光栅化策略")]),a._v(" "),r("h3",{attrs:{id:"直接光栅化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#直接光栅化"}},[a._v("#")]),a._v(" 直接光栅化")]),a._v(" "),r("p",[a._v("在所有光栅化策略中，直接光栅化是最简单的一种。它就是直接将所有可见图层的 DisplayList 中可见区域内的绘图指令，执行光栅化直接在目标 Surface 的像素缓冲区上生成像素的颜色值。如果是完全的直接光栅化，这时，其实就不需要后面合成的步骤了。")]),a._v(" "),r("h3",{attrs:{id:"间接光栅化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#间接光栅化"}},[a._v("#")]),a._v(" 间接光栅化")]),a._v(" "),r("p",[a._v("像 Android 和 Flutter，它们的 UI Toolkit 主要使用直接光栅化的策略，但是同时也支持间接光栅化。它们允许为指定图层分配额外的像素缓冲区，该图层的光栅化会先写入自身的像素缓冲区，渲染引擎再将这些图层的像素缓冲区通过合成输出到目标 Surface 的像素缓冲器。")]),a._v(" "),r("p",[a._v("无论是直接光栅化还是间接光栅化，它们都是所谓的同步光栅化，也就是说光栅化和合成通常都在同一个线程，即使不在同一个线程，也会通过线程同步的方式来保证光栅化和合成的执行顺序。这种同时使用直接和间接光栅化的方式，有时我们也称为即时光栅化（On Demand Rasterization）。")]),a._v(" "),r("h3",{attrs:{id:"异步分块光栅化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步分块光栅化"}},[a._v("#")]),a._v(" 异步分块光栅化")]),a._v(" "),r("p",[a._v("Chromium 使用的是异步分块光栅化的策略，除了一些特殊图层外（比如 Canvas，Video）：")]),a._v(" "),r("ul",[r("li",[a._v("图层会按一定的规则切割成同样大小的分块，这些分块会覆盖整个图层；")]),a._v(" "),r("li",[a._v("在 Viewport 范围内或者附近的分块会分配大小跟分块相同的像素缓冲区，当 Viewport 发生变化时，会重新分配或者回收这些像素缓冲区；")]),a._v(" "),r("li",[a._v("光栅化是以分块为单位进行，每个光栅化任务执行对应图层的对应分块区域内的绘图指令，结果写入该分块的像素缓冲区；")]),a._v(" "),r("li",[a._v("光栅化和合成不在同一个线程执行，并且不是同步的，如果合成过程中某个分块没有完成光栅化，那它就会保留空白或者绘制一个棋盘格的图形（Checkerboard）；")])]),a._v(" "),r("p",[a._v("对于异步光栅化来说，为图层分配额外的像素缓冲区是必须的，而使用分块的方式比起分配一个完整大小的像素缓冲区有很多优势：")]),a._v(" "),r("ul",[r("li",[a._v("为超大图层分配一个完整大小的像素缓冲区可能超过硬件支持的范围；")]),a._v(" "),r("li",[a._v("超大图层只有部分可见，为不可见的部分分配像素缓冲区会导致内存的浪费；")]),a._v(" "),r("li",[a._v("如果一个图层只有部分区域发生变化，只需要重新光栅化关联的分块；")]),a._v(" "),r("li",[a._v("尺寸大小固定的小分块，可以通过一个资源池（Resource Pool）统一管理这些像素缓冲区，方便回收和重分配；")])]),a._v(" "),r("h2",{attrs:{id:"不同光栅化策略的优劣"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不同光栅化策略的优劣"}},[a._v("#")]),a._v(" 不同光栅化策略的优劣")]),a._v(" "),r("h3",{attrs:{id:"内存占用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存占用"}},[a._v("#")]),a._v(" 内存占用")]),a._v(" "),r("p",[a._v("可以说内存占用是直接光栅化策略的最大优势， 采用异步分块光栅化的 Chromium 需要为每个合成器分配一个分块缓存的资源池，用于分配和回收分块缓存（像素缓冲区）。以 Android WebView 为例，它是按 WebView 可见大小的倍数（软上限是 10 倍，硬上限是 20 倍）来确定这个资源池的上限，对于 1080p 的手机，全屏大小的 WebView，一般的移动版网页，这个资源池正常会分配 40 ～ 60M 的分块缓存，峰值可能会超过 100M。如果是 2k 分辨率的手机，分块缓存的内存占用可能会翻番。并且如果多个 WebView 同时可见，分块缓存的内存占用可能是单个 WebView 的几倍（每个 WebView 的合成器是独立的）。")]),a._v(" "),r("h3",{attrs:{id:"首屏性能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#首屏性能"}},[a._v("#")]),a._v(" 首屏性能")]),a._v(" "),r("p",[a._v("把首屏性能单独拿出来讨论，一是因为它是一个比较重要的指标，二是因为首屏性能比较特殊，它意味页面是全新的内容，很难通过缓存中间光栅化的结果来提升性能。很明显，在首屏性能指标上，同步光栅化的策略是更有利的，同步光栅化的渲染流水线设计通常比异步光栅化的渲染流水线设计更精炼，它可以直接发起合成，在合成的过程中执行光栅化，而不需要先分派光栅化任务，调度任务的执行，等待所有任务执行完毕后再触发合成。当然，这个提升实际上也很有限，在首屏性能上，同步光栅化通常比起异步光栅化理论上可以提前一两帧完成，可能就二三十毫秒。如果应用首屏的主要瓶颈是在加载，这点点提升其实意义不大，但有时在切换标签页这种场景，所有内容都已经提前加载完毕，那几十毫秒的提升可能都是有意义的。")]),a._v(" "),r("h3",{attrs:{id:"动态变化的内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动态变化的内容"}},[a._v("#")]),a._v(" 动态变化的内容")]),a._v(" "),r("p",[a._v("如果页面的内容在不断发生变化，这意味这异步光栅化的中间缓存大部分是失效的，需要重新光栅化，在这种情况下，类似首屏性能，因为同步光栅化的渲染流水线更精炼，并且也不需要先光栅化到中间缓存再合成，减少了渲染的步骤，同步光栅化的策略通常是更有利的。")]),a._v(" "),r("h3",{attrs:{id:"图层动画"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图层动画"}},[a._v("#")]),a._v(" 图层动画")]),a._v(" "),r("p",[a._v("图层动画包括各种图层的移动，滚动，淡入淡出等等。在动画的过程中，图层的内容没有发生变化，对使用异步光栅化的渲染引擎来说，它的分块缓存大部分都是有效的，不需要重新光栅化，或者针对图层滚动，只有少量从不可见到可见的分块需要重新光栅化。这也意味着在动画过程中，渲染引擎大部分时间只需要重新合成输出，而分块合成的开销非常低，通常最多只需要 2 ~ 3 毫秒的耗时。所以在图层动画上，异步分块光栅化的策略会有比较明显的优势，特别是在复杂的页面上。")]),a._v(" "),r("p",[a._v("对于非惯性滚动的其它图层动画，Android 的 UI Toolkit，Flutter 实际上也通过间接光栅化于引入图层缓存，减少不必要的重复光栅化来提升性能，只是 Android UI Toolkit 需要应用自己设置。并且这些图层动画不像惯性滚动对掉帧这么敏感，轻微的掉帧其实也不影响视觉体验，所以异步分块光栅化最大的优势还是在惯性滚动动画上面，在惯性滚动过程中，异步分块光栅化还可以提前对 Viewport 外的区域进行预光栅化，从而提升性能和减少 Checkerboard 的现象。这也是在 Android 手机上，浏览器在页面的惯性滚动上通常比原生应用表现的更流畅，极少出现卡顿掉帧的情况。")]),a._v(" "),r("h2",{attrs:{id:"光栅化的性能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#光栅化的性能"}},[a._v("#")]),a._v(" 光栅化的性能")]),a._v(" "),r("p",[a._v("我们继续讨论光栅化的性能问题，它对异步光栅化来说相对而言没那么关键，但是对直接光栅化来说就非常关键了。虽然我们上面说过在惯性滚动动画场景，异步分块光栅化有更大的性能优势，但是帧率是有上限的，一般为屏幕的刷新率，对于绝大部分显示屏刷新率为 60hz 的手机，要达到满帧 , 60 帧就够了。如果光栅化足够快，能够保证在 16 毫秒内完成，那在直接光栅化的策略下实现稳定 60 帧的惯性滚动动画也是可以做到的。")]),a._v(" "),r("p",[a._v("早期光栅化引擎只支持软件（CPU）光栅化，性能极差，UI Toolkit 如果使用直接光栅化，性能会非常糟糕，比如在 Android 2.x 时期，因为 Android UI Toolkit 只支持软件光栅化，系统图形性能糟糕，应用卡顿明显。目前，应用最广的光栅化引擎 Skia，对硬件（GPU）光栅化的支持已经十分完善，硬件光栅化，把真正对像素缓冲区进行读写（着色）的部分操作转移到了 GPU，不再前台占用 CPU 的时间，极大的提升了光栅化性能。可以说，渲染引擎使用直接光栅化策略的前提条件就是光栅化引擎支持硬件光栅化。")]),a._v(" "),r("p",[a._v("Android 2.x 时期使用 Skia 作为光栅化引擎，只支持软件光栅化。4.x 开始使用两套光栅化引擎，Skia 仍然用于软件光栅化，另外自己实现了一套给 HWUI 用，用于支持硬件（GPU）光栅化。9.0 开始，HWUI 又改成使用 Skia 来支持硬件光栅化，也就是说目前 Android 无论是软件还是硬件光栅化都统一使用 Skia 作为自己的光栅化引擎。")]),a._v(" "),r("p",[a._v("但是即使是硬件光栅化，仍然需要大量 CPU 计算的耗时，以 Skia 为例子，光栅化过程中：")]),a._v(" "),r("ol",[r("li",[a._v("新内容导致各种缓存的生成，包括位图，绘制的路径阴影，非矩形裁剪的蒙版，字型，路径三角化后的顶点数据，新使用的着色器的代码编译等等，这些资源都需要由 CPU 生成并上传给 GPU，然后保存到光栅化引擎的缓存体系中供反复使用。这部分通常耗时比较长，从几毫秒到几十毫秒不等。另外因为位图解码耗时太长，花费几十到几百毫秒不等，所以即使是直接光栅化，渲染引擎仍然有可能在位图解码和纹理上传上使用异步的方式；")]),a._v(" "),r("li",[a._v("硬件光栅化的处理流水线通常都更甬长，并且有着更复杂的缓存体系，通过 Skia SkCanvas 发出的一条绘制指令，需要经过矩阵变换和裁剪等处理，生成或者取出相应的资源缓存，最后转换成内部的 GrOp，当一次性 Flush 的时候，暂存的 GrOp 需要先做指令合并，然后生成或者取出该 GrOp 对应路径的顶点缓存，最后生成对应的 GPU 指令发送给 GPU；")]),a._v(" "),r("li",[a._v("第一项的耗时会导致新内容首次出现的时候（或者即使不是首次出现，但是一段时间后之前的缓存已经被释放），光栅化耗时会突然大幅增加，直接光栅化容易在这种场景导致掉帧，页面的惯性滚动过程就比较容易出现这种场景。而异步分块光栅化则因为光栅化不会阻塞合成而避免掉帧，并且通过预先光栅化 Viewport 外的不可见区域来进一步提升性能和减少 Checkerboard。")])]),a._v(" "),r("p",[a._v("第二项的耗时，如果一个绘制指令只是重复执行，不需要产生新的资源缓存，一般来说单条指令的执行耗时其实是很低的（Skia 在目前手机上约莫在 0.0x ～ 0.1 毫秒这个范围）。但是如果绘制界面过于复杂，绘制元素太多，绘制所需的指令数太多，并且较多指令包含复杂路径（达到上百条甚至几百条这个规模），直接光栅化在低端机上也容易出现持续掉帧。")]),a._v(" "),r("p",[a._v("不过总的来说以当前手机 CPU 的性能，中高端手机应付第二项还是绰绰有余的（页面复杂度位于正常范围内），而第一项导致直接光栅化的偶尔掉帧虽然很难完全避免，但是对用户感受来说也不算特别严重，起码不是持续掉帧。所以随着手机 CPU 性能越好，直接光栅化策略的优势就越明显，对比异步分块光栅化，它在内存占用上有明显优势，在非图层动画外的其它场景也有一定的优势，渲染引擎通过引入间接光栅化也可以极大提升大部分图层动画的性能，除了部分场景下页面惯性滚动动画容易出现偶尔掉帧这个问题的确不好解决外，总体优势还是比较明显的。")]),a._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://developer.aliyun.com/article/718891",target:"_blank",rel:"noopener noreferrer"}},[a._v("原文"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=v.exports}}]);