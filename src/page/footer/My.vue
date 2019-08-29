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
           <svg v-if="flag==false" class="svg" viewBox="0 0 122 122" id="avatar-default" width="100%" height="100%"><path fill="#DCDCDC" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z">
           </path></svg>
           <img data-v-0fc4ab7a="" src="//elm.cangdu.org/img/default.jpg" class="privateImage" v-else>
           <div class="ren1">
             <h2>登录/注册</h2>
             <div class="ren2">
                <i class="iconfont iconshouji"></i>
                 <h3>暂无绑定手机号</h3>
             </div>
            
           </div> 
           <i class="iconfont iconyou"></i>
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
  </div>

</template>

<script>
import Hand from '@/hand/hand'
  export default {
      components:{
         Hand
      },
      data() {
        return {
          flag:false
        }
      },
      created(){
      if(localStorage.getItem('login')){
        this.flag = true
      }
      
    },
   }
  
</script>

<style lang="scss" scoped>
      .hand{display: flex;line-height:0.7rem;
         i{color: white;font-size: 0.2rem;}
        h3{color: white;width: 5rem;text-align: center;}
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
