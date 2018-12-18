import Vue from 'vue'
import App from './App.vue'
import  router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import VueMarkdown from 'vue-markdown'

 
import Vuex from 'vuex'




Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(VueMarkdown);
Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
