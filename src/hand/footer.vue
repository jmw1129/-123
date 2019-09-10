<template>
    <div>
<footer>
      
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
      
    </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
/* 尾部开始 */
  footer{
    height: 0.6rem;
    background: white;
    border-top: 1px solid gainsboro;
    bottom: 0;
    /* line-height: 0.5rem; */
    .shou_f{
      width: 25%;
      text-align:center;
      // line-height:0.5rem;
      /* i{
        margin-top: 0.05rem;
        font-size: 0.26rem;
      } */
      div{
        font-size: 0.2rem;
        color: gray;
      }
      i{
        font-size: 0.2rem;
      }
    }
    .router-link-exact-active{color: #3B93E5;
    //  div{color: #3B93E5;}
    }
  }
  /* 尾部结束 */
</style>