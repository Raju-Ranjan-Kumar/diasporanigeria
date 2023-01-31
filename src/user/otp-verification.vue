<template>
    <Header></Header>

    <div class="main">
        <div class="signup-cant">
            <div class="leftDiv">
                <p> DIASPORA NIGERIA IS AN ONLINE REALTIME PLATFORM FOR NIGERIANS IN THE DIASPORA .</p>
                <div> Meet Nigerians With Common Interests In Your Location </div>
            </div>
            
            <div class="loginformmain">
                <div class="login">
                    <div class="backdiv">
                        <router-link to="/forgot_password" class="back-p icon-text-center">
                            <i class='bx bx-chevron-left'></i> <span>Back</span> 
                        </router-link>
                    </div> 
                    <div class="forgoticon position-relative">
                        <img src="../assets/images/ver2.png" class="position-absolute">
                    </div>
                    <div class="contant">
                        <div class="forgottext">
                            <h2 class="forgot-pas"> Verification </h2>
                            <p> you'll get an email from our side, Open the email and find the verification code.</p>
                        </div>
                        <form @submit.prevent="submitPhone" @input="validate" method="post" novalidate>
                            <div class="text-field">
                                <input type="text" :class="`${this.verify.errors.email ? 'is-invalid' : ''}`" v-model="verify.email" />
                                <i class='bx bxs-envelope ps-icon'></i>
                                <label>Email</label>
                                <div class="invalid-feedback"> {{this.verify.errors.email}} </div>
                            </div>
                            <div class="text-field">
                                <input type="text" :class="`${this.verify.errors.otp ? 'is-invalid' : ''}`" v-model="verify.otp">
                                <i class='bx bx-lock-open ps-icon'></i>
                                <label>Verification code</label>
                                <i class='bx bxs-low-vision eye-vision'></i>
                                <div class="invalid-feedback"> {{this.verify.errors.otp}} </div>
                            </div>
                            <div class="next">
                                <button class="btn btn-success bttn-f" type="submit"> Verify </button>
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
    import verifyOtp from '../validation/otp-verification';

    export default {
        name: 'otpVerification',
        components: { Header, Footer },
        data(){
            return{
                verify:{
                    errors: {},
                    email: '',
                    otp: '',
                }
            }
        },
        methods:{
            validate() {
                const {isInvalid, errors} = verifyOtp({
                    email: this.verify.email,
                    otp: this.verify.otp,
                });

                if (isInvalid) {
                    this.verify.errors = errors;
                    return false;
                }else {
                    this.verify.errors = {}
                }
                return true;
            },
            submitPhone() {
                if (this.validate()) {
                    this.axios.post("https://api2.diasporanigeria.org/api/verify-otp", {
                        email: this.verify.email,
                        otp: this.verify.otp,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
                        }
                    }).then((response) => {
                        console.warn(response);
                        this.$router.push("/");
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .bx { font-size:18px; }
    .next { width:100%; font-weight:bold; margin:1rem 0px; }
</style>