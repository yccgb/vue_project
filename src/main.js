import Vue from 'vue'
import App from './App.vue'
// 完整版引入
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需导入
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入mui
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


// 配置路由
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
// 1.3 导入自己的router.js模块
import router from './router.js'

// 2.1 导入vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)


const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)
    },
    router // 1.4 挂载路由对象到vue实例上
})