<template>
    <userd-header></userd-header>

    <section id="connect">
        <div class="toasts" :class="(popup ? 'active' : '') + (popup_msg == 'Success' ? ' ' : ' err-toast')">
            <div class="toast-content">
                <i :class="popup_msg == 'Success' ? 'ph-check check' : 'ph-x'"></i>
                <div class="message">
                    <span class="text text-1">{{ popup_msg }} !!</span>
                    <span class="text text-2"> {{msg}} ! </span>
                </div>
            </div>
            <i class="ph-x cut"></i>
            <div class="progress"> </div>
        </div>
        <div class="container">
            <profilePage></profilePage>

            <div class="card profile-detail change-password">
                <form action="#" method="post" @input="validatePassword" @submit.prevent="changePass">
                    <div class="change-pass-cant">
                        <div class="change-pass">
                            <p class="card-text"> Old Password </p>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-lock password-icon'></i></span>
                                <input type="password" :class="`form-control input-radius ${this.change.errors.old_password ? 'is-invalid' : ''}`" placeholder="Old Password" v-model="change.old_password">
                                <div class="invalid-feedback"> {{this.change.errors.old_password}} </div>
                            </div>
                        </div>
                        <div class="change-pass">
                            <p class="card-text"> New Password </p>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-lock-alt password-icon'></i></span>
                                <input type="password" :class="`form-control input-radius ${this.change.errors.new_password ? 'is-invalid' : ''}`" placeholder="New Password" v-model="change.new_password">
                                <div class="invalid-feedback"> {{this.change.errors.new_password}} </div>
                            </div>
                        </div>
                        <div class="change-pass">
                            <p class="card-text"> Confirm Password </p>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-lock-alt password-icon'></i></span>
                                <input type="password" :class="`form-control input-radius ${this.change.errors.con_password ? 'is-invalid' : ''}`" placeholder="Confirm Password" v-model="change.con_password">
                                <div class="invalid-feedback"> {{this.change.errors.con_password}} </div>
                            </div>
                        </div>
                        <div class="c-p-btn">
                            <button class="btn btn-success" type="submit"> Change Password </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <footer-page></footer-page>
</template>

<script>
    import userdHeader from './user-header.vue'
    import footerPage from './footer.vue'
    import profilePage from './profile.vue'
    import valChangePass from '../validation/change-password.js';

    export default {
        name: "changePassword",
        components: { userdHeader, footerPage, profilePage },
        data() {
            return {
                popup:false,
                msg:'',
                err:'',
                popup_msg:'',

                change: {
                    old_password: '',
                    new_password: '',
                    con_password: '',
                    errors: {},
                }
            }
        },
        methods: {
            validatePassword() {
                const {isInvalid, errors} = valChangePass({
                    old_password: this.change.old_password,
                    new_password: this.change.new_password,
                    con_password: this.change.con_password,
                });

                if (isInvalid) {
                    this.change.errors = errors;
                    return false;
                }else {
                    this.change.errors = {}
                }
                return true;
            },
            changePass() {
                if (this.validatePassword()) {
                    const token = JSON.parse(localStorage.getItem('token'));

                    this.axios.post("https://api2.diasporanigeria.org/api/change-password", {
                        old_password: this.change.old_password,
                        new_password: this.change.new_password,
                    },{
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': 'Bearer ' + `${token}`
                        }
                    }).then((response) => {
                        if(response.data.status === true) {
                            this.msg = response.data?.message;
                            this.popup_msg = "Success"
                        }

                        this.popup = true
                        setTimeout(() => {
                            this.popup = false
                        }, 3000);

                    }).catch((error) => {
                        if(error.response.data.status == false) {
                            this.err = error.response.data?.error;
                            this.msg = this.err
                            this.popup_msg = "Oh No"
                        }

                        this.popup = true
                        setTimeout(() => {
                            this.popup = false
                        }, 3000);
                    });
                }
            },
            mounted () {
                const token = JSON.parse(localStorage.getItem('token'));
                if (!token) {
                    this.$router.push("/");
                }
            }
        }
    }
</script>

<style scoped>
    .container { width:100%; padding:10px; display:flex; }
    .card-text { margin-bottom:5px; text-transform:uppercase; color:#666; font-weight:600; }
    .change-pass { margin:0px; }
    .c-p-btn { padding-top:0.5rem; }
    .c-p-btn .btn-success { width:100%; }
    .btn-success { font-weight:bold; border-radius:1.5rem; }
</style>