(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5506"],{"7BsA":function(t,e,a){t.exports=function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(a);)a=a.replace(n,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,n="webkit moz ms o".split(" "),r=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,l=0;l<n.length&&(!r||!s);l++)o=n[l],e.requestAnimationFrame=r=r||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];r&&s||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),n=window.setTimeout(function(){t(e+a)},a);return i=e+a,n},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,i){var n,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(n=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),i){var l=Object.create(o.computed||null);Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}}),o.computed=l}return{esModule:n,exports:r,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},IHEx:function(t,e,a){},Mz3J:function(t,e,a){"use strict";Math.easeInOutQuad=function(t,e,a,i){return(t/=i/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e};var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function n(t,e,a){var n=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,r=t-n,s=0;e=void 0===e?500:e;!function t(){s+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(s,n,r,e)),s<e?i(t):a&&"function"==typeof a&&a()}()}var r={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&n(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&n(0,800)}}},s=(a("PelQ"),a("KHd+")),o=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"7d9f0a7c",null);o.options.__file="index.vue";e.a=o.exports},PelQ:function(t,e,a){"use strict";var i=a("X9ZH");a.n(i).a},X9Rj:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"c",function(){return r}),a.d(e,"d",function(){return s}),a.d(e,"a",function(){return o});var i=a("t3Un");function n(t){return Object(i.a)({url:"/api/v1/distributionstatistics",method:"get",params:t})}function r(t){return Object(i.a)({url:"/api/v1/distributiondatestatistics",method:"get",params:t})}function s(t){return Object(i.a)({url:"/api/v1/distributiondatestatistics/cnt",method:"get",params:t})}function o(t){return Object(i.a)({url:"/api/v1/distributionstatistics/cnt",method:"get",params:t})}},X9ZH:function(t,e,a){},qsDG:function(t,e,a){"use strict";a.r(e);var i=a("X9Rj"),n=a("Mz3J"),r=a("7BsA"),s=a.n(r),o={name:"User",components:{Pagination:n.a,CountTo:s.a},data:function(){return{date:1,userTotal:0,goodsTotal:0,productTotal:0,orderTotal:0,list:[],total:0,listLoading:!0,listQuery:{page:1,row:20,sta:!0,startTime:void 0,endTime:void 0},downloadLoading:!1,genderDic:["未知","男","女"],levelDic:["普通用户","VIP用户","高级VIP用户"],statusDic:["可用","禁用","注销"],dashboardQuery:{date:"1"}}},created:function(){this.dashboard("0")},methods:{getList:function(){var t=this;this.listLoading=!0,Object(i.c)(this.listQuery).then(function(e){t.list=e.data.Obj.ParamDistributions,t.userTotal=e.data.Obj.ParamAllStatistics.NewDistribution,t.goodsTotal=e.data.Obj.ParamAllStatistics.NewDistribution,t.productTotal=e.data.Obj.ParamAllStatistics.TransactionAmount,t.orderTotal=e.data.Obj.ParamAllStatistics.OrderNum,t.getTotal(),t.listLoading=!1}).catch(function(){t.list=[],t.total=0,t.listLoading=!1})},getTotal:function(){var t=this;Object(i.d)({startTime:this.listQuery.startTime,endTime:this.listQuery.endTime}).then(function(e){t.total=e.data.Obj})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-0d49"),a.e("chunk-5556")]).then(a.bind(null,"S/jZ")).then(function(e){e.export_json_to_excel2(["用户名","手机号码","性别","生日","状态"],t.list,["username","mobile","gender","birthday","status"],"用户信息"),t.downloadLoading=!1})},fun_date:function(t){var e=(new Date).getTime(),a=0;"0"===t&&(a=0),"1"===t&&(a=864e5),"7"===t&&(a=6048e5),"30"===t&&(a=2592e6);var i=new Date(e-a),n=i.getFullYear(),r=i.getMonth()+1,s=i.getDate();return n+"-"+this.add0(r)+"-"+this.add0(s)},add0:function(t){return t<10?"0"+t:t},dashboard:function(t){"chose"===t&&null===this.listQuery.startTime?this.listQuery.startTime="1970-01-01":"0"!==t&&"1"!==t&&"7"!==t&&"30"!==t||(this.listQuery.startTime=this.fun_date(t)),this.listQuery.endTime=this.fun_date("0"),this.getList()}}},l=(a("rvK4"),a("KHd+")),u=Object(l.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{ref:"form",attrs:{model:t.listQuery}},[a("el-form-item",[a("el-col",{attrs:{span:10}},[a("el-button",{staticClass:"filter-item",attrs:{type:0==t.dashboardQuery.date?"primary":""},on:{click:function(e){t.dashboard("0")}}},[t._v("今日")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:1==t.dashboardQuery.date?"primary":""},on:{click:function(e){t.dashboard("1")}}},[t._v("昨日")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:7==t.dashboardQuery.date?"primary":""},on:{click:function(e){t.dashboard("7")}}},[t._v("最近七日")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:30==t.dashboardQuery.date?"primary":""},on:{click:function(e){t.dashboard("30")}}},[t._v("最近30日")])],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"开始日期"},model:{value:t.listQuery.startTime,callback:function(e){t.$set(t.listQuery,"startTime",e)},expression:"listQuery.startTime"}})],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"结束日期"},model:{value:t.listQuery.endTime,callback:function(e){t.$set(t.listQuery,"endTime",e)},expression:"listQuery.endTime"}})],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){t.dashboard("chose")}}},[t._v("查找")])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dashboard-editor-container"},[a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("newVisitis")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("新增分销商")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.userTotal,duration:2600}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("messages")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-message"},[a("svg-icon",{attrs:{"icon-class":"message","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("付款订单数")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.goodsTotal,duration:3e3}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("purchases")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("svg-icon",{attrs:{"icon-class":"message","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("商品交易额")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.productTotal,duration:3200}})],1)])]),t._v(" "),t._e()],1)],1),t._v(" "),a("h4",{staticClass:"table-title"},[t._v("结算记录")]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",width:"100px",label:"序号",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"姓名",prop:"Name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"付款订单数",prop:"OrderNum"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品交易额",prop:"Amount"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"全部佣金",prop:"TransactionAmount"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"已结算佣金",prop:"WithdrawAmount"}})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},[],!1,null,"2f70e34c",null);u.options.__file="performance.vue";e.default=u.exports},rvK4:function(t,e,a){"use strict";var i=a("IHEx");a.n(i).a}}]);