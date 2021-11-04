
//处理歌曲的时间
export function getTime(t){
    let m=Math.floor(t/1000/60);
    let s=Math.floor((t-m*60000)/1000)
    m=m<10?'0'+m:m
    s=s<10?'0'+s:s
    return m+':'+s
}

//处理歌词
export function getLrc(text){
    let lyrtime=[];
    let lyrText=[];
    let arr=text.split('\n')
    arr.splice(arr.length-1,1)//把最后的空串删除
    for(let i=0;i<arr.length;i++){
       let rel=arr[i].slice(1,10).split(':')
       let m=parseInt(rel[0])*60
       let s=parseFloat(rel[1])
       let t=Math.floor((m+s)*100)/100
       lyrtime.push(t)
       if(arr[i].split(']',2)[1]==''){
         lyrText.push('---')
       }else{
         lyrText.push(arr[i].split(']',2)[1])
       }
    
    }

    return {timeArr:lyrtime,lrcArr:lyrText}
}



//防抖函数
export function debounce(callback,delay){
  let timer=null;
  var that=this;

  return function(){
      var args=Array.prototype.slice.call(arguments);
      if(timer!== null){
          clearTimeout(timer)
      }

      timer=setTimeout(()=>{
          callback.apply(that,args)
      },delay)
  }
}


//函数节流
export function throttle(fn,delay){
  var timer=null;
  var that=this;

  return function(){
      var args=Array.prototype.slice.call(arguments);

      if(!timer){
          timer = setTimeout(()=>{
              fn.apply(that,args);
              timer=null;
          },delay)
      }
  }
}


//不重复的随机函数
export function random(start=0,end,number){//number上一个不重复的数字
  //限制不超过10位数
  let ran=parseInt(Math.random()*(end-start+1)+start,10);
  if(typeof number=='number'&&ran==number){
    return random(start,end,ran)
  }
  return ran
}


//图片加载完在执行函数
export function imgload(src,callback){//src可以为数组
  
  
    if(!src.length)return
    let len=src.length
    let arr=[]
    let promiseAll=[]
    
    for(let i=0;i<len;i++){
      promiseAll[i]=new Promise((reslove,reject)=>{
        arr[i]=new Image();
        arr[i].src=src[i]
        arr[i].onload=()=>{
          reslove(arr[i])
        }
        arr[i].onerror=()=>{
          reslove(-1)
        }
      })
    }

      return Promise.all(promiseAll).then(img=>{
        typeof callback==='function'?callback():callback
        return img
      }).catch(err=>{
        return -1
      })

}