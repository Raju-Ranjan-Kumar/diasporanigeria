import { createWebHistory, createRouter } from "vue-router";

import indexPage from './user/index'
import forgotPassword from './user/forgot_password.vue'
import dashboardPage from './user/dashboard'
import userdHeader from './user/user-header'
import userProfile from './user/user-profile'
import friendRequest from './user/friend-request'
import myProfile from './user/my-profile'
import changePassword from './user/change-password'
import addBusiness from './user/add-business'
import editProfile from './user/edit-profile'
import chatPage from './user/chat'

import AdminIndex from './admin/index'
import welcomePage from './admin/welcome'
import updateSetting from './admin/update_setting'
import businessList from './admin/business_list'
import sendNotification from './admin/send_notification'
import sendSms from './admin/send_sms'
import businessAdd from './admin/business_addf'
import eventsPage from './admin/events'
import ticketPage from './admin/ticket'
import eventCrud from './admin/eventCrud'
import ticketCrud from './admin/ticketCrud'

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
        name:dashboardPage,
        path:'/user/dashboard',
        component:dashboardPage,
    },
    {
        name:userdHeader,
        path:'/user/userheader',
        component:userdHeader,
    },
    {
        name:userProfile,
        path:'/user/userprofile',
        component:userProfile,
    },
    {
        name:friendRequest,
        path:'/user/friend-request',
        component:friendRequest,
    },
    {
        name:myProfile,
        path:'/user/my-profile',
        component:myProfile,
    },
    {
        name:changePassword,
        path:'/user/change-password',
        component:changePassword,
    },
    {
        name:addBusiness,
        path:'/user/add-business',
        component:addBusiness,
    },
    {
        name:editProfile,
        path:'/user/edit-profile',
        component:editProfile,
    },
    {
        name:chatPage,
        path:'/user/chat',
        component:chatPage,
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
        path:'/admin/business_addf/:page_name',
        component:businessAdd,
        props:true
    },
    {
        name:eventsPage,
        path:'/admin/events',
        component:eventsPage
    },
    {
        name:ticketPage,
        path:'/admin/ticket',
        component:ticketPage
    },
    {
        name:eventCrud,
        path:'/admin/event-crud/:h_name',
        component:eventCrud,
        props:true
    },
    {
        name:ticketCrud,
        path:'/admin/ticket-crud/:heading_name',
        component:ticketCrud,
        props:true
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;