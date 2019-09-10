<template>
   <div>
      <Hand>
         <div slot="a">
            <i class="iconfont iconzuo" @click="$router.go(-1)"></i>
            <div>添加地址</div>
         </div>
           
      </Hand>
   </div>
</template>

<script>
import Hand from "@/hand/hand"
import axios from "axios"
export default {
    components:{
       Hand
    }

}
</script>

<style lang="scss" scoped>
 
   
</style>