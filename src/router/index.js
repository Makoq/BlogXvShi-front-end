import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default  new Router({

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
                    name: 'welcome'
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
            path:'/*',
            component: (resolve) => {require(['../views/errorpage/404page'], resolve)},
            name: '404page'

        }
        ,

    ]


})
