(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-43b4"],{IdKY:function(t,e,a){"use strict";a.d(e,"b",function(){return r}),a.d(e,"d",function(){return o}),a.d(e,"e",function(){return n}),a.d(e,"a",function(){return s}),a.d(e,"c",function(){return l}),a.d(e,"f",function(){return d}),a.d(e,"g",function(){return m});var i=a("t3Un");function r(t){return Object(i.a)({url:"/api/v1/distributionconfig",method:"delete",params:t})}function o(t){return Object(i.a)({url:"/api/v1/distributionconfig",method:"put",data:t})}function n(t){return Object(i.a)({url:"/api/v1/distributionconfigs",method:"get",params:t})}function s(t){return Object(i.a)({url:"/api/v1/distributionconfig",method:"post",data:t})}function l(t){return Object(i.a)({url:"/api/v1/withdraw/state",method:"put",params:t})}function d(t){return Object(i.a)({url:"/api/v1/withdraws",method:"get",params:t})}function m(t){return Object(i.a)({url:"/api/v1/withdraws/cnt",method:"get",params:t})}},PHSh:function(t,e,a){},T62h:function(t,e,a){"use strict";var i=a("PHSh");a.n(i).a},mp5G:function(t,e,a){"use strict";a.r(e);var i=a("IdKY"),r=a("X4fA"),o={name:"Category",data:function(){return{list:[],listLoading:!0,agreement:"",notice:"",dataForm:{LevelName:"",FirstCommission:0,NormalCommission:0,UpgradeMin:0,UpgradeMax:0,Level:0,Id:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{LevelName:[{required:!0,message:"名称不能为空",trigger:"blur"}],Level:[{required:!0,message:"不能为空",trigger:"blur"}],FirstCommission:[{required:!0,message:"不能为空",trigger:"blur"}],NormalCommission:[{required:!0,message:"不能为空",trigger:"blur"}],UpgradeMin:[{required:!0,message:"不能为空",trigger:"blur"}],UpgradeMax:[{required:!0,message:"不能为空",trigger:"blur"}]}}},computed:{headers:function(){return{"X-Litemall-Admin-Token":Object(r.c)()}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(i.e)().then(function(e){t.list=e.data.Obj,t.listLoading=!1}).catch(function(){t.list=[],t.listLoading=!1})},resetForm:function(){this.dataForm={LevelName:"",FirstCommission:"",NormalCommission:"",UpgradeMin:"",UpgradeMax:"",Level:"",Id:""}},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var a=t.dataForm;a.UpgradeMin=100*t.dataForm.UpgradeMin,a.UpgradeMax=100*t.dataForm.UpgradeMax,Object(i.a)(a).then(function(e){t.getList(),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"创建成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.data.errmsg})})}})},handleUpdate:function(t){this.dataForm.Id=t.Id,this.dataForm.LevelName=t.LevelName,this.dataForm.Level=t.Level,this.dataForm.FirstCommission=t.FirstCommission,this.dataForm.NormalCommission=t.NormalCommission,this.dataForm.UpgradeMin=t.UpgradeMin/100,this.dataForm.UpgradeMax=t.UpgradeMax/100,this.dialogStatus="update",this.dialogFormVisible=!0},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var a=t.dataForm;a.UpgradeMin=100*t.dataForm.UpgradeMin,a.UpgradeMax=100*t.dataForm.UpgradeMax,Object(i.d)(a).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.data.errmsg})})}})},handleDelete:function(t){var e=this;Object(i.b)({id:t.Id}).then(function(t){e.getList(),e.$notify.success({title:"成功",message:"删除成功"})}).catch(function(t){e.$notify.error({title:"失败",message:t.data.errmsg})})}}},n=(a("T62h"),a("KHd+")),s=Object(n.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/category/create"],expression:"['POST /admin/category/create']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":"","row-key":"id"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"等级名称",prop:"LevelName"}}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"100",label:"首次佣金比例",prop:"FirstCommission"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.FirstCommission)+"%")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"100",label:"终身佣金比例",prop:"NormalCommission"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.NormalCommission)+"%")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"100",label:"升级条件最小",prop:"UpgradeMin"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("￥"+t._s(e.row.UpgradeMin/100))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"100",label:"升级条件最大",prop:"UpgradeMax"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("￥"+t._s(e.row.UpgradeMax/100))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"200","class-name":"small-padding fixed-width",prop:"UpgradeMax"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:t.dataForm.LevelName,callback:function(e){t.$set(t.dataForm,"LevelName",e)},expression:"dataForm.LevelName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"等级"}},[a("el-input",{model:{value:t.dataForm.Level,callback:function(e){t.$set(t.dataForm,"Level",e)},expression:"dataForm.Level"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"首次佣金比例"}},[a("el-input",{model:{value:t.dataForm.FirstCommission,callback:function(e){t.$set(t.dataForm,"FirstCommission",e)},expression:"dataForm.FirstCommission"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"终身佣金比例"}},[a("el-input",{model:{value:t.dataForm.NormalCommission,callback:function(e){t.$set(t.dataForm,"NormalCommission",e)},expression:"dataForm.NormalCommission"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"升级条件最小"}},[a("el-input",{model:{value:t.dataForm.UpgradeMin,callback:function(e){t.$set(t.dataForm,"UpgradeMin",e)},expression:"dataForm.UpgradeMin"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"升级条件最大"}},[a("el-input",{model:{value:t.dataForm.UpgradeMax,callback:function(e){t.$set(t.dataForm,"UpgradeMax",e)},expression:"dataForm.UpgradeMax"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1)],1)},[],!1,null,"77240700",null);s.options.__file="category.vue";e.default=s.exports}}]);