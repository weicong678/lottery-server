(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5e97"],{"2z2j":function(t,e,a){"use strict";a.r(e);var i=a("P2sY"),r=a.n(i),n=a("xAVR"),o=a("rs3x"),l=a("X4fA"),s={name:"Category",data:function(){return{uploadPath:o.a,list:[],listLoading:!0,catL1:{},dataForm:{id:void 0,Name:"",keywords:"",level:"L1",pid:0,Descript:"",iconUrl:"",picUrl:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{Name:[{required:!0,message:"类目名不能为空",trigger:"blur"}],Descript:[{required:!0,message:"类目简介不能为空",trigger:"blur"}]}}},computed:{headers:function(){return{"X-Litemall-Admin-Token":Object(l.c)()}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(n.d)().then(function(e){t.list=e.data.Obj,t.listLoading=!1}).catch(function(){t.list=[],t.listLoading=!1})},getCatL1:function(){var t=this;Object(n.c)().then(function(e){t.catL1=e.data.data})},resetForm:function(){this.dataForm={id:void 0,Name:"",keywords:"",level:"L1",pid:0,Descript:"",iconUrl:"",picUrl:""}},onLevelChange:function(t){"L1"===t&&(this.dataForm.pid=0)},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},uploadIconUrl:function(t){this.dataForm.iconUrl=t.data.url},uploadPicUrl:function(t){this.dataForm.picUrl=t.data.url},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(n.a)(t.dataForm).then(function(e){t.getList(),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"创建成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.data.errmsg})})})},handleUpdate:function(t){var e=this;this.dataForm=r()({},t),this.dataForm.level="L1",this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(n.e)(t.dataForm).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.data.errmsg})})})},handleDelete:function(t){var e=this;Object(n.b)(t).then(function(t){e.getList(),e.$notify.success({title:"成功",message:"删除成功"})}).catch(function(t){e.$notify.error({title:"失败",message:t.data.errmsg})})}}},c=(a("sagj"),a("KHd+")),d=Object(c.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/category/create"],expression:"['POST /admin/category/create']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":"","row-key":"id"}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"类目名",prop:"Name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"100",label:"简介",prop:"Descript"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"级别",prop:"level"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"L1"===e.row.level?"info":"primary"}},[t._v(t._s("L1"===e.row.level?"二级类目":"一级类目"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"200","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"类目名称",prop:"Name"}},[a("el-input",{model:{value:t.dataForm.Name,callback:function(e){t.$set(t.dataForm,"Name",e)},expression:"dataForm.Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"级别",prop:"level"}},[a("el-select",{on:{change:t.onLevelChange},model:{value:t.dataForm.level,callback:function(e){t.$set(t.dataForm,"level",e)},expression:"dataForm.level"}},[a("el-option",{attrs:{label:"一级类目",value:"L1"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"类目简介",prop:"Descript"}},[a("el-input",{model:{value:t.dataForm.Descript,callback:function(e){t.$set(t.dataForm,"Descript",e)},expression:"dataForm.Descript"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1)],1)},[],!1,null,"568ea746",null);d.options.__file="category.vue";e.default=d.exports},"5JYq":function(t,e,a){},rs3x:function(t,e,a){"use strict";a.d(e,"a",function(){return i});a("t3Un");var i="http://210.76.124.66:88/api/v1/file/push"},sagj:function(t,e,a){"use strict";var i=a("5JYq");a.n(i).a},xAVR:function(t,e,a){"use strict";a.d(e,"d",function(){return r}),a.d(e,"c",function(){return n}),a.d(e,"a",function(){return o}),a.d(e,"e",function(){return l}),a.d(e,"b",function(){return s});var i=a("t3Un");function r(t){return Object(i.a)({url:"/api/v1/goodscategory",method:"get",params:{parentId:1}})}function n(){return Object(i.a)({url:"/category/l1",method:"get"})}function o(t){return t.ParentId=1,Object(i.a)({url:"/api/v1/goodscategory",method:"post",data:t})}function l(t){return t={id:t.Id,name:t.Name,descript:t.Descript},Object(i.a)({url:"/api/v1/goodscategory",method:"patch",params:t})}function s(t){return t={id:t.Id},Object(i.a)({url:"/api/v1/goodscategory",method:"delete",params:t})}}}]);