<template>
    <userd-header></userd-header>

    <section id="connect">
        <div class="container">
            <div class="img-rounded">
                <div class="img-circle">
                    <router-link to="/user/userprofile">
                        <div class="connectwrap">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                            <h3> Name </h3>
                        </div>
                    </router-link>
                </div>
                <div class="img-circle">
                    <router-link to="/user/userprofile">
                        <div class="connectwrap">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                            <h3> Name </h3>
                        </div>
                    </router-link>
                </div>
                <div class="img-circle">
                    <router-link to="/user/userprofile">
                        <div class="connectwrap">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                            <h3> Name </h3>
                        </div>
                    </router-link>
                </div>
                <div class="img-circle">
                    <router-link to="/user/userprofile">
                        <div class="connectwrap">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                            <h3> Name </h3>
                        </div>
                    </router-link>
                </div>
                <div class="img-circle">
                    <router-link to="/user/userprofile">
                        <div class="connectwrap">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                            <h3> Name Raju Ranjan Kumar </h3>
                        </div>
                    </router-link>
                </div>
                <div class="img-circle">
                    <router-link to="/user/userprofile">
                        <div class="connectwrap">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                            <h3> Name </h3>
                        </div>
                    </router-link>
                </div>
                <div class="img-circle">
                    <router-link to="/user/userprofile">
                        <div class="connectwrap">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                            <h3> Name </h3>
                        </div>
                    </router-link>
                </div>
                <div class="img-circle">
                    <router-link to="/user/userprofile">
                        <div class="connectwrap">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                            <h3> Name </h3>
                        </div>
                    </router-link>
                </div>
                <div class="img-circle">
                    <router-link to="/user/userprofile">
                        <div class="connectwrap">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                            <h3> Name </h3>
                        </div>
                    </router-link>
                </div>
                <div class="img-circle">
                    <router-link to="/user/userprofile">
                        <div class="connectwrap">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                            <h3> Name </h3>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <div class="card-container">
        <div class="card card-head">
            <router-link to="#">
                <div class="d-flex">
                    <div>
                        <img class="dashboard-img" src="../assets/images/logo.jpg">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title"> Business_name </h3>
                        <p class="card-text"> Category_name </p>
                        <span class="text-muted"> 2 miles away </span>
                    </div>
                </div>
                <div class="col-md-12 mb-2">
                    <p class="address"> Address </p>
                </div>
            </router-link>
        </div>

        <div class="card card-head">
            <router-link to="#">
                <div class="d-flex">
                    <div>
                        <img class="dashboard-img" src="../assets/images/pic2.jpg">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title"> Business_name </h3>
                        <p class="card-text"> Category_name </p>
                        <span class="text-muted"> 2 miles away </span>
                    </div>
                </div>
                <div class="col-md-12 mb-2">
                    <p class="address"> Address </p>
                </div>
            </router-link>
        </div>
    </div>

    <footer-page></footer-page>
</template>

<script>
    import userdHeader from './user-header.vue'
    import footerPage from './footer.vue'

    export default {
        name: "dashboardPage",
        components: { userdHeader, footerPage },
    }
</script>

<style scoped>
    #connect { width:100%; height:auto; background:#efefef; padding:30px 0px; }
    .img-rounded { display:flex; justify-content:space-between; }
    .connectwrap { width:100%; height:auto; text-align:center; }
    .dashboard-img { height:98px; width:98px; border-radius:50%; border:5px solid #fff; box-shadow:0px 0px 2px #e4e7e6; }
    .connectwrap h3 { font-size:13px; margin:0px; padding-top:5px; color:#337ab7; }
    .img-circle { margin-right:0px 6px; }
    .img-circle a { text-decoration: none; }
    .card-container { background-color:#e2e5f0; padding:45px; display:flex; }
    .card-head { padding:20px; width:360px; margin-right:20px;}
    .card-head a { text-decoration:none; }
    .card-body { text-align:center; padding:0px;}
    .card-body h3 { color:#000; font-weight:600; font-size:15px; }
    .card-body p { color:#666; font-size:12px; line-height:21px; }
    .card-body span { color:#474747; font-size:14px; }
    .address { text-align:center; font-size:13px; padding-top:5px; color:#000; margin-bottom:0px;}
</style>