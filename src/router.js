import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'

var router = new VueRouter({
    routes: [
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer }
        
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由的高亮类
})

export default router