<template>
    <userd-header></userd-header>

    <section id="connect">
        <div class="container">
            <profilePage></profilePage>

            <div class="card profile-detail">
                <div class="pf-cant">
                    <div class="card-body">
                        <div class="text-group">
                            <p class="card-text"> Name </p>
                            <div class="icon-text-center">
                                <i class='bx bxs-user profile-icon'></i>
                                <span v-if="user_data.firstname == null && user_data.lastname == null"> Unavailable </span>
                                <span v-else> {{ user_data.firstname }} {{ user_data.lastname }} </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text"> Gender </p>
                            <div class="icon-text-center">
                                <i class="ph-gender-intersex profile-icon" v-if="user_data.gender == 'Other'"></i>
                                <i v-else class="profile-icon" :class="user_data.gender == 'Male' ? 'bx bx-male-sign' : 'bx bx-female-sign'"></i>
                                <span v-if="user_data.gender == null"> Unavailable </span>
                                <span v-else> {{ user_data.gender }} </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text"> Primary School </p>
                            <div class="icon-text-center">
                                <i class='bx bxs-graduation profile-icon'></i>
                                <span v-if="user_data.primary_school == null"> Unavailable </span>
                                <span v-else> {{ user_data.primary_school }} </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text">Interest</p>
                            <div class="icon-text-center">
                                <i class='bx bxs-heart profile-icon'></i>
                                <span v-if="user_data.interest == null"> Unavailable </span>
                                <span v-else> {{ user_data.interest }} </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text">Business</p>
                            <div class="icon-text-center">
                                <i class='bx bxs-briefcase profile-icon'></i>
                                <span v-if="user_data.business == null"> Unavailable </span>
                                <span v-else> {{ user_data.business }} </span>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="text-group">
                            <p class="card-text">DOB</p>
                            <div class="icon-text-center">
                                <i class='bx bxs-calendar profile-icon'></i>
                                <span v-if="user_data.dob == null"> Unavailable </span>
                                <span v-else> {{ date }} </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text">State of origin</p>
                            <div class="icon-text-center">
                                <i class='bx bxs-map profile-icon'></i>
                                <span v-if="user_data.state_of_origin == null"> Unavailable </span>
                                <span v-else> {{ user_data.state_of_origin }} </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text">Secondary School</p>
                            <div class="icon-text-center">
                                <i class='bx bxs-graduation profile-icon'></i>
                                <span v-if="user_data.secondary_school == null"> Unavailable </span>
                                <span v-else> {{ user_data.secondary_school }} </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text">Local Government</p>
                            <div class="icon-text-center">
                                <i class='bx bxs-home profile-icon'></i>
                                <span v-if="user_data.local_goverment == null"> Unavailable </span>
                                <span v-else> {{ user_data.local_goverment }} </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text">Website</p>
                            <div class="icon-text-center">
                                <i class='bx bx-globe profile-icon'></i>
                                <span v-if="user_data.website == null"> Unavailable </span>
                                <span v-else> {{ user_data.website }} </span>
                            </div>
                        </div>
                    </div>
                </div>
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
        name: "myProfile",
        components: { userdHeader, footerPage, profilePage },
        data() {
            return {
                user_data : {},
                date:''
            };
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
                this.user_data = response.data.data

                let dob = response.data.data.dob
                let date = dob.split(' ')
                date[0] = date[0].split('-').reverse().join('-');
                this.date = date.join(' ')
            });
        }
    }
</script>

<style scoped>
    .container { width:100%; padding:10px; display:flex; }
    .profile-detail { width:70%; padding:1rem; }
    .pf-cant { display:flex; }
    .card-body { width:50%; }
    .text-group { border-bottom:1px solid #ced4da; margin-bottom:1rem; padding-bottom:5px; }
    .card-text { margin-bottom:5px; text-transform:uppercase; color:#666; font-weight:600; }
    .icon-text-center span { width:93%; }
</style>