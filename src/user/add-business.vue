<template>
    <userd-header></userd-header>

    <section id="connect">
        <div class="container">
            <profilePage></profilePage>

            <div class="card profile-detail business-add">
                <form action="#" method="post" @input="validateBusiness" @submit.prevent="Business">
                    <div class="">
                        <div class="add-business">
                            <div class="change-pass">
                                <p class="card-text"> Business Image </p>
                                <div class="input-group">
                                    <input type="file" :class="`form-control input-radius ${this.validate.errors.image ? 'is-invalid' : ''}`" @change="onFileChange" multiple>
                                    <div class="invalid-feedback"> {{this.validate.errors.image}} </div>
                                </div>
                            </div>
                            <div class="change-pass">
                                <p class="card-text"> Business Name </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bxs-briefcase password-icon'></i></span>
                                    <input type="text" :class="`form-control input-radius ${this.validate.errors.name ? 'is-invalid' : ''}`" placeholder="Business Name" v-model="validate.name">
                                    <div class="invalid-feedback"> {{this.validate.errors.name}} </div>
                                </div>
                            </div>
                        </div>
                        <div class="add-business">
                            <div class="change-pass">
                                <p class="card-text"> Category </p>
                                <Select2 :options="myOptions" placeholder="Category" :class="`${this.validate.errors.category ? 'is-invalid' : ''}`" v-model="validate.category"/>
                                <div class="invalid-feedback"> {{this.validate.errors.category}} </div>
                            </div>
                            <div class="change-pass">
                                <p class="card-text"> Address </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bxs-map-pin password-icon'></i></span>
                                    <input type="text" :class="`form-control input-radius ${this.validate.errors.address ? 'is-invalid' : ''}`" placeholder="Address" v-model="validate.address">
                                    <div class="invalid-feedback"> {{this.validate.errors.address}} </div>
                                </div>
                            </div>
                        </div>
                        <div class="add-business">
                            <div class="change-pass">
                                <p class="card-text"> Enter Location </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bxs-map password-icon'></i></span>
                                    <input type="text" :class="`form-control input-radius ${this.validate.errors.location ? 'is-invalid' : ''}`" placeholder="Location" v-model="validate.location">
                                    <div class="invalid-feedback"> {{this.validate.errors.location}} </div>
                                </div>
                            </div>
                            <div class="change-pass">
                                <p class="card-text"> Website </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bx-globe password-icon'></i></span>
                                    <input type="text" :class="`form-control input-radius ${this.validate.errors.website ? 'is-invalid' : ''}`" placeholder="Website" v-model="validate.website">
                                    <div class="invalid-feedback"> {{this.validate.errors.website}} </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid mx-auto save-business">
                            <button class="btn btn-success" type="submit"> Save </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <footer-page></footer-page>
</template>

<script>
    import userdHeader from './user-header.vue'
    import footerPage from './footer.vue'
    import profilePage from './profile.vue'
    import Select2 from 'vue3-select2-component';
    import valAddBusiness from '../validation/add-business.js';

    export default {
        name: "addBusiness",
        components: { userdHeader, footerPage, profilePage, Select2 },
        data() {
            return {
                myOptions: [ "ENTERTAINMENT", "FOOD AND AGRICULTURE", "LEGAL", "OIL, GAS, ENERGY AND MINERALS",
                    "ORGANIZATION/AGENCIES", "TRADE", "RELIGION"
                ],
                validate: {
                    image: '',
                    name: '',
                    category: '',
                    address: '',
                    location: '',
                    website: '',
                    errors: {},
                }
            };
        },
        methods: {
            onFileChange(event){
                this.validate.image = event.target.files.length ? event.target.files[0] : ''

                // if(this.validate.image.type == 'application/pdf'){
                //     return true
                // }else{
                //     return false
                // }
            },
            validateBusiness() {
                const {isInvalid, errors} = valAddBusiness({
                    image: this.validate.image,
                    name: this.validate.name,
                    category: this.validate.category,
                    address: this.validate.address,
                    location: this.validate.location,
                    website: this.validate.website,
                });

                if (isInvalid) {
                    this.validate.errors = errors;
                    return false;
                }else {
                    this.validate.errors = {}
                }
                return true;
            },
            Business() {
                if (this.validateBusiness()) {
                    alert("DOne")
                }
            }
        }
    }
</script>

<style scoped>
    .container { width:100%; padding:10px; display:flex; }
    .business-add { width:70%; padding:2rem; }
    .card-text { margin-bottom:5px; text-transform:uppercase; color:#666; font-weight:600; }
    .btn-success { font-weight:bold; border-radius:1.5rem; }
</style>