(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-06ea"],{"1h5+":function(t,e,a){"use strict";a.r(e);var n=a("t3Un");function i(t){return Object(n.a)({url:"/api/v1/orders/info",method:"get",params:t})}var l=a("Mz3J"),s=a("Tzl8"),r=a.n(s),o={name:"User",props:{listdata:{type:Array,default:function(){return[]}},listLoading:{type:Boolean,default:function(){return!1}}},data:function(){return{status:["未结算","已结算","已取消","已发货","已签收","拒绝签收","已评论","超时未结算"],dialogTableVisible:!1,multipleSelection:[],listItem:{}}},watch:{listdata:function(t){return this.listdata=t,this.listdata}},created:function(){},methods:{format:r.a,handleEdit:function(t){var e=this;i({order:t}).then(function(t){e.$notify.success({title:"成功",message:"交易成功"}),e.$emit("getchilid")}).catch(function(t){e.$notify.error({title:"失败",message:t.data.errmsg})})},handleDel:function(t){var e=this;(function(t){return Object(n.a)({url:"/api/v1/orderinfo/del",method:"delete",params:t})})({order:t}).then(function(t){e.$notify.success({title:"成功",message:"删除成功"}),e.$parent.getList()}).catch(function(t){e.$notify.error({title:"失败",message:t.data.errmsg})})},handleOpen:function(t,e){var a=this;this.dialogTableVisible=!0,i({order:t}).then(function(t){a.listItem=[],a.listItem=t.data.Obj,console.log(a.listItem)}).catch(function(t){a.$notify.error({title:"失败",message:t.data.errmsg})})},handleOver:function(t){var e=this;(function(t){return Object(n.a)({url:"/api/v1/orderinfo/shipped",method:"put",params:t})})({order:t}).then(function(t){e.$notify.success({title:"成功",message:"发货成功"}),e.$emit("getchilid")}).catch(function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}),this.dialogTableVisible=!0},handleSelectionChange:function(t){this.multipleSelection=t}}},u=(a("Hqu7"),a("KHd+")),c=Object(u.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleSelection",attrs:{data:t.listdata,"tooltip-effect":"dark",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"OrderDetailInfoList[0].GoodsName",label:"产品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Price",align:"center",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("￥"+t._s(e.row.Price/100))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"Buyer",align:"center",label:"买家"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Actual",align:"center",label:"实付金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("￥"+t._s(e.row.Actual/100))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"Status",align:"center",label:"订单状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.status[e.row.Status]))]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",align:"center",label:"操作",width:"300",prop:"Status"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},nativeOn:{click:function(a){a.preventDefault(),t.handleOpen(e.row.OrderCode,e.row)}}},[t._v("详情")]),t._v(" "),1===e.row.Status?a("el-button",{attrs:{type:"primary",size:"mini"},nativeOn:{click:function(a){a.preventDefault(),t.handleOver(e.row.OrderCode)}}},[t._v("确认发货")]):t._e()]}}])})],1),t._v(" "),t.listItem.OrderDetailInfoList?a("el-dialog",{attrs:{visible:t.dialogTableVisible,title:"订单详情"},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-row",{staticClass:"el-row_blod"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-dark"},[t._v("买家信息")])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"grid-content bg-purple-dark"},[t._v("买家姓名:"+t._s(t.listItem.Buyer))])])],1),t._v(" "),a("el-row",[a("el-col",[a("span",{staticClass:"grid-content bg-purple"},[t._v("联系电话："+t._s(t.listItem.SellerPhone))])])],1),t._v(" "),a("el-row",[a("el-col",[a("span",{staticClass:"grid-content bg-purple"},[t._v("收货地址: "+t._s(t.listItem.Address))])])],1),t._v(" "),a("el-row",[a("el-col",[a("span",{staticClass:"grid-content bg-purple"},[t._v("下单时间："+t._s(t.format(t.listItem.CreateTime)))])])],1),t._v(" "),a("el-row",{staticClass:"el-row_blod"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-dark"},[t._v("产品信息")])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"grid-content bg-purple-dark"},[t._v("订单编号："+t._s(t.listItem.OrderCode))])])],1),t._v(" "),a("el-row",[a("el-col",[a("span",{staticClass:"grid-content bg-purple"},[t._v("产品名称："+t._s(t.listItem.OrderDetailInfoList[0].GoodsName))])])],1),t._v(" "),a("el-row",[a("el-col",[a("span",{staticClass:"grid-content bg-purple"},[t._v("单价："+t._s(t.listItem.OrderDetailInfoList[0].UnitPrice/100))])])],1),t._v(" "),a("el-row",[a("el-col",[a("span",{staticClass:"grid-content bg-purple"},[t._v("数量："+t._s(t.listItem.OrderDetailInfoList[0].Count))])])],1),t._v(" "),a("el-row",[a("el-col",[a("span",{staticClass:"grid-content bg-purple"},[t._v("实付金额："+t._s(t.listItem.Actual/100))])])],1),t._v(" "),a("el-row",[a("el-col",[a("span",{staticClass:"grid-content bg-purple"},[t._v("订单状态："+t._s(t.status[t.listItem.Status]))])])],1)],1):t._e()],1)},[],!1,null,"61333566",null);c.options.__file="index.vue";var d=c.exports,p={name:"User",type:"0",components:{Pagination:l.a,OrderList:d},data:function(){return{labelPosition:"left",list:null,listQuery:{accountId:1,page:1,row:20,status:-1,filter:""},multipleSelection:[],total:0,activeName:"-1",listloading:!1}},created:function(){this.getList()},methods:{format:r.a,getList:function(){var t=this;this.listloading=!0,function(t){return Object(n.a)({url:"/api/v1/orders/staff",method:"get",params:t})}(this.listQuery).then(function(e){console.log(e),t.list=e.data.Obj,t.listloading=!1,function(t){return Object(n.a)({url:"/api/v1/orders/count/staff",method:"get",params:t})}({accountId:1,status:t.listQuery.status}).then(function(e){t.total=e.data.Obj}).catch(function(e){t.total=0})}).catch(function(){t.listloading=!1,t.list=[],t.total=0})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleClick:function(t,e){console.log(t.index),"1"===t.index?this.listQuery.status=0:"2"===t.index?this.listQuery.status=1:"3"===t.index?this.listQuery.status=3:"0"===t.index?this.listQuery.status=-1:"4"===t.index&&(this.listQuery.status=4),this.getList()}}},f=Object(u.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{ref:"listQuery",attrs:{model:t.listQuery}},[a("el-form-item",[a("el-col",{attrs:{span:4}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入订单编号"},model:{value:t.listQuery.filter,callback:function(e){t.$set(t.listQuery,"filter",e)},expression:"listQuery.filter"}})],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")])],1)],1)],1)],1),t._v(" "),a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"-1"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" 全部订单")])]),t._v(" "),a("el-tab-pane",{attrs:{name:"0"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" 待付款")])]),t._v(" "),a("el-tab-pane",{attrs:{name:"1"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" 待发货")])]),t._v(" "),a("el-tab-pane",{attrs:{name:"2"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" 已发货")])]),t._v(" "),a("el-tab-pane",{attrs:{name:"3"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" 交易完成")])])],1),t._v(" "),a("OrderList",{attrs:{listdata:t.list,"list-loading":t.listloading},on:{getchilid:t.getList}}),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.row},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"row",e)},pagination:t.getList}})],1)},[],!1,null,null,null);f.options.__file="manage.vue";e.default=f.exports},EFTt:function(t,e,a){},Hqu7:function(t,e,a){"use strict";var n=a("EFTt");a.n(n).a},Mz3J:function(t,e,a){"use strict";Math.easeInOutQuad=function(t,e,a,n){return(t/=n/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e};var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function i(t,e,a){var i=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,l=t-i,s=0;e=void 0===e?500:e;!function t(){s+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(s,i,l,e)),s<e?n(t):a&&"function"==typeof a&&a()}()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&i(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&i(0,800)}}},s=(a("PelQ"),a("KHd+")),r=Object(s.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"7d9f0a7c",null);r.options.__file="index.vue";e.a=r.exports},PelQ:function(t,e,a){"use strict";var n=a("X9ZH");a.n(n).a},Tzl8:function(t,e){function a(t){return(t=t.toString())[1]?t:"0"+t}t.exports=function(t){var e=new Date(t),n=e.getFullYear(),i=e.getMonth()+1,l=e.getDate(),s=e.getHours(),r=e.getMinutes(),o=e.getSeconds();return[n,i,l].map(a).join("-")+" "+[s,r,o].map(a).join(":")}},X9ZH:function(t,e,a){}}]);