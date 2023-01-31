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
                            <p> Enter the email associated with your account, and we'll help you get your password reset.</p>
                        </div>
                        <form @submit.prevent="forgotPsd" @input="validate" method="post" novalidate>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-envelope box-icon'></i></span>
                                <input type="email" :class="`form-control input-radius ${this.forgot.errors.email ? 'is-invalid' : ''}`" placeholder="Email" v-model="forgot.email">
                                <div class="invalid-feedback"> {{this.forgot.errors.email}} </div>
                            </div>
                            <div class="next">
                                <button class="btn btn-success bttn-f" type="submit"> Next </button>
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
        data() {
            return {
                forgot: {
                    errors: {},
                    email: '',
                }
            }
        },
        methods:{
            validate() {
                const {isInvalid, errors} = valFrgtPassword({
                    email: this.forgot.email,
                });

                if (isInvalid) {
                    this.forgot.errors = errors;
                    return false;
                }else {
                    this.forgot.errors = {}
                }
                return true;
            },
            forgotPsd() {
                if (this.validate()) {
                    this.axios.post("https://api2.diasporanigeria.org/api/forgotpassword-send-request", {
                        email: this.forgot.email,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
                        }
                    }).then((response) => {
                        console.warn(response);
                        this.$router.push("/user/otp-verification");
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