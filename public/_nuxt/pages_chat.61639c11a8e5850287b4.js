webpackJsonp([10],{FGYp:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("pOPV"),n=o("x/FV"),i=o("VU/8")(s.a,n.a,!1,null,null,null);i.options.__file="pages\\chat.vue",e.default=i.exports},pOPV:function(t,e,o){"use strict";e.a={data:function(){return{name:"",text:"",msg:[],lott:""}},created:function(){this.$socket.subscribe("room39",this.onMsg),this.$socket.subscribe("login",this.onLogin),this.$socket.subscribe("lotto",this.onLotto)},beforeDestroy:function(){this.$socket.unsubscribe("room39"),this.$socket.unsubscribe("login"),this.$socket.unsubscribe("lotto")},methods:{send:function(){this.$socket.publish("room39",{name:this.name,text:this.text})},onMsg:function(t){this.msg.unshift(t),this.mis.splice(5)},onLogin:function(t){console.log("login=",t)},onLotto:function(t){this.lott=t,console.log("lotto=",t)}}}},"x/FV":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Chat room "+t._s(t.lott)+" ")]),o("div",[o("v-text-field",{attrs:{label:"ชื่อ"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),o("v-text-field",{attrs:{label:"ข้อความ"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),o("v-btn",{on:{click:t.send}},[t._v("ส่ง")])],1),o("ul",t._l(t.msg,function(e,s){return o("li",{key:s},[o("b",[t._v(t._s(e.name))]),t._v(" พูดว่า "+t._s(e.text)+"\n    ")])}))])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n}});