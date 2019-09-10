<template>
    <div class="sev">
        
           <img src="/static/dong.gif" alt="" class="dong" v-if="show==true">
       
        <i class="iconfont iconzuo" @click="qian()"></i>
       
         <ul class="ul3">
                <li>
                    <span>商品</span>
                </li>
                <li>
                    评价
                </li>
        </ul>
    <div class="flex">
        <div class="classify">
            <ul>
                <!-- 当currectIndex于i相等的时候，设置高度 -->
                <li v-for="(v,i) in classify" :key="i"
                  :class="{'currect':currentIndex===i}"
                  @click="selectMenu(i)"
                >
                    {{v.name}}
                </li>
            </ul>
        </div>
        <div class="foodstext" ref="foodwrapper">
            <div v-for="(v,i) in classify" :key="i" class="list"  >
              <ul class="ul1">
                    <li >
                        <h2 style="color:green">{{v.name}}</h2>
                        <div style="color:silver;">{{v.description}}</div>
                        <div>...</div>
                    </li>
              </ul>
               <ul class="ul2">
                   <li v-for="(item,key) in v.foods" :key="key">
                        <img :src="'//elm.cangdu.org/img/'+item.image_path" alt="">
                        <div class="list_aa">
                            <h3 @click="jin()">{{item.name}}</h3>
                            <div>{{item.description}}</div>
                            <div>月销{{item.month_sales}}份 <span>好评{{item.satisfy_rate}}%</span></div>
                            <span v-if="item.activity" class="text">{{item.activity.image_text}}</span>
                            <div class="price">￥{{item.specfoods[0].price}} <span class="qi">起</span> 
                               <span class="add">
                               
                                 <button class="jia" @click="jia(item)">+</button>
                               </span>
                            </div>
                        </div>
                        
                   </li>
               </ul>
        </div>
        </div>
         
    </div>
    <div class="ship">
        <van-button type="primary" @click="showPopup" class="sc">
             <i class="iconfont icongouwuche" ref="icon"></i>
            <span class="num">{{num}}</span>
       </van-button>
           <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '20%' }"
                >
                <div  class="gwc">
                    <div>购物车</div>
                    <div @click="clear()">清空购物车</div>
                </div>
                    <ul style="color:#000;">
                        <li v-for="(v,i) in list" :key="i" style="display:flex;">
                           <div style="width:3rem;">{{v.name}}</div>
                           <div style="color:red;width:0.4rem">{{v.price}}元</div>
                           <div class="btn">
                               <button class="jia" @click="plus(i)">+</button>
                                 {{v.number}}件
                               <button class="jian" @click="minu(i)">-</button>
                            </div>
                        </li>
                    </ul>
                
           </van-popup>
               <div class="shipping">
                   <div>
                       <h3 style="font-size:0.2rem;">￥{{zongprice}}</h3>
                       <h6>配送价￥5元</h6>
                   </div>
               </div>
               <h2 ref="sercha" @click="order">还差￥20起送</h2>
           </div>
    </div>
    
</template>

<script>

import axios from "axios"
import jq from "jquery"
import Ship from "@/page/shipping/shipp"
import Shipp from "@/page/shipping/shipp2"

export default {
    components:{
      Ship
    },
   data () {
        return {
            classify:[],
            // list:[],
            currentIndex:0,
            listHeight:[],
            scrolly:0,
            show:false,
            flag:false,
            show: false,
            list:[]
        }
    },
   
    methods: {
        qian(){
            this.$router.push('/Shou/Take')
        },
        selectMenu(i){
            // console.log(123)
            this.currentIndex=i;
            
            // this.$refs.foodwrapper.scrollTop=this.l?istHeight[i]
            // console.log(this.$refs.foodwrapper.scrollTop)
            jq(this.$refs.foodwrapper).animate({scrollTop:this.listHeight[i]},300)
            // console.log(this.$refs.foodwrapper.scrollTop)
        },
        _calculateHeight(){
            let foodList=this.$refs.foodwrapper.getElementsByClassName("list");//ref获取li  dom节点
            // console.log(foodList)
            // let foodList=document.querySelectorAll(".list")
            let Height=0;//初始值高度为o
            //把第一个高度放在数组里
            this.listHeight.push(Height)
            for(let j=0;j<foodList.length;j++){//循环 li
                Height+= foodList[j].clientHeight;
                this.listHeight.push(Height)
               
            }
            //  console.log(this.listHeight)
        },
        jia(item){
          
             let div=document.createElement('div');
    div.className='ballFather';
    document.body.appendChild(div);

    let sonDiv=document.createElement('div');
    sonDiv.className='ballSon';
    div.appendChild(sonDiv);

    // console.log(event.target.getBoundingClientRect().top);
    let top = event.clientY;//获得 跳动小球top
    let left=event.clientX;//获得 left
    div.style.left=left+'px';
    div.style.top=top+'px';

    let y = (window.innerHeight - top);// 下落的高度
    div.style.webkitTransform = `translateY(${y}px)`;
    div.style.transform = `translateY(${y}px)`;


    sonDiv.style.webkitTransform = `translateX(-${left-10}px)`;
    sonDiv.style.transform = `translateX(-${left-10}px)`;
    //保证 小球运动结束后，调用购物车的动画

    setTimeout(()=>{
        // document.querySelector('.sc').classList 找到class sc 的元素  添加一个动画 
        document.querySelector('.sc').classList.add("animation");
        setTimeout(()=>{
            document.querySelector('.sc').classList.remove("animation");
        },400)
    },500)


            this.flag=true
            // this.num++
            this.$refs.icon.style.background="#3190E8"
            this.$refs.sercha.style.background="#4CD964"
            this.$refs.sercha.innerHTML="去结算";
            //  var arr=JSON.parse(localStorage.getItem("cart"))||[]
            // var list={"id":item.id,"name":item.name,"price":item.specfoods[0].price,"number":1}
            // var i=arr.findIndex((it)=>{
            //     return item.name==it.name
            // })
            // if(i==-1){
            //     arr.push(list)
            // }else{
            //     arr[i].number++
            // }
            // localStorage.setItem("cart",JSON.stringify(arr))
            this.$store.commit("adda",item.specfoods[0])
            // console.log(arr)

            

        },
        jian(){
            this.flag=false
            // this.num--
            this.$refs.icon.style.background="#000"
            this.$refs.sercha.style.background="#535356"
            this.$refs.sercha.innerHTML="还差￥20起送"
        },
          showPopup() {
                 this.show = true;
                //   var arr = JSON.parse(localStorage.getItem('cart'))||[]
                //  this.list = arr
                 this.list=this.$store.state.cart
                //  console.log(this.list)
          },
          jin(){
            //   this.$router.push({path:'/shipp',query:{id:"1"}})
          },
          clear(){
              this.$store.commit("clearImer")
          },
          plus(i){
              this.$store.commit("plusgin",i)
          },
          minu(i){
             this.$store.commit("minus",i)
          },
          order(){
              this.$router.push(`/ship2`)
          }
         
    },
    computed: {
        num(){
          return this.$store.getters.pople
      },
       zongprice(){
          return this.$store.getters.money
      },
      shu(){
          return this.$store.getters.shu
      }
    },
      
     mounted() {
       let id=this.$route.query.id
       this.show=true
       axios.get('http://elm.cangdu.org/shopping/v2/menu?restaurant_id='+id).then((res)=>{
        //    console.log(res)
           this.classify=res.data
           this.show=false
           this.$nextTick(()=>{
            this._calculateHeight()//初始化所有li的高度，把每一个li应该滚动的高度放在数组里
           })
       })
       this.$refs.foodwrapper.addEventListener("scroll",this._initscroll)
}
}
</script>

<style lang="scss" scoped>
.gwc{
    width: 100%;height: 0.5rem;background: rgb(144, 163, 170);display: flex;line-height: 0.5rem;
    div:nth-child(1){width: 3rem;}
}
.dong{width: 2rem;height: 2rem;position: absolute;top: 3rem;left: 1.3rem;}
   .currect{background:white;border-left:0.03rem solid green;}
    
    .sev{width: 100%;background: #f4f4f4;display: flex;flex-direction: column;height: 100%;}
    .iconzuo{color: steelblue;font-size: 0.3rem;position: fixed;margin: 0.1rem;}
   
        .ul3{display:flex;
             span{color: steelblue; border-bottom: 0.02rem solid steelblue;}
             li{width:50%;height: 0.8rem;text-align: center;line-height: 0.8rem;border-bottom:1px solid silver;background: white;
                 
             }
        }
           
        
      .flex{flex:1;overflow-y: hidden;display: flex;}
    .classify{overflow-y: auto;
        ul{
            li{width: 1rem;height: 0.6rem;padding-left: 0.2rem;line-height:0.6rem;
                overflow: hidden;
                    white-space: nowrap;
                    text-overflow:ellipsis;
            }
            li:last-child{border-bottom: 1px solid silver;}
        }
    }
    .foodstext{overflow-y: auto;}
    .list{
        
        .ul1{
            li{width: 3rem;height: 0.4rem;line-height:0.4rem;
                div:nth-child(1){width: 1rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow:ellipsis;font-size: 0.2rem;
                }
                display: flex;
            }
        }
        .ul2{z-index: 100;
            li{width: 3.5rem;height: 1.6rem;background:white;border-bottom: 1px solid silver;display:flex;
               img{width: 0.6rem;height: 0.6rem;margin: 0.2rem;}
               .list_aa{
                 h3{width: 2.5rem;
                     overflow: hidden;
                    white-space: nowrap;
                    text-overflow:ellipsis;
                    margin-top: 0.05rem;
                 }
                 div{margin-top: 0.09rem;}
                 div:nth-child(2){color: silver;}
                 .text{font-size: 0.08rem;border: 1px solid #f1884f;border-radius: 0.1rem;color: #f1884f;}
                 .price{font-size: 0.2rem;font-weight: 800;color: orangered;
                   .qi{font-size: 0.15rem;color:silver;}
                   .add{margin-left: 1.3rem;
                   span{color: #000;}
                       .jia{background: #3190E8;width:0.3rem;height: 0.3rem;border-radius: 50%;border: none;color:white;}
                       .jian{width:0.3rem;height: 0.3rem;border-radius: 50%;border: 0.01rem solid #3190E8;color:#3190E8;background: white;}
                 }
               }
               
            }
        }
    }  

     
    }
    .ship{position: fixed;bottom: 0;
        display: flex;width: 100%;height: 0.7rem;background: rgb(62, 62, 65);color: white;
        .shipping{margin-top: 0.1rem;margin-left: 0.6rem;
           
        } 
        h2{width: 1.7rem;height: 0.7rem;background: #535356;text-align: center;line-height: 0.7rem;margin-left: 1.2rem;}
    }
    .icongouwuche{width: 0.8rem;height: 0.8rem;background: #000;color: white;font-size: 0.5rem;display: block;
           border-radius: 50%;text-align: center;line-height: 0.8rem;position: absolute;bottom: 0.1rem;left: 0.2rem;
           border: 0.02rem solid #000;
      }
      van-popup{color:#000;}
      .num{background: red;color: white;font-size: 0.2rem;border-radius: 50%;position: relative;bottom: 0.6rem;left: 0.5rem;}



.btn{
    .jia{background: #3190E8;width:0.3rem;height: 0.3rem;border-radius: 50%;border: none;color:white;}
    .jian{width:0.3rem;height: 0.3rem;border-radius: 50%;border: 0.01rem solid #3190E8;color:#3190E8;background: white;}
}

.ballFather{
	position: absolute;
	width: 0.3rem;
	height: 0.3rem;
	border-radius: 50%;
	transition:all  0.6s cubic-bezier(0.65, 0.06, 0.94, 0.31);  
	/*   */
	/* y轴很慢  x轴运动很快  1s y走 10 px   x走 20px */
}
.ballSon{
	width: 0.3rem;
	height: 0.3rem;
	background: #3190e8;
	border-radius: 50%;
	transition:all 0.6s linear;
}
@keyframes ani{
	0{transform:scale(0)}
	20%{transform:scale(1.2)}
	40%{transform: scale(.8)}
	80%{transform: scale(1.1)}
	100%{transform: scale(1)}
}
.animation{
	animation: ani .4s linear;
}

</style>