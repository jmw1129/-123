<template>
  <div id="ding">
    <!-- 头部开始 -->
    <header>
        <div slot='a' class="he ding_he" style="height:0.5rem">
          <div class="left" style="float: left">
            ele.me
          </div>
          <!-- <div class="content"></div> -->
          <div class="right" style="float: right">
            <router-link to="/Login" v-if='checked==false'>登录注册</router-link>
            <router-link to="/login" v-if='checked==true'><a-Icon type="user" /></router-link>
          </div>
        </div>
    </header>
    <!-- 头部结束 -->
    <!-- 当前定位城市开始 -->
    <div class="ding_a">
      <div class="ding_a1">当前定位城市 ：</div>
      <div class="ding_a2">定位不准时，请在城市列表中选择</div>
    </div>
    <!-- 当前定位城市结束 -->
    <!-- 定位城市开始 -->
    <div class="ding_b">
      <router-link :to="'/Sou?id='+`${this.the_city.id}`">
      <div class="ding_b1">
        {{this.the_city.name}}
      </div>
      <div class="ding_b2"><i class="el-icon-arrow-right"></i></div>
      </router-link>
    </div>
    <!-- 定位城市结束 -->
    <!-- 热门城市开始 -->
    <div class="hot">
      <div class="title">热门城市</div>
      <div style="color: #3792E5" class="city" v-for='(v,i) in hot_city' :key="i">
        <router-link :to="'/Sou?id='+`${v.id}`" style="color: #3792E5">{{v.name}}</router-link>
      </div>
    </div>
    <!-- 热门城市结束 -->
    <!-- 全部城市开始 -->
    <div class="hot" v-for='(v,i) in cities_key' :key="i">
      <div class="title">{{v}}</div>
      <div class="city" v-for='(item,value) in cities[v]' :key="value">
        <router-link :to="'/Sou?id='+`${item.id}`+'&item='+`${v}`" style="color: black">{{item.name}}</router-link>
      </div>
    </div>
    <!-- 全部城市结束 -->
  </div>
</template>

<script>
  import Head from '@/page/header/Head'
import axios from 'axios'
  export default {
    name: 'Ding',
    components:{Head},  
    data() {
      return {
        the_city:{}, // 当前城市
        hot_city:[], // 热门城市
        cities:[], // 全部城市
        cities_key:[], // 全部城市键
        flag:false,
        checked:"",
        userid:"",
        geohash:"",
        latitude:"",
        longitude:"",

      }
    },
    
    created(){
      // if(localStorage.getItem('login')){
      //   this.flag = true
      // }
      
    },
    mounted() {
       // 获取当前城市
      axios.get('http://elm.cangdu.org/v1/cities?type=guess').then((res)=>{
        // console.log(res)
        this.the_city=res.data
        // console.log(res.data.id)
      })

      // 获取热门城市
      axios.get('http://elm.cangdu.org/v1/cities?type=hot').then((res)=>{
        // console.log(res)
        this.hot_city=res.data
      })

      // 获取全部城市
      axios.get('http://elm.cangdu.org/v1/cities?type=group').then((res)=>{
        // console.log(res.data)
        // 全部城市
        this.cities=res.data
        // 全部城市键
        this.cities_key=Object.keys(res.data).sort()
      })
      this.geohash= this.$route.query;
      this.checked=this.$store.state.checked;
      this.latitude=this.$store.state.latitude;
      this.longitude=this.$store.state.longitude;
    },
  }

</script>

<style lang="scss">
#ding{
  /* 头部开始 */
  background: #F5F5F5;
    /* 头部结束 */
    /* 当前定位城市开始 */
    .ding_a{
      border-bottom: 1px solid #E2E2E2;
      line-height:0.3rem;
      font-size: 0.14rem;
      color: gray;
      background: white;
    }
    /* 当前定位城市结束 */
    /* 定位城市开始 */
    .ding_b{
      border-bottom: 1px solid #E2E2E2;
      line-height:0.2rem;
      font-size: 0.2rem;
      color: gray;
      background: white;
      .ding_b1{
        color:#3792E5;
        a{
          color:#3792E5;
        }
      }
    }
    /* 定位城市结束 */
}
</style>
