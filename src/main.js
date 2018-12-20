import Vue from 'vue'
import App from './App.vue'
import  router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import VueMarkdown from 'vue-markdown'

 
import Vuex from 'vuex'

import Axios from 'axios'
 
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')


Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(VueMarkdown);
Vue.use(Vuex)
Vue.use(VideoPlayer)

Vue.prototype.$axios = Axios;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  el: '#app',
  router,
  Axios,
  render: h => h(App)
})
