<template>
    <userd-header></userd-header>

    <section id="connect">
        <div class="toasts" :class="(popup ? 'active' : '') + (popup_msg == 'Success' ? '' : ' err-toast')">
            <div class="toast-content">
                <i :class="popup_msg == 'Success' ? 'ph-check check' : 'ph-x'"></i>
                <div class="message">
                    <span class="text text-1"> {{ popup_msg }} !!</span>
                    <span class="text text-2"> {{msg}} ! </span>
                </div>
            </div>
            <i class="ph-x cut"></i>
            <div class="progress"> </div>
        </div>

        <div class="container">
            <profilePage></profilePage>

            <div class="card profile-detail business-add">
                <form action="" method="post" @submit.prevent="editData">
                    <div>
                        <div class="add-business">
                            <div class="change-pass">
                                <p class="card-text"> First Name </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bxs-user password-icon'></i></span>
                                    <input type="text" class="form-control" placeholder="First Name" v-model="edit.firstname" />
                                </div>
                            </div>
                            <div class="change-pass">
                                <p class="card-text"> Last Name </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bxs-user password-icon'></i></span>
                                    <input type="text" class="form-control" placeholder="Last Name" v-model="edit.lastname" />
                                </div>
                            </div>
                        </div>
                        <div class="add-business">
                            <div class="change-pass">
                                <p class="card-text"> Gender </p>
                                <select class="form-select" v-model="edit.gender">
                                    <option v-for="option in gender2" :value="option.text" :key="option">
                                        {{ option.text }}
                                    </option>
                                </select>
                            </div>
                            <div class="change-pass">
                                <p class="card-text"> Age </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bxs-calendar password-icon'></i></span>
                                    <input type="datetime-local" class="form-control" placeholder="DOB" v-model="edit.dob" />
                                </div>
                            </div>
                        </div>
                        <div class="add-business">
                            <div class="change-pass">
                                <p class="card-text"> Primary School </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bxs-graduation password-icon'></i></span>
                                    <input type="text" class="form-control" placeholder="Primary School" v-model="edit.primary_school" />
                                </div>
                            </div>
                            <div class="change-pass">
                                <p class="card-text"> Secondary School </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bxs-graduation password-icon'></i></span>
                                    <input type="text" class="form-control" placeholder="Secondary School" v-model="edit.secondary_school" />
                                </div>
                            </div>
                        </div>
                        <div class="add-business">
                            <div class="change-pass">
                                <p class="card-text"> INTERESTS </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bxs-heart password-icon'></i></span>
                                    <input type="text" class="form-control" placeholder="Interests" v-model="edit.interest" />
                                </div>
                            </div>
                            <div class="change-pass">
                                <p class="card-text"> Business </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bxs-briefcase password-icon'></i></span>
                                    <input type="text" class="form-control" placeholder="Business" v-model="edit.business" />
                                </div>
                            </div>
                        </div>
                        <div class="add-business">
                            <div class="change-pass">
                                <p class="card-text"> State of origin </p>
                                <select class="form-select" v-model="edit.state_of_origin">
                                    <option> {{ edit.state_of_origin }} </option>
                                    <option :value="stte.id" v-for="stte in states" :key="stte"> {{ stte.state }} </option>
                                </select>
                            </div>
                            <div class="change-pass">
                                <p class="card-text"> Local Government </p>
                                <select class="form-select" v-model="edit.local_goverment">
                                    <option> {{ edit.local_goverment }} </option>
                                    <option :value="local.id" v-for="local in government" :key="local"> {{ local.lga_name }} </option>
                                </select>
                            </div>
                        </div>
                        <div class="add-business">
                            <div class="change-pass">
                                <p class="card-text"> Profile Image </p>
                                <div class="input-group">
                                    <input type="file" class="form-control" v-on:change="image" />
                                </div>
                            </div>
                            <div class="change-pass">
                                <p class="card-text"> Website </p>
                                <div class="input-group">
                                    <span class="input-group-text"><i class='bx bx-globe password-icon'></i></span>
                                    <input type="text" class="form-control" placeholder="Website" v-model="edit.website" />
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

    export default {
        name: "editProfile",
        components: { userdHeader, footerPage, profilePage },
        data() {
            return {
                popup:false,
                msg:'',
                err:'',
                popup_msg:'',
                states:[],
                government:[],

                gender2: [
                    { value: '1', text: 'Male' },
                    { value: '2', text: 'Female' },
                    { value: '3', text: 'Other' }
                ],

                edit: {
                    firstname: "",
                    lastname: "",
                    gender: '',
                    dob: "",
                    business: "",
                    primary_school: "",
                    secondary_school: "",
                    interest: "",
                    state_of_origin: "",
                    local_goverment: "",
                    website: "",
                    image: "",
                }
            };
        },
        methods:{
            image(e) {
                this.edit.image = e.target.files.length ? e.target.files[0] : ''
            },
            editData() {
                const token = JSON.parse(localStorage.getItem('token'));
                const id = JSON.parse(localStorage.getItem('id'));

                const genders = {
                    Male: 1,
                    Female: 2,
                    Other: 3
                }

                this.axios.post("https://api2.diasporanigeria.org/api/update-user", {
                    id: Number(id),
                    firstname: this.edit.firstname,
                    lastname: this.edit.lastname,
                    gender: genders[this.edit.gender],
                    dob: this.edit.dob,
                    business: this.edit.business,
                    primary_school: this.edit.primary_school,
                    secondary_school: this.edit.secondary_school,
                    interest: this.edit.interest,
                    state_of_origin: this.edit.state_of_origin,
                    local_goverment: this.edit.local_goverment,
                    website: this.edit.website,
                    image: this.edit.image,
                },{
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + `${token}`
                    }
                }).then((response) => {
                    if(response.data.status === true) {
                        this.msg = response.data?.message;
                        this.popup_msg = "Success"
                    }

                    this.popup = true
                    setTimeout(() => {
                        this.popup = false
                    }, 3000);

                }).catch((error) => {
                    if(error.response.data.status == false) {
                        this.err = error.response.data?.message.message;
                        this.msg = this.err
                        this.popup_msg = "Oh No"
                    }

                    this.popup = true
                    setTimeout(() => {
                        this.popup = false
                    }, 3000);
                });
            }
        },
        mounted () {
            const token = JSON.parse(localStorage.getItem('token'));
            if (!token) {
                this.$router.push("/");
            }

            const id = JSON.parse(localStorage.getItem('id'));

            this.axios.post("https://api2.diasporanigeria.org/api/get-user", {
                id: Number(id),
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + `${token}`
                }
            }).then((response) => {
                this.edit = response.data?.data
            });

            this.axios.get("https://api2.diasporanigeria.org/api/state").then((response) => {
                this.states = response.data?.data
            });

            this.axios.get("https://api2.diasporanigeria.org/api/local-government").then((response) => {
                this.government = response.data?.data
            });
        }
    }
</script>

<style scoped>
    .container { width:100%; padding:10px; display:flex; }
    .profile-detail { width:70%; padding:2rem; }
    .card-text { margin-bottom:5px; text-transform:uppercase; color:#666; font-weight:600; }
    .btn-success { font-weight:bold; border-radius:1.5rem; }
</style>