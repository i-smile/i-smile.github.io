(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"542":function(e,t,n){"use strict";function isEmpty(e){return void 0===e||""===e||null===e||"{}"===JSON.stringify(e)}function valiIdCard(e){return!!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e)}function valiPhone(e){if(!e)return!1;return/^((\d{3,4}-)?\d{7,8})$|^1(3|4|5|7|8)\d{9}$/.test(e)}function valiCarNumber(e){return/^桂[林]?[0-9A-Z]{5,6}$/.test(e)}n.d(t,"a",(function(){return isEmpty})),n.d(t,"c",(function(){return valiIdCard})),n.d(t,"d",(function(){return valiPhone})),n.d(t,"b",(function(){return valiCarNumber}))},"606":function(e,t,n){var a=n(21),s=n(752);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var i={"insert":"head","singleton":!1},r=(a(s,i),s.locals?s.locals:{});e.exports=r},"625":function(e,t,n){var a=n(21),s=n(830);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var i={"insert":"head","singleton":!1},r=(a(s,i),s.locals?s.locals:{});e.exports=r},"751":function(e,t,n){"use strict";var a=n(606);n.n(a).a},"752":function(e,t,n){(t=n(19)(!1)).push([e.i,".loading-wrap[data-v-2b656c38],\n.fail-tips[data-v-2b656c38] {\n  padding: 4.44444rem 0;\n  text-align: center;\n}\n.bottom[data-v-2b656c38] {\n  margin-top: 4.44444rem;\n  width: 10rem;\n  text-align: center;\n}\n.bottom .van-button[data-v-2b656c38] {\n  width: 70%;\n}\n",""]),e.exports=t},"756":function(e,t){},"758":function(e,t){},"789":function(e,t){},"790":function(e,t){},"829":function(e,t,n){"use strict";var a=n(625);n.n(a).a},"830":function(e,t,n){(t=n(19)(!1)).push([e.i,".bottom[data-v-951ede50] {\n  margin: 2.22222rem auto;\n  width: 10rem;\n  text-align: center;\n}\n.bottom .van-button[data-v-951ede50] {\n  width: 70%;\n}\n",""]),e.exports=t},"835":function(e,t,n){"use strict";n.r(t);var a=n(15),s=n.n(a),i=n(18),r=n(3),o=(n(520),n(518)),c=(n(638),n(682)),u=(n(750),n(510)),l=n(30),d=n(4),f=n(44),g=n(45),p=n.n(g),m=n(41),v=n(31),b=n(48);d.a.use(o.a).use(c.a).use(u.a);var h={"name":"Login","components":{},"data":function data(){return{"loading":!0,"code":""}},"computed":{},"created":function created(){var e=this;m.runtime.permission.requestAuthCode({"corpId":"ding7404f5e573a05af035c2f4657eb6378f","onSuccess":function onSuccess(t){console.log(t),e.doLogin(t.code)}})},"methods":Object(r.a)(Object(r.a)({},Object(f.b)("login",["getLoginUserInfo"])),{},{"doLogin":function doLogin(e){var t=this;return Object(i.a)(s.a.mark((function _callee2(){var n,a;return s.a.wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:return n={"code":e},r.next=3,Object(v.a)("/auth/dingDingLogin?".concat(p.a.stringify(n)),{"method":"POST"});case 3:if(a=r.sent,console.log("Login response",a),200!==a.resultCode){r.next=12;break}return r.next=8,Object(b.c)(a.data.token);case 8:o.a.success({"message":a.message,"duration":600}),setTimeout(Object(i.a)(s.a.mark((function _callee(){return s.a.wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:t.getLoginUserInfo(),l.default.switchTab({"url":"/pages/punish/index"});case 2:case"end":return e.stop()}}),_callee)}))),100),r.next=13;break;case 12:c.a.alert({"message":a.message}).then((function(){}));case 13:t.loading=!1;case 14:case"end":return r.stop()}}),_callee2)})))()}})},w=(n(751),n(511)),_=Object(w.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{"staticClass":"page page-login"},[this.loading?t("div",{"staticClass":"loading-wrap"},[t("van-loading",{"attrs":{"size":"24px","vertical":""}},[this._v("加载中")])],1):t("div",{"staticClass":"fail-tips"},[this._v("登录失败，请联系管理员~")])])}),[],!1,null,"2b656c38",null).exports,x=(n(534),n(539)),O=(n(526),n(527)),j=(n(521),n(514)),k=(n(542),n(753)),C=n.n(k),L=n(828),y=n.n(L);d.a.use(x.a).use(O.a).use(j.a).use(o.a).use(c.a);var $={"name":"Login","components":{},"data":function data(){return{"userName":"","password":""}},"computed":{},"created":function created(){},"methods":Object(r.a)(Object(r.a)({},Object(f.b)("login",["getLoginUserInfo"])),{},{"valid":function valid(){var e=this.userName,t=this.password;return e?!(t.length<6)||(Object(o.a)({"type":"fail","message":"请输入密码","duration":800}),!1):(Object(o.a)({"type":"fail","message":"请输入用户名","duration":800}),!1)},"commit":function commit(){var e=this;return Object(i.a)(s.a.mark((function _callee2(){var t,n;return s.a.wrap((function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:if(!e.valid()){a.next=13;break}return t={"userName":e.userName,"password":C.a.stringify(y.a.parse(e.password))},a.next=4,Object(v.a)("/auth/login",{"method":"POST","data":t});case 4:if(200!==(n=a.sent).resultCode){a.next=12;break}return a.next=8,Object(b.c)(n.data.token);case 8:o.a.success({"message":n.message,"duration":600}),setTimeout(Object(i.a)(s.a.mark((function _callee(){return s.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getLoginUserInfo();case 2:l.default.switchTab({"url":"/pages/punish/index"});case 3:case"end":return t.stop()}}),_callee)}))),100),a.next=13;break;case 12:c.a.alert({"message":n.message}).then((function(){}));case 13:case"end":return a.stop()}}),_callee2)})))()}})},I=(n(829),Object(w.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{"staticClass":"page page-login"},[n("van-cell-group",{"attrs":{"title":"用户信息"}},[n("van-field",{"attrs":{"label-width":"110","clearable":"","label":"用户名","placeholder":"请输入用户名"},"model":{"value":e.userName,"callback":function(t){e.userName=t},"expression":"userName"}}),e._v(" "),n("van-field",{"attrs":{"type":"password","label-width":"110","clearable":"","label":"密码","placeholder":"请输入密码"},"model":{"value":e.password,"callback":function(t){e.password=t},"expression":"password"}})],1),e._v(" "),n("div",{"staticClass":"bottom"},[n("van-button",{"attrs":{"type":"info"},"on":{"click":e.commit}},[e._v("登录")])],1)],1)}),[],!1,null,"951ede50",null).exports),N=n(27),T={"name":"Login","components":{"dingding":_,"h-5":I},"data":function data(){return{"isInDingding":N.b}}},E=Object(w.a)(T,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.isInDingding?this._e():t("h-5"),this._v(" "),this.isInDingding?t("dingding"):this._e()],1)}),[],!1,null,null,null);t.default=E.exports}}]);