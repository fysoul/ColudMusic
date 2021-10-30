import Vuex from 'vuex'
import Vue from 'vue'


import {actions} from './actions'
import {getters} from './getters'
import {mutations} from './mutations'
import {search} from './search/search'
import {list} from './list/list'
Vue.use(Vuex)

const state={
    name:'fysoul音乐'
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        search:search,
        list
    } 
})

export default store