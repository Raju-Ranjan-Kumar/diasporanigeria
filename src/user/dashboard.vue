<template>
    <userd-header></userd-header>

    <section id="connect">
        <div class="container">
           <profile-img></profile-img>
        </div>
    </section>

    <section id="dashboard-business">
        <div class="container">
            <div class="card card-head">
                <router-link to="//vardsurgentpsych.com/" target="_blank">
                    <div class="d-business">
                        <div>
                            <img class="dashboard-img b-img" src="../assets/images/100.png">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title"> VARDS URGENT PSYCH AND BEHAVIORAL SERVICES </h3>
                            <p class="card-text"> MEDICAL </p>
                            <span class="text-muted"> 0 miles away </span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <p class="address"> Seattle, WA </p>
                    </div>
                </router-link>
            </div>
            <div class="card card-head">
                <router-link to="/user/dashboard">
                    <div class="d-business">
                        <div>
                            <img class="dashboard-img b-img" src="../assets/images/pic2.jpg">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title"> Your Business Name </h3>
                            <p class="card-text"> Your Category Name </p>
                            <span class="text-muted"> 2 miles away </span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <p class="address"> CodeAegis pvt ltd: E Block, 144, Sector 63, Noida, Uttar Pradesh 201301 </p>
                    </div>
                </router-link>
            </div>
        </div>
    </section>

    <footer-page></footer-page>
</template>

<script>
    import userdHeader from './user-header.vue'
    import footerPage from './footer.vue'
    import profileImg from './profile-img'

    export default {
        name: "dashboardPage",
        components: { userdHeader, footerPage, profileImg },
        mounted() {
            let token = localStorage.getItem('token');
            if (!token) {
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
    .card-head { width:32%; padding:20px 10px; margin:0px 7px 35px 7px; }
    .card-head a { text-decoration:none; }
    .card-body { text-align:center; padding:5px;}
    .card-body h3 { color:#000; font-weight:600; font-size:14px; text-transform:uppercase; }
    .card-body p { color:#666; font-size:12px; margin-bottom:0; }
    .card-body span { color:#474747; font-size:14px; }
    .d-business { display:flex; }
</style>