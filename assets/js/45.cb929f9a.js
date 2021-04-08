(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{400:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git服务器的简易搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git服务器的简易搭建"}},[s._v("#")]),s._v(" Git服务器的简易搭建")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"准备git服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备git服务器"}},[s._v("#")]),s._v(" 准备Git服务器")]),s._v(" "),a("p",[s._v("我这里用192.168.163.105做Git服务器")]),s._v(" "),a("h3",{attrs:{id:"_1-安装git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装git"}},[s._v("#")]),s._v(" 1.安装Git")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host105 ~]# yum install git -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-清一下环境规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-清一下环境规则"}},[s._v("#")]),s._v(" 2.清一下环境规则")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host105 ~]# iptables -F\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-创建一个用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建一个用户"}},[s._v("#")]),s._v(" 3.创建一个用户")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host105 ~]# useradd git\n[root@host105 ~]# passwd git\nChanging password for user git.\nNew password: \nBAD PASSWORD: The password fails the dictionary check - it is based on a dictionary word\nRetype new password: \npasswd: all authentication tokens updated successfully.\n# 输出你自己的密码，下面克隆这个仓库会用到\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_4-进入git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-进入git"}},[s._v("#")]),s._v(" 4.进入Git")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host105 ~]# su - git\n[git@host105 ~]$ \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_5-创建git仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-创建git仓库"}},[s._v("#")]),s._v(" 5.创建Git仓库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[git@host105 ~]$ mkdir repos\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_6-在仓库目录里面创建一个项目目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-在仓库目录里面创建一个项目目录"}},[s._v("#")]),s._v(" 6.在仓库目录里面创建一个项目目录")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[git@host105 ~]$ cd repos/\n[git@host105 repos]$ mkdir app.git\n[git@host105 app.git]$ pwd\n/home/git/repos/app.git\n[git@host105 repos]$ cd app.git\n[git@host105 app.git]$ \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_7-初始化仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-初始化仓库"}},[s._v("#")]),s._v(" 7.初始化仓库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[git@host105 app.git]$ git --bare init\nInitialized empty Git repository in /home/git/repos/app.git/\n[git@host105 app.git]$ ll\ntotal 12\ndrwxrwxr-x. 2 git git   6 Nov 30 19:08 branches\n-rw-rw-r--. 1 git git  66 Nov 30 19:08 config\n-rw-rw-r--. 1 git git  73 Nov 30 19:08 description\n-rw-rw-r--. 1 git git  23 Nov 30 19:08 HEAD\ndrwxrwxr-x. 2 git git 242 Nov 30 19:08 hooks\ndrwxrwxr-x. 2 git git  21 Nov 30 19:08 info\ndrwxrwxr-x. 4 git git  30 Nov 30 19:08 objects\ndrwxrwxr-x. 4 git git  31 Nov 30 19:08 refs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"准备web-test服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备web-test服务器"}},[s._v("#")]),s._v(" 准备Web-test服务器")]),s._v(" "),a("p",[s._v("我这用192.168.163.103做测试服务器")]),s._v(" "),a("h3",{attrs:{id:"_1-安装git-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装git-2"}},[s._v("#")]),s._v(" 1.安装Git")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host103 ~]# yum install git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-创建目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建目录"}},[s._v("#")]),s._v(" 2.创建目录")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host103 ~]# mkdir test \n[root@host103 test]# pwd\n/root/test\n[root@host103 ~]# cd test/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_3-克隆上面创建的app-git项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-克隆上面创建的app-git项目"}},[s._v("#")]),s._v(" 3.克隆上面创建的app.git项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host103 test]# git clone git@192.168.163.105:/home/git/repos/app.git\nCloning into 'app'...\nThe authenticity of host '192.168.163.105 (192.168.163.105)' can't be established.\nECDSA key fingerprint is SHA256:Nw2ekiMBaEVdz3FxqabFggQqG0LNIiVRRXa+cd9P+Is.\nECDSA key fingerprint is MD5:2e:af:fe:47:01:60:62:63:c4:fa:dc:14:d6:4e:7f:c9.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '192.168.163.105' (ECDSA) to the list of known hosts.\ngit@192.168.163.105's password: \nwarning: You appear to have cloned an empty repository.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_4-进入仓库并创建一个文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-进入仓库并创建一个文件"}},[s._v("#")]),s._v(" 4.进入仓库并创建一个文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@host103 test]# cd app/\n[root@host103 app]# pwd\n/root/test/app\n[root@host103 app]# touch index.html\n# 编辑这个文件，添加一些字符\n[root@host103 app]# vi index.html \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_5-添加一个git用户和邮箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-添加一个git用户和邮箱"}},[s._v("#")]),s._v(" 5.添加一个Git用户和邮箱")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[root@host103 app]# git config --global user.name "david"\n[root@host103 app]# git config --global user.email "zdw0607@gmail.com"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_6-提交文件到本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-提交文件到本地仓库"}},[s._v("#")]),s._v(" 6.提交文件到本地仓库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[root@host103 app]# git add .\n[root@host103 app]# git status\n# On branch master\n#\n# Initial commit\n#\n# Changes to be committed:\n#   (use "git rm --cached <file>..." to unstage)\n#\n#\tnew file:   index.html\n#\n[root@host103 app]# git commit -m "1"\n[master (root-commit) 1a34f4a] 1\n 1 file changed, 1 insertion(+)\n create mode 100644 index.html\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"_7-推送到git服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-推送到git服务器"}},[s._v("#")]),s._v(" 7.推送到git服务器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" [root@host103 app]# git push origin master\n git@192.168.163.105's password: \n Counting objects: 3, done.\n Writing objects: 100% (3/3), 217 bytes | 0 bytes/s, done.\n Total 3 (delta 0), reused 0 (delta 0)\n To git@192.168.163.105:/home/git/repos/app.git\n  * [new branch]      master -> master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_8-创建test2目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-创建test2目录"}},[s._v("#")]),s._v(" 8.创建test2目录")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("###为了避免输入密码，我们实现密钥对的方式\n[root@host103 ~]# mkdir test2\n[root@host103 ~]# cd test2/\n[root@host103 test2]# ssh-keygen\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/root/.ssh/id_rsa): \nEnter passphrase (empty for no passphrase): \nEnter same passphrase again: \nYour identification has been saved in /root/.ssh/id_rsa.\nYour public key has been saved in /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:/Hxuqf4lou+YNsvkAk5LGkhWWoKq1w6g/m+p17IwQdY root@host103\nThe key's randomart image is:\n+---[RSA 2048]----+\n|.                |\n|.. o.            |\n|. =o E           |\n|o+o    .         |\n|=o o    S        |\n|+ + *    o       |\n|.. @ oo . + o..  |\n| .. *=.=o+ +oo   |\n|  .o=oooB*=+o    |\n+----[SHA256]-----+\n\n[root@host103 test2]# cat ~/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDS9CFHpvGOlWVT0AO2gTKOMNXJq4TjciFoOXRR8yJIpQ++OFP4G1OYX9wft/egQyy14sn1mDKxY5pOXwYDOVqj0IU1/6YJDClWO5UQ8avm4rrBuG4By9AGILBi1nMRHMWj/IKrW8tlK8Z7qw36GWCoNYLstBuUE2FV486PY0sZjlDkB/yp8Te96w1AurRGW6ulewRM7EGzECkFJ5jp9ukO5ikl+2BO8Pb7E45/f4WcAKF3KOXoF/zNr0CVNcituIt5KUyhUBSRzMzCOxJacenEheWdS9Y6fMVOml9tntVkvP6dL8P5Aj6MWO7lTQhg/RrZfcpU39SNu7wlVgnvWpOr root@host103\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"_9-将上面的秘钥放入git服务器中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-将上面的秘钥放入git服务器中"}},[s._v("#")]),s._v(" 9.将上面的秘钥放入Git服务器中")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 切回105机\n[root@host105 ~]# su - git\n[git@host105 ~]$ ls -al\ntotal 16\ndrwx------. 4 git  git  108 Dec  1 00:08 .\ndrwxr-xr-x. 4 root root  30 Nov 30 18:55 ..\n-rw-------. 1 git  git  216 Dec  1 00:08 .bash_history\n-rw-r--r--. 1 git  git   18 Aug  8 20:06 .bash_logout\n-rw-r--r--. 1 git  git  193 Aug  8 20:06 .bash_profile\n-rw-r--r--. 1 git  git  231 Aug  8 20:06 .bashrc\ndrwxrwxr-x. 3 git  git   21 Nov 30 19:07 repos\ndrwx------. 2 git  git   25 Nov 30 19:20 .ssh\n\n# 如果不存在 .ssh 请先创建\n[git@host105 ~]$ chmod 700 .ssh/\n\n# 创建文件authorized_keys，并把上一步的秘钥串复制粘贴其中\n[git@host105 ~]$ vi .ssh/authorized_keys\n\n# 修改这个文件的权限 \n[git@host105 ~]$ chmod 600 .ssh/authorized_keys \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"_10-验证免密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-验证免密"}},[s._v("#")]),s._v(" 10.验证免密")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 切回103的test2目录，并克隆app.git\n[root@host103 test2]# git clone git@192.168.163.105:/home/git/repos/app.git\nCloning into 'app'...\nremote: Counting objects: 3, done.\nremote: Total 3 (delta 0), reused 0 (delta 0)\nReceiving objects: 100% (3/3), done.\n# 可以看到本次不需要输入密码了\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);