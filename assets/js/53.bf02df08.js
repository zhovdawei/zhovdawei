(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{407:function(s,n,a){"use strict";a.r(n);var e=a(42),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes部署流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes部署流程"}},[s._v("#")]),s._v(" Kubernetes部署流程")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"总体流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总体流程"}},[s._v("#")]),s._v(" 总体流程")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/k8s/k8s5.png",alt:""}}),a("br")]),s._v(" "),a("h3",{attrs:{id:"镜像的层次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像的层次"}},[s._v("#")]),s._v(" 镜像的层次")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/k8s/k8s6.png",alt:""}}),a("br"),s._v(" "),a("strong",[s._v("基础环境层")]),s._v(" : 指的就是操作系统层面：centos,debian,ubuntu"),a("br"),s._v(" "),a("strong",[s._v("运行环境层")]),s._v(" : tomcat,jdk"),a("br"),s._v(" "),a("strong",[s._v("项目层")]),s._v(" : war包，jar包"),a("br"),s._v("\n可以理解为，对通用镜像的抽象。个性化的镜像，依赖通用镜像完成。")]),s._v(" "),a("h2",{attrs:{id:"步骤分解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤分解"}},[s._v("#")]),s._v(" 步骤分解")]),s._v(" "),a("h3",{attrs:{id:"前置准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置准备"}},[s._v("#")]),s._v(" 前置准备")]),s._v(" "),a("p",[s._v("1.准备应用需要的资源\n"),a("a",{attrs:{href:"https://pan.baidu.com/s/19ojnLONyMeToR1HrpvGJAw",target:"_blank",rel:"noopener noreferrer"}},[s._v("百度云下载"),a("OutboundLink")],1),s._v("\n2.准备一台mysql服务器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 我这里准备了192.168.163.111 作为mysql服务器\n# 创建一个test数据库，然后执行上面资源里面的db文件\nmysql> source /root/tables_ly_tomcat.sql\nQuery OK, 1 row affected, 1 warning (0.00 sec)\n\n# 创建test/admin321 账户\nmysql> create user 'test'@'192.168.163.111' identified by 'admin321';\nQuery OK, 0 rows affected (0.01 sec)\n\n# 授权\nmysql> grant all on test.* to 'test'@'%' identified by 'admin321';\nQuery OK, 0 rows affected (0.00 sec)\n\n# 去node节点验证，可以访问到这台机的mysql,需要安装mysql客户端\n$ mysql -h192.168.163.111 -utest -p\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"制作镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#制作镜像"}},[s._v("#")]),s._v(" 制作镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 上传资源压缩包，并解压tomcat-java-demo-master.zip\n# 需要安装 unzip zip 命令\n\n# 在解压目录中编译java工程代码\n[root@k8s-master tomcat-java-demo-master]# mvn clean package -Dmaven.test.skip=true\n[root@k8s-master tomcat-java-demo-master]# ll\ntotal 24\ndrwxr-xr-x 2 root root    34 Aug  5 13:59 db\n-rw-r--r-- 1 root root   148 Aug  5 13:59 Dockerfile\n-rw-r--r-- 1 root root 11357 Aug  5 13:59 LICENSE\n-rw-r--r-- 1 root root  1930 Aug  5 13:59 pom.xml\n-rw-r--r-- 1 root root   270 Aug  5 13:59 README.md\ndrwxr-xr-x 3 root root    18 Aug  5 13:59 src\ndrwxr-xr-x 7 root root   170 Dec  8 14:51 target\n\n# 解读Dockerfile\n[root@k8s-master tomcat-java-demo-master]# cat Dockerfile \n###################################################################\n# 依赖一个运行镜像tomcat,它是运行war包的容器\n# 当然在这个运行镜像内，依赖一个操作系统镜像，这就是镜像的依赖关系\nFROM lizhenliang/tomcat \n# 标记 镜像的作者\nLABEL maintainer www.ctnrs.com\n# 删除镜像中tomcat/webapps/目录中的文件\nRUN rm -rf /usr/local/tomcat/webapps/*\n# 上面mvn编译完，产生一个target目录，里面有一个war包，将它加入到镜像webapps/目录下\nADD target/*.war /usr/local/tomcat/webapps/ROOT.war \n###################################################################\n\n# 制作项目镜像\n# -t 标记tag\n# -f 指定Dockerfile 如果文件名为Dockerfile,则可以不指名\n# . 指上下文，即当前目录\n[root@k8s-master tomcat-java-demo-master]# docker build -t david0607/java-demo -f Dockerfile .\nSending build context to Docker daemon  44.08MB\nStep 1/4 : FROM lizhenliang/tomcat\nlatest: Pulling from lizhenliang/tomcat\na02a4930cb5d: Pull complete \n12ac6c660ca4: Pull complete \n675ab56ce773: Pull complete \nDigest: sha256:3bd83236a4b6cf4152d0384981ce9ed55063bc5fd5259d206bfdfdb877651db0\nStatus: Downloaded newer image for lizhenliang/tomcat:latest\n ---\x3e 143035d83fdc\nStep 2/4 : LABEL maintainer www.ctnrs.com\n ---\x3e Running in a3fa831ada66\nRemoving intermediate container a3fa831ada66\n ---\x3e e2099523a487\nStep 3/4 : RUN rm -rf /usr/local/tomcat/webapps/*\n ---\x3e Running in 9573d8429b7f\nRemoving intermediate container 9573d8429b7f\n ---\x3e d33bde4e8df0\nStep 4/4 : ADD target/*.war /usr/local/tomcat/webapps/ROOT.war\n ---\x3e e220e9b7c1d2\nSuccessfully built e220e9b7c1d2\nSuccessfully tagged david0607/java-demo:latest\n\n# 这里我们暂且用官方镜像仓库存放镜像，一般在公司是自建镜像仓库\n# 官方登录不用指明地址\n[root@k8s-master ~]# docker login\n\n# 推送镜像到官方仓库\n[root@k8s-master ~]# docker push david0607/java-demo\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br")])]),a("h3",{attrs:{id:"配置和运行pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置和运行pod"}},[s._v("#")]),s._v(" 配置和运行pod")]),s._v(" "),a("p",[s._v("这里是发布java-web应用属于无状态应用，所以选择deployment")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 生成一个标准的yaml\n$ kubectl create deployment java-demo --image=david0607/java-demo --dry-run -o yaml > deploy.yaml\n\n# 编辑yaml\n$ vi deploy.yaml\n########################################################\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: java-demo\n  name: java-demo\nspec:\n  # 副本数\n  replicas: 3\n  selector:\n    matchLabels:\n      app: java-demo\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app: java-demo\n    spec:\n      containers:\n      # 镜像仓库地址(docker hub 公共的)\n      - image: david0607/java-demo\n        name: java-demo\n########################################################\n\n# 运行pod,pod里面跑docker容器，根据我们配置的镜像地址\n# 对于k8s,最小运行单元是pod\n# 通过我们配置的yaml去起pod\n$ kubectl apply -f deploy.yaml\n\n# 查看pod,这里副本启动的速度跟你容器下载镜像的速度有关，还是自建仓库快\n[root@k8s-master ~]# kubectl get pods\nNAME                         READY   STATUS    RESTARTS   AGE\njava-demo-75899cf7b5-95clh   1/1     Running   0          1m\njava-demo-75899cf7b5-btrxb   1/1     Running   0          1m\njava-demo-75899cf7b5-w7jxt   1/1     Running   0          1m\nnginx-554b9c67f9-jnff8       1/1     Running   2          39h\n\n# 使用下面命令，查看某个pod的启动日志\n$ kubectl logs java-demo-75899cf7b5-95clh\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("h3",{attrs:{id:"暴露应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暴露应用"}},[s._v("#")]),s._v(" 暴露应用")]),s._v(" "),a("p",[s._v("service管理着pod的关联与访问")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 生成一个标准的service yaml文件\n# --port=80 service的端口，集群内部访问用\n# --target-port=8080 容器里面的跑的服务的端口，tomcat默认就是8080\n# --type=NodePort 会随机生成一个端口，供集群外部用户访问用，这个端口可以指定具体的。\n[root@k8s-master ~]# kubectl expose deployment java-demo --port=80 --target-port=8080 --type=NodePort -o yaml --dry-run > svc.yaml\n\n# 编辑service yaml文件\n$ vi svc.yaml\n###############################\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: java-demo\n  name: java-demo\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 8080\n  selector:\n    app: java-demo\n  type: NodePort\n###############################\n\n# 运行\n[root@k8s-master ~]# kubectl apply -f svc.yaml \n\n# 查看pod和svc\n[root@k8s-master ~]# kubectl get pods,svc\nNAME                             READY   STATUS    RESTARTS   AGE\npod/java-demo-75899cf7b5-95clh   1/1     Running   0          41m\npod/java-demo-75899cf7b5-btrxb   1/1     Running   0          41m\npod/java-demo-75899cf7b5-w7jxt   1/1     Running   0          41m\npod/nginx-554b9c67f9-jnff8       1/1     Running   2          39h\n\nNAME                 TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE\nservice/java-demo    NodePort    10.1.153.127   <none>        80:30157/TCP   63s\nservice/kubernetes   ClusterIP   10.1.0.1       <none>        443/TCP        41h\nservice/nginx        NodePort    10.1.138.213   <none>        80:30510/TCP   39h\n\n# svc打印中可以看到，对外暴露的端口为30157\n\n# 查看pod分布\n[root@k8s-master ~]# kubectl get pods -o wide\nNAME                         READY   STATUS    RESTARTS   AGE   IP           NODE        NOMINATED NODE   READINESS GATES\njava-demo-75899cf7b5-95clh   1/1     Running   0          47m   10.244.2.2   k8s-node2   <none>           <none>\njava-demo-75899cf7b5-btrxb   1/1     Running   0          47m   10.244.1.7   k8s-node1   <none>           <none>\njava-demo-75899cf7b5-w7jxt   1/1     Running   0          47m   10.244.2.3   k8s-node2   <none>           <none>\nnginx-554b9c67f9-jnff8       1/1     Running   2          40h   10.244.1.6   k8s-node1   <none>           <none>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])]),a("h3",{attrs:{id:"浏览器访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器访问"}},[s._v("#")]),s._v(" 浏览器访问")]),s._v(" "),a("p",[s._v("node节点ip+30157即可访问。\n"),a("img",{attrs:{src:"/images/k8s/k8s7.png",alt:""}}),a("br")])])}),[],!1,null,null,null);n.default=t.exports}}]);