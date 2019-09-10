<template>
    <div>
        <Hand>
            <div slot="a" class="compile">
                <i class="iconfont iconzuo"  @click="$router.go(-1)"></i>
             <h3>修改用户名</h3>
            </div>
        </Hand>

        <div class="username">
             <input type="text" placeholder="输入用户名" v-model="oldname" @keyup="add()">
             <div v-if="leg==false">用户名只能修改一次，(5-24位之间)</div>
             <div v-else style="color:red;">用户名长度在5-24位之间</div>
             <input type="button" value="确定修改" @click="bj()">
        </div>

    </div>
</template>

<script>
import Hand from "@/hand/hand"
import axios from "axios"
export default {
    components:{Hand},
    data() {
        return {
            oldname:"",
            userid:"",
            user:"",
            leg:""

        }
    },
    mounted() {
        this.userid=this.$store.state.userid;
        this.user=this.$store.state.username;
        // console.log(this.username)
    },
    methods: {
         bj(){
            axios.get(`http://elm.cangdu.org/v1/user?user_id=${this.userid}`).then((res)=>{
                console.log(res)
                res.data.username=this.oldname
               
            })
            this.$store.commit("name",this.oldname)
            this.$router.push("/Shou/My/tiu")
    },
    add(){
        if(this.oldname.length<=5){
            this.leg=true
        }else{
            this.leg=false
        }
    }
    }
   
}
</script>

<style lang="scss" scoped>
    .compile {color: white;line-height: 0.6rem;
        display: flex;
        i{margin-left: 0.3rem;}
        h3{width: 3.5rem;text-align: center;line-height: 0.6rem;}
    }
    .username{
        input[type=text]{width: 90%;height: 0.5rem;background: #f4f4f4;border: 1px solid silver;margin: 0.3rem 5%;}
        input[type=button]{width: 90%;height: 0.5rem;background: #63b4e2;color: white;margin:0.1rem 5%;}
        div{margin-left: 5%;}
    }
</style>
