<template>
  <div id="shou">
    
    <!-- <Take_out></Take_out> -->
        <keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        </keep-alive>
    <!-- 尾部开始 -->
    <!-- <footer>
      
      <div class="shou_f">
        <router-link to="/Shou/Take">
          <i class="iconfont iconSSS"></i>
          <div>外卖</div>
        </router-link>
      </div>  
      
      
      <div class="shou_f">
        <router-link to="/Shou/Search">
         <i class="iconfont iconzhinan"></i>
        <div>搜索</div>
        </router-link>
      </div>
      
      
      <div class="shou_f">
        <router-link to="/Shou/Order">
          <i class="iconfont iconicon-1"></i>
        <div>订单</div>
        </router-link>
      </div>
      
      <div class="shou_f">
        <router-link to="/Shou/My">
          <i class="iconfont iconwode"></i>
          <div>我的</div>
        </router-link>
      </div>
      
    </footer> -->
    
    <!-- 尾部结束 -->
  </div>
</template>

<script>
  // import Take_out from '@/page/footer/Take_out'
// import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

  // import axios from 'axios'
  export default {
    name: 'Shou',

    // components:{Take_out},
    data() {
      return {
        
        
      }
    },
    
  
  }
</script>

<style lang="scss">


#shou{
  background: #F5F5F5;
  /* 头部开始 */
  
  /* 头部结束 */
  /* 内容开始 */
  .search{font-size: 0.3rem;}
  .user{font-size: 0.3rem;}
  .shou_content{
    width: 100%;
    min-height: 1;
    flex-grow: 1;
    /* padding: 0.5rem 0rem; */
    /* 导航开始 */
    .shou_nav{
      width: 100%;
      height: 3rem;
      background: white;
      border-bottom:1px solid #E2E2E2;
      .shou_nav_n{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        ul{
          width:25%;
          height:1rem;
          text-align:center;
          img{
            width: 0.8rem;
            height: 0.8rem;
            margin-top: 0.15rem;
          }
        }
      }
    }
    /* 导航结束 */
    /* 附近商家开始 */
    .shops{
      width: 100%;
      background: white;
      .fujin{
        width: 100%;
        height:0.4rem;
        padding:0.1rem 0.2rem;
        color:gray;
      }
      /* 单个商家开始 */
      .shops_one{
        width: 100%;
        height: 1.5rem;
        border-bottom: 1px solid #E2E2E2;
        display: flex;
        .one_a{
          width: 18%;
          height:100%;
          img{
            width:0.9rem;
            height:0.9rem;
            margin:0.3rem 0.2rem;
          }
        }
        ul{
          width: 78%;
          height: 100%;
          /* background: red */
          li{
            width:100%;
            height:0.35rem; 
          }
          .ul_a{
            margin-top: 0.3rem;
            .li_left{margin-left: 0.4rem;
              display: flex;
              div{
                width: 0.4rem;
                height:0.2rem;
                background:#FFD845;
                text-align:center;
                border-radius:2px;
              }
              h3{
                width: 1rem;
                margin-left: 0.1rem;
                margin-top: -0.05rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow:ellipsis;
              }
            }
            .li_right{
              display: flex;
              div{
                width:0.2rem;
                height:0.2rem;
                border:1px solid gainsboro;
                font-size:0.12rem;
                color:gray;
                margin-left:0.05rem;
                text-align: center;
                line-height: 0.2rem;
              }
            }
          }
          .ul_b{
            .li_left{margin-left: 0.3rem;
              display: flex;
              .el-rate_icon{
                font-size: 0.16rem !important;
                margin-right:0 !important;
              }
              .left_rating{
                font-size: 0.14rem;
                color: #FC992F;
                margin-left: 0.1rem;
              }
              .left_num{
                font-size:0.12rem;
                color: gray;
                margin-left: 0.1rem;
                margin-top: 0.02rem;
              }
            }
            .li_right{
              display: flex;
              font-size: 0.08rem;
              div{
                height:0.2rem;
                text-align:center;
                border-radius:2px;
                margin-left:0.05rem;
              }
              .right_text{
                width: 0.6rem;
                background:#3B93E5;
                color:white;
                line-height:0.2rem;
              }
              .right_name{
                width: 0.5rem;
                border:1px solid #3B93E5;
                color:#3B93E5;
                line-height:0.15rem;
              }
            }
          }
          .ul_c{
            padding: 0 0.1rem;
            color: gray;
            font-size:0.14rem;
            .li_left{margin-left: 0.3rem}
            .li_right{margin-left: 0.11rem;
              span{
                color:#3B93E5;
              }
            }
          }
        }
      }
      /* 单个商家结束 */
    }
    /* 附近商家结束 */
  }
  /* 内容结束 */
  
}
</style>
