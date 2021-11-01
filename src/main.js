
import {Button,Progress,empty,pagination,message} from 'ant-design-vue';
import Vue from 'vue'
import App from './App.vue'
import 'assets/css/base.css'
import router from './router/index'
import  store from './store/index'
import mymixin from 'common/mymixin.js'
import {imgload} from 'common/public'
require('./common/fitlayout.js')
const  SRC=require('assets/img/backimg/back12.jpg')

Vue.component(Button.name, Button);
Vue.component(Progress.name,Progress)
Vue.component(empty.name,empty);
Vue.component(pagination.name,pagination)

Vue.config.productionTip=false
Vue.prototype.$bus=new Vue()
Vue.prototype.$message=message
Vue.use(mymixin)


//配置全局的message
message.config({
  top: `300px`,
  duration: 2,
  maxCount: 1,
});

function load(){
  document.body.style.background='url('+SRC+') 0 0/100% 100%'
  new Vue({
    render: h => h(App),
    router,
    store,
  }).$mount('#app')
}



imgload(SRC,load)

