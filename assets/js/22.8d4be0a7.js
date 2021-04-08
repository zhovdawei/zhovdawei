(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{381:function(s,a,n){"use strict";n.r(a);var e=n(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"综合实战-elk-kafka分布式日志系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#综合实战-elk-kafka分布式日志系统"}},[s._v("#")]),s._v(" 综合实战-ELK+KAFKA分布式日志系统")]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),n("p",[s._v("1.准备zookeeper服务"),n("br"),s._v("\n2.准备kafka服务"),n("br"),s._v("\n3.准备elasticsearch服务"),n("br"),s._v("\n4.准备kibana服务"),n("br"),s._v("\n5.准备logstash服务"),n("br"),s._v("\n6.准备springboot项目"),n("br"),s._v(" "),n("br"),s._v("\n启动服务，确保服务正常运行，待命。")]),s._v(" "),n("h2",{attrs:{id:"springboot项目配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot项目配置"}},[s._v("#")]),s._v(" springboot项目配置")]),s._v(" "),n("p",[s._v("1.引入依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependency>\n    <groupId>org.springframework.kafka</groupId>\n    <artifactId>spring-kafka</artifactId>\n</dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("2.配置文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring:\n  kafka:\n    producer:\n      # 指定kafka服务地址\n      bootstrap-servers: 192.168.163.201:9092\n      key-serializer: org.apache.kafka.common.serialization.StringSerializer\n      value-serializer: org.apache.kafka.common.serialization.StringSerializer\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("3.controller类")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@RestController\npublic class KafkaController {\n\n    @Autowired\n    private KafkaTemplate<String,String> kafkaTemplate;\n\n    @RequestMapping(value = "/sendMsgToKafka")\n    public String sendMsgTepplate(String type){\n        for (int i = 0; i < 3; i++) {\n            if(type.equals("error")){\n                kafkaTemplate.send("user_consumer","dm","[error] hello,kafka---\x3e"+i);\n            }else if(type.equals("warning")){\n                kafkaTemplate.send("user_consumer","dm","[warning] hello,kafka---\x3e"+i);\n            }else {\n                kafkaTemplate.send("user_consumer","dm","[info] hello,kafka---\x3e"+i);\n            }\n\n        }\n        return "发送消息到Kafka完毕！";\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("4.把项目启动起来")]),s._v(" "),n("h2",{attrs:{id:"logstash启动文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#logstash启动文件"}},[s._v("#")]),s._v(" logstash启动文件")]),s._v(" "),n("p",[s._v("1.在logstash中创建文件：kafka-log.conf (文件名随意取)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('input{\n    kafka{\n        # 输入方指定kafka服务\n        bootstrap_servers => ["192.168.163.201:9092"]\n        group_id => "test-consumer-group"\n        auto_offset_reset => "latest"\n        consumer_threads => 5\n        decorate_events => true\n        # 指定kafka中的topic,注意和springboot中发送消息的topic一致\n        topics => ["user_consumer"]\n        type => "bhy"\n    }\n}\n\noutput{\n    elasticsearch{\n        # 输出方指定elasticsearch服务\n        hosts => ["192.168.163.201:9200"]\n        # 注意这里指es中的索引，后面在kibana中查询我们还会用到\n        index => "user_consumer-%{+YYYY.MM.dd}"\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("2.启动logstash")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@Host201 logstash-7.5.0]# bin/logstash -f kafka-log.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"使用kibana查询日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用kibana查询日志"}},[s._v("#")]),s._v(" 使用kibana查询日志")]),s._v(" "),n("p",[s._v("1.分别传入springboot-url?type=error/warning/info ，访问springboot项目。"),n("br"),s._v(" "),n("br"),s._v("\n2.首先使用Discover创建索引：user_* "),n("br"),s._v("\n(注意：上面logstash启动文件中定义索引的规则：user_consumer-%{+YYYY.MM.dd})"),n("br"),s._v(" "),n("br"),s._v("\n3.刷新kibana,可以看到日志读取。"),n("br"),s._v(" "),n("img",{attrs:{src:"/images/elk/elk-1.png",alt:""}}),n("br")]),s._v(" "),n("h2",{attrs:{id:"到此日志系统整合完毕"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#到此日志系统整合完毕"}},[s._v("#")]),s._v(" 到此日志系统整合完毕")])])}),[],!1,null,null,null);a.default=r.exports}}]);