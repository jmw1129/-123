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
          <div style="background: white"><input type="text" placeholder="账号" /></div>
          <!-- 旧密码 -->
          <div style="background: white">
            <input type="text" placeholder="旧密码" />
          </div>
          <!-- 请输入新密码 -->
          <div style="background: white">
            <input type="text" placeholder="请输入新密码" />
          </div>
          <!-- 请确认密码 -->
          <div style="background: white">
            <input type="text" placeholder="请确认密码" />
          </div>
          <!-- 验证码 -->
          <div style="background: white">
            <input type="text" placeholder="验证码" />
            <div class="form_rigth" style="margin-right:0.2rem">
              <!-- 随机数 -->
              <div class="numb">4232</div>
              <div class="change">
                <div style="height: 50%;text-align: center;line-height: 0.32rem">看不清</div>
                <input type="button" value="换一张" />
              </div>
            </div>
          </div>
          <!-- 确认修改按钮开始 -->
          <div class="enter" style="margin-top: 0.3rem">
            <input type="button" value="确认修改" />
          </div>
          <!-- 确认修改按钮结束 -->
        </form>
        <!-- 表单结束 -->
    </div>
</template>

<script>
import Head from '@/page/header/Head'
export default{
    name:'Reset',
    components:{Head}
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
        text-align: center;
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
      width: 100%;
      height:0.7rem;
      text-align: center; 
      input{
        width:80%;
        height:0.7rem;
        background:#4CD964;
        color:white;
        border-radius:0.05rem;
        font-size:0.25rem;
      } 
    }
    /* 确认修改按钮结束 */
  }
}
</style>

