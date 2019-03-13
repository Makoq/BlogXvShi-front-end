import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default  new Router({
    // mode:"history",

    routes:[
        {
//如果用import引入的话，当项目打包时路由里的所有component都会打包在一个js中，造成进入首页时，需要加载的内容过多，时间相对比较长。
//当你用require这种方式引入的时候，会将你的component分别打包成不同的js，加载的时候也是按需加载，只用访问这个路由网址时才会加载这个js。
            path:'/',
            component: (resolve) => { require(['../components/main'], resolve) }, 
            meta: { requireAuth: true },
            redirect: { path: '/welcome' },
            children:[
                {
                    path: '/welcome',
                    component: (resolve) => {require(['../views/welcome'], resolve)},
                    
                },
                
                
            ]
        },
        {
            path: '/editmarkdown',
            component: (resolve) => {require(['../components/editmarkdown'], resolve)},
            name: 'editmarkdown'


        },
        {
            path: '/home',
            component: (resolve) => {require(['../views/home'], resolve)},
            name: 'home'


        },
        {
            path: '/album',
            component: (resolve) => {require(['../views/album'], resolve)},
            name: 'album'
        },
        {
            path: '/log',
            component: (resolve) => {require(['../views/log'], resolve)},
            name: 'log',
            children:[
                {
                    path: '/welcome',
                    component: (resolve) => {require(['../views/welcome'], resolve)},
                    name: 'welcome'
                },
                
                
            ]
        },
        {
            path: '/registe',
            component: (resolve) => {require(['../views/registe'], resolve)},
            name: 'registe'
        },
        {
            path: '/map',
            component: (resolve) => {require(['../views/map'], resolve)},
            name: 'map'
        },
        {
            path: '/myschool',
            component: (resolve) => {require(['../components/common/baidumap'], resolve)},
            name: 'BJFU'
        },

        {
            path: '/test',
            component: (resolve) => {require(['../views/test'], resolve)},
            name: 'test',
            children:[
                {
                    path: '/testchild',
                    component: (resolve) => {require(['../views/testchild'], resolve)},
                    name: 'testchild'
                },
                
                
            ]
        },
        {
            path:'/*',
            component: (resolve) => {require(['../views/errorpage/404page'], resolve)},
            name: '404page'

        }
        ,
        

    ]


})
