<template>
    <div>
         <Hand>
         <div slot="a" class="compile">
             <i class="iconfont iconzuo" @click="$router.go(-1)"></i>
             <h3>搜索地址</h3>
             
          </div>
          
        </Hand>
        <div class="dis">
            <div class="searchw">
              <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="inputval">
              <input type="button" value="提交" @click="add()">
        </div>
        
        <div class="warnpart">为了满足商家的送餐要求，建议您从列表中选择地址</div>
        <div class="for">
             <ul>
                 <li v-for="(v,i) in data" :key="i" @click="jia(v)">
                     
                         <div style="color:#000">{{v.name}}</div>
                        <div>{{v.address}}</div>
                    
                 </li>
             </ul>
        </div>
        <div class="point">
            <p>找不到地址？</p> 
            <p>请尝试输入小区、写字楼或学校名</p> 
            <p>详细地址（如门牌号）可稍后输入哦。</p>
      </div>
        </div>
        
    </div>
</template>

<script>
import Hand from "@/hand/hand"
import axios from "axios"
import $ from "jquery"

export default {
    components:{Hand},
    data() {
        return {
            inputval:"",
            data:[]
        }
    },
   methods: {
       add(){
          axios.get(`http://elm.cangdu.org/v1/pois?type=nearby&keyword=${this.inputval}`).then((res)=>{
              //console.log(res)
              this.data=res.data
          })
          $(".point").css({display:"none"})
       },
       jia(v){
           
          this.$router.push(`/Shou/My/add?name=${v.name}`)
       },
      
   },
}
</script>

<style lang="scss" scoped>
     .compile {color: white;line-height: 0.6rem;
        display: flex;
        i{margin-left: 0.3rem;}
        h3{width: 3.5rem;text-align: center;line-height: 0.6rem;}
    }
    .searchw{width: 100%;height: 0.8rem;background:white;padding: 0.15rem 0.1rem;
        input[type=text]{width: 78%;height: 0.5rem;background: white;background: #f4f4f4;border-radius: 0.1rem;}
         input[type=button]{width: 20%;height: 0.5rem;background: #3199E8;border-radius: 0.1rem;color:white;}
    }
    .warnpart{
        width: 100%;height: 0.3rem;background: #FFF6E4;color: #FFA76D;text-align: center;line-height: 0.3rem;
    }
    .point{text-align: center;margin-top: 2rem;
        p{font-size: 0.2rem;color: silver;margin-top: 0.1rem;}
    }
    .for{
        ul{
            li{width: 100%;height: 0.8rem;border-bottom: 1px solid silver;background: #F5F5F5;
              div{padding-top: 0.1rem;color:silver;}
            }
        }
    }
</style>