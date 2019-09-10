<template>
  <div id="sou">
    <!-- 头部开始 -->
    <header>
      <Head>
        <div slot='a' class="he sou_he">
          <div class="left">
            <a-Icon type="left" @click='$router.go(-1)' />
          </div>
          <div class="content">{{city_name.name}}</div>
          <div class="right">
            <router-link to="/Ding">切换城市</router-link>
          </div>
        </div>
      </Head>
      <!-- <Head luyou2="/Ding" left="<" luyou="/Ding" :content=this.city_name.name :login=login></Head> -->
    </header>
    <!-- 头部结束 -->
    <!-- 搜索框开始 -->
    <div class="search">
      <input type="text" placeholder="输入学校、商务楼、地址" v-model='val' />
      <input type="button" value="提交" @click="search()" />
    </div>
    <!-- 搜索框结束 -->
    <!-- 搜索历史开始 -->
    <div class="history">
      <div class="s_h">搜索历史</div>
      <!-- 查找所有 -->
      <div class="s_nei" v-for='(v,i) in history' :key='i' @click='shis(v)' v-show='show==true'>
        <!-- <router-link :to="'/Shou/Take?name='+`${v.name}`+'&geohash'+`${v.geohash}`"> -->
        <div style="color: black">{{v.name}}</div>
        <div class="s_n">{{v.address}}</div>
        <!-- </router-link> -->
      </div>
      <!-- 搜索历史 -->
      <div class="s_nei his" v-for='(v,i) in shuju' :key='i'  @click='shis(v)' v-show='show==false'>
        <!-- <router-link :to="'/Shou/Take?name='+`${v.name}`+'&geohash'+`${v.geohash}`"> -->
        <div style="color: black" @click="chuan(v)">{{v.name}}</div>
        <div class="s_n">{{v.address}}</div>
        <!-- </router-link> -->
      </div>
    </div>
    <!-- 搜索历史结束 -->
    <!-- 清空所有开始 -->
    <div class="clear" @click='clear()'>清空所有</div>
    <!-- 清空所有结束 -->
  </div>
</template>

<script>
  import axios from 'axios'
  import Head from '@/page/header/Head'
  import $ from "jquery"
  export default {
    name: 'Sou',
    components:{Head},
    data() {
      return {
        val:'',
        city_name:{},
        history:[], // 查找所有
        shuju:[], // 历史纪录
        show:false,
        
      }
    },
   
    methods: {
      search(){
        this.show = true
        // console.log(this.val)
        var path = 'http://elm.cangdu.org/v1/pois?type=search&city_id='+`${this.$route.query.id}`+'&keyword='+`${this.val}`
        axios.get(path).then((res)=>{
          this.history=res.data
        })
        $(".s_h").css({display:"none"})
      },
      // 搜索历史
      shis(v){
        // console.log(v.geohash)
        this.show = false
        var arr = JSON.parse(localStorage.getItem('data'))||[]
        var obj = {name:v.name,address:v.address,geohash:v.geohash}
          this.$store.commit("add",v.geohash)
        
        var index = arr.findIndex((item,value,arr)=>{
          return v.name == item.name
        })
        this.$router.push({path:"/Shou/Take",query:{geohash:v.geohash}})
        if(index==-1){
          arr.push(obj)
          
        }else{
          return false
        }
        
          localStorage.setItem('data',JSON.stringify(arr))
      },
      // 清空
      clear(){
        var arr = JSON.parse(localStorage.getItem('data'))||[]
        arr = []
        this.shuju = arr
        localStorage.setItem('data',JSON.stringify(arr))
      },
      chuan(v){
         this.$router.push(`/Shou/My?name=${v.name}`)
      }
    },
    mounted() {
      // id
      var id = this.$route.query.id;
    
      var path = 'http://elm.cangdu.org/v1/cities/'+id
      axios.get(path).then((res)=>{
        if(id==undefined){
           this.city_name=""
        }else{
          this.city_name=res.data
        }
      
      })

      var arr = JSON.parse(localStorage.getItem('data'))||[]
      this.shuju = arr
      
       
    },
  }
</script>

<style lang="scss">
#sou{
  background: #F5F5F5;
  /* 头部开始 */
  
  /* 头部结束 */
  /* 搜索框开始 */
  .search{
    width: 100%;
    height: 1.5rem;
    margin-top: 0.1rem;
    border-top: 1px solid #E3E3E3;
    border-bottom: 1px solid #E3E3E3;
    background: white;
    input{
      width:90%;
      height:0.5rem;
      border-radius:0.02rem;
      margin-top: 0.15rem;
      margin-left:0.2rem;
      font-size: 0.16rem;
    }
    input[type='text']{
      border: 1px solid gainsboro;
      padding: 0.1rem;
    }
    input[type='button']{
      background: #3792E5;
      color: white;
      text-align: center;
      line-height: 0.4rem;
    }
  }
  /* 搜索框结束 */
  /* 搜索历史开始 */
  .history{
    .s_h{
      width: 100%;
      height:0.3rem;
      font-size:0.14rem;
      border-top:1px solid #E3E3E3;
      border-bottom:2px solid #E3E3E3;
      line-height:0.3rem;
      padding-left:0.1rem;
    }
    .s_nei{
      width: 100%;
      height: 1rem;
      background: white;
      border-bottom: 1px solid #E3E3E3;
      padding: 0.1rem 0.2rem;
      font-size: 0.2rem;
      line-height: 0.4rem;
      .s_n{
        font-size: 0.16rem;
        color:gray;
        width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        /* margin-top:0.1rem; */
      }
    }
  }
  /* 搜索历史结束 */
  /* 清空所有开始 */
  .clear{
    width: 100%;
    height: 0.6rem;
    background: white;
    font-size: 0.22rem;
    text-align: center;
    line-height: 0.6rem;

  }
  /* 清空所有结束 */
}
</style>
