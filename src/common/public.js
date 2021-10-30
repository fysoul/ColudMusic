
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