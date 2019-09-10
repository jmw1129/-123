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

userid: '',
//图标状态
checked: false,
username:"",

//经纬度
geohash: "",
latitude: "",
longitude: "",

avatar:'',
cart:[]
},

//异步
actions: {

},

//同步改变state方法
mutations: {
    
    adda(state,item){
        let a= state.cart.some((val) => {
            return val.item_id==item.item_id
        });
        if(a){
        // console.log(a)
        // state.cart[a].number++
        for(let i in state.cart){
         if(state.cart[i].item_id==item.item_id)        
           state.cart[i].number++
        }
        }else{
            item.number=1
            state.cart.push(item)

        }
        // console.log(state.cart)

     },
add(state, v) {
    // console.log(v);
    state.geohash = v;
    // console.log(state.geohash);
    
},
avatar(state,val){
    state.avatar=val
},
name(state,v){
    state.oldname = v;
},
login(state,obj) {
state.userid = obj.user_id;
state.username=obj.username
if (state.userid!= 0) {
state.checked = true;
} else if (state.userid == 0) {
state.checked = false;
}
},
latitude(state, v) {
state.latitude = v;
console.log(state.latitude);
},
longitude(state, v) {
state.longitude = v;
console.log(state.longitude);
},
plusgin(state,i){
    state.cart[i].number+=1
},
minus(state,i){
    if(state.cart[i].number>0){
        state.cart[i].number--
    }else{
        state.cart.splice(i,1)
    }
},
clearImer(state){
    state.cart=[]
}
},
//计算属性
getters: {
    pople(state){
        let sum=0;
        for(let i in state.cart){
                sum+=state.cart[i].number
                // console.log(sum)
        }
        return sum
    },
    money(state){
        let sum=0;
        for(let i in state.cart){
            
                sum+= state.cart[i].number*state.cart[i].price
            
        }
        return sum
  },
},
plugins: [vuexLocal.plugin]
})

export default store;
