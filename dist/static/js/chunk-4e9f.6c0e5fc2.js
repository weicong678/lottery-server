(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4e9f"],{"0n0/":function(e,t,a){"use strict";t.a=[{id:"1",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄",value:"等级1"},{id:"2",creatTime:"2016-05-02",name:"王小虎2",point:"1234",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"3",creatTime:"2016-05-02",name:"王小虎3",point:"1234",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"4",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"1235",address:"上海市普陀区金沙江路 1518 弄"},{id:"5",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"6",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"7",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"8",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"9",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"10",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"11",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"12",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"13",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"14",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"15",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"16",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"17",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"18",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"19",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"20",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"21",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"}]},Mz3J:function(e,t,a){"use strict";Math.easeInOutQuad=function(e,t,a,i){return(e/=i/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t};var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function n(e,t,a){var n=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,l=e-n,o=0;t=void 0===t?500:t;!function e(){o+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(o,n,l,t)),o<t?i(e):a&&"function"==typeof a&&a()}()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&n(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&n(0,800)}}},o=(a("PelQ"),a("KHd+")),s=Object(o.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},[],!1,null,"7d9f0a7c",null);s.options.__file="index.vue";t.a=s.exports},NaJf:function(e,t,a){"use strict";a.r(t);var i=a("wk8/"),n=a("Mz3J"),l=a("0n0/"),o={name:"User",components:{Pagination:n.a},data:function(){return{labelPosition:"left",list:null,radio1:"",radio2:"",activeName:"one",activeNames:["1"],listQuery:{page:1,limit:20,region:"",username:void 0,sort:"add_time",order:"desc",data1:"",data2:""},multipleSelection:[],formLabelAlign:{name:"",type:"",resource:"",resource2:"",text:"",text2:"",text3:""},downloadLoading:!1,total:10}},created:function(){this.list=l.a},methods:{getList:function(){var e=this;this.listLoading=!0,Object(i.a)(this.listQuery).then(function(t){e.list=t.data.data.items,e.total=t.data.data.total,e.listLoading=!1}).catch(function(){e.list=[],e.total=0,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},handleClick:function(e,t){console.log(e,t)},handleChange:function(e){console.log(e)},onSubmit:function(){console.log(this.formLabelAlign)},onReast:function(){this.formLabelAlign={name:"",type:"",resource:"",resource2:"",text:"",text2:"",text3:""}}}},s=a("KHd+"),r=Object(s.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"one"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"积分自定义",name:"1"}},[a("el-form",{attrs:{"label-position":e.labelPosition,model:e.formLabelAlign,"label-width":"100px"}},[a("el-form-item",{staticStyle:{"margin-left":"2em"},attrs:{label:"自定义名称"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:e.formLabelAlign.name,callback:function(t){e.$set(e.formLabelAlign,"name",t)},expression:"formLabelAlign.name"}})],1)],1)],1),e._v(" "),a("el-collapse-item",{attrs:{title:"积分奖励",name:"2"}},[a("el-form",{attrs:{"label-position":e.labelPosition}},[a("el-form-item",{attrs:{label:"消费获得积分"}}),e._v(" "),a("el-form-item",[a("el-radio-group",{model:{value:e.formLabelAlign.resource,callback:function(t){e.$set(e.formLabelAlign,"resource",t)},expression:"formLabelAlign.resource"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("\n                    按订单总价获得积分，消费￥1.00获得\n                    "),a("el-input",{staticStyle:{width:"80px"},model:{value:e.formLabelAlign.text,callback:function(t){e.$set(e.formLabelAlign,"text",t)},expression:"formLabelAlign.text"}}),e._v("积分\n                  ")],1),e._v(" "),a("el-radio",{attrs:{label:"2"}},[e._v("产品单独设置积分")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"登录获得积分"}}),e._v(" "),a("el-form-item",[e._v("\n                登录一次（同一天不累计）\n                "),a("el-input",{staticStyle:{width:"80px"},model:{value:e.formLabelAlign.text2,callback:function(t){e.$set(e.formLabelAlign,"text2",t)},expression:"formLabelAlign.text2"}}),e._v("积分\n              ")],1)],1)],1),e._v(" "),a("el-collapse-item",{attrs:{title:"积分消耗",name:"3"}},[a("el-form",{attrs:{"label-position":e.labelPosition}},[a("el-form-item",{attrs:{label:"使用积分抵消消费金"}}),e._v(" "),a("el-form-item",[e._v("\n                抵消一元，需要\n                "),a("el-input",{staticStyle:{width:"80px"},model:{value:e.formLabelAlign.text3,callback:function(t){e.$set(e.formLabelAlign,"text3",t)},expression:"formLabelAlign.text3"}}),e._v("积分\n              ")],1)],1)],1)],1),e._v(" "),a("el-form",{staticStyle:{position:"relative",bottom:"0px",left:"30%","margin-top":"100px"},attrs:{model:e.formLabelAlign}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:e.onReast}},[e._v("取消")])],1)],1)]}}])},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-tickets"}),e._v(" 积分规则")])]),e._v(" "),a("el-tab-pane",{scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"filter-container"},[a("el-form",{ref:"listQuery",attrs:{model:e.listQuery}},[a("el-form-item",[a("el-col",{attrs:{span:4}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入姓名"},model:{value:e.listQuery.username,callback:function(t){e.$set(e.listQuery,"username",t)},expression:"listQuery.username"}})],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择状态"},model:{value:e.listQuery.region,callback:function(t){e.$set(e.listQuery,"region",t)},expression:"listQuery.region"}},[a("el-option",{attrs:{label:"全部",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"未处理",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"已打款",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"已拒绝",value:"beijing"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-date-picker",{attrs:{type:"date",placeholder:"开始日期"},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}})],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-date-picker",{attrs:{type:"date",placeholder:"结束时间"},model:{value:e.end,callback:function(t){e.end=t},expression:"end"}})],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查找")])],1)],1)],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",attrs:{data:e.list,"tooltip-effect":"dark",border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"头像",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:""}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"昵称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"收入/支出"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"时间"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.handleEdit(t.$index,e.tableData)}}},[e._v("\n                详细\n              ")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){e.$set(e.listQuery,"page",t)},"update:limit":function(t){e.$set(e.listQuery,"limit",t)},pagination:e.getList}})]}}])},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-date"}),e._v(" 积分管理")])])],1)],1)},[],!1,null,null,null);r.options.__file="points.vue";t.default=r.exports},PelQ:function(e,t,a){"use strict";var i=a("X9ZH");a.n(i).a},X9ZH:function(e,t,a){},"wk8/":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var i=a("t3Un");function n(e){return Object(i.a)({url:"/user/list",method:"get",params:e})}}}]);