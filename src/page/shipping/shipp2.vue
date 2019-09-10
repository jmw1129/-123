<template>
    <div class="sev">
       <Hand>
           <div slot="a" class="head">
               <i class="iconfont iconzuo"  @click="$router.go(-1)"></i>
               <h3>确认下单</h3>
               <div @click="zc()">
                   <h3 v-if="checked==false">登录|注册</h3>
                   <i class="iconfont iconwode" v-if="checked==true"></i>
               </div>
           </div>
       </Hand>
       <div class="order" @click="order()" v-if="add==false">
           
                <i class="iconfont iconlocation"></i>
                <div>请添加一条收获地址</div>
                <i class="iconfont iconyou"></i>
          
       </div>

       <!-- <div class="order" v-for="(v,i) in list" :key="i">
            <i class="iconfont iconlocation"></i>
            <div class="name">
                 <h2>{{v.name}}</h2>   
            </div>    
       </div> -->
      
       <div class="hours">
           <h2>送达时间</h2>
           <div class="time">
               <h4>尽快送达|预计17:12</h4>
               <div>蜂鸟专送</div>
           </div>
       </div>
       <div class="payment">
            <div class="paymentway">
                 <h4>支付方式</h4>
                 <div class="wayaw">
                    <h5>在线支付</h5>
                    <i class="iconfont iconyou"></i>
                 </div>
            </div>
            <div class="packets">
                <h5>红包</h5>
                <h5>暂时只在饿了么APP中支持</h5>
            </div>
       </div>
       <div>
           
           <section>
               效果演示
           </section>
            <div class="type">
                <div>
                    的味道其二群卡翁
                </div>
                <div>
                     X2
                </div>
                <div>
                    ￥20
                </div>
            </div>
       </div>
       <div class="orders">
            <div>订单￥</div>
            <div>待支付￥</div>
       </div>

         <div class="payment">
            <div class="paymentway">
                 <h4>订单备注</h4>
                 <div class="wayaw">
                    <h5>口味,偏好等</h5>
                    <i class="iconfont iconyou"></i>
                 </div>
            </div>
            <div class="packets">
                <h5 style="color:#000;font-size:0.16rem;">发票抬头</h5>
                <h5>不需要开发票<i class="iconfont iconyou"></i></h5>
                
            </div>
       </div>

        <div class="footer">
            <div>
                 待支付
            </div>
            <h2>
                确认下单
            </h2>
        </div>
    </div>
</template>

<script>
import Hand from "@/hand/hand"
import axios from "axios"
export default {
    components:{
        Hand
    },
    data() {
        return {
            checked:"",
            list:[],
            add:false,

        }
    },
    created() {
        this.userid=this.$store.state.userid
        // console.log(this.userid)
        this.checked=this.$store.state.checked
    },
  mounted() {
    axios.get("http://elm.cangdu.org/v1/users/38384/addresses").then((res)=>{
        console.log(res)
        this.list=res.data[1]
        console.log(res.data[1])
    })
     
  },
  methods: {
      order(){
          this.$router.push("/shipp")
      },
      zc(){
          this.$router.push("/login")
      },
    
  }
}
</script>

<style lang="scss" scoped>
    .sev{width: 100%;background: #f4f4f4;}
    .head{
        display: flex;color: white;line-height:0.6rem;justify-content: space-between;
       
    }
    .order{
        width: 100%;height: 0.8rem;border-bottom: 0.02rem dotted pink;
        display: flex;line-height: 0.8rem;font-size: 0.2rem;background:white;
        
             .iconlocation{color:#3190E8;font-size: 0.2rem;margin-left: 0.2rem;}
        .iconyou{margin-left: 2rem;}
        
       
    }
    .hours{width: 100%;height: 1rem;background:white;margin-top: 0.15rem;display:flex;border-left:0.05rem solid #3190E8;justify-content: space-between;
        h2{
           line-height: 1rem; margin-left: 0.2rem;
        }
        .time{margin-top: 0.2rem;
            h4{color: #3190E8;}
            div{width: 0.7rem;height: 0.3rem;background: #3190E8;color: white;line-height: 0.3rem;margin-left: 0.7rem;}
        }
    }
    .payment{width: 100%;height: 100px;background:white;margin-top: 0.2rem;
       .paymentway{border-bottom:1px solid silver;
            
            .wayaw{display: flex;color: silver;}
       }
       .packets{
          h5{
             color: silver;
          }
       }
       .paymentway,.packets{width: 90%;height: 50px;display:flex;line-height:50px;margin-left:5%;justify-content: space-between;}
    }
    .footer{width: 100%;height: 0.7rem;background:#000;color:white;display:flex;line-height:0.7rem;
            justify-content: space-between;position: fixed;bottom: 0;
       div{
         font-size: 0.25rem;
       }
       h2{
           width: 30%;height: 0.7rem;background: #6ACE7A;text-align: center;
       }
    }
    section{
        font-size: 0.25rem;width: 100%;height: 0.5rem;background: white;line-height: 0.5rem;padding-left: 0.3rem;margin-top: 0.2rem;
    }
 
  .type,.orders{
       display: flex;
      width: 100%;height: 0.5rem;line-height: 0.5rem;background: white;justify-content: space-around;
      div:nth-child(2){color: orange;}
  }
</style>