import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'
// import env from './env'

// mock开关
// const mock = true;
// if (mock) {
//   require('./mock/api');
// }
// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// axios封装接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    // 首页不跳转
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  } else {
    Message.warning(res.msg);
    return Promise.reject(res);
  }
  // http请求错误拦截
}, (error) => {
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
})

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
// Vue.use(Message);
// 局部引入，解决全局弹框
Vue.component(Message.name, Message);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
