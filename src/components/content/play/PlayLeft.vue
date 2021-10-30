<template>
  <div class="PlayLeft" ref="playleft" >
    <FullPlay v-if="isfull"/>
    <img v-if="img" :src="img" :style="{width:playh+'rem',height:playh+'rem'}" @click="full">
    <div class="icon-dd iconfont loading" v-else
     :style="{width:playh+'rem',height:playh+'rem',fontSize:playh/2+'rem'}"
     @click="full"></div>

    <div class="boxContr" :style="{left:(playh+10)+'rem'}">
        <div class="middle">
            <span class="lry">{{name}}</span>
            <div class="time contr">
                <PlayLeftContr></PlayLeftContr>
            </div>
        </div>

        <div class="lineBox" >
            <div class="line">
              <PlayLine insideColor='rgb(200,200,200)'  outsideColor="red" linekey="box" :percent='0'></PlayLine>
            </div>
        </div>
        
         
       
        <div class="middle">
            <div class="lry">{{lrcText}}</div>
            <div class="time">{{nowtime}} / {{time}}</div>
        </div>
    </div>
    
  </div>
</template>

<script>
import PlayLeftContr from './PlayLeftContr.vue'
import PlayLine from './PlayLine.vue'
import FullPlay from './../fullplay/FullPlay.vue'

export default {
  name: 'PlayLeft',
  data () {
    return {
       playh:100,
       isfull:false
    };
  },
  props:{
    // sing:{
    //    type:String,

    // },
    img:{
      type:String,
      default:''
    },
    name:{
      type:String,
      default:'等待资源就绪'
    },
    lrcText:{
      type:String,
      default:''
    },
    time:{
      type:String,
      default:'00:00'
    },

    nowtime:{
      type:String,
      default:'00:00'
    }

  },

  methods: {
       full(){
         this.isfull=true
       }
    },
  components: {
       PlayLeftContr,
       PlayLine,
       FullPlay
    },
    mounted(){
        let h=parseFloat(window.getComputedStyle(this.$refs.playleft).height).toFixed(2)
        this.playh=h-10
    }
}
</script>

<style  scoped>
 .PlayLeft{
  width:  100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.boxContr{
    position: absolute;
    top: 5rem;
    right: 5rem;
    bottom: 5rem;
    margin: auto;
}

.boxContr .middle{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 35%;
}


.line{

  width: 100%;
  height: 10rem;

}

.lineBox{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30%;
}

.lry{
  height: 100%;
  max-width: 50%;
  overflow:hidden;
}
.time{
   height: 100%;
}
.contr{
  width: 50%;
  height: 100%;
}


.loading,img{
  position: absolute;
   vertical-align: middle;
   border-radius: 5rem;
   top: 5rem;
   left: 5rem;
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>