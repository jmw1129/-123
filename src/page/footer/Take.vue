<template>
  <div class="take">
    <!-- 头部开始 -->
     
    <header>
      <Head>
        <div slot='a' class="he shou_he">
          <div class="left">
            <router-link to="/Sou">
              <!-- <a-Icon type="search" class="search"/>
               -->
               <i class="iconfont iconsousuo"></i>
            </router-link>
          </div>
          <div class="content">
            {{this.$route.query.name}}
            <!-- {{name}}  -->
          </div>
          <div class="right">
            <router-link to="/Login" v-if='checked==false'>登录注册</router-link>
            <router-link to="/login" v-if="checked==true">
              <a-Icon type="user" class="user"/>
            </router-link>
          </div>
        </div>
      </Head>

      <!-- <Head luyou="/Sou" luyou2="/login" :left=left :content=$route.query.name :icon=icon :login=login></Head> -->
    </header>
    <!-- 头部结束 -->
     <!-- 内容开始 -->
    <van-loading type="spinner" color="#1989fa" v-if="jiazai" class="van" vertical/>
     <div class="shou_content">
       <!-- 导航开始 -->
       <div class="shou_nav swiper-container">
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
         <div class="swiper-pagination"></div>>
       </div>
       <!-- 导航结束 -->
       <!-- 附近商家开始 -->
       

       <div class="shops">
         <div class="fujin">
           <i class="el-icon-shopping-cart-1"></i>
           附近商家
         </div>
         <!-- 单个商家开始 -->
        
          <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          >
         <div class="shops_one" v-for='(v,i) in shops' :key="i" @click="details(v)">
          
         
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
                <van-rate
                    v-model="v.rating"
                    allow-half
                    void-icon="star"
                    void-color="#eee"
                    aria-setsize="1"
                    size="10px"
                />
                 <div class="left_rating">{{v.rating}}</div>
                 <div class="left_num">月售{{v.recent_order_num}}单</div>
               </div>
               <div class="li_right">
                 <div class="right_text">蜂鸟专送</div>
                 <div class="right_name">准时达</div>
               </div>
             </li>
             <li class="ul_c">
               <div class="li_left">￥{{v.float_minimum_order_amount}} / 配送费约￥{{v.float_delivery_fee}}</div>
               <div class="li_right">{{v.distance}} / <span>{{v.order_lead_time}}</span></div>
             </li>
           </ul>
         </div>
         <!-- 单个商家结束 -->
         </van-list>
       </div>
       <!-- 附近商家结束 -->
      
         

     </div>
     <!-- 内容结束 -->
     <Foot></Foot>
  </div>
</template>

<script>

  import Head from '@/page/header/Head'
  import Foot from '@/hand/footer'
  import Swiper from 'swiper'
  import axios from 'axios'
  export default {
    name: 'Take',
    components:{Head,Foot},
    data() {
      return {
        swiper:[], // 轮播
        shops:[], // 附近商家
        flag:false,
        name:'',
       jiazai:false,
        loading: false,
      finished: false,
      checked:"",
       userid:"",
        geohash:"",
        latitude:"",
        longitude:"",
        num:0
      }
    },
    created() {

      if(localStorage.getItem('login')){
      this.flag = true
      }
     this.name=this.$route.query.name


      // 获取轮播数据
      axios.get('http://elm.cangdu.org/v2/index_entry?geohash='+`${this.$route.query.geohash}`+'&group_type=1&flags[]=F').then((res)=>{
        // console.log(res.data)
        this.swiper=this.getStr(res.data)
      }).then(()=>{
        new Swiper ('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })

      // 附近商家
      this.jiazai=true
      
      axios.get(`http://elm.cangdu.org/shopping/restaurants?latitude='${this.latitude}'&longitude='${this.longitude}'&offset='${this.sum}'&limit=10&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=`).then((res)=>{
        // console.log(res)
          this.shops=res.data
          this.jiazai=false
      })

    },
    mounted(){
        this.geohash= this.$route.query;
      this.checked=this.$store.state.checked;
      this.latitude=this.$store.state.latitude;
      this.longitude=this.$store.state.longitude;
    },
    methods:{
      // 轮播切分数组
        getStr(str) {
            var arr = [];
            for (var i = 0, j = 0; i < str.length; i += 8, j++) {
                arr[j] = str.slice(i, i + 8);
            }
            return arr;
        },
         onLoad() {
            // 异步更新数据
            setTimeout(() => {
              
              this.num=this.num+10;
            axios.get(`http://elm.cangdu.org/shopping/restaurants?latitude='${this.latitude}'&longitude='${this.longitude}'&offset=${this.num}&limit=${this.num}&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=`).then((res)=>{
              // console.log(res.data)
             if(this.shops.length<1000){
               this.shops=this.shops.concat(res.data)
             }
             
            })
              // 加载状态结束
              this.loading = false;

              // 数据全部加载完成
              if (this.shops.length >= 1000) {
                this.finished = true;
              }
            }, 2000);
    },
    details(v){
      this.$router.push(`/shipping?id=${v.id}`)
    }
      
    }
  }
    
  
</script>

<style lang="scss" scoped>
    //  .take{position: fixed;top: 0;}
      .iconsousuo{
        color: white;font-size: 0.2rem;
      }
    //  .van{position: absolute;top: 3rem;left:2rem;}
</style>
