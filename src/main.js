import Vue from 'vue'
import App from './App/App.vue'
import VueRouter from 'vue-router';
import Routes from './App/routes';
Vue.use(VueRouter);

const router = new VueRouter({
  routes : Routes,
  mode : 'history'
});

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})
