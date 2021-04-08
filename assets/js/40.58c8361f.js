(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{394:function(a,s,r){"use strict";r.r(s);var t=r(42),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"容器管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容器管理"}},[a._v("#")]),a._v(" 容器管理")]),a._v(" "),r("hr"),a._v(" "),r("h2",{attrs:{id:"创建容器常用选项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建容器常用选项"}},[a._v("#")]),a._v(" 创建容器常用选项")]),a._v(" "),r("p",[r("img",{attrs:{src:"/images/docker/docker08.png",alt:""}}),a._v(" "),r("img",{attrs:{src:"/images/docker/docker09.png",alt:""}}),a._v(" "),r("br")]),a._v(" "),r("h2",{attrs:{id:"管理容器常用命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#管理容器常用命令"}},[a._v("#")]),a._v(" 管理容器常用命令")]),a._v(" "),r("p",[a._v("容器 -> container"),r("br"),a._v("\n查看容器管理的命令: "),r("strong",[a._v("$ docker container --help")]),r("br"),a._v(" "),r("img",{attrs:{src:"/images/docker/docker10.png",alt:""}}),a._v(" "),r("br")]),a._v(" "),r("h2",{attrs:{id:"创建新容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建新容器"}},[a._v("#")]),a._v(" 创建新容器")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("$ docker container run -itd --name ngx0 nginx \n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:"/images/docker/docker11.png",alt:""}}),a._v(" "),r("br")]),a._v(" "),r("h2",{attrs:{id:"进入容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[a._v("#")]),a._v(" 进入容器")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("//容易造成多窗口等待卡死，不推荐\n//退出保证不中断 ctrl+p+q\n$ docker container attach bs\n\n//推荐\n//访问远程主机上的docker\n$ docker exec -it ngx0 bash\n$ docker exec -it ngx0 sh\n$ docker exec -it ngx0 /bin/bash\n\n# 很多容器为了最简化，不配置常用命名\n# 如果想方便可以运行busybox镜像，含有丰富的命令\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br")])]),r("p",[r("img",{attrs:{src:"/images/docker/docker12.png",alt:""}}),a._v(" "),r("br")]),a._v(" "),r("h2",{attrs:{id:"查看容器文件挂载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看容器文件挂载"}},[a._v("#")]),a._v(" 查看容器文件挂载")]),a._v(" "),r("p",[r("img",{attrs:{src:"/images/docker/docker13.png",alt:""}}),a._v(" "),r("br"),a._v("\n容器的创建和重启会到宿主机中把这三个文件挂载出来，所以修改容器中的这三个文件，是不生效的。\n重启和创建容器，修改的内容就丢失了。")]),a._v(" "),r("h2",{attrs:{id:"容器日志目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容器日志目录"}},[a._v("#")]),a._v(" 容器日志目录")]),a._v(" "),r("p",[r("img",{attrs:{src:"/images/docker/docker14.png",alt:""}}),a._v(" "),r("br"),a._v("\n容器的日志存储在 /var/lib/docker/containers/ 中")]),a._v(" "),r("h2",{attrs:{id:"容器信息查看"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容器信息查看"}},[a._v("#")]),a._v(" 容器信息查看")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("$ docker container inspect [containerId/containerName]\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("h2",{attrs:{id:"从容器中复制到一个新的镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从容器中复制到一个新的镜像"}},[a._v("#")]),a._v(" 从容器中复制到一个新的镜像")]),a._v(" "),r("p",[r("img",{attrs:{src:"/images/docker/docker15.png",alt:""}}),a._v(" "),r("br")]),a._v(" "),r("h2",{attrs:{id:"复制文件到容器中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复制文件到容器中"}},[a._v("#")]),a._v(" 复制文件到容器中")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("$ docker container cp [fileName] [容器名:/目录]\n//该文件在重启容器后不会丢失\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br")])]),r("p",[r("img",{attrs:{src:"/images/docker/docker16.png",alt:""}}),a._v(" "),r("br")]),a._v(" "),r("h2",{attrs:{id:"查询容器资源利用情况"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查询容器资源利用情况"}},[a._v("#")]),a._v(" 查询容器资源利用情况")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("$ docker stats [containerName/ID]\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:"/images/docker/docker17.png",alt:""}}),a._v(" "),r("br")])])}),[],!1,null,null,null);s.default=e.exports}}]);