<template>
    <nav class="navbar navbar-expand-lg header">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img class="he-logo" src="../assets//images/logo.jpg">
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex mrgn-l-f" @input="validate">
                    <div>
                        <vue-tel-input :class="`${this.post.errors.phone ? 'is-invalid' : ''}`" v-model="post.phone" @input="onInput"></vue-tel-input>
                        <div class="invalid-feedback"> {{this.post.errors.phone}} </div>
                    </div>

                    <div>
                        <input :class="`form-control me-2 ms-2 pass-input ${this.post.errors.password ? 'is-invalid' : ''}`" type="password" placeholder="Password" v-model="post.password">
                        <div class="invalid-feedback ms-2"> {{this.post.errors.password}} </div>
                        <router-link to="/forgot_password" class="f-password">Forgot Password?</router-link>
                    </div>

                    <button class="btn hedr-btn" type="submit" v-on:click="login()">Login</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import validateheader from '../validation/header';

    export default {
        name: 'headerPage',
        data(){
            return{
                post:{
                    phone: '',
                    password: '',
                    country_code: '',
                    errors: {},
                }
            }
        },
        methods:{
            onInput(_, phoneObject) {
                if (phoneObject?.country.dialCode) {
                    this.post.country_code = '+' + phoneObject?.country.dialCode;
                }
                if (phoneObject?.formatted) {
                    this.post.phone = phoneObject.formatted
                }
            },
            validate() {
                const {isInvalid, errors} = validateheader({
                    phone: this.post.phone,
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
                    this.axios.post("http://localhost/diasporanigeria-backend/appdata/webservice.php", {
                        login: 1,
                        device_token: 12345,
                        device_type: 1,
                        latitude: 1,
                        longitude: 1,
                        country_code: this.post.country_code,
                        phone: this.post.phone,
                        password: this.post.password,
                    }, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        }
                    }).then((response) => {
                        console.warn(response);
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .vue-tel-input { height:35px; width:205px; font-size:14px; border:1px solid #ced4da; border-radius:2px; color:#000; background:#fff; }
    .navbar-brand { padding:8px 0px; }
    .navbar-collapse { padding:8px 0px; }
    .btn { --bs-btn-font-size: 1rem;}
    .mrgn-l-f { margin-left:auto; margin-right:25px;}
</style>