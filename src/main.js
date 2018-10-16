import Vue from 'vue'
import App from './App.vue'

import PluginOne  from './PluginOne.js'
import PluginTwo  from './PluginTwo.js'
console.log('Vue Version : ', Vue.version);

Vue.use(PluginOne);
Vue.use(PluginTwo);

new Vue({
  el: '#app',
  render: h => h(App),
  mounted() {
    Vue.myGlobalMethod();
  }
})
