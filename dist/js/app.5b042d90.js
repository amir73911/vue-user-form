(function(t){function e(e){for(var a,r,o=e[0],u=e[1],c=e[2],p=0,m=[];p<o.length;p++)r=o[p],i[r]&&m.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var u=s[o];0!==i[u]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-page",attrs:{id:"app"}},[t.firstName||t.lastName||t.login||t.email?s("section",{staticClass:"user-page__section user-form"},[s("h1",[t._v("New User")]),s("p",[t._v("\n      "+t._s(t.firstName)+" "+t._s(t.lastName)+"\n      "),(t.firstName||t.lastName)&&t.login?s("span",[t._v(" / ")]):t._e(),t.login?s("span",{staticClass:"user-form__gray-text"},[t._v(t._s(t.login))]):t._e()]),s("p",[t._v(t._s(t.email))])]):t._e(),s("section",{staticClass:"user-page__section registration-form"},[s("h1",[t._v("Sign Up")]),s("form",{staticClass:"user-page__grid",on:{submit:function(e){return e.preventDefault(),t.addUser(e)}}},[s("label",{staticClass:"user-page__column-two"},[s("span",{staticClass:"registration-form__input-caption registration-form__input-caption--required"},[t._v("Login")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"registration-form__input",attrs:{type:"text",required:"",minlength:"3",placeholder:" "},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),s("label",{staticClass:"user-page__column-two"},[s("span",{staticClass:"registration-form__input-caption registration-form__input-caption--required"},[t._v("E-mail")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"registration-form__input",attrs:{type:"email",required:"",placeholder:" "},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("label",{staticClass:"user-page__column-two"},[s("span",{staticClass:"registration-form__input-caption registration-form__input-caption--required"},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"registration-form__input",attrs:{type:"password",required:"",minlength:"6",placeholder:" "},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("label",{staticClass:"user-page__column-one"},[s("span",{staticClass:"registration-form__input-caption"},[t._v("First Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"registration-form__input",attrs:{type:"text"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),s("label",{staticClass:"user-page__column-one"},[s("span",{staticClass:"registration-form__input-caption"},[t._v("Last Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"registration-form__input",attrs:{type:"text"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),s("label",{staticClass:"user-page__column-one"},[s("span",{staticClass:"registration-form__input-caption"},[t._v("Country")]),s("v-select",{attrs:{type:"text",options:t.countries},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),s("label",{staticClass:"user-page__column-one"},[s("span",{staticClass:"registration-form__input-caption"},[t._v("City")]),s("v-select",{attrs:{type:"text",options:t.cities,disabled:!t.country},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),s("label",{staticClass:"user-page__column-one"},[s("span",{staticClass:"registration-form__input-caption"},[t._v("Date of Birth")]),s("datepicker",{model:{value:t.dateOfBirth,callback:function(e){t.dateOfBirth=e},expression:"dateOfBirth"}})],1),s("label",{staticClass:"user-page__column-one"},[s("span",{staticClass:"registration-form__input-caption"},[t._v("Zip Code")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.zipCode,expression:"zipCode"}],staticClass:"registration-form__input",attrs:{type:"text"},domProps:{value:t.zipCode},on:{input:function(e){e.target.composing||(t.zipCode=e.target.value)}}})]),t._m(0)])]),s("div",{staticClass:"message-backdrop",class:{"message-backdrop--showed":t.messageIsShowed}},[s("div",{staticClass:"message"},[t._v(t._s(t.message))])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"registration-form__buttons user-page__column-two"},[s("button",{staticClass:"registration-form__button",attrs:{type:"submit"}},[t._v("Sign Up")])])}],r=s("4a7a"),o=s.n(r),u=s("fa33"),c=s("2f62");a["a"].use(c["a"]);var l=new c["a"].Store({state:{user:{login:"",email:"",password:"",firstName:"",lastName:"",country:"",city:"",dateOfBirth:"",zipCode:""}},mutations:{updateUserLogin:function(t,e){t.user.login=e},updateUserEmail:function(t,e){t.user.email=e},updateUserPassword:function(t,e){t.user.password=e},updateUserFirstName:function(t,e){t.user.firstName=e},updateUserLastName:function(t,e){t.user.lastName=e},updateUserCountry:function(t,e){t.user.country=e},updateUserCity:function(t,e){t.user.city=e},updateUserDateOfBirth:function(t,e){t.user.dateOfBirth=e},updateUserZipCode:function(t,e){t.user.zipCode=e}},actions:{}}),p={name:"app",components:{vSelect:o.a,Datepicker:u["a"]},computed:{login:{get:function(){return l.state.user.login},set:function(t){l.commit("updateUserLogin",t)}},email:{get:function(){return l.state.user.email},set:function(t){l.commit("updateUserEmail",t)}},password:{get:function(){return l.state.user.password},set:function(t){l.commit("updateUserPassword",t)}},firstName:{get:function(){return l.state.user.firstName},set:function(t){l.commit("updateUserFirstName",t)}},lastName:{get:function(){return l.state.user.lastName},set:function(t){l.commit("updateUserLastName",t)}},country:{get:function(){return l.state.user.country},set:function(t){l.commit("updateUserCountry",t)}},city:{get:function(){return l.state.user.city},set:function(t){l.commit("updateUserCity",t)}},dateOfBirth:{get:function(){return l.state.user.dateOfBirth},set:function(t){l.commit("updateUserDateOfBirth",t)}},zipCode:{get:function(){return l.state.user.zipCode},set:function(t){l.commit("updateUserZipCode",t)}}},data:function(){return{message:"",messageIsShowed:!1,countries:["Russia","Canada","Andorra","China"],cities:["Moscow","Toronto","Andorra la Vella","Beijing"]}},methods:{addUser:function(){this.validateForm&&this.showMessage("The user has been added successfully!")},validateForm:function(){if(this.login&&this.email&&this.password)return!0},showMessage:function(t){var e=this;this.message=t,this.messageIsShowed=!0,setTimeout(function(){e.messageIsShowed=!1},1e3)}}},m=p,d=(s("f64b"),s("2877")),f=Object(d["a"])(m,i,n,!1,null,null,null);f.options.__file="UserPage.vue";var g=f.exports;a["a"].config.productionTip=!1,new a["a"]({store:l,render:function(t){return t(g)}}).$mount("#app")},"808d":function(t,e,s){},f64b:function(t,e,s){"use strict";var a=s("808d"),i=s.n(a);i.a}});
//# sourceMappingURL=app.5b042d90.js.map