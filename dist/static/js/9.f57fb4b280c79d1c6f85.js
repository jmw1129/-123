webpackJsonp([9],{HMb8:function(t,i){},SveA:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("a3Yh"),e=s.n(a),n=s("+02A"),o=s("Muz9"),r=s.n(o),l=e()({components:{Hand:n.a},data:function(){return{name:"",userInfo:"",oldname:"",del:""}},methods:{bjname:function(){this.$router.push("/Shou/My/user")}},mounted:function(){this.name=this.$store.state.username,this.userid=this.$store.state.userid,this.oldname=this.$store.state.oldname}},"methods",{avatarimg:function(){var t=this,i=this.$refs.inp,s=new FormData;s.append("file",i.files[0]),r.a.post("http://cangdu.org:8001/eus/v1/users/"+this.userid+"/avatar",s,{headers:{"Content-Type":"multipart/from-data"}}).then(function(i){t.$store.commit("avatar",i.data.image_path)})},bjname:function(){this.$router.push("/Shou/My/user")},login:function(){this.del=!0},dd:function(){this.del=!1},ok:function(){localStorage.clear(),this.del=!1}}),c={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("Hand",[s("div",{staticClass:"hand",attrs:{slot:"a"},slot:"a"},[s("i",{staticClass:"iconfont iconzuo",on:{click:function(i){return t.$router.go(-1)}}}),t._v(" "),s("h3",[t._v("账户信息")])])]),t._v(" "),s("div",{staticClass:"list"},[s("ul",[s("li",[s("div",{staticClass:"left"},[t._v("头像")]),t._v(" "),s("div",{staticClass:"input"},[s("input",{ref:"inp",staticClass:"file",attrs:{type:"file"},on:{change:function(i){return t.avatarimg()}}}),t._v(" "),this.$store.state.avatar?s("img",{staticClass:"privateImage",attrs:{src:"//elm.cangdu.org/img/"+this.$store.state.avatar,alt:""}}):s("img",{staticClass:"privateImage",attrs:{"data-v-008f1529":"","data-v-0fc4ab7a":"",src:"//elm.cangdu.org/img/default.jpg"}})]),t._v(" "),t._m(0)]),t._v(" "),s("li",{on:{click:function(i){return t.bjname()}}},[s("div",{staticClass:"left"},[t._v("用户名")]),t._v(" "),s("div",{staticClass:"right"},[s("h3",[t._v(t._s(this.oldname))]),t._v(" "),s("h3"),t._v(" "),s("i",{staticClass:"iconfont iconyou"})])]),t._v(" "),s("li",[s("router-link",{attrs:{to:"/Shou/My/site"}},[s("div",{staticClass:"left",staticStyle:{color:"#000"}},[t._v("收货地址")]),t._v(" "),s("div",{staticClass:"right",staticStyle:{position:"relative",bottom:"0.6rem",left:"4.1rem"}},[s("i",{staticClass:"iconfont iconyou"})])])],1),t._v(" "),s("div",{staticClass:"bang"},[t._v("绑定号码")]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"bang"},[t._v("安全设置")]),t._v(" "),s("router-link",{attrs:{to:"/Reset"}},[s("li",{staticStyle:{height:"0.6rem","border-bottom":"1px solid silver"}},[s("div",{staticClass:"left",staticStyle:{color:"#000","margin-top":"-0.2rem"}},[t._v("登录密码")]),t._v(" "),s("div",{staticClass:"right"},[s("h3",[t._v("修改")]),t._v(" "),s("i",{staticClass:"iconfont iconyou",staticStyle:{"margin-top":"-0.2rem"}})])])])],1),t._v(" "),s("input",{attrs:{type:"button",value:"退出登录",name:"a",id:"login"},on:{click:t.login}})]),t._v(" "),s("div",{staticClass:"della"},[s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.del,expression:"del==true"}],staticClass:"dell"},[s("h2",[t._v("!")]),t._v(" "),s("h3",[t._v("你是否退出登录")]),t._v(" "),s("section",[s("button",{on:{click:function(i){return t.dd()}}},[t._v("再等等")]),t._v(" "),s("button",{on:{click:function(i){return t.ok()}}},[t._v("确定退出")])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"right"},[i("i",{staticClass:"iconfont iconyou"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("div",{staticClass:"left"},[i("i",{staticClass:"iconfont iconshouji"}),this._v("手机")]),this._v(" "),i("div",{staticClass:"right"},[i("i",{staticClass:"iconfont iconyou"})])])}]};var v=s("C7Lr")(l,c,!1,function(t){s("HMb8")},null,null);i.default=v.exports}});
//# sourceMappingURL=9.f57fb4b280c79d1c6f85.js.map