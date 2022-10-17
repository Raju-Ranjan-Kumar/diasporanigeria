import { createWebHistory, createRouter } from "vue-router";
import indexPage from './components/index'
import forgotPassword from './components/forgot_password.vue'
import AdminIndex from './admin/index'
import welcomePage from './admin/welcome'
import updateSetting from './admin/update_setting'
import businessList from './admin/business_list'
import sendNotification from './admin/send_notification'
import sendSms from './admin/send_sms'
import businessAdd from './admin/business_addf'

const routes = [
    {
        name:indexPage,
        path:'/',
        component:indexPage
    },
    {
        name:forgotPassword,
        path:'/forgot_password',
        component:forgotPassword
    },
    {
        name:AdminIndex,
        path:'/admin',
        component:AdminIndex
    },
    {
        name:welcomePage,
        path:'/admin/welcome',
        component:welcomePage
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
    {
        name:sendNotification,
        path:'/admin/send_notification',
        component:sendNotification
    },
    {
        name:sendSms,
        path:'/admin/send_sms',
        component:sendSms
    },
    {
        name:businessAdd,
        path:'/admin/business_addf',
        component:businessAdd
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;