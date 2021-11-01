<template>
  <div class="TopBarRight" :class="{active:isActive}">
    <span class="icon-hy iconfont font"  v-if="!isflag" @click="clickFullscreen"></span>
    <span class="icon-qp iconfont font" v-else @click="clickFullscreen"></span>
    <span class="icon-hf iconfont font" @click='change'></span>  
    <span class="icon-sz iconfont font" @click="msgError"></span>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import {random} from 'common/public'
export default {
  name: 'TopBarRight',
  data () {
    return {
        isFullscreen:false,
        isflag:false,
        imgArr:[
          require('assets/img/backimg/back1.jpg'),
          // require('assets/img/backimg/back2.jpg'),
          require('assets/img/backimg/back3.jpg'),
          // require('assets/img/backimg/back4.jpg'),
          require('assets/img/backimg/back5.jpg'),
          require('assets/img/backimg/back6.jpg'),
          require('assets/img/backimg/back7.jpg'),
          require('assets/img/backimg/back8.jpg'),
          // require('assets/img/backimg/back9.jpg'),
          require('assets/img/backimg/back10.jpg'),
          // require('assets/img/backimg/back11.jpg'),
          require('assets/img/backimg/back12.jpg'),
          require('assets/img/backimg/back13.jpg'),
          require('assets/img/backimg/back14.jpg'),
          ],
          isActive:false,
          ran:7,//back12.jpg图片
    };
  },
  methods: {

    clickFullscreen(){
      if (!screenfull.enabled) {
//           this.$message({
//             message: '浏览器不支持',
//             type: 'warning'
//           })
          return false
        }
        screenfull.toggle();
        this.isFullscreen=true
        this.isflag=!this.isflag
      },

    checkFull() {
      var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
      if (isFull === undefined) {
          isFull = false;
      }
      return isFull;
     },

      msgError(){
         this.$message.warning('暂未开放',1);
      },

      //换肤
      change(){
        let toggle=this.$message.loading('切换背景中...',0)
         let number=random(null,this.imgArr.length-1,this.ran)
         let img = new Image();
         img.src = this.imgArr[number];
         img.onload=()=>{
              let w=document.documentElement.clientWidth
              w=w<=800?'800px auto':'100% 100%'
              document.body.style.background='url('+this.imgArr[number]+') 0 0/'+w
              this.ran=number
              setTimeout(toggle,0)             
         }

      }
},
    mounted(){

       window.onresize = () => {
        // 全屏下监控是否按键了ESC
        if (!this.checkFull()) {
          // 全屏下按键esc后要执行的动作
          this.isFullscreen = false;

         }
      }

     
  },

  created() {
     //用于搜索页面的开场动画
      this.$bus.$on('active',res=>{
        setTimeout(()=>{
           this.isActive=res
        },100)
     })
    
  },


}
</script>

<style  scoped>

    .TopBarRight{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items:center;
        transition: all 1s;
        transform: translateX(0);
    }

    .font{
       font-size: 26rem;
    }

    .font:hover{
      cursor: pointer;
    }

    .active{
       transform: translateX(110%);
    }
</style>