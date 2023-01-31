<template>
    <nav class="navbar navbar-expand-lg header">
        <div class="container-fluid">
            <div class="nav-hedr-logo">
                <router-link to="/">
                    <img class="he-logo" src="../assets/images/logo.jpg">
                </router-link>
            </div>

            <div class="login-cant" @input="validate">
                <div>
                    <input :class="`form-control pass-input ${this.post.errors.email ? 'is-invalid' : ''}`" type="email" placeholder="Email" v-model="post.email">
                    <div class="invalid-feedback err-show"> {{this.post.errors.email}} </div>
                </div>
                <div>
                    <input :class="`form-control pass-input ${this.post.errors.password ? 'is-invalid' : ''}`" type="password" placeholder="Password" v-model="post.password">
                    <div class="invalid-feedback err-show"> {{this.post.errors.password}} </div>
                    <router-link to="/forgot_password" class="f-password"> Forgot Password? </router-link>
                </div>
                <div>
                    <button class="btn hedr-btn" type="submit" v-on:click="login()"> Login </button>
                </div>
            </div>
        </div>
    </nav>

    <div class="toasts" :class="(popup ? 'active' : '') + (popup_msg == 'Success' ? '' : ' err-toast')">
        <div class="toast-content">
            <i :class="popup_msg == 'Success' ? 'ph-check check' : 'ph-x'"></i>
            <div class="message">
                <span class="text text-1"> {{ popup_msg }} !!</span>
                <span class="text text-2"> {{msg}} ! </span>
            </div>
        </div>
        <i class="ph-x cut"></i>
        <div class="progress"> </div>
    </div>

    <div class="loading" v-if="load">
        <div class="loader"></div>
    </div>
</template>

<script>
    import validateheader from '../validation/header';

    export default {
        name: 'headerPage',
        data() {
            return {
                popup:false,
                msg:'',
                err:'',
                popup_msg:'',
                load: false,

                post: {
                    email: '',
                    password: '',
                    errors: {},
                }
            }
        },
        methods: {
            validate() {
                const {isInvalid, errors} = validateheader({
                    email: this.post.email,
                    password: this.post.password,
                });

                if (isInvalid) {
                    this.post.errors = errors;
                    return false;
                }else {
                    this.post.errors = {}
                }
                return true;
            },
            login() {
                if (this.validate()) {
                    this.axios.post("https://api2.diasporanigeria.org/api/login", {
                        email: this.post.email,
                        password: this.post.password,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
                        }
                    }).then((response) => {
                        this.load = true,
                        localStorage.setItem('token',JSON.stringify(response.data?.data?.token));
                        localStorage.setItem('id',JSON.stringify(response.data?.data?.id));

                        if(response.data.status === true) {
                            this.msg = response.data?.message;
                            this.popup_msg = "Success"
                        }

                        this.popup = true
                        setTimeout(() => {
                            this.popup = false
                        }, 3000);

                        this.$router.push("/user/dashboard");
                    }).catch((error) => {
                        if(error.response.data.status == false) {
                            this.err = error.response.data?.message;
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
        },
        mounted() {
            let token = localStorage.getItem('token');
            if (token) {
                this.$router.push("/user/dashboard");
            }
        }
    }
</script>

<style scoped>
    .container-fluid { width:100%; display:flex; margin:5px 45px;}
    .login-cant { display:flex; }
    .btn { --bs-btn-font-size:1rem; border-radius:2px; }
</style>