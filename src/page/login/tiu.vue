<template>
    <div>
        <Hand>
            <div slot="a" class="hand">
                <i class="iconfont iconzuo"   @click="$router.go(-1)"></i>
                <h3>账户信息</h3>
            </div>
        </Hand>

        <div class="list">
            <ul>
                <li>
                    <div class="left">头像</div>
                    <div class="input">
                        <input type="file" class="file" ref="inp" @change="avatarimg()"/>
                        <img :src="'//elm.cangdu.org/img/'+this.$store.state.avatar" alt="" v-if="this.$store.state.avatar" class="privateImage" >
                        <img data-v-008f1529="" data-v-0fc4ab7a="" src="//elm.cangdu.org/img/default.jpg" class="privateImage" v-else>
                    </div>
                    <div class="right">
                          <i class="iconfont iconyou"></i>
                    </div>
                </li>
                
                <li @click="bjname()">
                    <div class="left">用户名</div>
                    <div class="right">
                       <h3>{{this.oldname}}</h3>
                       <h3></h3>
                       <i class="iconfont iconyou"></i>
                    </div>
                </li>

                <li>
                    <router-link to="/Shou/My/site">
                    <div class="left" style="color:#000">收货地址</div>
                    <div class="right" style="position: relative;bottom:0.6rem;left:4.1rem">
                       <i class="iconfont iconyou"></i>
                    </div>
                    </router-link>
                </li>
                
                <div class="bang">绑定号码</div>
                <li>
                    
                     <div class="left"><i class="iconfont iconshouji"></i>手机</div>
                    <div class="right">
                      
                       <i class="iconfont iconyou"></i>
                    </div>
                </li>

                  <div class="bang">安全设置</div>
                  <router-link to="/Reset">
                   <li style="height:0.6rem;border-bottom:1px solid silver">
                     <div class="left" style="color:#000;margin-top:-0.2rem">登录密码</div>
                    <div class="right">
                       <h3>修改</h3>
                       <i class="iconfont iconyou" style="margin-top:-0.2rem"></i>
                    </div>
                </li>
                  </router-link>
               
            </ul>
            <input type="button" value="退出登录" name="a" id="login" @click="login">
            
        </div>
        <div class="della">
            <div class="dell" v-show="del==true">
              <h2>!</h2>
              <h3>你是否退出登录</h3>
              <section>
                  <button @click="dd()">再等等</button>
                  <button @click="ok()">确定退出</button>
              </section>
           </div>
        </div>
           
    </div>
</template>

<script>
import Hand from "@/hand/hand"
import axios from "axios"
export default {
    components:{
        Hand
    },
    data () {
        return {
            name:"",
            userInfo:"",
            oldname:"",
            del:""
        }
    },
    methods: {
      
        bjname(){
            this.$router.push("/Shou/My/user")
        }
    },
    mounted() {
        this.name=this.$store.state.username
        this.userid=this.$store.state.userid
        this.oldname=this.$store.state.oldname
    },
    methods:{
        //选择具体文件的时候，会触发change事件
        avatarimg(){
            let input=this.$refs.inp;
            // console.log(input.files[0])
            //fromData 数据类型保存文件
            let data= new FormData
            data.append("file",input.files[0])//什么类型，传具体的文件
            //修改请求头  content-type类型
            // let headers={headers:{"Content-Type":"multipart/from-data"}}
            axios.post('http://cangdu.org:8001/eus/v1/users/'+this.userid+'/avatar',
             data, 
            
             {headers:{"Content-Type":"multipart/from-data"}}
            ).then((res)=>{
                // console.log(res)
                // this.avatar=res.data.image_path
                // console.log(res.data.image_path);
                
                this.$store.commit("avatar",res.data.image_path)
            })
        },
        bjname(){
            this.$router.push("/Shou/My/user")
        },
        login(){
           this.del=true
        },
        dd(){
            this.del=false
        },
        ok(){
            
            localStorage.clear()
            this.del=false
        }
    }
}
</script>

<style lang="scss">
    .hand{line-height: 0.6rem;display:flex;color:white;
          .iconzuo{font-size: 0.2rem;margin-left: 0.2rem;}
          h3{width: 5.5rem;text-align: center;}
    }
    .list{
        ul{
            li{position: relative;display: flex; width: 100%;height: 0.6rem;background: white;border: 1px solid silver;border-left: none;border-right: none;
              .left{
                    margin-left: 0.2rem;font-size: 0.2rem;line-height:0.6rem;
              }
               .right{display: flex;position: absolute;right:0.1rem;line-height:0.6rem;color:silver;
                   .iconyou{font-size: 0.3rem;}
               }
               .file{position: absolute;top: 0;left:0;opacity: 0; width: 100%;height: 100%; bottom: 0;}
            .privateImage{width: 0.6rem;height: 0.6rem;border-radius: 50%;position: absolute;right: 0.5rem;margin-top: 0.2rem;}
            }
            li:nth-child(1){border-bottom:none;
                margin-top: 0.2rem;
                height: 1rem;
                .left{margin-left: 0.2rem;font-size: 0.2rem;line-height:1rem;}
                .right{position: absolute;right:0.1rem;color:silver;
                      .iconyou{font-size: 0.3rem;position: relative;top: 0.2rem;}
                     
                }
               
            }
            li:nth-child(2){border-bottom: none;}
            .bang{width: 100%;height: 0.4rem;line-height: 0.4rem;margin-left: 0.2rem;}
            .iconshouji{background: #3190E8;color: white;}
        }
        #login{width: 95%;height: 0.5rem;background: #D8584A;color: white;border-radius: 0.1rem;margin: 0.3rem 2.5%;}
    }
    .dell{width: 70%;height: 2.7rem;background:white;position: absolute;top:2rem;left: 15%;
         h2{font-size: 1rem;width: 1.2rem;height: 1.2rem;color:orange;border:0.03rem solid orange;text-align: center;border-radius: 50%;margin: 0 auto;} 
         h3{font-size: 0.3rem;text-align: center;}
         button:nth-child(1){width: 1rem;height: 0.5rem;margin: 0.2rem 0.4rem;background: silver;border:none;color: white;}
         button:nth-child(2){width: 1rem;height: 0.5rem;background: #D8584A;border:none;color: white;}
    }
</style>
