/*
var Main = {template: '<div>Main</div>'};
var Login = {template: '<div>Login</div>'};
var Page = {template: '<div>Page</div>'};

var routes = [
  { path : '/main', component : Main},
  { path : '/login', component : Login},
  { path : '/page', component : Page}
]

var router = new VueRouter({
  routes
});*/

import Vue from 'vue'
import Router from 'vue-router'   //라우터부르기
import App from './App'
//import Main from './Main'


Vue.use(Router)  // Vue Vuerouter를 연결

//컴포넌트정의  ->이걸 싱글컴포넌트로 하면 위에 import가 되지않을까? 
const Main =  { template: '<div>Main</div>' } 
const Login = { template: '<div>Login</div>' } 
const Page = { template: '<div>Page</div>' } 

var routes = [
  { path : '/main', component : Main},
  { path : '/login', component : Login},
  { path : '/page', component : Page}
]
//라우터인스턴스생성
const router = new Router({
  mode: 'history',
  routes
})

//Vue 인스턴스에 라우터 마운트
new Vue({
  router,
  el: '#app',
  render: h => h(App),
  components:{     
    Main,
    Login,
    Page
  }
}).$mount('#app')

