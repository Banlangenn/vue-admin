(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["managePermit"],{"2b39":function(e,t,n){},"4c0f":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"permission"},[n("div",{staticClass:"block"},[n("div",{staticClass:"treeHeader"},[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(t){e.append("d",{id:0})}}},[e._v("添加Root节点")]),n("el-popover",{attrs:{placement:"bottom",width:"400",trigger:"hover",content:"component：因为vue-router，嵌套规则限制，component只有root和尾部节点有用,中间并没有什么卵用,可以不填"}},[n("el-button",{attrs:{slot:"reference",size:"mini",type:"primary"},slot:"reference"},[e._v("一些必要的描述")])],1)],1),n("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),n("div",{staticClass:"custom-tree-node "},[n("el-tree",{ref:"tree",attrs:{data:e.data5,"node-key":"id",props:e.defaultProps,"expand-on-click-node":!1,"filter-node-method":e.filterNode,accordion:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,o=t.data;return n("span",{staticClass:"custom-tree-node"},[n("span",[e._v(e._s(i.label))]),n("span",{staticClass:"edit"},[n("el-button",{attrs:{type:"text",size:"mini "},on:{click:function(){e.append(i,o)}}},[n("i",{staticClass:"el-icon-plus"})]),n("el-button",{attrs:{type:"text",size:"mini "},on:{click:function(){e.remove(i,o)}}},[n("i",{staticClass:"el-icon-minus"})]),n("el-button",{attrs:{type:"text",size:"mini "},on:{click:function(){e.editNode(i,o)}}},[n("i",{staticClass:"el-icon-edit"})])],1)])}}])},[e._v("\n      >\n      ")])],1)]),n("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"ruleForm",attrs:{"label-position":"right","label-width":"90px",rules:e.rules,model:e.form}},[n("el-form-item",{attrs:{label:"menuName",prop:"menuName"}},[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.form.menuName,callback:function(t){e.$set(e.form,"menuName",t)},expression:"form.menuName"}})],1),n("el-form-item",{attrs:{label:"icon",prop:"icon"}},[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1),n("el-form-item",{attrs:{label:"path",prop:"path"}},[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1),n("el-form-item",{attrs:{label:"component",prop:"component"}},[n("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入内容","trigger-on-focus":!1,readonly:e.rootNodeCom},on:{select:e.handleSelect},model:{value:e.form.component,callback:function(t){e.$set(e.form,"component",t)},expression:"form.component"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确 定")])],1)],1)],1)},o=[],r=(n("ac6a"),n("c1f4")),a=n("0644"),s=n.n(a),l=1e3,c={data:function(){return{title:"",edit:!1,rootNodeCom:!1,authList:[{id:"1",parentId:"0",menuName:"权限",component:"Index",icon:"el-icon-setting",path:"permission"},{id:"2",parentId:"0",menuName:"管理",component:"Index",icon:"el-icon-setting",path:"test"},{id:"3",parentId:"0",menuName:"测试",component:"Index",icon:"el-icon-setting",path:"xxx"},{id:"40",parentId:"0",menuName:"测试-1",component:"HelloWorld",icon:"el-icon-setting",path:"helloWorld"},{id:"10",parentId:"1",menuName:"一级1-1",component:"About",icon:"el-icon-setting",path:"about"},{id:"11",parentId:"1",menuName:"一级1-2",component:"HelloWorld",icon:"el-icon-setting",path:"one"},{id:"22",parentId:"2",menuName:"一级2-1",component:"PermissionMg",icon:"el-icon-setting",path:"two"},{id:"19  ",parentId:"2",menuName:"一级2-2",component:"xxx",icon:"el-icon-setting",path:"three"},{id:"23",parentId:"1",menuName:"一级1-3",component:"About",icon:"el-icon-setting",path:"four"},{id:"24",parentId:"1",menuName:"一级1-4",component:"HelloWorld",icon:"el-icon-setting",path:"five"}],rules:{menuName:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 10个字符",trigger:"blur"}],icon:[{required:!0,message:"请输入菜单图标",trigger:"blur"},{min:3,max:30,message:"长度在 3  到 10 个字符",trigger:"blur"}],component:[{required:!1,message:"请输入组件名称",trigger:"blur"},{min:1,max:25,message:"长度在 1 到 10个字符",trigger:"blur"}],path:[{required:!0,message:"请输入路由路径",trigger:"blur"},{min:3,max:30,message:"长度在 3 到 10个字符",trigger:"blur"}]},form:{menuName:"",icon:"",component:"",parentId:"",id:"",path:""},formLabelWidth:"120px",dialogFormVisible:!1,filterText:"",defaultProps:{children:"children",label:"menuName"}}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},computed:{data5:function(){console.log("authList 改变了");var e=s()(this.authList),t=[];function n(e,t,i){i&&e.forEach(function(o,r){o.parentId==t&&(o.children=[],i.push(o),n(e,o.id,o.children))})}return n(s()(e),0,t),t}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){var n=s()(t.form);if(!e)return console.log("error submit!!"),!1;if(t.edit){delete n.children,t.$notify({title:"修改<"+n.menuName+">",message:"修改<"+n.menuName+">节点,成功",type:"success"});for(var i=0;i<t.authList.length;i++)if(t.authList[i].id===n.id){console.log(t.authList[i]),t.authList.splice(i,1,n);break}}else n.id=l++,t.$notify({title:"添加<"+n.menuName+">",message:"添加<"+n.menuName+">节点,成功",type:"success"}),t.authList.push(n);t.dialogFormVisible=!1,t.resetForm()})},resetForm:function(){this.form={menuName:"",icon:"",component:"",parentId:"",id:""}},filterNode:function(e,t){return!e||-1!==t.menuName.indexOf(e)},append:function(e,t){this.edit=!1,this.title="添加节点",this.resetForm(),this.dialogFormVisible=!0,this.form.parentId=t.id,0==t.id?(this.rootNodeCom=!0,this.form.component="Index"):this.rootNodeCom=!1},editNode:function(e,t){this.title="编辑："+t.menuName,this.form=s()(t),this.dialogFormVisible=!0,this.edit=!0},remove:function(e,t){var n=this;this.title="删除"+t.menuName,t.children&&t.children.length>0?this.$message({message:"不可直删除有儿子的节点",type:"warning"}):this.$confirm("检测到删除<"+t.menuName+">节点？","确认删除",{distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"取消"}).then(function(){for(var e=0;e<n.authList.length;e++)if(n.authList[e].id===t.id){console.log(n.authList[e]),n.authList.splice(e,1),n.$notify({title:"删除<"+t.menuName+">",message:"删除<"+t.menuName+">节点,成功",type:"success"});break}}).catch(function(e){})},querySearch:function(e,t){var n=e?r["a"].filter(this.createFilter(e)):r["a"];t(n.map(function(e){return{value:e}}))},createFilter:function(e){return console.log(e),function(t){return-1!==t.toLowerCase().indexOf(e.toLowerCase())}},handleSelect:function(e){console.log(e)}}},m=c,u=(n("e881"),n("2877")),d=Object(u["a"])(m,i,o,!1,null,null,null);d.options.__file="PermissionMg.vue";t["default"]=d.exports},e881:function(e,t,n){"use strict";var i=n("2b39"),o=n.n(i);o.a}}]);