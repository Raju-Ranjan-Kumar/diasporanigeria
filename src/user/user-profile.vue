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

            <div class="card user-profile">
                <div class="row">
                    <div class="pf-img-cant">
                        <img class="profile-img" src="../assets/images/pic2.jpg">
                    </div>
                    <div class="profile-detail">
                        <div>
                            <h1 class="profile-name">Raju Ranjan Kumar</h1>
                        </div>
                        <div class="d-flex">
                            <div class="card-body">
                                <div class="text-group">
                                    <p class="card-text">Gender</p>
                                    <div class="icon-text-center">
                                        <i class="ph-gender-neuter profile-icon"></i> <span> Male </span>
                                    </div>
                                </div>
                                <div class="text-group">
                                    <p class="card-text">Primary School</p>
                                    <div class="icon-text-center">
                                        <i class='bx bxs-graduation profile-icon'></i> <span> S.N.S High School </span>
                                    </div>
                                </div>
                                <div class="text-group">
                                    <p class="card-text">State of origin</p>
                                    <div class="icon-text-center">
                                        <i class='bx bxs-map profile-icon'></i> <span> Bihar </span>
                                    </div>
                                </div>
                                <div class="text-group">
                                    <p class="card-text">Interest</p>
                                    <div class="icon-text-center">
                                        <i class='bx bxs-heart profile-icon'></i> <span> Coding </span>
                                    </div>
                                </div>
                                <div class="text-group">
                                    <p class="card-text">Website</p>
                                    <div class="icon-text-center">
                                        <i class='bx bx-globe profile-icon'></i> <span> Codeaegis.com </span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="text-group">
                                    <p class="card-text">Age</p>
                                    <div class="icon-text-center">
                                        <i class='bx bxs-calendar profile-icon'></i> <span> 21 </span>
                                    </div>
                                </div>
                                <div class="text-group">
                                    <p class="card-text">Secondary School</p>
                                    <div class="icon-text-center">
                                        <i class='bx bxs-graduation profile-icon'></i> <span> Subharti University </span>
                                    </div>
                                </div>
                                <div class="text-group">
                                    <p class="card-text">Local Government</p>
                                    <div class="icon-text-center">
                                        <i class='bx bxs-home profile-icon'></i> <span> Up Government </span>
                                    </div>
                                </div>
                                <div class="text-group">
                                    <p class="card-text">Business</p>
                                    <div class="icon-text-center">
                                        <i class='bx bxs-briefcase profile-icon'></i> <span> Mobile App Devleopment </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="c-r-button">
                            <button type="button" class="btn btn-success c-r-button2"> Connect </button>
                            <button type="button" class="btn btn-success c-r-button2"> Report </button>
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

    export default {
        name: "userProfile",
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
    .user-profile { width:100%; margin-top:50px; padding:10px; }
    .pf-img-cant { width:30%; padding:30px 25px; }
    .profile-img { height:auto; width:100%; border-radius:8px; box-shadow:0px 0px 2px #e4e7e6; }
    .profile-detail { width:70%; padding:25px; }
    .profile-name { font-family:inherit; font-size:25px; font-weight:500; text-align:left; margin-left:15px; }
    .profile-icon { color:#03a559; margin-right:10px; font-size:18px; }
    .card-text { margin-bottom:5px; text-transform:uppercase; color:#666; font-weight:600; }
    .text-group { border-bottom:1px solid #ced4da; margin-bottom:25px; padding-bottom:5px; }
    .c-r-button { display:flex; padding:8px; width:100%; }
    .c-r-button2 { width:50%; border-radius:1.5rem; margin:6px;}
</style>