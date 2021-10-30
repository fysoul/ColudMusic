<template>
  <div class="PlayLeftContr"  ref="font">
      <div class="contr_line">
       
        <!-- E1413C -->
         <PlayLine :disable="false" linekey="mute" :fuzzy='fuzzy' insideColor="rgb(200,200,200)"  outsideColor="red"></PlayLine>
      </div>
      <span class="iconfont icon-lrc" :class="{active:islrc}"
       :style="getObj" title="开启歌词" @click="sendLrc"></span>

      <span class="iconfont" 
      :class="{'icon-sj':number==2,'icon-singloop':number==1,'icon-singsloop':number==0}" 
      :style="getObj" 
      :title="number==0?'列表播放':number==1?'单曲循环':'随机播放'"
       @click="sendState"></span>

<!-- :class="{'icon-addlike':!islike,'icon-xh2':islike} color:islike?'red':''-->
      <span class="iconfont icon-addlike" 
        
        :style="{fontSize:(this.font/1.5)+'rem',width:this.font+'rem',height:this.font+'rem'}" 
        title="添加歌曲到" @click="addLike"></span>
  </div>
</template>

<script>
import PlayLine from './PlayLine.vue'

export default {
  name: 'PlayLeftContr',
  inject: ['singObj'],
  data () {
    return {
        font:'16rem',
        fuzzy:0.5,
        number:this.stateNumber,
        islrc:this.lrc,
        islike:false
    };
  },

  props:{
    stateNumber:{
      type:Number,
      default:0
    },
    lrc:{
      type:Boolean,
      default:false
    }
  },
  methods: {
         sendState(){
           let x=this.number+1
            this.number=x>2?0:x
            this.$bus.$emit('changeState',this.number)
         },

         sendLrc(){
           this.islrc=!this.islrc
           this.$bus.$emit('checkLrc',this.islrc)
         },

         addLike(){
          //  this.islike=!this.islike
           this.$bus.$emit('addLike',true,this.singObj.sing)
         }
    },
  components: {
       PlayLine
    },
    mounted(){
          //  ||this.$refs.font.style.height
            // window.onload=()=>{//其他地方调用了load,就不起作用
                  this.font=parseFloat(window.getComputedStyle(this.$refs.font).height).toFixed(2)
            // }
           
    },
    computed:{
      getObj(){
        
        return {fontSize:(this.font/1.5)+'rem',width:this.font+'rem',height:this.font+'rem'}
      }

     
    },

    created() {
     
    },
}
</script>

<style  scoped>
 .PlayLeftContr{
   width: 100%;
   height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.contr_line{
   width: 50%;
   height: 20%;
   margin-right:5rem;
}
span{
  display: flex;
  max-width: 15%;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  text-align: center;
}

.active{
  color: red;
}

.likeActive{
  color: red;
}
</style>