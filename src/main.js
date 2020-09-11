import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
// Vue.config.productionTip = false

import router from './router'
import store from './store'
import 
{ Button,
  NavBar,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Sticky,
  Grid, 
  GridItem,
  Toast,
  icon   } 
from 'vant'

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Sticky)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Toast)
Vue.use(icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
