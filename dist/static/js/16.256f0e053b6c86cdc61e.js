webpackJsonp([16],{"bb/W":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("+02A"),n=s("Ej4n"),c={components:{Hand:a.a,Foot:n.a},data:function(){return{flag:!1,mm:!1,name:"",checked:""}},created:function(){this.userid=this.$store.state.userid,this.checked=this.$store.state.checked,this.name=this.$store.state.username},methods:{dl:function(){this.$router.push("/Login")}}},e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("Hand",[s("div",{staticClass:"hand",attrs:{slot:"a"},slot:"a"},[s("router-link",{attrs:{to:"/Shou/Take"}},[s("i",{staticClass:"iconfont iconzuo"})]),t._v(" "),s("h3",[t._v("我的")])],1)]),t._v(" "),s("div",{staticClass:"ren"},[this.$store.state.avatar?s("img",{staticClass:"privateImage",attrs:{src:"//elm.cangdu.org/img/"+this.$store.state.avatar,alt:""}}):s("img",{staticClass:"privateImage",attrs:{"data-v-008f1529":"","data-v-0fc4ab7a":"",src:"//elm.cangdu.org/img/default.jpg"}}),t._v(" "),s("div",{staticClass:"ren1"},[0==this.checked?s("h2",{on:{click:function(i){return t.dl()}}},[t._v("登录/注册")]):t._e(),t._v(" "),1==this.checked?s("h2",{on:{click:function(i){return t.dl()}}},[t._v(t._s(this.name))]):t._e(),t._v(" "),t._m(0)]),t._v(" "),s("div",[s("router-link",{attrs:{to:"/Shou/My/tiu"}},[s("i",{staticClass:"iconfont iconyou"})])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("Foot")],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"ren2"},[i("i",{staticClass:"iconfont iconshouji"}),this._v(" "),i("h3",[this._v("暂无绑定手机号")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"server"},[s("ul",[s("li",[s("div",{staticClass:"server_a"},[t._v("0.00 "),s("span",[t._v("元")])]),t._v(" "),s("div",[t._v("我的余额")])]),t._v(" "),s("li",[s("div",{staticClass:"server_b"},[t._v("0"),s("span",[t._v("个")])]),t._v(" "),s("div",[t._v("我的优惠")])]),t._v(" "),s("li",[s("div",{staticClass:"server_c"},[t._v("0"),s("span",[t._v("分")])]),t._v(" "),s("div",[t._v("我的积分")])])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"login"},[s("ul",[s("li",{staticClass:"l1"},[s("i",{staticClass:"iconfont iconicon--copy a"}),t._v(" "),s("div",{staticClass:"login-q"},[s("div",[t._v("我的订单")])]),t._v(" "),s("i",{staticClass:"iconfont iconyou"})]),t._v(" "),s("li",[s("i",{staticClass:"iconfont iconshangchengjifenshangcheng_xuanzhong a"}),t._v(" "),s("div",{staticClass:"login-q"},[s("div",[t._v("我的商城")])]),t._v(" "),s("i",{staticClass:"iconfont iconyou"})]),t._v(" "),s("li",[s("i",{staticClass:"iconfont iconhuiyuan- a"}),t._v(" "),s("div",{staticClass:"login-q"},[s("div",[t._v("我的会员")])]),t._v(" "),s("i",{staticClass:"iconfont iconyou"})]),t._v(" "),s("li",{staticClass:"l1"},[s("i",{staticClass:"iconfont iconfuwu a"}),t._v(" "),s("div",{staticClass:"login-q"},[s("div",[t._v("服务中心")])]),t._v(" "),s("i",{staticClass:"iconfont iconyou"})]),t._v(" "),s("li",[s("i",{staticClass:"iconfont iconeliaomo a"}),t._v(" "),s("div",{staticClass:"login-q"},[s("div",[t._v("下载饿了么APP")])]),t._v(" "),s("i",{staticClass:"iconfont iconyou"})])])])}]};var o=s("C7Lr")(c,e,!1,function(t){s("btPB")},"data-v-40f0b114",null);i.default=o.exports},btPB:function(t,i){}});
//# sourceMappingURL=16.256f0e053b6c86cdc61e.js.map