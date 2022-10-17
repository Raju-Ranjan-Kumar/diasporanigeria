<template>
    <Header></Header>

    <div class="main">
        <div class="row align-item-center">
            <div class="col-7 leftDiv">
                <p class="fw-bold">DIASPORA NIGERIA IS AN ONLINE REALTIME PLATFORM FOR <br> NIGERIANS IN THE DIASPORA .</p>
                <span> Meet Nigerians With Common Interests In Your Location </span>
            </div>
            
            <div class="col-5 loginformmain">
                <div class="login">
                    <div class="backdiv">
                        <router-link to="/" class="back-p icon-text-center">
                            <i class='bx bx-chevron-left'></i> <span>Back</span> 
                        </router-link>
                    </div> 
                    <div class="forgoticon position-relative">
                        <img src="../assets/images/f-lock.png" class="position-absolute">
                    </div>
                    <div class="contant">
                        <div class="forgottext">
                            <h2 class="forgot-pas">Forgot Your Password</h2>
                            <p> Enter the mobile number associated with your account, and we'll help you get your password reset.</p>
                        </div>
                        <form @submit.prevent="submitPhone" @input="validate" method="post" novalidate>
                            <div class="input-group mb-4">
                                <vue-tel-input :class="`number-input ${this.forgot.errors.phone ? 'is-invalid' : ''}`" v-model="forgot.phone" @input="onInput"></vue-tel-input>
                                <div class="invalid-feedback"> {{this.forgot.errors.phone}} </div>
                            </div>
                            <div class="d-grid gap-2 col-12 mx-auto mb-4">
                                <button class="btn btn-success fw-bold" type="submit">Next</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer></Footer>
</template>

<script>
    import Header from './header.vue';
    import Footer from './footer.vue';
    import valFrgtPassword from '../validation/forgot_password';

    export default {
        name: 'forgotPassword',
        components: { Header, Footer },
        data(){
            return{
                forgot:{
                    errors: {},
                    phone: '',
                }
            }
        },
        methods:{
            onInput(_, phoneObject) {
                if (phoneObject?.formatted) {
                    this.forgot.phone = phoneObject.formatted
                }
            },
            validate() {
                const {isInvalid, errors} = valFrgtPassword({
                    phone: this.forgot.phone,
                });

                if (isInvalid) {
                    this.forgot.errors = errors;
                    return false;
                }
                return true;
            },
            submitPhone() {
                if (this.validate()) {
                    console.log("Forgot successfully");
                }
            }
        }
    }
</script>

<style scoped>
    .btn { border-radius:0.375rem; }
</style>