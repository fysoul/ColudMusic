<template>
  <div class="AsideTemplate" :class="{active:isSelect}" @click="togglePage" :style="getActiveColor" ref="size">
      <div class="icons"><slot name="icons"></slot></div>
      <div class="content" ref="test"><slot name="content"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'AsideTemplate',
  props:{
      activeColor:{
          type:String,
          default:'linear-gradient(90deg,rgba(48,72,98,.5),white)'
    },
    path:String
  },
  data () {
    return {
        colorObj:{},
        size:'15%',
        loading:0,
        isSelect:false
    };
  },
  methods: {
       async togglePage(){
        //  this.$bus.$emit('active',true)
        await this.$router.push(this.path).catch(err=>err);
         this.isSelect=true
         setTimeout(()=>{
           this.isSelect=false
           
         },100)
      },

      change(){
          let rem=window.getComputedStyle(this.$refs.size).width||this.$refs.size.style.width
          this.size=(parseFloat(rem)/3).toFixed(2)+'rem'
      }
  },
  computed:{
     isactive(){
        return this.$route.path.indexOf(this.path)!=-1
     },
      getActiveColor(){
        let obj={}
        obj.height=this.size
        if(this.isactive){   
              obj.background=this.activeColor
              obj.border='1rem solid rgba(255,255,255,.5)'
              obj.color='rgba(48,72,98,1)'
              return obj
          }
         
          return obj

      }
  },

  mounted(){
       
       this.change()
    window.onresize=()=>{
        this.change()
    }

     this.$nextTick(()=>{
         this.change()
      })

  },
  
}
</script>

<style  scoped>

@import '~assets/css/variable.css';
.AsideTemplate{
    width: 80%;
    margin: 0rem auto 10rem auto;
    padding: 5rem 10rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    border-radius: 10rem;
    background: transparent;
    transition: transform 500ms linear;
   
}
.active{
   transform: translate3d(-25rem,0rem,-50rem);
}

.AsideTemplate:hover{
    cursor: pointer;
    background:linear-gradient(90deg,rgba(255,255,255,.3),rgba(48,72,98,.3));
     box-shadow: 0 0 2rem 1rem white;
}

.content{
  margin-left: 5rem;
  white-space: nowrap;

}



</style>