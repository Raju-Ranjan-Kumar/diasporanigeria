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
                <div class="d-flex ms-auto" @input="validate">
                    <div class="">
                        <vue-tel-input :class="`${this.post.errors.phone ? 'is-invalid' : ''}`" v-model="post.phone" @input="onInput"></vue-tel-input>
                        <div class="invalid-feedback"> {{this.post.errors.phone}} </div>
                    </div>

                    <div>
                        <input :class="`form-control me-2 ms-2 pass-input ${this.post.errors.password ? 'is-invalid' : ''}`" type="password" placeholder="Password" v-model="post.password">
                        <div class="invalid-feedback"> {{this.post.errors.password}} </div>
                        <router-link to="/forgot_password" class="f-password">Forgot Password?</router-link>
                    </div>

                    <button class="btn hedr-btn" type="submit" v-on:click="submitNumber()">Login</button>
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
                    errors: {},
                    phone: '',
                    password: '',
                }
            }
        },
        methods:{
            onInput(_, phoneObject) {
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
                }
                return true;
            },
            submitNumber() {
                if (this.validate()) {
                    console.log("values :",this.post.phone,this.post.password,);
                }
            }
        }
    }
</script>

<style scoped>
    .vue-tel-input { height:35px; width:212px; font-size:0.9rem; border:1px solid #ced4da; color:#000; background:#fff; }
    .navbar-collapse { padding:8px 0px; }
    .btn { --bs-btn-font-size: 0.9rem; }
</style>