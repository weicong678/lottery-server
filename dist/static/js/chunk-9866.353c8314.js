(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9866"],{"+wQy":function(t,e,a){"use strict";a.d(e,"e",function(){return n}),a.d(e,"f",function(){return o}),a.d(e,"a",function(){return s}),a.d(e,"g",function(){return r}),a.d(e,"c",function(){return l}),a.d(e,"b",function(){return d}),a.d(e,"h",function(){return c}),a.d(e,"d",function(){return m});var i=a("t3Un");function n(t){return Object(i.a)({url:"/api/v1/goodsspec/tree",method:"get",params:t})}function o(t){return Object(i.a)({url:"/api/v1/goodsspec/tree",method:"get",params:t})}function s(t){return t.SpecType=1,t.MerchantId=1,Object(i.a)({url:"/api/v1/goodsspec",method:"post",data:t})}function r(t){return t={id:t.id,name:t.Name},Object(i.a)({url:"/api/v1/goodsspec",method:"patch",params:t})}function l(t){return t={id:t.Id},Object(i.a)({url:"/api/v1/goodsspec",method:"delete",params:t})}function d(t){return Object(i.a)({url:"/api/v1/goodsspecoption",method:"post",data:t})}function c(t){return t={id:t.id,value:t.Value},Object(i.a)({url:"/api/v1/goodsspecoption",method:"patch",params:t})}function m(t){return t={id:t.Id},Object(i.a)({url:"/api/v1/goodsspecoption",method:"delete",params:t})}},"5/6r":function(t,e,a){},X6Ff:function(t,e,a){"use strict";var i=a("5/6r");a.n(i).a},XJTn:function(t,e,a){"use strict";a.r(e);var i=a("P2sY"),n=a.n(i),o=a("+wQy"),s=a("rs3x"),r=a("X4fA"),l=[{id:"1",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄",value:"等级1"},{id:"2",creatTime:"2016-05-02",name:"王小虎2",point:"1234",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"3",creatTime:"2016-05-02",name:"王小虎3",point:"1234",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"4",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"1235",address:"上海市普陀区金沙江路 1518 弄"},{id:"5",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"6",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"7",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"8",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"9",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"10",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"11",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"12",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"13",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"14",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"15",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"16",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"17",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"18",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"19",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"20",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"},{id:"21",creatTime:"2016-05-02",name:"王小虎",point:"123",commission:"123",address:"上海市普陀区金沙江路 1518 弄"}],d={name:"Category",data:function(){return{uploadPath:s.a,list:[1],listLoading:!0,managentShow:!1,dialogAddval:!1,catL1:[],value2:!0,dataForm:{id:void 0,Name:"",desc:""},dataFormVal:{GoodsSpecId:void 0,Value:""},dialogFormVisible:!1,dialogFormVisibleVal:!1,dialogStatus:"",dialogStatusVal:"",textMap:{update:"编辑",create:"创建"},rules:{Name:[{required:!0,message:"规格不能为空",trigger:"blur"}]},rulesVal:{Value:[{required:!0,message:"规格值不能为空",trigger:"blur"}]}}},computed:{headers:function(){return{"X-Litemall-Admin-Token":Object(r.c)()}}},created:function(){this.list=l,this.listLoading=!1,this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(o.e)({merchantId:1,specType:1}).then(function(e){t.list=e.data.Obj,t.listLoading=!1}).catch(function(){t.list=[],t.listLoading=!1})},resetForm:function(){this.dataForm={id:void 0,Name:"",desc:""}},resetFormVal:function(){this.dataFormVal={Value:"",GoodsSpecId:this.dataFormVal.GoodsSpecId}},onLevelChange:function(t){"L1"===t&&(this.dataForm.pid=0)},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},handleCreateVal:function(){var t=this;this.resetFormVal(),this.dialogStatusVal="create",this.dialogFormVisibleVal=!0,this.$nextTick(function(){t.$refs.dataFormVal.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(o.a)(t.dataForm).then(function(e){t.getList(),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"创建成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.data.errmsg})})})},createDataVal:function(){var t=this;this.$refs.dataFormVal.validate(function(e){e&&Object(o.b)(t.dataFormVal).then(function(e){t.getList(),t.dialogFormVisibleVal=!1,t.managentShow=!1,t.$notify.success({title:"成功",message:"创建成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.data.errmsg})})})},handleUpdate:function(t){var e=this;this.dataForm=n()({},t),this.dataForm.id=t.Id,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleUpdateVal:function(t){var e=this;this.dataFormVal.Value=t.Value,this.dataFormVal.id=t.Id,this.dialogStatus="update",this.dialogFormVisibleVal=!0,this.$nextTick(function(){e.$refs.dataFormVal.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(o.g)(t.dataForm).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.data.errmsg})})})},updateDataVal:function(){var t=this;console.log(this.dataFormVal),this.$refs.dataFormVal.validate(function(e){e&&Object(o.h)(t.dataFormVal).then(function(){t.getList(),t.dialogFormVisibleVal=!1,t.managentShow=!1,t.$notify.success({title:"成功",message:"更新成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.data.errmsg})})})},handleDelete:function(t){var e=this;Object(o.c)(t).then(function(t){e.getList(),e.$notify.success({title:"成功",message:"删除成功"})}).catch(function(t){e.$notify.error({title:"失败",message:t.data.errmsg})})},handleDeleteVal:function(t){var e=this;Object(o.d)(t).then(function(t){e.getList(),e.$notify.success({title:"成功",message:"删除成功"}),e.managentShow=!1}).catch(function(t){e.$notify.error({title:"失败",message:t.data.errmsg})})},handleCreatDialog:function(t){this.catL1=t.SpecOptionList,this.dataFormVal.GoodsSpecId=t.Id,this.managentShow=!0}}},c=(a("X6Ff"),a("KHd+")),m=Object(c.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("添加规格")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":"","row-key":"id"}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品规格",prop:"Name",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"规格选项",prop:"SpecOptionList"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.SpecOptionList,function(e,i){return a("el-tag",{key:i,staticClass:"Spec-tag"},[t._v("\n          "+t._s(e.Value)+"\n        ")])})}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"300","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleCreatDialog(e.row)}}},[t._v("管理值")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogFormVisible,title:"规格名称"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"规格名称",prop:"Name"}},[a("el-input",{model:{value:t.dataForm.Name,callback:function(e){t.$set(t.dataForm,"Name",e)},expression:"dataForm.Name"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogFormVisibleVal,title:"规格值"},on:{"update:visible":function(e){t.dialogFormVisibleVal=e}}},[a("el-form",{ref:"dataFormVal",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rulesVal,model:t.dataFormVal,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"规格值",prop:"Value"}},[a("el-input",{model:{value:t.dataFormVal.Value,callback:function(e){t.$set(t.dataFormVal,"Value",e)},expression:"dataFormVal.Value"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisibleVal=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatusVal?a("el-button",{attrs:{type:"primary"},on:{click:t.createDataVal}},[t._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateDataVal}},[t._v("确定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"管理值",visible:t.managentShow},on:{"update:visible":function(e){t.managentShow=e}}},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleCreateVal}},[t._v("添加值")])],1),t._v(" "),a("el-table",{attrs:{data:t.catL1,"max-height":"450",border:"",fit:"","highlight-current-row":"","row-key":"id"}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"值",prop:"Value"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"200","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdateVal(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleDeleteVal(e.row)}}},[t._v("删除")])]}}])})],1)],1)],1)},[],!1,null,"4e3cb659",null);m.options.__file="parameter.vue";e.default=m.exports},rs3x:function(t,e,a){"use strict";a.d(e,"a",function(){return i});a("t3Un");var i="http://210.76.124.66:88/api/v1/file/push"}}]);