<template>
    <div class="login">
      <!-- 头部开始 -->
        <header>
            <Head>
                <div slot='a' class="he login_he">
                    <div class="left">
                        <a-Icon type="left" @click='$router.go(-1)' style="line-height: 0.5rem"/>
                    </div>
                    <div class="content" style="line-height: 0.5rem">密码登录</div>
                      <!-- <div class="right">
                        <router-link to="/Ding"></router-link>
                      </div> -->
                </div>
            </Head>
        </header>
        <!-- 头部结束 -->
        <!-- 表单开始 -->
        <form>
           <!-- 账号 -->
            <div style="background: white"><input type="text" placeholder="账号" v-model='username'/></div>
            <!-- 密码 -->
            <div style="background: white">
              <input type="password" placeholder="密码" v-model='password' v-if='show==false' />
              <input type="text" placeholder="密码" v-model='password' v-else />
              <div class="form_rigth" style="width:10%">
                <!-- <mt-switch v-model='show'></mt-switch> -->
              </div>
            </div>
            <!-- 验证码 -->
            <div style="background: white">
              <input type="text" placeholder="验证码" v-model='code' />
              <div class="form_rigth" style="margin-right:0.2rem">
                  <!-- 随机数 -->
                  <div class="numb"><img :src="numcode" /></div>
                  <div class="change">
                      <div style="height: 50%;text-align: center;line-height: 0.32rem">看不清</div>
                      <input type="button" value="换一张" @click='chang()' />
                  </div>
              </div>
            </div>
            <!-- 温馨提示开始 -->
            <div class="warm">
              <div>温馨提示：未注册过 的账号，登录时将自动注册</div>
              <div>注册过的用户可凭账号密码登录</div>
            </div>
            <!-- 温馨提示结束 -->
            <!-- 登录按钮开始 -->
            <div class="enter">
              <input type="button" value="登录" @click='login()'/>
            </div>
            <!-- 登录按钮结束 -->
            <!-- 重置密码开始 -->
            <div style="margin-top: 0.2rem;display: flex;">
              <div style="width: 80%"></div>
              <router-link to="/Reset" style="width:20%;height:50%;font-size: 0.2rem;">
                重置密码
              </router-link>
            </div>
            <!-- 重置密码结束 -->
        </form>
        <!-- 表单结束 -->
    </div>
</template>

<script>
axios.defaults.withCredentials = true // 让 axios 请求携带 cookie
import { MessageBox } from 'mint-ui'
import axios from 'axios'
import Head from '@/page/header/Head'
export default{
    name:'Login',
    components:{Head},
    data() {
      return {
        username:'', // 账号
        password:'', // 密码 
        code:'', // 验证码
        numcode:'', // 随机数
        show:false, // 密码显示隐藏
      }
    },
    mounted() {
      // 获取验证码
      this.chang()
    },

    methods: {

      // 随机数换
      chang() {
        // 获取验证码
        axios.post('https://elm.cangdu.org/v1/captchas',{}).then((res) => {
          // console.log(res)
          this.numcode = res.data.code
        })
      },

      // 点击登录
      login(){

        axios.post('http://elm.cangdu.org/v2/login',{
          captcha_code:this.code,
          username:this.username,
          password:this.password
        }).then((res)=>{
          // console.log(res)
          // 看后台是否返回status 返回代表失败
          this.userid=res.data.user_id;
          if(res.data.status==0){
          // 判读那输入框不为空
            if(this.user!==""&&this.user!==""&&this.numcode!==""){
              MessageBox(res.data.message)
            }
          }else{
            localStorage.setItem('login',JSON.stringify({userid:this.userid,code:this.code,password:this.password}))
            // this.$store.state.login = this.code
            this.$store.commit("login",this.userid)
            this.$router.push('/Ding')
          }
          if(this.user==''){
              MessageBox('请输入账号')
          }else if(this.password==''){
              MessageBox('请输入密码')
          }else if(this.code==''){
              MessageBox('请输入验证码')
          }
        })


      },
      
    },
}
</script>

<style lang="scss">
.login{
  width: 100%;
  height: 100%;
  background: #F5F5F5;
  form{
    width:100%;
    height:2.1rem;
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
      input[type='password']{
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
        text-align: center;
        position: absolute;
        right: 0.01rem;
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
    /* 温馨提示开始 */
    .warm{
      width: 100%;
      height: 1rem;
      color: red;
      padding: 0.1rem 0.4rem;
      font-size: 0.14rem;
      line-height: 0.4rem
    }
    /* 温馨提示结束 */
    /* 登录按钮开始 */
    .enter{
      width: 100%;
      height:0.7rem;
      text-align: center; 
      input{
        width:90%;
        height:0.5rem;
        background:#4CD964;
        color:white;
        border-radius:0.05rem;
        font-size:0.25rem;
      } 
    }
    /* 登录按钮结束 */

  }
}
</style>
