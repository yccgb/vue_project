import Vue from 'vue'
import App from './App.vue'
// 完整版引入
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需导入
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 导入mui
import './lib/mui/css/mui.css'

const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)
    }
})