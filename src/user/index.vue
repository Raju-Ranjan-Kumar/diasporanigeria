<template>
    <Header></Header>

    <div class="main">
        <div class="toasts" :class="popup ? 'active' : ''">
            <div class="toast-content">
                <i class="ph-check check"></i>
                <div class="message">
                    <span class="text text-1"> {{ popup_msg }} </span>
                    <span class="text text-2"> {{msg}} ! </span>
                </div>
            </div>
            <i class="ph-x cut"></i>
            <div class="progress"> </div>
        </div>

        <div class="signup-cant">
            <div class="leftDiv">
                <p> DIASPORA NIGERIA IS AN ONLINE REALTIME PLATFORM FOR NIGERIANS IN THE DIASPORA .</p>
                <div> Meet Nigerians With Common Interests In Your Location </div>
            </div>
            <div class="loginformmain">
                <div class="login">
                    <h2 class="text-center create-acnt">Create an account</h2>
                    <div class="contant">
                        <form @submit.prevent="submitData" @input="validate" method="post" novalidate>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-user box-icon'></i></span>
                                <input type="text" :class="`form-control input-radius ${this.post.errors.firstName ? 'is-invalid' : ''}`" placeholder="First Name" v-model="post.firstName">
                                <div class="invalid-feedback"> {{this.post.errors.firstName}} </div>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-user box-icon'></i></span>
                                <input type="text" :class="`form-control input-radius ${this.post.errors.lastName ? 'is-invalid' : ''}`" placeholder="Last Name" v-model="post.lastName">
                                <div class="invalid-feedback"> {{this.post.errors.lastName}} </div>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-envelope box-icon'></i></span>
                                <input type="email" :class="`form-control input-radius ${this.post.errors.email ? 'is-invalid' : ''}`" placeholder="Email" v-model="post.email">
                                <div class="invalid-feedback"> {{this.post.errors.email}} </div>
                            </div>
                            <div class="input-group">
                                <vue-tel-input :class="`number-input ${this.post.errors.phone ? 'is-invalid' : ''}`" v-model="post.phone" @input="onInput"></vue-tel-input>
                                <div class="invalid-feedback"> {{this.post.errors.phone}} </div>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-lock box-icon'></i></span>
                                <input type="password" :class="`form-control input-radius ${this.post.errors.password ? 'is-invalid' : ''}`" placeholder="Password" v-model="post.password">
                                <div class="invalid-feedback"> {{this.post.errors.password}} </div>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-lock-alt box-icon'></i></span>
                                <input type="password" :class="`form-control input-radius ${this.post.errors.conPassword ? 'is-invalid' : ''}`" placeholder="Confirm Password" v-model="post.conPassword">
                                <div class="invalid-feedback"> {{this.post.errors.conPassword}} </div>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault"> 
                                    I agree to the <router-link to="" class="listbusiness"> Terms and Conditions </router-link>
                                </label>
                            </div>
                            <div class="signup-click">
                                <button class="btn btn-success bttn-f" type="submit"> Sign Up </button>
                            </div>
                            <p class="listbusiness-d-n"> 
                                <router-link to="" class="listbusiness"> List business on diaspora nigeria </router-link> 
                            </p>
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
    import validateregister from '../validation/index';

    export default {
        name: "indexPage",
        components: { Header, Footer },
        data() {
            return {
                popup:false,
                msg:'',
                err:'',
                popup_msg:'',

                post: {
                    errors: {},
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    country_code: '',
                    country: '',
                    password: "",
                    conPassword: "",
                }
            };
        },
        methods: {
            onInput(_, phoneObject) {
                if (phoneObject?.country.dialCode && phoneObject?.country.name) {
                    this.post.country_code = '+' + phoneObject?.country.dialCode;
                    this.post.country = phoneObject?.country.name;
                }
                if (phoneObject?.formatted) {
                    this.post.phone = phoneObject.formatted
                }
            },
            validate() {
                const { isInvalid, errors } = validateregister({
                    firstName: this.post.firstName,
                    lastName: this.post.lastName,
                    email: this.post.email,
                    phone: this.post.phone,
                    password: this.post.password,
                    conPassword: this.post.conPassword,
                });
                if (isInvalid) {
                    this.post.errors = errors;
                    return false;
                } else {
                    this.post.errors = {}
                }
                return true;
            },
            submitData() {
                if (this.validate()) {
                    this.axios.post("https://api2.diasporanigeria.org/api/signup", {
                        firstname: this.post.firstName,
                        lastname: this.post.lastName,
                        country_code: this.post.country_code,
                        phone: this.post.phone,
                        email: this.post.email,
                        password: this.post.password,
                        confirm_password: this.post.conPassword,
                        device_token: 123,
                        device_type: 1,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
                        }
                    }).then((response) => {
                        localStorage.setItem('token',JSON.stringify(response.data?.data?.token));
                        localStorage.setItem('id',JSON.stringify(response.data?.data?.id));

                        if(response.data.status === true) {
                            this.msg = response.data?.message;
                            this.popup_msg = "Successfull !!"
                        }

                        this.popup = true
                        setTimeout(() => {
                            this.popup = false
                        }, 3000);

                        this.$router.push("/user/dashboard");
                    });
                }
            },
        },
    }
</script>

<style scoped>
    .signup-click { width:100%; font-weight:bold; }
    .bx { font-size:18px; }
    .input-group,.form-check { margin-bottom:0.8rem; }
    .listbusiness-d-n { text-align:center; margin-top:0.8rem; }
</style>