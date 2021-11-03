
import {Button,Progress,empty,pagination,message} from 'ant-design-vue';
import Vue from 'vue'
import App from './App.vue'
import 'assets/css/base.css'
import router from './router/index'
import  store from './store/index'
import mymixin from 'common/mymixin.js'
import {imgload} from 'common/public'
require('./common/fitlayout.js')


Vue.component(Button.name, Button);
Vue.component(Progress.name,Progress)
Vue.component(empty.name,empty);
Vue.component(pagination.name,pagination)

Vue.config.productionTip=false
Vue.prototype.$bus=new Vue()
Vue.prototype.$message=message
Vue.use(mymixin)

const  SRC=require('assets/img/backimg/back12.jpg')
const imgArr=[
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
  ]

//配置全局的message
message.config({
  top: `300px`,
  duration: 2,
  maxCount: 1,
});

function load(){

  let w=document.documentElement.clientWidth
  w=w<=800?'800px auto':'100% 100%'
  document.body.style.background='url('+SRC+') 0 0/'+w
  new Vue({
    render: h => h(App),
    router,
    store,
  }).$mount('#app')
}



imgload(imgArr,load)

