
import  store from './store/index'
import {recommended,getIds} from 'network/list'
import {rank} from 'network/ranking'
import {msg} from 'network/search'
import {imgload} from 'common/public'

let netImg=store.state.netImg//从store获取图片地址

//加载本地的一张背景图
function loading(){
    let w=document.documentElement.clientWidth
     w=w<=800?'800px auto':'100% 100%'
     document.body.style.background='url('+netImg[7]+') 0 0/'+w    
}

export default async function createMount(call){
    let time=Date.now()
    let data=await rank()//排行榜标题
    store.dispatch('rankTitle',data)
    let ids=await getIds(data[0].id)
    let string=ids.join(',')
    Promise.all([recommended(),msg(string),imgload(netImg,loading)]).then(res=>{
      
    store.dispatch('listTitle',res[0])//热门推荐
    store.dispatch('rankSings',res[1])//排行榜默认第一个歌单歌曲
      clearInterval(document.querySelector('.cloak').dataTime)
      document.body.removeChild(document.querySelector('.cloak'))
      typeof call=='function'?call():call
      console.log('初次请求数据花的时间',Date.now()-time)
    })
}
  

