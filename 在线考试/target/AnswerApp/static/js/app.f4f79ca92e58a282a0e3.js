webpackJsonp([1],{"9gsU":function(t,e){},Azl8:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=(s("Q0/0"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var o=s("VU/8")({name:"App"},a,!1,function(t){s("9gsU")},null,null).exports,i=s("/ocq"),c={name:"Loginin",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.axios.post("/loginReginster/login",this.$qs.stringify({username:this.username,password:this.password})).then(function(e){console.log(e.data),console.log(e.data.level),0==e.data.level&&t.$router.push("/selectCourse")},function(t){console.log(t.data.status)})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",[t._v("东北师范大学化学学院答题系统")]),t._v(" "),s("form",{staticClass:"form-signin"},[s("h4",{staticClass:"form-signin-heading"},[t._v("请登录")]),t._v(" "),s("label",{staticClass:"sr-only",attrs:{for:"inputStuno"}},[t._v("学号")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"inputStuno",placeholder:"学号",required:"",autofocus:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),s("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("密码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"密码",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"},on:{click:t.submit}},[t._v("登录")])])])},staticRenderFns:[]},u=s("VU/8")(c,r,!1,null,null,null).exports,l={name:"choice",data:function(){return{Exercise:[],Chapter:[],Section:[],Answer:[]}},mounted:function(){this.getChapter(),this.getOpenQues()},methods:{getChapter:function(){var t=this;this.axios.get("/ques/getChapter").then(function(e){console.log(e.data),t.Chapter=e.data,t.getSession(t.Chapter[0].chapterId)},function(t){console.log(t)})},getSession:function(t){var e=this;console.log(t),this.axios.get("/ques/getSession",{params:{chapterId:t}}).then(function(t){console.log(t.data),e.Section=t.data},function(t){console.log(t)})},getOpenQues:function(){var t=this;this.axios.get("/answer/student/getOpenQues").then(function(e){t.Exercise=e.data},function(t){console.log(t)})},changeSession:function(t){var e=this;this.axios.get("/ques/getSession",{params:{chapterId:t.target.value}}).then(function(t){console.log(t.data),e.Section=t.data},function(t){console.log(t)})},searchQues:function(){var t=this,e=document.querySelector("#searchCha").value,s=document.querySelector("#searchSec").value;this.axios.get("/answer/student/searchOpenQues",{params:{chapterId:e,sessionId:s}}).then(function(e){t.Exercise=e.data},function(t){console.log(t)})},subQues:function(){var t=this;this.Exercise.forEach(function(e,s){if(console.log(e[s]),0==e.type)for(var n=document.getElementsByName(e.type+"|"+e.choiceQuesId),a=0;a<n.length;a++)n[a].checked&&(t.Answer.$set(s,{type:e.type,quesId:e.choiceQuesId,stuAnswer:n[a].value}),1);else if(1==e.type)for(var o=document.getElementsByName(e.type+"|"+e.judgmentQuesId),i=0;i<o.length;i++)o[i].checked&&(vm.$set(vm.Answer,s,{type:e.type,quesId:e.choiceQuesId,stuAnswer:o[i].value}),1)}),console.log(1),console.log(this.Answer)}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{attrs:{id:"searchQues"}},[s("span",{staticClass:"help-block"},[t._v("请选择章：")]),t._v(" "),s("select",{staticClass:"form-control",attrs:{id:"searchCha"},on:{change:function(e){t.changeSession(e)}}},t._l(t.Chapter,function(e){return s("option",{domProps:{value:e.chapterId}},[t._v(t._s(e.chapterName))])})),t._v(" "),s("span",{staticClass:"help-block"},[t._v("请选择节：")]),t._v(" "),s("select",{staticClass:"form-control",attrs:{id:"searchSec"}},t._l(t.Section,function(e){return s("option",{domProps:{value:e.sessionId}},[t._v(t._s(e.sessionName))])})),t._v(" "),s("button",{staticClass:"btn btn-primary btn-lg btn-block",staticStyle:{margin:"20px 0px"},on:{click:t.searchQues}},[t._v("查询")])]),t._v(" "),s("div",{staticClass:"form-choice"},[t._l(t.Exercise,function(e,n){return s("div",{staticClass:"choiceBlock"},[0==e.type?[s("p",{staticClass:"choiceQuestion"},[s("em",[t._v("选择题："+t._s(e.choiceQuesId)+". ")]),t._v(t._s(e.quesDescription))]),t._v(" "),s("label",{staticClass:"option"},[s("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:e.type+"|"+e.choiceQuesId,value:"A"}}),s("span",{staticClass:"radio-show"}),t._v("A."+t._s(e.optionA))]),t._v(" "),s("label",{staticClass:"option"},[s("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:e.type+"|"+e.choiceQuesId,value:"B"}}),s("span",{staticClass:"radio-show"}),t._v("B."+t._s(e.optionB))]),t._v(" "),s("label",{staticClass:"option"},[s("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:e.type+"|"+e.choiceQuesId,value:"C"}}),s("span",{staticClass:"radio-show"}),t._v("C."+t._s(e.optionC))]),t._v(" "),s("label",{staticClass:"option"},[s("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:e.type+"|"+e.choiceQuesId,value:"D"}}),s("span",{staticClass:"radio-show"}),t._v("D."+t._s(e.optionD))])]:1==e.type?[s("p",{staticClass:"choiceQuestion"},[s("em",[t._v("判断题："+t._s(e.judgmentQuesId)+". ")]),t._v(" "+t._s(e.judgQuesDescription))]),t._v(" "),s("label",{staticClass:"option"},[s("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:e.type+"|"+e.judgmentQuesId,value:"对"}}),s("span",{staticClass:"radio-show"}),t._v("对")]),t._v(" "),s("label",{staticClass:"option"},[s("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:e.type+"|"+e.judgmentQuesId,value:"错"}}),s("span",{staticClass:"radio-show"}),t._v("错")])]:t._e()],2)}),t._v(" "),s("button",{staticClass:"btn btn-primary btn-lg btn-block",on:{click:t.subQues}},[t._v("点击提交")])],2)])},staticRenderFns:[]};var p=s("VU/8")(l,d,!1,function(t){s("td/n")},"data-v-0b18a6fc",null).exports,h={name:"selectCourse",data:function(){return{courseList:[]}},mounted:function(){this.getCourseList()},methods:{getCourseList:function(){var t=this;this.axios.get("/course/getAllCourse").then(function(e){console.log(e.data),t.courseList=e.data},function(t){console.log(t)})},chooseCourse:function(t){var e=this;console.log(t),this.axios.get("/loginReginster/selectCourse",{params:{courseId:t}}).then(function(t){1==t.data.status&&e.$router.push("/choice")},function(t){console.log(t.data.status)})}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h4",[t._v("请选择课程")]),t._v(" "),t._l(t.courseList,function(e){return s("button",{staticClass:"btn btn-primary btn-lg btn-block",on:{click:function(s){t.chooseCourse(e.courseId)}}},[t._v(t._s(e.courseName))])})],2)},staticRenderFns:[]};var m=s("VU/8")(h,v,!1,function(t){s("Azl8")},"data-v-58ad7018",null).exports;n.a.use(i.a);var f=new i.a({routes:[{path:"/",name:"Loginin",component:u},{path:"/choice",name:"choice",component:p},{path:"/selectCourse",name:"selectCourse",component:m}]}),g=(s("qb6w"),s("mtWM")),_=s.n(g),C=s("Rf8U"),b=s.n(C),y=s("mw3O"),w=s.n(y);n.a.prototype.$qs=w.a,n.a.use(b.a,_.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:f,components:{App:o},template:"<App/>"})},"Q0/0":function(t,e){},qb6w:function(t,e){},"td/n":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f4f79ca92e58a282a0e3.js.map