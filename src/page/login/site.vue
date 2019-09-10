<template>
    <div>
        <Hand>
          <div slot="a" class="compile">
             <i class="iconfont iconzuo"  @click="$router.go(-1)"></i>
             <h3>编辑地址</h3>
             <div @click="bj()" class="bj" v-show="flag==false">编辑</div>
             <div  class="wc" v-show="flag==true">完成</div>
          </div>
        </Hand>
        <div class="aa">
           <ul>
               <li v-for="(v,i) in list" :key="i">
                   <div class="addres">
                        <div>{{v.address}}</div>
                        <div>{{v.phone}}</div>
                   </div>
                  
                   <div class="del"  @click="del(i,v.id)" v-show="flag==true">X</div>
               </li>
           </ul>
        </div>
       <router-link to="/Shou/My/add">
       <div class="orider">
            <div>新增地址</div>
            <i class="iconfont iconyou"></i>
       </div>
       </router-link>
    </div>
</template>

<script>
import Hand from "@/hand/hand"
import axios from "axios"
import $ from "jquery"
// import axios from "axios"
export default {
    components:{
        Hand
    },
    data () {
        return {
            list:[],
            flag:""
        }
    },
   mounted() {
       axios.get(`http://elm.cangdu.org/v1/users/38384/addresses`).then((res)=>{
          console.log(res)
            this.list=res.data
       })
   },
   created() {
       this.userid = this.$store.state.userid;
   },
   methods: {
       bj(){
          this.flag=true
       },
       del(i,id){
           axios.delete(`http://elm.cangdu.org/v1/users/38384/addresses/${id}`).then((res)=>{
               console.log(res)
               if(res.data.success){
                   this.list.splice(i,1)
               }
           })
       }
   },
}
</script>

<style lang="scss" scoped>
    .compile {color: white;line-height: 0.6rem;
        display: flex;
        i{margin-left: 0.3rem;}
        h3{width: 3.5rem;text-align: center;line-height: 0.6rem;}
    }
    .orider{font-size: 0.2rem;margin-top: 0.2rem;
        display: flex;
        width: 100%;height: 0.6rem;background: white;line-height: 0.6rem;
        div{width: 4rem;margin-left: 0.2rem;color:#000;}
        i{color: silver;}
    }
    .aa{
        ul{
            li{background: white;margin-top: 0.2rem;display: flex;
                width: 100%;height: 0.7rem;
                .addres{width: 4.3rem;
                    div{padding-top: 0.1rem;}
                }
                
                .del{line-height: 0.7rem;}
            }
            li:nth-child(1){background: #FFF8C3;}
        }
    }
</style>