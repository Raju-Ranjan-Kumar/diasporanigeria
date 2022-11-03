<template>
    <Header></Header>
    <Menu></Menu>

    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <section class="content-header">
                    <h1> Add Business</h1>
                    <ol class="breadcrumb icon-text-center">
                        <li> 
                            <RouterLink to="/admin/welcome" class="text-size">
                                <i class='bx bxs-dashboard'></i> <span class="me-2">Home</span> 
                            </RouterLink> 
                        </li>
                        <i class='bx bx-chevron-right me-2 text-size'> </i>
                        <li> <RouterLink to="/admin/business_list" class="text-size"> View Business List </RouterLink> </li>
                    </ol>
                </section>
                <section class="content">
                    <div class="box box-default">
                        <form @submit.prevent="addBusiness" @input="validate" method="post" novalidate>
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>State Code</label>
                                            <input type="text" v-model="scode" :class="`form-control height ${this.addUpdate.errors.scode ? 'is-invalid' : ''}`" autocomplete="off">
                                            <div class="invalid-feedback"> {{this.addUpdate.errors.scode}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>State Name</label>
                                            <input type="text" v-model="sname" :class="`form-control height ${this.addUpdate.errors.sname ? 'is-invalid' : ''}`" autocomplete="off">
                                            <div class="invalid-feedback"> {{this.addUpdate.errors.sname}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Business Name</label>
                                            <input type="text" v-model="bname" :class="`form-control height ${this.addUpdate.errors.bname ? 'is-invalid' : ''}`" autocomplete="off">
                                            <div class="invalid-feedback"> {{this.addUpdate.errors.bname}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Category</label>
                                            <input type="text" v-model="category" :class="`form-control height ${this.addUpdate.errors.category ? 'is-invalid' : ''}`" autocomplete="off">
                                            <div class="invalid-feedback"> {{this.addUpdate.errors.category}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Latitude</label>
                                            <input type="text" v-model="latitude" :class="`form-control height ${this.addUpdate.errors.latitude ? 'is-invalid' : ''}`" autocomplete="off">
                                            <div class="invalid-feedback"> {{this.addUpdate.errors.latitude}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Longitude</label>
                                            <input type="text" v-model="longitude" :class="`form-control height ${this.addUpdate.errors.longitude ? 'is-invalid' : ''}`" autocomplete="off">
                                            <div class="invalid-feedback"> {{this.addUpdate.errors.longitude}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input type="text" v-model="address" :class="`form-control height ${this.addUpdate.errors.address ? 'is-invalid' : ''}`" autocomplete="off">
                                            <div class="invalid-feedback"> {{this.addUpdate.errors.address}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Website</label>
                                            <input type="text" v-model="website" :class="`form-control height ${this.addUpdate.errors.website ? 'is-invalid' : ''}`" autocomplete="off">
                                            <div class="invalid-feedback"> {{this.addUpdate.errors.website}} </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Logo</label>
                                            <input type="file" v-on:change="onChangeFileUpload()" :class="`form-control ${this.addUpdate.errors.onChangeFileUpload ? 'is-invalid' : ''}`" />
                                            <div class="invalid-feedback"> {{this.addUpdate.errors.onChangeFileUpload}} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-success btn-sm me-2">Submit</button>
                                <button type="reset" class="btn btn-danger btn-sm">Reset</button>
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
    import Menu from './menu.vue';
    import Footer from './footer.vue';
    import validatAddUpdate from './validation/business_addf';

    export default {
        name: "businessAdd",
        components: { Header, Footer, Menu },
        data(){
            return{
                addUpdate:{
                    errors: {},
                    scode: '',
                    sname: '',
                    bname: '',
                    category: '',
                    latitude: '',
                    longitude: '',
                    address: '',
                    website: '',
                    onChangeFileUpload: ''
                }
            }
        },
        methods:{
            validate() {
                const { isInvalid, errors } = validatAddUpdate({
                    scode: this.addUpdate.scode,
                    sname: this.addUpdate.sname,
                    bname: this.addUpdate.bname,
                    category: this.addUpdate.category,
                    latitude: this.addUpdate.latitude,
                    longitude: this.addUpdate.longitude,
                    address: this.addUpdate.address,
                    website: this.addUpdate.website,
                    onChangeFileUpload: this.addUpdate.onChangeFileUpload,
                });

                if (isInvalid) {
                    this.addUpdate.errors = errors;
                    return false;
                }
                return true;
            },
            addBusiness(){
                if (this.validate()) {
                    console.log("values :",this.addUpdate.scode, this.addUpdate.sname, this.addUpdate.bname, this.addUpdate.category, this.addUpdate.latitude, this.addUpdate.longitude, this.addUpdate.address, this.addUpdate.website, this.addUpdate.onChangeFileUpload);
                }
            }
        }
    }
</script>

<style scoped>
    label { margin-bottom:5px; font-weight:bold; font-size:14px; }
    .form-group { margin-bottom:12px; }
    .form-control { color:#212529; font-size:14px; }
    .height { height:36px; }
    .text-size { font-size:12px; font-weight:bold; }
</style>