<template>
    <aside class="main-sidebar sidebar-bg-col">
        <section class="sidebar">
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="../assets/images/avatar.png" class="" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p class="u-name">Admin User Name</p>
                    <router-link to="" class="text-light">
                        <i class='bx bxs-circle text-success'></i> Online
                    </router-link>
                </div>
            </div>

            <ul class="sidebar-menu">
                <li class="header">MAIN NAVIGATION</li>

                <li class="treeview">
                    <router-link to="#" class="r-link" v-on:click="isHidden = !isHidden" @click="rotation">
                        <i class='bx bx-cog'></i> <span>Setting</span>
                        <i class='bx bx-chevron-left' :class="{ clicked }"> </i>
                    </router-link>
                    <ul v-if="isHidden" class="treeview-menu sub-menu">
                        <li>
                            <router-link to="/admin/update_setting" class="sr-link d-flex align-item-center justify-item-center"> 
                                <i class='bx bx-radio-circle'></i> <span> Update Setting </span> 
                            </router-link> 
                        </li>
                    </ul>
                </li>

                <li class="treeview ">
                    <router-link to="" class="r-link" v-on:click="isHidden2 = !isHidden2" @click="rotation">
                        <i class='bx bx-file-blank'></i> <span>Manage Business</span>
                        <i class='bx bx-chevron-left' :class="{ clicked }"></i>
                    </router-link>
                    <ul class="treeview-menu sub-menu">
                        <li class="" v-if="isHidden2">
                            <router-link to="/admin/business_list" class="sr-link d-flex align-item-center justify-item-center">
                                <i class='bx bx-radio-circle'></i> Business List 
                            </router-link> 
                        </li>
                    </ul>
                </li>

                <li class="treeview ">
                    <router-link to="/admin/send_notification" class="r-link">
                        <i class='bx bx-bell'></i> <span>Send Notification</span>
                    </router-link>
                </li>

                <li class="treeview ">
                    <router-link to="/admin/send_sms" class="r-link">
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
                clicked: false,
            };
        },
        methods: {
            rotation() {
                this.clicked = !this.clicked
            }
        }
    }
</script>

<style scoped>
    .sidebar-bg-col { background-color:#222d32; }
    .u-name { color:white; font-size:14px;}
    .header { box-shadow:none; background-color:#1a2226; color:#4b646f; }
    .r-link { color:#b8c7ce; text-decoration:none; display:flex; align-items:center; justify-items:center;}
    .r-link:hover { border-left:3px solid #3c8dbc; background-color:#4b646f; color:white; }
    .sr-link { color:#b8c7ce; text-decoration:none; }
    .bx-radio-circle { font-size:20px;}
    .clicked { transform: rotate(-90deg); transition:transform 0.1s ease-in-out; }
    .sub-menu { background-color:#1a2226; color:white; transition:transform 1s ease-in-out;}
</style>