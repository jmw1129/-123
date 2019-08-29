import Vue from 'vue';
import Vuex from 'vuex';
import VuePersist from 'vuex-persist'
Vue.use(Vuex);

const vuexLocal = new VuePersist({
storage: window.localStorage
})

const store = new Vuex.Store({
state: {
//用户id
userid: "",
//图标状态
checked: false,

//经纬度
geohash: "",
latitude: "",
longitude: ""


},
//异步
actions: {

},
//同步改变state方法
mutations: {
addL(state, v) {
state.geohash = v;
},
login(state, v) {
state.userid = v;
if (state.userid.length != 0) {
state.checked = true;
} else if (state.userid.length == 0) {
state.checked = false;
}
console.log(v);
},
latitude(state, v) {
state.latitude = v;
console.log(state.latitude);
},
longitude(state, v) {
state.longitude = v;
console.log(state.longitude);
}

},
//计算属性
getters: {

},
plugins: [vuexLocal.plugin]
})

export default store;
