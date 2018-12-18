import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// state用于在vuex中存贮数据
var state={
    blogData:''

}

//定义一系列改变state的方法
var mutations={
    updatablogdata(state,blogdata){
        state.blogData=blogdata;
    }
}
//改变state里面的数据，触发getter里面的方法，获取新的值
var getters={
    getblog:(state)=>{
        return state.blogData
    }
}



//暴露
const store =new Vuex.Store({
    state,
    mutations,
    getters
})

export default store;





