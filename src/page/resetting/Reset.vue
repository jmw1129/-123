<template>
    <div class="reset">
        <!-- 头部开始 -->
        <header>
            <Head>
              <div slot='a' class="he reset_he">
                <div class="left">
                  <a-Icon type="left" @click='$router.go(-1)' style="line-height: 0.5rem" />
                </div>
                <div class="content" style="line-height: 0.5rem">重置密码</div>
              </div>
            </Head>
        </header>
        <!-- 头部结束 -->
        <!-- 表单开始 -->
        <form>
            <!-- 账号 -->
          <div style="background: white"><input type="text" placeholder="账号" v-model="username"/></div>
          <!-- 旧密码 -->
          <div style="background: white">
            <input type="text" placeholder="旧密码" v-model="oldpassWord"/>
          </div>
          <!-- 请输入新密码 -->
          <div style="background: white">
            <input type="text" placeholder="请输入新密码" v-model="newpassword"/>
          </div>
          <!-- 请确认密码 -->
          <div style="background: white">
            <input type="text" placeholder="请确认密码" v-model="confirmpassword"/>
          </div>
          <!-- 验证码 -->
          <div style="background: white">
            <input type="text" placeholder="验证码" v-model="captcha_code"/>
            <div class="form_rigth" style="margin-right:0.2rem">
              <!-- 随机数 -->
              <div class="numb">
                <img :src="code" alt="">
              </div>
              <div class="change">
                <div style="height: 50%;text-align: center;line-height: 0.32rem">看不清</div>
                <input type="button" value="换一张" @click="imness()"/>
              </div>
            </div>
          </div>
          <!-- 确认修改按钮开始 -->
          <div class="enter" >
            <input type="button" value="确认修改" @click="revamp()" />
          </div>
          <!-- 确认修改按钮结束 -->
        </form>
        <!-- 表单结束 -->
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import Head from '@/page/header/Head'
import axios from "axios"
export default{
    name:'Reset',
    components:{Head},
    data() {
      return {
        code:'',
        username:'',
        newpassword:'',
        oldpassWord:'',
        confirmpassword:'',
        captcha_code:''
      }
    },
    mounted () {
       axios.post("https://elm.cangdu.org/v1/captchas",{}).then((res)=>{
        //  console.log(res)
         this.code=res.data.code
       })
    },
   methods: {
     imness(){
       axios.post("https://elm.cangdu.org/v1/captchas",{}).then((res)=>{
         console.log(res)
         this.code=res.data.code
       })
     },
     revamp(){
        axios.post("http://elm.cangdu.org/v2/changepassword",{
          username:this.username,
          newpassword:this.newpassword,
          oldpassWord:this.oldpassWord,
          confirmpassword:this.confirmpassword,
          captcha_code:this.captcha_code
        }).then((res)=>{
           if(res.data.status==0){
               MessageBox(res.data.message)
           }else{
             let obj={
               newpassword:res.data.newpassword
            }
             this.$store.commit("login",obj)
           }
           if(this.username==""){
              MessageBox("请输入用户名")
           }else if(this.newpassword==""){
             MessageBox("请输入旧密码")
           }else if(this.oldpassword==""){
             MessageBox("请输入新密码")
           }
           else if(this.confirmpassword==""){
             MessageBox("请输入确认密码")
           }
        
        })
     }
   },
}
</script>

<style lang="scss">
.reset{
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    form{
    width:100%;
    height:4.2rem;
    margin-top:0.2rem;
    &>div{
      width: 100%;
      height: 0.7rem;
      border-bottom: 1px solid #F5F5F5;
      input[type='text']{
        width:50%;
        height:0.69rem;
        margin-left:0.5rem;
        font-size:0.2rem;
        line-height:0.7rem;
        float:left;
        /* background:green; */
      }
      .form_rigth{
        width: 35%;
        height: 0.7rem;
        float: right;
        margin-right: 0.4rem;
        /* background: red; */
        display: flex;
        text-align: center; position: relative;
          top:-0.7rem;
        .numb{
          width: 50%;
          font-size:0.4rem;
          line-height:0.7rem;
         
        }
        .change{
          width: 50%;
          font-size: 0.2rem;
          color: gray;
          input{
            border:none;
            outline:none;
            color:#3B93E5;
            background:none;
          }
        }
      }
    }
    /* 确认修改按钮开始 */
    .enter{
      
      input{
        width:90%;
        height:0.5rem;
        background:#4CD964;
        color:white;
        border-radius:0.05rem;
        font-size:0.2rem;
        margin-left: 5%;
      } 
     }
    /* 确认修改按钮结束 */
  }
}
</style>

