<template>
    <div class="main-container position-relative">
        <div class="itm-center position-absolute m-auto">
            <h2 class="text-center text-light">DIASPORA NIGERIA</h2>
            <div class="signup ">
                <h2 class="login-box-hed ">Administrator</h2>
                <div class="contant">
                    <form @submit.prevent="submitData" method="post">
                        <div class="input-group mb-4">
                            <span class="input-group-text" id="basic-addon1"><i class='bx bx-user box-icon'></i></span>
                            <input type="text" :class="`form-control ${this.post.errors.username ? 'is-invalid' : ''}`" placeholder="Username" v-model="post.username">
                            <div class="invalid-feedback"> {{this.post.errors.username}} </div>
                        </div>
                        <div class="input-group mb-4">
                            <span class="input-group-text" id="basic-addon1"><i class='bx bx-lock-alt box-icon'></i></span>
                            <input type="password" :class="`form-control ${this.post.errors.password ? 'is-invalid' : ''}`" placeholder="Password" v-model="post.password">
                            <div class="invalid-feedback"> {{this.post.errors.password}} </div>
                        </div>
                        <div class="d-grid">
                            <button class="btn bttn" type="submit">Sign In</button>
                        </div>
                        <div class="col-xs-12">
                            <p class="login-admin-msg">Please enter a valid username and password to gain access to the administration console.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import validatindex from './validation/validateindex';

    export default {
        name: 'AdminIndex',
        data(){
            return{
                post:{
                    errors: {},
                    username: '',
                    password: '',
                }
            }
        },
        methods:{
            submitData(){
                const {isInvalid, errors} = validatindex({
                    username: this.post.username,
                    password: this.post.password,
                });

                if(isInvalid){
                    this.post.errors = errors;
                }else{
                    console.log("Login successfully");
                }
            }
        }
    }
</script>

<style scoped>
    .main-container{ background-image: url('../assets/images/bg.jpg'); background-size:cover; height:100vh; width: 100%;}
    .itm-center{ width:35%; top:50%; left:50%; transform:translate(-50%, -50%); }
    .signup{ background-color:#ffffff; box-shadow:0px 0px 1px #666 !important; border-radius:8px;}
    .login-box-hed { margin:0; text-align:center; padding:25px 20px 30px 20px; font-size:22px; text-transform:uppercase;
        line-height:21px; letter-spacing:1px; color:#3c8dbc; font-weight:500;
    }
    .login-admin-msg{ padding:40px 0px; text-align:center; font-size:14px; }

    .bttn { background-color:#3c8dbc; border-color:#367fa9; color:white; }
    .bttn:hover { background-color:#367fa9 !important; color:white !important;; }
</style>