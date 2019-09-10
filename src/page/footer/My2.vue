<template>
    <div>
       <Hand>
          <div slot="a" class="hand">
            <router-link to="/Shou/Take">
                  <i class="iconfont iconzuo" ></i>
            </router-link>
            
            <h3>我的</h3>
          </div>
      </Hand>
      <div class="ren">
          <img :src="'//elm.cangdu.org/img/'+this.$store.state.avatar" alt="" v-if="this.$store.state.avatar" class="privateImage" >
          <img data-v-008f1529="" data-v-0fc4ab7a="" src="//elm.cangdu.org/img/default.jpg" class="privateImage" v-else>
           <div class="ren1">
             <h2 v-if="this.checked==false" @click="dl()">登录/注册</h2>
             <h2 v-if="this.checked==true" @click="dl()">{{this.name}}</h2>
             <div class="ren2">
                <i class="iconfont iconshouji"></i>
                 <h3>暂无绑定手机号</h3>
             </div>
            
           </div> 
             <div>
               <router-link to="/Shou/My/tiu">
                  <i class="iconfont iconyou"></i>
               </router-link>
             </div>
      </div>

      <div class="server">
        <ul>
          <li>
              <div class="server_a">0.00 <span>元</span></div>
              <div>我的余额</div>
          </li>
           <li>
              <div  class="server_b">0<span>个</span></div>
              <div>我的优惠</div>
          </li>
           <li>
              <div  class="server_c">0<span>分</span></div>
              <div>我的积分</div>
          </li>
        </ul>
      </div>
      <div class="login">
           <ul>
             <li class="l1">
                 <i class="iconfont iconicon--copy a"></i>
                 <div class="login-q">
                   <div>我的订单</div>
                 </div>
                 <i class="iconfont iconyou"></i>
             </li>
              <li>
               <i class="iconfont iconshangchengjifenshangcheng_xuanzhong a"></i>
                 <div class="login-q">
                   <div>我的商城</div>
                 </div>
                 <i class="iconfont iconyou"></i>
             </li>
              <li>
               <i class="iconfont iconhuiyuan- a"></i>
                 <div class="login-q">
                   <div>我的会员</div>
                 </div>
                 <i class="iconfont iconyou"></i>
             </li>
              <li  class="l1">
               <i class="iconfont iconfuwu a"></i>
                 <div class="login-q">
                   <div>服务中心</div>
                 </div>
                 <i class="iconfont iconyou"></i>
             </li>
              <li>
               <i class="iconfont iconeliaomo a"></i>
                 <div class="login-q">
                   <div>下载饿了么APP</div>
                   
                 </div>
                 <i class="iconfont iconyou"></i>
             </li>
           </ul>
      </div>
      <Foot></Foot>
    </div>
</template>
<script>
import Hand from '@/hand/hand'
import Foot from '@/hand/footer'
export default {
    components:{
         Hand,
         Foot
      },
      data() {
        return {
          flag:false,
          mm:false,
          name:"",
          checked:""
        }
      },
      created(){
      
      this.userid = this.$store.state.userid;
    this.checked = this.$store.state.checked;
    this.name = this.$store.state.username;
    },
    methods: {
      dl(){
         this.$router.push("/Login")
      }
    },
}
</script>

<style lang="scss" scoped>
       .hand{display: flex;line-height:0.7rem;
         i{color: white;font-size: 0.2rem;}
        h3{color: white;position: absolute;left: 2rem;}
      }
      .ren{width: 100%;height: 1.3rem;background:#3190E8;display:flex;
        .svg{width: 0.8rem;background: white;border-radius: 50%;height: 0.8rem;margin: 0.25rem;}
        .privateImage{width: 0.8rem;border-radius: 50%;height: 0.8rem;margin: 0.25rem;}
        .ren1{margin-top: 0.3rem;width: 2.8rem;
         h2{font-size: 0.3rem;color: white;}
        }
       .ren2{display: flex;color: white;}
       .iconyou{font-size: 0.4rem;line-height:1.3rem;color:white;}
      }
      .server{
         ul{display: flex;
           li{width: 33.2%;height: 1rem;background:white;border-right:0.01rem solid silver;text-align: center;padding-top: 0.2rem;
                .server_a,.server_b,.server_c{
                    font-size: 0.3rem;font-weight: 800;
                    span{font-size: 0.2rem;color: #000;}
                }
                .server_a{
                    color: #FFA318;
                }
                .server_b{color: #FF5F3E;}
                .server_c{color: #6AC20B;}
           }
         }
      }
      .login{
        ul{
          li{width: 100%;background: white;height: 0.5rem;
            display:flex;line-height: 0.5rem;
            .a{margin-left:0.1rem;}
            .login-q{
              div{width: 3.8rem;border-bottom: 1px solid silver;margin-left: 0.1rem; }
            }
            .iconshangchengjifenshangcheng_xuanzhong{color:#FF5F3E;}
            .iconhuiyuan-{color:#FFA318;}
            .iconeliaomo,.iconfuwu{color:#3190E8;}
          }
          .l1{margin-top: 0.1rem;}
        }
      }
</style>