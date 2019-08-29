<template>
  <div class="search">
    <!-- 头部开始 -->
    <header>
      <Head>
        <div slot='a' class="he my_he">
          <div class="left">
            <a-Icon type="left" @click='$router.go(-1)' />
          </div>
          <div class="content">搜索</div>
        </div>
      </Head>
    </header>
    <!-- 头部结束 -->
    <!-- 搜索开始 -->
    <div class="s_search">
      <div>
        <input type="text" placeholder="请输入商家或美食名称" />
        <input type="button" value="提交" />
      </div>
    </div>
    <!-- 搜索结束 -->
    <!-- 搜索历史开始 -->
    <div class="s_his">
      <h3 style="width: 100%;height:0.5rem;font-size:0.2rem;line-height:0.5rem;padding-left:13%;">搜索历史</h3>
      <div class="s_his_odd">
        <div class="s_left">左</div>
        <div class="s_right">
          <a-Icon type="close"/>
        </div>
      </div>
      <div class="clear">清空搜索历史</div>
    </div>
    <!-- 搜索历史结束 -->
</div>
</template>

<script>
  import axios from 'axios'
  import Head from '@/page/header/Head'
  export default {
    name: 'Search',
    components:{Head},
    data() {
      return {

      }
    },
    mounted() {
      axios.get('http://elm.cangdu.org/v4/restaurants?extras').then((res)=>{
        console.log(res)
      })
    },
  }
</script>

<style lang="scss">
.search{
  width: 100%;
  height: 100%;
  background: #F5F5F5;
  .s_search{
    width: 100%;
    height:0.6rem;
    background:white;
    text-align:center;
    line-height:0.6rem;
    font-size: 0.2rem;
    input[type='text']{
      width: 60%;
      height: 0.4rem;
      border: 1px solid gainsboro;
      background: #F5F5F5;
      border-radius: 0.05rem;
      box-sizing: border-box;
      padding: 0.05rem
    }
    input[type='button']{
      width: 15%;
      height: 0.4rem;
      background: #3190E8;
      color: white;
      text-align: center;
      line-height: 0.4rem;
      border-radius: 0.05rem;;
    }
  }
  .clear{
    width: 100%;
    height:0.6rem;
    font-size:0.26rem;
    line-height:0.6rem;
    text-align:center;
    color: #3190E8;
    font-weight: 600;
    background: white;
    margin-top: 0.02rem;
  }
  .s_his{
    width: 100%;
    .s_his_odd{
      width: 100%;
      height: 0.6rem;
      background: white;
      box-sizing: border-box;
      padding: 0rem 0.2rem;
      line-height: 0.6rem;
      font-size: 0.24rem;
      margin-top:0.02rem;
      .s_left{
        float: left;
      }
      .s_right{
        float: right;
        font-size: 0.2rem;
      }
    }
  }

}
</style>
