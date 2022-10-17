<template>
    <Header></Header>

    <div class="main">
        <div class="row align-item-center">
            <div class="col-7 leftDiv">
                <p class="fw-bold">DIASPORA NIGERIA IS AN ONLINE REALTIME PLATFORM FOR <br> NIGERIANS IN THE DIASPORA .</p>
                <span>Meet Nigerians With Common Interests In Your Location</span>
            </div>
            
            <div class="col-5 loginformmain">
                <div class="login">
                    <h2 class="text-center create-acnt">Create an account</h2>
                    <div class="contant">
                        <form @submit.prevent="submitData" @input="validate" method="post" novalidate>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class='bx bxs-user box-icon'></i></span>
                                <input type="text" :class="`form-control input-radius ${this.post.errors.firstName ? 'is-invalid' : ''}`" placeholder="First Name" v-model="post.firstName">
                                <div class="invalid-feedback"> {{this.post.errors.firstName}} </div>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class='bx bxs-user box-icon'></i></span>
                                <input type="text" :class="`form-control input-radius ${this.post.errors.lastName ? 'is-invalid' : ''}`" placeholder="Last Name" v-model="post.lastName">
                                <div class="invalid-feedback"> {{this.post.errors.lastName}} </div>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class='bx bxs-envelope box-icon'></i></span>
                                <input type="email" :class="`form-control input-radius ${this.post.errors.email ? 'is-invalid' : ''}`" placeholder="Email" v-model="post.email">
                                <div class="invalid-feedback"> {{this.post.errors.email}} </div>
                            </div>
                            <div class="input-group mb-3">
                                <vue-tel-input :class="`number-input ${this.post.errors.phone ? 'is-invalid' : ''}`" v-model="post.phone" @input="onInput"></vue-tel-input>
                                <div class="invalid-feedback"> {{this.post.errors.phone}} </div>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class='bx bxs-lock-alt box-icon'></i></span>
                                <input type="password" :class="`form-control input-radius ${this.post.errors.password ? 'is-invalid' : ''}`" placeholder="Password" v-model="post.password">
                                <div class="invalid-feedback"> {{this.post.errors.password}} </div>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class='bx bxs-lock box-icon'></i></span>
                                <input type="password" :class="`form-control input-radius ${this.post.errors.conPassword ? 'is-invalid' : ''}`" placeholder="Confirm Password" v-model="post.conPassword">
                                <div class="invalid-feedback"> {{this.post.errors.conPassword}} </div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="flexCheckDefault" value="flexCheckDefault"  v-model="checkbox" />
                                <label class="form-check-label" for="flexCheckDefault"> I agree to the  <router-link to="" class="listbusiness"> Terms and Conditions </router-link> </label>
                            </div>
                            <div class="d-grid gap-2 col-12 mx-auto">
                                <button type="submit" class="btn btn-success fw-bold">Sign Up</button>
                            </div>
                            <p class="mt-3 text-center"> 
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
                post: {
                    errors: {},
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    password: "",
                    conPassword: "",
                }
            };
        },
        methods: {
            onInput(_, phoneObject) {
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
                }
                return true;
            },
            submitData() {
                if (this.validate()) {

                    this.axios.post("http://localhost:3000/signup").then((response) => {
                        if( response.status != 200 ){
                            throw response.status;
                        }else{
                            return response.json();
                        }
                    })
                }
            }
        },
    }
</script>

<style scoped>
    .btn { border-radius:0.375rem; }
    .bx { font-size:20px; }
</style>