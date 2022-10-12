import { createWebHistory, createRouter } from "vue-router";
import headerPage from './components/header'
import footerPage from './components/footer'
import indexPage from './components/index'
import forgotPassword from './components/forgot_password.vue'
import AdminIndex from './admin/index'
import welcomePage from './admin/welcome'
import AdminHeader from './admin/header'
import AdminFooter from './admin/footer'
import menuPage from './admin/menu'
import updateSetting from './admin/update_setting'
import businessList from './admin/business_list'

const routes = [
    {
        name:indexPage,
        path:'/',
        component:indexPage
    },
    {
        name:headerPage,
        path:'/header',
        component:headerPage
    },
    {
        name:footerPage,
        path:'/footer',
        component:footerPage
    },
    {
        name:forgotPassword,
        path:'/forgot_password',
        component:forgotPassword
    },
    {
        name:AdminIndex,
        path:'/admin/index',
        component:AdminIndex
    },
    {
        name:welcomePage,
        path:'/admin/welcome',
        component:welcomePage
    },
    {
        name:AdminHeader,
        path:'/admin/header',
        component:AdminHeader
    },
    {
        name:AdminFooter,
        path:'/admin/footer',
        component:AdminFooter
    },
    {
        name:menuPage,
        path:'/admin/menu',
        component:menuPage
    },
    {
        name:updateSetting,
        path:'/admin/update_setting',
        component:updateSetting
    },
    {
        name:businessList,
        path:'/admin/business_list',
        component:businessList
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;