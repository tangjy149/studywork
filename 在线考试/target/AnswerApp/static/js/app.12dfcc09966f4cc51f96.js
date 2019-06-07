webpackJsonp([1],{"9gsU":function(t,e){},Azl8:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),o=(s("Q0/0"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var a=s("VU/8")({name:"App"},o,!1,function(t){s("9gsU")},null,null).exports,i=s("/ocq"),r={name:"Loginin",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.axios.post("/loginReginster/login",this.$qs.stringify({username:this.username,password:this.password})).then(function(e){console.log(e.data),console.log(e.data.level),0==e.data.level&&t.$router.push("/selectCourse")},function(t){console.log(t.data.status)})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",[t._v("东北师范大学化学学院答题系统")]),t._v(" "),s("form",{staticClass:"form-signin"},[s("h4",{staticClass:"form-signin-heading"},[t._v("请登录")]),t._v(" "),s("label",{staticClass:"sr-only",attrs:{for:"inputStuno"}},[t._v("学号")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"inputStuno",placeholder:"学号",required:"",autofocus:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),s("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("密码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"密码",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"},on:{click:t.submit}},[t._v("登录")])])])},staticRenderFns:[]},u=s("VU/8")(r,c,!1,null,null,null).exports,l={name:"choice",data:function(){return{Exercise:[],Chapter:[],Section:[]}},mounted:function(){this.getOpenQues()},methods:{getOpenQues:function(){var t=this;this.axios.get("/answer/student/getOpenQues").then(function(e){console.log(e.data),t.Exercise=e.data},function(t){console.log(t)})}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("form",{staticClass:"form-choice"},t._l(t.Exercise,function(e,n){return s("div",{staticClass:"choiceBlock"},[s("p",{staticClass:"choiceQuestion"},[s("em",[t._v(t._s(e.choiceQuesId)+".")]),t._v(t._s(e.quesDescription))]),t._v(" "),s("label",{staticClass:"option"},[s("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:"`item.choiceQuesId`",value:"A"}}),s("span",{staticClass:"radio-show"}),t._v("A."+t._s(e.optionA))]),t._v(" "),s("label",{staticClass:"option"},[s("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:"`item.choiceQuesId`",value:"B"}}),s("span",{staticClass:"radio-show"}),t._v("B."+t._s(e.optionB))]),t._v(" "),s("label",{staticClass:"option"},[s("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:"`item.choiceQuesId`",value:"C"}}),s("span",{staticClass:"radio-show"}),t._v("C."+t._s(e.optionC))]),t._v(" "),s("label",{staticClass:"option"},[s("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:"`item.choiceQuesId`",value:"D"}}),s("span",{staticClass:"radio-show"}),t._v("D."+t._s(e.optionD))])])}))])},staticRenderFns:[]};var p=s("VU/8")(l,d,!1,function(t){s("yIqt")},"data-v-28478614",null).exports,m={name:"selectCourse",data:function(){return{courseList:[]}},mounted:function(){this.getCourseList()},methods:{getCourseList:function(){var t=this;this.axios.get("/course/getAllCourse").then(function(e){console.log(e.data),t.courseList=e.data},function(t){console.log(t)})},chooseCourse:function(t){var e=this;console.log(t),this.axios.get("/loginReginster/selectCourse",{params:{courseId:t}}).then(function(t){1==t.data.status&&e.$router.push("/choice")},function(t){console.log(t.data.status)})}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h4",[t._v("请选择课程")]),t._v(" "),t._l(t.courseList,function(e){return s("button",{staticClass:"btn btn-primary btn-lg btn-block",on:{click:function(s){t.chooseCourse(e.courseId)}}},[t._v(t._s(e.courseName))])})],2)},staticRenderFns:[]};var h=s("VU/8")(m,v,!1,function(t){s("Azl8")},"data-v-58ad7018",null).exports;n.a.use(i.a);var f=new i.a({routes:[{path:"/",name:"Loginin",component:u},{path:"/choice",name:"choice",component:p},{path:"/selectCourse",name:"selectCourse",component:h}]}),_=(s("qb6w"),s("mtWM")),g=s.n(_),C=s("Rf8U"),b=s.n(C),w=s("mw3O"),y=s.n(w);n.a.prototype.$qs=y.a,n.a.use(b.a,g.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:f,components:{App:a},template:"<App/>"})},"Q0/0":function(t,e){},qb6w:function(t,e){},yIqt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.12dfcc09966f4cc51f96.js.map