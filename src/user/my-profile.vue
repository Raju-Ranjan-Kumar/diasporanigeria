<template>
    <userd-header></userd-header>

    <section id="connect">
        <div class="container">
            <div class="card user-profile">
                <div class="profile-img-cant">
                    <img src="../assets/images/pic2.jpg" class="profile-img" alt="profile-image">
                </div>
                <div class="card-body">
                    <ul class="list">
                        <li><RouterLink to="/user/my-profile" class="active"> My Profile </RouterLink></li>
                        <li><RouterLink to="/user/edit-profile"> Edit Profile </RouterLink></li>
                        <li><RouterLink to="/user/add-business"> Add Business </RouterLink></li>
                        <li><RouterLink to="/user/change-password"> Change Password </RouterLink></li>
                        <li><RouterLink to=""> Logout </RouterLink></li>
                    </ul>
                </div>
            </div>

            <div class="card profile-detail">
                <div class="d-flex">
                    <div class="card-body">
                        <div class="text-group">
                            <p class="card-text"> Name </p>
                            <div class="icon-text-center">
                                <i class='bx bxs-user profile-icon'></i> <span> Raju Ranjan Kumar </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text"> Gender </p>
                            <div class="icon-text-center">
                                <i class="ph-gender-neuter profile-icon"></i> <span> Male </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text"> Primary School </p>
                            <div class="icon-text-center">
                                <i class='bx bxs-graduation profile-icon'></i> <span> S.N.S High School </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text">Interest</p>
                            <div class="icon-text-center">
                                <i class='bx bxs-heart profile-icon'></i> <span> Coding </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text">Business</p>
                            <div class="icon-text-center">
                                <i class='bx bxs-briefcase profile-icon'></i> <span> Mobile App Devleopment </span>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="text-group">
                            <p class="card-text">DOB</p>
                            <div class="icon-text-center">
                                <i class='bx bxs-calendar profile-icon'></i> <span> 14-04-2001 </span>
                            </div>
                        </div>
                        <div class="text-group">
                            <p class="card-text">State of origin</p>
                            <div class="icon-text-center">
                                <i class='bx bxs-map profile-icon'></i> <span> Bihar </span>
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
                            <p class="card-text">Website</p>
                            <div class="icon-text-center">
                                <i class='bx bx-globe profile-icon'></i> <span> Codeaegis.com </span>
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

    export default {
        name: "myProfile",
        components: { userdHeader, footerPage },
    }
</script>

<style scoped>
    #connect { width:100%; height:auto; background:#efefef; padding:30px 0px; }
    .container { width:100%; padding:10px; display:flex; }
    .user-profile { width:30%; margin-right:20px; }
    .profile-img-cant { text-align:center; box-shadow:0px 0px 2px #e4e7e6; padding:20px; }
    .profile-img { height:200px; width:200px; border-radius:50%; }
    .card-body ul li { list-style:none; margin-bottom:5px;}
    .card-body ul li a { padding:9px 15px; color:#000; font-size:14px; display:inline-block; width:100%; text-decoration:none; border-radius:0.150rem; }
    .card-body ul li a:hover { background:#03a559; color:#fff; }
    .card-body ul li .active { background:#03a559; color:#fff; }
    .list { padding:0; }
    .profile-detail { width:70%; padding:20px 30px; }
    .profile-icon { color:#03a559; margin-right:10px; font-size:18px; }
    .card-text { margin-bottom:5px; text-transform:uppercase; color: #666; font-weight:600; }
    .text-group { border-bottom:1px solid #ced4da; margin-bottom:20px; padding-bottom:5px; }
</style>