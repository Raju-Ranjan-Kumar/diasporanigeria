<template>
    <Header></Header>
    <Menu></Menu>

    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <section class="content-header">
                    <h1> Send SMS </h1>
                    <ol class="breadcrumb"> </ol>
                </section>
                <section class="content">
                    <div class="box box-primary">
                        <form @submit.prevent="sndSms" @input="validate" method="post" novalidate>
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Type</label>
                                            <Select2 :options="myOptions" @change="myChangeEvent($event)" @select="mySelectEvent($event)" :class="`${this.sms.errors.type ? 'is-invalid' : ''}`" v-model="sms.type" placeholder="Select Type"/>
                                            <div class="invalid-feedback"> {{this.sms.errors.type}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6" v-if="sms.type === 'Individual'">
                                        <div class="form-group">
                                            <label>Select Users</label>
                                            <Select2 :options="names" @change="myChangeEvent($event)" @select="mySelectEvent($event)" :class="`${this.sms.errors.users ? 'is-invalid' : ''}`" v-model="sms.users" placeholder="Select User"/>
                                            <div class="invalid-feedback"> {{this.sms.errors.users}} </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Message</label>
                                            <textarea rows="5" cols="30" :class="`control select2 ${this.sms.errors.message ? 'is-invalid' : ''}`" v-model="sms.message"></textarea>
                                            <div class="invalid-feedback"> {{this.sms.errors.message}} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-success btn-sm me-2">Submit</button>
                                <button type="reset" class="btn btn-danger btn-sm">Reset</button>
                                <p class="text-center"> <span class="box-title" style="font-size:14px;color:#a94442"><strong>sess_msg</strong></span></p>
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
    import validateSms from './validation/send_sms';
    import Select2 from 'vue3-select2-component';
    import axios from 'axios';

    export default{
        name: "sendSms",
        components: { Header, Footer, Menu, Select2 },
        data(){
            return{
                sms:{
                    type: '',
                    users: '',
                    message: '',
                    errors: {},
                },
                names: [],
                myOptions: ['Select Type', 'All', 'Individual'],
            }
        },
        mounted () {
            axios.get("https://diasporanigeria.org/diaspora/diasporanigeria-admin/public/api/events").then((response) => {
                const values = response.data.data;
                this.names = values.map(d => (d.name));
            }).catch((error) => {
                console.warn(error);
            });
        },
        methods:{
            myChangeEvent(val){
                console.log(val);
            },
            mySelectEvent({id, text}){
                console.log({id, text})
            },
            validate() {
                const { isInvalid, errors } = validateSms({
                    type: this.sms.type,
                    users: this.sms.users,
                    message: this.sms.message,
                });

                if (isInvalid) {
                    this.sms.errors = errors;
                    return false;
                }else {
                    this.sms.errors = {}
                }
                return true;
            },
            sndSms(){
                if (this.validate()) {
                    axios.get("https://diasporanigeria.org/diaspora/diasporanigeria-admin/public/api/ticket/5").then((response) => {
                        const values = response.data.data;
                        console.warn(values);
                    }).catch((error) => {
                        console.warn(error);
                    });
                }
            }
        },
    }
</script>

<style scoped>
    label { margin-bottom:5px; font-weight:bold; font-size:14px; }
    .form-group { margin-bottom:12px; }
    textarea:focus { outline:none; }
</style>