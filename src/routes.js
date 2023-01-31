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
import friendRequestSent from './user/friend-request-sent'
import otpVerification from './user/otp-verification'
import pageNotFound from './user/pageNotFound'

const routes = [
    {
        name:"indexPage",
        path:'/',
        component:indexPage
    },
    {
        name:"forgotPassword",
        path:'/forgot_password',
        component:forgotPassword
    },
    {
        name:"dashboardPage",
        path:'/user/dashboard',
        component:dashboardPage,
    },
    {
        name:"userdHeader",
        path:'/user/userheader',
        component:userdHeader,
    },
    {
        name:"userProfile",
        path:'/user/userprofile',
        component:userProfile,
    },
    {
        name:"friendRequest",
        path:'/user/friend-request',
        component:friendRequest,
    },
    {
        name:"myProfile",
        path:'/user/my-profile',
        component:myProfile,
    },
    {
        name:"changePassword",
        path:'/user/change-password',
        component:changePassword,
    },
    {
        name:"addBusiness",
        path:'/user/add-business',
        component:addBusiness,
    },
    {
        name:"editProfile",
        path:'/user/edit-profile',
        component:editProfile,
    },
    {
        name:"chatPage",
        path:'/user/chat',
        component:chatPage,
    },
    {
        name:"friendRequestSent",
        path:'/user/friend-request-sent',
        component:friendRequestSent,
    },
    {
        name:"otpVerification",
        path:'/user/otp-verification',
        component:otpVerification,
    },
    {
        name:"pageNotFound",
        path:'/:pathMatch(.*)*',
        component:pageNotFound,
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;