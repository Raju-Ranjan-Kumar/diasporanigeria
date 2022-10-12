<template>
    <aside class="main-sidebar sidebar-bg-col">
        <section class="sidebar">
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="../assets/images/avatar.png" class="" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p class="u-name">Admin User Name</p>
                    <router-link to="#" class="text-light">
                        <i class='bx bxs-circle text-success'></i> Online
                    </router-link>
                </div>
            </div>

            <ul class="sidebar-menu">
                <li class="header">MAIN NAVIGATION</li>
                <li class="treeview">
                    <router-link to="#" class="text-light r-link" v-on:click="isHidden = !isHidden">
                        <i class='bx bx-cog'></i>
                        <span title="Puede gestionar aqui Banner,Preguntas frecuentes,Perfil,Llaves,Subadmin,Chat.">Setting</span>
                        <span class="pull-right-container"> <i class='bx bx-chevron-left pull-right'></i> </span>
                    </router-link>
                    <ul class="treeview-menu" >
                        <li class="" v-if="!isHidden"> <router-link to="/admin/update_setting" class=""> <i class='bx bx-radio-circle'></i> Update Setting </router-link> </li>
                    </ul>
                </li>
                <li class="treeview ">
                    <router-link to="#" class="r-link" v-on:click="isHidden2 = !isHidden2">
                        <i class='bx bx-file-blank'></i> <span>Manage Business</span>
                        <span class="pull-right-container"> <i class='bx bx-chevron-left pull-right'></i> </span>
                    </router-link>
                    <ul class="treeview-menu">
                        <li class="" v-if="!isHidden2"> <router-link to="/admin/business_list" class=""> <i class='bx bx-radio-circle'></i> Business List </router-link> </li>
                    </ul>
                </li>
                <li class="treeview ">
                    <router-link to="#" class="r-link">
                        <i class='bx bx-bell'></i> <span>Send Notification</span>
                    </router-link>
                </li>
                <li class="treeview ">
                    <router-link to="#" class="r-link">
                        <i class='bx bx-mobile'></i> <span>Send SMS</span>
                    </router-link>
                </li>
            </ul>
        </section>
    </aside>
</template>

<script>
    export default {
        name: 'menuPage',
        data() {
            return {
                isHidden:false,
                isHidden2:false,
            };
        },
    }
</script>

<style scoped>
    .sidebar-bg-col { background-color:#222d32; }
    .u-name { color:white; font-size:14px;}
    .header { box-shadow:none; background-color:#1a2226; color:#4b646f; }
    ul li .r-link { border-left:3px solid transparent; color:#b8c7ce; }
</style>