import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default  new Router({
    // mode:"history",

    routes:[
        {
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
