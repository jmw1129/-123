<template>
    <div>
        <Hand>
         <div slot="a" class="compile">
             <i class="iconfont iconzuo"  @click="$router.go(-1)"></i>
             <h3>新增地址</h3>
             
          </div>
        </Hand>

        <div class="inp_new">
            <div>
                 <input type="text" placeholder="请填写你的姓名" v-model="username" @keyup="add1()">
                 <p v-show="cart1==true">请详细填写的姓名</p>
            </div>
           <router-link to="/Shou/My/Sea">
                <div>
                 <input type="text" placeholder="小区/写字楼/学校等" v-model="school" style="color:#000;">
            </div>
           </router-link>
            <div class="pos">
                  <div>
                   <input type="text" placeholder="请填写详细送餐地址" v-model="ardess" @keyup="add2()">
                   <p  v-show="cart2==true">请填写详细送餐地址</p>
              </div>
           <div>
               <input type="text" placeholder="请填写能联系到你的手机号" v-model="phone" @keyup="add3()">
               <p  v-show="cart3==true">请正确输入手机号</p>
           </div>
            <div>
                  <input type="text" placeholder="备用联系电话（备用）" v-model="phone_call " @keyup="add4()">
                  <p  v-show="cart4==true">请正确输入手机号</p>
            </div>
            </div>
          
        </div>
        <input type="button" value="新增地址" @click="add()">
        
    </div>
</template>
<script>
import Hand from"@/hand/hand"
import axios from "axios"
export default {
    components:{Hand},
    data() {
        return {
            school:"",
            ardess:"",
            name:'',
            username:"",
            phone:"",
            // phone_you:"",
            phone_call:"",
            cart1:"",
            cart2:"",
            cart3:"",
            cart4:"",
        }
    },
   mounted() {
      
       this.school=this.$route.query.name

   },
   methods: {
       add(){
           axios.post(`http://elm.cangdu.org/v1/users/${this.$store.state.userid}/addresses`,{
               address: this.ardess,//请填写详细送餐地址
                address_detail: "北京站",
                geohash: this.$store.state.geohash,//经纬度
                name: this.username,//名字
                phone: this.phone,//手机号
                phone_bk: this.phone_call,//
                poi_type: 0,
                sex: 1,
                tag: "公司",
                tag_type: 4
           }).then((res)=>{
               if(res.data.success){
                   this.$router.push("/Shou/My/site")
               }
              
           })
          
       },
       add1(){
           if(this.username==""){
               this.cart1=true
           }else{
               this.cart1=false
           }
       },
       add2(){
           if(this.ardess.length<3){
               this.cart2=true
           }else{
               this.cart2=false
           }
       },
       add3(){
           if(this.phone.length<11){
               this.cart3=true
           }else{
               this.cart3=false
           }
       },
        add4(){
           if(this.phone_call.length<11){
               this.cart4=true
           }else{
               this.cart4=false
           }
       }
   },
}
</script>

<style lang="scss" scoped>
     .compile {color: white;line-height: 0.6rem;
        display: flex;
        i{margin-left: 0.3rem;}
        h3{width: 3.5rem;text-align: center;line-height: 0.6rem;}
    }
    .inp_new{
        width: 100%;height: 3.3rem;background: white;
        input[type=text]{width: 90%;height: 0.43rem;background: #F2F2F2;margin: 0.1rem 0.25rem;padding-left: 0.1rem;border: 1px solid silver;border-radius: 0.1rem;}
        .pos{position: relative;top: -2.65rem;}
        p{font-size: 0.1rem;margin-left: 5%;color: red;}
    }
    input[type=button]{width: 90%;height: 0.43rem;background: #4CD964;margin: 0.1rem 0.25rem;border-radius: 0.1rem;color: white;}
</style>