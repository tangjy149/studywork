webpackJsonp([1],{"9gsU":function(t,s){},Azl8:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n=(e("Q0/0"),{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]});var o=e("VU/8")({name:"App"},n,!1,function(t){e("9gsU")},null,null).exports,i=e("/ocq"),r={name:"Loginin",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.axios.post("/loginReginster/login",this.$qs.stringify({username:this.username,password:this.password})).then(function(s){console.log(s.data),console.log(s.data.level),0==s.data.level&&t.$router.push("/selectCourse")},function(t){console.log(t.data.status)})}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("h2",[t._v("东北师范大学化学学院答题系统")]),t._v(" "),e("form",{staticClass:"form-signin"},[e("h4",{staticClass:"form-signin-heading"},[t._v("请登录")]),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputStuno"}},[t._v("学号")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"inputStuno",placeholder:"学号",required:"",autofocus:""},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("密码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"密码",required:""},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"},on:{click:t.submit}},[t._v("登录")])])])},staticRenderFns:[]},u=e("VU/8")(r,c,!1,null,null,null).exports,l={name:"choice",data:function(){return{Exercise:[],Chapter:[],Section:[]}},mounted:function(){this.getChapter(),this.getOpenQues()},methods:{getChapter:function(){var t=this;this.axios.get("/ques/getChapter").then(function(s){console.log(s.data),t.Chapter=s.data},function(t){console.log(t)})},getSession:function(){var t=this;this.axios.get("/ques/getSession").then(function(s){console.log(s.data),t.Section=s.data},function(t){console.log(t)})},getOpenQues:function(){var t=this;this.axios.get("/answer/student/getOpenQues").then(function(s){t.Exercise=s.data},function(t){console.log(t)})}}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{attrs:{id:"searchQues"}},[e("span",{staticClass:"help-block"},[t._v("请选择章：")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{id:"searchCha"}},t._l(t.Chapter,function(s){return e("option",{attrs:{value:"1"}},[t._v(t._s(s.chapterName))])})),t._v(" "),e("button",{staticClass:"btn btn-primary btn-lg btn-block",staticStyle:{margin:"20px 0px"},on:{click:t.searchQues}},[t._v("查询")])]),t._v(" "),e("form",{staticClass:"form-choice"},t._l(t.Exercise,function(s,a){return e("div",{staticClass:"choiceBlock"},[0==s.type?[e("p",{staticClass:"choiceQuestion"},[e("em",[t._v(t._s(s.choiceQuesId)+".")]),t._v(t._s(s.quesDescription))]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.choiceQuesId,value:"A"}}),e("span",{staticClass:"radio-show"}),t._v("A."+t._s(s.optionA))]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.choiceQuesId,value:"B"}}),e("span",{staticClass:"radio-show"}),t._v("B."+t._s(s.optionB))]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.choiceQuesId,value:"C"}}),e("span",{staticClass:"radio-show"}),t._v("C."+t._s(s.optionC))]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.choiceQuesId,value:"D"}}),e("span",{staticClass:"radio-show"}),t._v("D."+t._s(s.optionD))])]:1==s.type?[e("p",{staticClass:"choiceQuestion"},[e("em",[t._v(t._s(s.judgmentQuesId)+".")]),t._v(" "+t._s(s.judgQuesDescription))]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.choiceQuesId,value:"对"}}),e("span",{staticClass:"radio-show"}),t._v("对")]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.choiceQuesId,value:"错"}}),e("span",{staticClass:"radio-show"}),t._v("错")])]:t._e()],2)}))])},staticRenderFns:[]};var p=e("VU/8")(l,d,!1,function(t){e("aA4Z")},"data-v-484a2242",null).exports,h={name:"selectCourse",data:function(){return{courseList:[]}},mounted:function(){this.getCourseList()},methods:{getCourseList:function(){var t=this;this.axios.get("/course/getAllCourse").then(function(s){console.log(s.data),t.courseList=s.data},function(t){console.log(t)})},chooseCourse:function(t){var s=this;console.log(t),this.axios.get("/loginReginster/selectCourse",{params:{courseId:t}}).then(function(t){1==t.data.status&&s.$router.push("/choice")},function(t){console.log(t.data.status)})}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("h4",[t._v("请选择课程")]),t._v(" "),t._l(t.courseList,function(s){return e("button",{staticClass:"btn btn-primary btn-lg btn-block",on:{click:function(e){t.chooseCourse(s.courseId)}}},[t._v(t._s(s.courseName))])})],2)},staticRenderFns:[]};var m=e("VU/8")(h,v,!1,function(t){e("Azl8")},"data-v-58ad7018",null).exports;a.a.use(i.a);var f=new i.a({routes:[{path:"/",name:"Loginin",component:u},{path:"/choice",name:"choice",component:p},{path:"/selectCourse",name:"selectCourse",component:m}]}),_=(e("qb6w"),e("mtWM")),C=e.n(_),g=e("Rf8U"),b=e.n(g),w=e("mw3O"),y=e.n(w);a.a.prototype.$qs=y.a,a.a.use(b.a,C.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:f,components:{App:o},template:"<App/>"})},"Q0/0":function(t,s){},aA4Z:function(t,s){},qb6w:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.bbb891b6f5f8ca6aa594.js.map