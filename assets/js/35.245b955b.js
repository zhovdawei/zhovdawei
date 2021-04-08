(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{389:function(s,n,a){"use strict";a.r(n);var e=a(42),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos7下安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7下安装docker"}},[s._v("#")]),s._v(" Centos7下安装docker")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[s._v("#")]),s._v(" 安装步骤")]),s._v(" "),a("h3",{attrs:{id:"_1-关闭防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-关闭防火墙"}},[s._v("#")]),s._v(" 1.关闭防火墙")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 关闭防火墙\n[root@host106 ~]# systemctl stop firewalld\n# 禁止启动开启防火墙\n[root@host106 ~]# systemctl disable firewalld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2-关闭selinux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-关闭selinux"}},[s._v("#")]),s._v(" 2.关闭SELinux")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host106 ~]# vi /etc/selinux/config\n######################################################\n# 修改selinux为disabled\n# SELINUX=disabled\n######################################################\n\n# 重启系统，验证关闭\n[root@host106 ~]# getenforce\nDisabled\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_3-安装所需的软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装所需的软件包"}},[s._v("#")]),s._v(" 3.安装所需的软件包")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host106 ~]# yum install -y yum-utils \\\n                  device-mapper-persistent-data \\\n                  lvm2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_4-配置docker-ce的源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置docker-ce的源"}},[s._v("#")]),s._v(" 4.配置docker-ce的源")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host106 ~]# yum-config-manager \\\n                  --add-repo \\\n                  https://download.docker.com/linux/centos/docker-ce.repo\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_5-安装docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装docker-ce"}},[s._v("#")]),s._v(" 5.安装docker-ce")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host106 ~]# yum install docker-ce -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_6-启动docker-并设置开机启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-启动docker-并设置开机启动"}},[s._v("#")]),s._v(" 6.启动docker,并设置开机启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host106 ~]# systemctl start docker\n[root@host106 ~]# systemctl enable docker\nCreated symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_7-运行hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-运行hello-world"}},[s._v("#")]),s._v(" 7.运行hello-world")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host106 ~]# docker run hello-world\n\n# 看看执行情况\n[root@host106 ~]# docker info\n#####################################\n# 已经运行过 docker run hello-world 就会出现如下情况\nServer:\n Containers: 1\n  Running: 0\n  Paused: 0\n  Stopped: 1\n Images: 1\n#####################################\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"_8-运行一个nginx测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-运行一个nginx测试"}},[s._v("#")]),s._v(" 8.运行一个nginx测试")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 运行完，不要ctrl+c，否则会关闭运行，这是一个前台运行\n[root@host106 ~]# docker run -it nginx\n\n# 复制会话，查看一下docker进程，可以看到ngnix已经在运行状态"up"\n[root@host106 ~]# docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES\nf60fbaf65446        nginx               "nginx -g \'daemon of…"   26 seconds ago      Up 24 seconds       80/tcp              happy_sammet\n\n# 查看nginx容器详情\n[root@host106 ~]# docker inspect f60fbaf65446 \n# 截取其中一段，容器的ip:172.17.0.2\n    "Networks": {\n        "bridge": {\n            "IPAMConfig": null,\n            "Links": null,\n            "Aliases": null,\n            "NetworkID": "e9de9968f67aabc8f276bc57a58564306deb2c7ea6d8758ac9ad26cf150b23ab",\n            "EndpointID": "e60eb73c6bb0f711c5a9088a0ceeb990fb6b53abfb987210c8183a74e9dafe7b",\n            "Gateway": "172.17.0.1",\n            "IPAddress": "172.17.0.2",\n            "IPPrefixLen": 16,\n            "IPv6Gateway": "",\n            "GlobalIPv6Address": "",\n            "GlobalIPv6PrefixLen": 0,\n            "MacAddress": "02:42:ac:11:00:02",\n            "DriverOpts": null\n        }\n    }\n\n# 访问nginx容器\n# 如下，访问nginx成功，它给了我们一个欢迎页面。\n[root@host106 ~]# curl 172.17.0.2\n<!DOCTYPE html>\n<html>\n<head>\n<title>Welcome to nginx!</title>\n<style>\n    body {\n        width: 35em;\n        margin: 0 auto;\n        font-family: Tahoma, Verdana, Arial, sans-serif;\n    }\n</style>\n</head>\n<body>\n<h1>Welcome to nginx!</h1>\n<p>If you see this page, the nginx web server is successfully installed and\nworking. Further configuration is required.</p>\n\n<p>For online documentation and support please refer to\n<a href="http://nginx.org/">nginx.org</a>.<br/>\nCommercial support is available at\n<a href="http://nginx.com/">nginx.com</a>.</p>\n\n<p><em>Thank you for using nginx.</em></p>\n</body>\n</html>\n\n\n# 通过容器的ID(CONTAINER ID)进入容器中\n# 我们可以看到一个与当前主机一样的文件系统，但是它是单独隔离的出来的。\n# 但是在容器中很多命令是不支持的，它只提供一个简易的运行环境\n[root@host106 ~]# docker exec -it f60fbaf65446 bash\nroot@f60fbaf65446:/# ^C\nroot@f60fbaf65446:/# ls\nbin  boot  dev\tetc  home  lib\tlib64  media  mnt  opt\tproc  root  run  sbin  srv  sys  tmp  usr  var\nroot@f60fbaf65446:/# \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker官方文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);