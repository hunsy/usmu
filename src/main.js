// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import weui_css from './style/weui.min.css'
import defaultCss from './style/default.css';

import * as filters from './filters' // global filters
console.log("filters:", filters);

// register global utility filters.
Object.keys(filters).forEach(key => {
  console.log("key", key);
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
Vue.use(weui_css)
Vue.use(defaultCss)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
