<template>
  <div id="shou">
    
 
    <!-- 内容开始 -->
    <!-- <div class="shou_content"> -->
      <!-- 导航开始 -->
      <!-- <div class="shou_nav swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide shou_nav_n">
              <ul v-for='(v,i) in swiper[0]' :key="i">
                <img :src="'https://fuss10.elemecdn.com'+v.image_url" />
                <li>{{v.title}}</li>
              </ul>
            </div>
            <div class="swiper-slide shou_nav_n">
              <ul v-for='(v,i) in swiper[1]' :key="i">
                <img :src="'https://fuss10.elemecdn.com'+v.image_url" />
                <li>{{v.title}}</li>
              </ul>
            </div>
        </div>
      </div> -->
      <!-- 导航结束 -->
      <!-- 附近商家开始 -->
      <!-- <div class="shops">
        <div class="fujin">
          <i class="el-icon-shopping-cart-1"></i>
          附近商家
        </div> -->
        <!-- 单个商家开始 -->
        <!-- <div class="shops_one" v-for='(v,i) in shops' :key="i">
          <div class="one_a"><img :src="'https://elm.cangdu.org/img/'+v.image_path" /></div>
          <ul>
            <li class="ul_a">
              <div class="li_left">
                <div>品牌</div>
                <h3>{{v.name}}</h3>
              </div>
              <div class="li_right">
                <div v-for='(item,value) in v.supports' :key="value">{{item.icon_name}}</div>
              </div>
            </li>
            <li class="ul_b">
              <div class="li_left">
                  <el-rate v-model="v.rating" value=v.rating ></el-rate>
                <div class="left_rating">{{v.rating}}</div>
                <div class="left_num">月售{{v.recent_order_num}}单</div>
              </div>
              <div class="li_right">
                <div class="right_text">{{v.delivery_mode.text}}</div>
                <div class="right_name">{{v.supports[1].name}}</div>
              </div>
            </li>
            <li class="ul_c">
              <div class="li_left">￥{{v.float_minimum_order_amount}} / 配送费约￥{{v.float_delivery_fee}}</div>
              <div class="li_right">175.8公里 / <span>28分钟</span></div>
            </li>
          </ul>
        </div> -->
        <!-- 单个商家结束 -->
      <!-- </div> -->
      <!-- 附近商家结束 -->
    <!-- </div> -->
    <!-- 内容结束 -->

    <!-- <Take_out></Take_out> -->
        <keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        </keep-alive>
    <!-- 尾部开始 -->
    <footer>
      
      <div class="shou_f">
        <router-link to="/Shou/Take">
          <i class="el-icon-eleme"></i>
        <div>外卖</div>
        </router-link>
      </div>  
      
      
      <div class="shou_f">
        <router-link to="/Shou/Search">
        
        <div>搜索</div>
        </router-link>
      </div>
      
      
      <div class="shou_f">
        <router-link to="/Shou/Order">
        
        <div>订单</div>
        </router-link>
      </div>
      
      
      <div class="shou_f">
        <router-link to="/Shou/My">
        <i class="el-icon-user"></i>
        <div>我的</div>
        </router-link>
      </div>
      
    </footer>
    
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
        // swiper:[], // 轮播
        // shops:[] ,// 附近商家
        // cname:''
        
      }
    },
    
    // created() {
    //   if(this.$route.query.name){
    //     this.cname = this.$route.query.name
    //   }else{
    //     this.cname = '北京'
    //   }
      // console.log(this.$route.query.name)
    // },
    // created() {
    //   // 获取轮播数据
    //   axios.get('http://elm.cangdu.org/v2/index_entry?geohash=39.78493,116.49476&group_type=1&flags[]=F').then((res)=>{
    //     // console.log(res.data)
    //     this.swiper=this.getStr(res.data)
    //   })

    //   // 附近商家
    //   axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset=0&limit=30&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=').then((res)=>{
    //     console.log(res.data)
    //     this.shops=res.data
    //   })

    // },
    // mounted(){
    //   new Swiper ('.swiper-container', {
    //   loop: true
    //   })
    // },
    // methods:{
    //   // 轮播切分数组
    //     getStr(str) {
    //         var arr = [];
    //         for (var i = 0, j = 0; i < str.length; i += 8, j++) {
    //             arr[j] = str.slice(i, i + 8);
    //         }
    //         return arr;
    //     }
    // }
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
  /* 尾部开始 */
  footer{
    background: white;
    border-top: 1px solid gainsboro;
    bottom: 0;
    /* line-height: 0.5rem; */
    .shou_f{
      width: 25%;
      text-align:center;
      line-height:0.5rem;
      /* i{
        margin-top: 0.05rem;
        font-size: 0.26rem;
      } */
      div{
        font-size: 0.2rem;
        color: gray;
      }
    }
  }
  /* 尾部结束 */
}
</style>
