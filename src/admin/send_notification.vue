<template>
    <Header></Header>
    <Menu></Menu>

    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <section class="content-header">
                    <h1>Send Notification</h1>
                    <ol class="breadcrumb"> </ol>
                </section>
                <section class="content">
                    <div class="box box-primary">
                        <form @submit.prevent="sndNotification" @input="validate" method="post" novalidate>
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Tpye</label>
                                            <Select2 :options="myOptions" @change="myChangeEvent($event)" @select="mySelectEvent($event)" :class="` ${this.notification.errors.type ? 'is-invalid' : ''}`" v-model="notification.type" placeholder="Select Type"/>
                                            <div class="invalid-feedback"> {{this.notification.errors.type}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6" v-if="notification.type === 'Individual'">
                                        <div class="form-group">
                                            <label>Select Users</label>
                                            <Select2 :options="user_name" @change="myChangeEvent($event)" @select="mySelectEvent($event)" :class="` ${this.notification.errors.Users ? 'is-invalid' : ''}`" v-model="notification.Users" placeholder="Select Users"/>
                                            <div class="invalid-feedback"> {{this.notification.errors.Users}} </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Title</label>
                                            <input type="text" :class="`control ${this.notification.errors.title ? 'is-invalid' : ''}`" v-model="notification.title">
                                            <div class="invalid-feedback"> {{this.notification.errors.title}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Message</label>
                                            <textarea rows="5" cols="30" :class="`control ${this.notification.errors.message ? 'is-invalid' : ''}`" v-model="notification.message"></textarea>
                                            <div class="invalid-feedback"> {{this.notification.errors.message}} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-success btn-sm me-2">Submit</button>
                                <button type="reset" class="btn btn-danger btn-sm">Reset</button>
                                <p class="text-center"> <span class="box-title n-message"><strong>sess_msg</strong></span></p>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </body>

    <Footer></Footer>
</template>

<script>
    import Header from './header.vue';
    import Footer from './footer.vue';
    import Menu from './menu.vue';
    import validateNotification from './validation/send_notification';
    import Select2 from 'vue3-select2-component';
    import axios from 'axios'

    export default {
        name: "sendNotification",
        components: { Footer, Header, Menu, Select2 },
        data(){
            return{
                notification:{
                    errors: {},
                    type: '',
                    Users: '',
                    title: '',
                    message: '',
                },
                user_name: [],
                myOptions: ['Select User', 'All', 'Individual', 'Ios Users', 'Android Users'],
            }
        },
        mounted () {
            axios.get("https://diasporanigeria.org/diaspora/diasporanigeria-admin/public/api/events").then((response) => {
                const values = response.data.data;
                this.user_name = values.map(d => (d.name));
            }).catch((error) => {
                console.warn(error);
            });
        },
        methods:{
            myChangeEvent(val){
                console.log(val);
            },
            mySelectEvent({id, text}){
                console.log({id, text});
            },
            validate() {
                const { isInvalid, errors } = validateNotification({
                    type: this.notification.type,
                    Users: this.notification.Users,
                    title: this.notification.title,
                    message: this.notification.message,
                });

                if (isInvalid) {
                    this.notification.errors = errors;
                    return false;
                }else {
                    this.notification.errors = {}
                }
                return true;
            },
            sndNotification(){
                if (this.validate()) {
                    axios.get("https://diasporanigeria.org/diaspora/diasporanigeria-admin/public/api/ticket/5").then((response) => {
                        const values = response.data.data;
                        console.warn(values);
                    });
                }
            }
        }
    }
</script>

<style scoped>
    label { margin-bottom:5px; font-weight:bold; font-size:14px; }
    .form-group { margin-bottom:12px; }
    .n-message { font-size:14px; color:#a94442 }
    .control:focus { outline:none; }
</style>