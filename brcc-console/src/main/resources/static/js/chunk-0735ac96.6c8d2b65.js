(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0735ac96"],{"5dbc":function(e,t,a){var r=a("d3f4"),o=a("8b97").set;e.exports=function(e,t,a){var i,n=t.constructor;return n!==a&&"function"==typeof n&&(i=n.prototype)!==a.prototype&&r(i)&&o&&o(e,i),e}},6528:function(e,t,a){},"6d67":function(e,t,a){"use strict";var r=a("5ca1"),o=a("0a49")(1);r(r.P+r.F*!a("2f21")([].map,!0),"Array",{map:function(e){return o(this,e,arguments[1])}})},"707c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"list-project"},[a("section",{staticClass:"add-btn"},[e.canManage?a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("\n            "+e._s(e.$t("project.btn.add"))+"\n        ")]):e._e()],1),a("section",{staticClass:"content"},[a("a-table",{attrs:{columns:e.columns,"data-source":e.projectdata,"row-key":function(e){return e.id},pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"name",fn:function(t,r){return[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerEnvironment(r)}}},[e._v(e._s(t))]),a("a-tag",{staticStyle:{"margin-left":"12px"}},[e._v(e._s(r.projectType?e.$t("project.modal.modify.form.projectType.normal"):e.$t("project.modal.modify.form.projectType.common")))])]}},{key:"operation",fn:function(t,r){return[r.admin?a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleEdit(r)}}},[e._v(e._s(e.$t("project.table.operation.edit")))]):e._e(),r.admin?a("a-divider",{attrs:{type:"vertical"}}):e._e(),r.admin?a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerRole(r)}}},[e._v(e._s(e.$t("project.table.operation.role")))]):e._e(),r.admin&&r.projectType?a("a-divider",{attrs:{type:"vertical"}}):e._e(),r.projectType&&r.admin?a("a-popconfirm",{attrs:{title:e.$t("project.table.operation.delete.tips")},on:{confirm:function(t){return e.handleDelete(r)}}},[a("a",{attrs:{href:"javascript:;"}},[e._v(e._s(e.$t("project.table.operation.delete")))])]):e._e(),a("a-divider",{attrs:{type:"vertical"}}),e.canManage?a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleEditPassWord(r)}}},[e._v(e._s(e.$t("project.table.operation.resetApiPassword")))]):e._e(),r.admin?a("a-divider",{attrs:{type:"vertical"}}):e._e(),a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerEnvironment(r)}}},[e._v(e._s(e.$t("project.table.operation.env")))])]}}])},[e._l(e.columns,(function(t,r){return a("template",{slot:t.scopedSlots.title},[a("span",{key:r},[e._v(e._s(e.$t(t.scopedSlots.title)))])])}))],2),a("projectdialog",{attrs:{dialog:e.dialog,formdata:e.formdata},on:{update:e.getProjectInfo}}),a("usersmodal",{attrs:{usersdialog:e.usersdialog,usersdata:e.usersdata}}),a("update-api",{attrs:{dialog:e.apidialog},on:{update:e.getProjectInfo}})],1)])])},o=[],i=(a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("96cf"),a("3b8d")),n=(a("7f7f"),a("bd86")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projectdialog"},[a("a-modal",{attrs:{title:e.dialog.title,visible:e.dialog.show,"mask-closable":!1,"confirm-loading":e.dialog.loading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:e.formdata.id}],expression:"['id',{initialValue:formdata.id}]"}]})],1),a("a-form-item",{attrs:{label:e.$t("project.modal.modify.form.name")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:e.$t("project.modal.modify.form.name.message")}],initialValue:e.formdata.name}],expression:"[\n                    'name',\n                    {\n                        rules: [{ required: true, message: $t('project.modal.modify.form.name.message')}],\n                        initialValue: formdata.name\n                    }]"}],attrs:{placeholder:e.$t("project.modal.modify.form.name.placeholder")}})],1),a("a-form-item",{attrs:{label:e.$t("project.modal.modify.form.memo")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{initialValue:e.formdata.memo}],expression:"['memo', {initialValue: formdata.memo}]"}],attrs:{type:"textarea"}})],1),"add"===e.dialog.option?a("a-form-item",{attrs:{label:e.$t("project.modal.modify.form.password")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["apiPassword",{rules:[{required:!0,message:e.$t("project.modal.modify.form.password.message")}],initialValue:e.formdata.apiPassword}],expression:"['apiPassword', {rules: [{ required: true, message: $t('project.modal.modify.form.password.message')}],initialValue: formdata.apiPassword}]"}],attrs:{placeholder:e.$t("project.modal.modify.form.password.placeholder")}})],1):e._e(),a("a-form-item",{attrs:{label:e.$t("project.modal.modify.form.mailReceiver")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mailReceiver",{initialValue:e.formdata.mailReceiver}],expression:"['mailReceiver', {initialValue: formdata.mailReceiver}]"}],attrs:{type:"textarea"}})],1),a("a-form-item",{attrs:{label:e.$t("project.modal.modify.form.projectType")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectType",{initialValue:e.formdata.projectType}],expression:"['projectType', {initialValue: formdata.projectType}]"}]},[a("a-select-option",{attrs:{value:0}},[e._v(e._s(e.$t("project.modal.modify.form.projectType.common")))]),a("a-select-option",{attrs:{value:1}},[e._v(e._s(e.$t("project.modal.modify.form.projectType.normal")))])],1)],1)],1)],1)],1)},l=[];function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p,u,m={data:function(){return{form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}}}},props:{dialog:Object,formdata:Object},methods:{handleOk:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.preventDefault(),this.form.validateFields((function(e){if(!e){a.dialog.loading=!0;var t="add"===a.dialog.option?"addProject":"updateProject";a.$api.project[t](a.form.getFieldValue("apiPassword"),d({productId:a.$route.query.productId},a.form.getFieldsValue())).then((function(e){0===e.status&&(a.$emit("update"),a.dialog.show=!1,a.$message.success("success！"),a.form.resetFields())})).finally((function(){a.dialog.loading=!1}))}}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleCancel:function(e){this.dialog.show=!1,this.form.resetFields()}}},f=m,h=a("2877"),g=Object(h["a"])(f,s,l,!1,null,null,null),v=g.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"usersmodal"},[a("a-modal",{attrs:{title:"分配权限",visible:e.usersdialog.show,"mask-closable":!1},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form-item",{attrs:{label:"分配权限给","label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",value:e.value,placeholder:"请选择"},on:{change:e.handleChange}},e._l(e.usersdata,(function(t){return a("a-select-option",{key:t.id},[e._v("\n                    "+e._s(t.role)+"\n                ")])})),1)],1)],1)],1)},b=[],y={data:function(){return{value:void 0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}}}},props:{usersdialog:Object,usersdata:Array},methods:{handleOk:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.axios({method:"POST",url:"api/v1/accessSettings",params:{token:localStorage.getItem("token")},data:{userId:this.value,refId:this.usersdialog.id}});case 2:this.$message.success("分配成功！",3),this.usersdialog.show=!1;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleCancel:function(e){this.usersdialog.show=!1},handleChange:function(e){this.value=e}}},w=y,O=Object(h["a"])(w,j,b,!1,null,null,null),_=O.exports,$=(a("6d67"),a("c5f6"),a("f933")),P=a("ed08"),I={name:"Ellipsis",components:{Tooltip:$["a"]},props:{prefixCls:{type:String,default:"ant-pro-ellipsis"},tooltip:{type:Boolean},length:{type:Number,required:!0},lines:{type:Number,default:1},fullWidthRecognition:{type:Boolean,default:!1}},methods:{getStrDom:function(e,t){var a=this.$createElement;return a("span",[Object(P["a"])(e,this.length)+(t>this.length?"...":"")])},getTooltip:function(e,t){var a=this.$createElement;return a($["a"],[a("template",{slot:"title"},[e]),this.getStrDom(e,t)])}},render:function(){var e=this.$props,t=e.tooltip,a=e.length,r=this.$slots.default.map((function(e){return e.text})).join(""),o=Object(P["c"])(r),i=t&&o>a?this.getTooltip(r,o):this.getStrDom(r,o);return i}},x=I,k=Object(h["a"])(x,p,u,!1,null,null,null),E=k.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projectdialog"},[a("a-modal",{attrs:{title:e.$t("project.modal.modify.password.title"),visible:e.dialog.show,"mask-closable":!1,"confirm-loading":e.dialog.loading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:e.dialog.id}],expression:"['id',{initialValue:dialog.id}]"}]})],1),a("a-form-item",{attrs:{label:e.$t("project.modal.modify.form.password")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["apiPassword",{rules:[{required:!0,message:e.$t("project.modal.modify.form.password.message")}]}],expression:"['apiPassword', {rules: [{ required: true, message: $t('project.modal.modify.form.password.message')}]}]"}],attrs:{placeholder:e.$t("project.modal.modify.form.password.placeholder")}})],1)],1)],1)],1)},C=[];function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R={data:function(){return{form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}}}},props:{dialog:Object},methods:{handleOk:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.preventDefault(),this.form.validateFields((function(e){e||(a.dialog.loading=!0,a.$api.project.updateApiPassword(a.dialog.projectId,T({},a.form.getFieldsValue())).then((function(e){0===e.status&&(a.$emit("update"),a.dialog.show=!1,a.$message.success("success！"),a.form.resetFields())})).finally((function(){a.dialog.loading=!1})))}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleCancel:function(e){this.dialog.show=!1,this.form.resetFields()}}},V=R,F=Object(h["a"])(V,S,C,!1,null,null,null),A=F.exports;function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=[{dataIndex:"id",ellipsis:!0,width:"8%",scopedSlots:{title:"project.table.columns.id"}},{dataIndex:"name",width:"20%",scopedSlots:{customRender:"name",title:"project.table.columns.name"}},{dataIndex:"memo",ellipsis:!0,scopedSlots:{title:"project.table.columns.memo"}},{dataIndex:"mailReceiver",ellipsis:!0,scopedSlots:{title:"project.table.columns.mailReceiver"}},{dataIndex:"operation",width:380,scopedSlots:{customRender:"operation",title:"project.table.columns.operation"}}],L={name:"listProject",components:{projectdialog:v,usersmodal:_,Ellipsis:E,updateApi:A},data:function(){return{projectdata:[],pagination:{total:0,current:1,pageSize:10,sortBy:"id desc",hideOnSinglePage:!0,showTotal:function(e,t){return"显示 ".concat(t[0]," ~ ").concat(t[1]," 条记录，共 ").concat(e," 条记录")}},pageSize:10,curPage:1,total:0,columns:M,value:"",dialog:{show:!1,title:"",option:"",label:""},usersdialog:{show:!1,id:""},apidialog:{show:!1,id:""},usersdata:[],formdata:{name:"",memo:"",mailReceiver:"",projectType:"1"},loading:!1,canManage:!1}},created:function(){this.getProjectInfo()},methods:{getProjectInfo:function(){var e=this;this.loading=!0,this.$api.project.getProjectList({productId:this.$route.query.productId,pageNo:this.pagination.current,pageSize:this.pagination.pageSize}).then((function(t){0===t.status?(e.projectdata=t.data.dataList||[],e.pagination.total=t.data.total||0,e.canManage=t.ext.canManage):e.loading=!1})).finally((function(){e.loading=!1}))},handleTableChange:function(e){this.pagination.current=e.current,this.getProjectInfo()},routerEnvironment:function(e){this.$store.dispatch("setRccInfo",q(q({},this.$store.getters.rccInfo),{},{projectId:e.id,projectName:e.name})),this.$router.push({path:"/env",query:{projectId:e.id}})},routerRole:function(e){this.$router.push({path:"/productLine/permission",query:{projectId:e.id,productId:e.productId}})},handleAdd:function(){this.dialog={show:!0,title:this.$t("project.modal.add.title"),option:"add",loading:!1},this.formdata={id:"",name:"",memo:"",mailReceiver:"",projectType:1}},handleEdit:function(e){this.dialog={show:!0,title:this.$t("project.modal.modify.title"),option:"edit",loading:!1},this.formdata=q({},e)},handleDelete:function(e){var t=this;this.$api.project.deleteProject(e.id).then((function(e){0===e.status&&(t.$message.success(),t.getProjectInfo())}))},getuserlist:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$api.project.getUserList({projectId:t}).then((function(e){a.usersdata=e.data}));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),assignPermission:function(e){this.getuserlist(e.id),this.usersdialog={show:!0,id:e.id}},handleEditPassWord:function(e){this.apidialog={show:!0,id:e.productId,projectId:e.id}}}},z=L,B=(a("b6db"),Object(h["a"])(z,r,o,!1,null,"082ea41e",null));t["default"]=B.exports},"8b97":function(e,t,a){var r=a("d3f4"),o=a("cb7c"),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,a){return i(e,a),t?e.__proto__=a:r(e,a),e}}({},!1):void 0),check:i}},aa77:function(e,t,a){var r=a("5ca1"),o=a("be13"),i=a("79e5"),n=a("fdef"),s="["+n+"]",l="​",c=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),p=function(e,t,a){var o={},s=i((function(){return!!n[e]()||l[e]()!=l})),c=o[e]=s?t(u):n[e];a&&(o[a]=c),r(r.P+r.F*s,"String",o)},u=p.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(d,"")),e};e.exports=p},b6db:function(e,t,a){"use strict";a("6528")},c5f6:function(e,t,a){"use strict";var r=a("7726"),o=a("69a8"),i=a("2d95"),n=a("5dbc"),s=a("6a99"),l=a("79e5"),c=a("9093").f,d=a("11e9").f,p=a("86cc").f,u=a("aa77").trim,m="Number",f=r[m],h=f,g=f.prototype,v=i(a("2aeb")(g))==m,j="trim"in String.prototype,b=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=j?t.trim():u(t,3);var a,r,o,i=t.charCodeAt(0);if(43===i||45===i){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var n,l=t.slice(2),c=0,d=l.length;c<d;c++)if(n=l.charCodeAt(c),n<48||n>o)return NaN;return parseInt(l,r)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof f&&(v?l((function(){g.valueOf.call(a)})):i(a)!=m)?n(new h(b(t)),a,f):b(t)};for(var y,w=a("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;w.length>O;O++)o(h,y=w[O])&&!o(f,y)&&p(f,y,d(h,y));f.prototype=g,g.constructor=f,a("2aba")(r,m,f)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);