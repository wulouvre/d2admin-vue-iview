import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

// simplemde css
import 'simplemde/dist/simplemde.min.css'

// markdown主题
import 'github-markdown-css'

// 代码高亮主题
import '@/assets/library/highlight/styles/atom-one-light.css'
// import '@/assets/library/highlight/styles/github.css'

// 全局注册的组件
import '@/components'

// 异步请求库
import '@/plugin/axios'

// vuex
import store from '@/store/index.js'

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
