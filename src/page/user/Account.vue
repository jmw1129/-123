<template>
<div class="account">
    <!-- 头部开始 -->
    <header>
      <Head>
        <div slot='a' class="he account_he">
          <div class="left">
            <a-Icon type="left" @click='$router.go(-1)' />
          </div>
          <div class="content">账户信息</div>
        </div>
      </Head>
    </header>
    <!-- 头部结束 -->
    <!-- 头像开始 -->
    <div class="photo" style="line-height:1rem;height: 1rem;border-top:1px solid gainsboro;margin-top: 0.2rem">
      <div class="photo_left">头像</div>
      <div class="photo_right">
          
      </div>
    </div>
    <!-- 头像结束 -->
</div>
</template>

<script>
import Head from '@/page/header/Head'    
export default{
    name:'Account',
    components:{Head},
}
</script>

<style lang="scss">
.account{
  width: 100%;
  height: 100%;
  background: #F5F5F5;
  .photo{
    width: 100%;
    height:0.6rem;
    border-bottom:1px solid gainsboro;
    background:white;
    line-height:0.6rem;
    padding:0rem 0.2rem;
    font-size:0.2rem;
    .photo_left{
      float: left;
    }
    .photo_right{
      float: right;
    }
  }
}
</style>

