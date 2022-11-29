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
                <div class="change-pass-cant">
                    <div class="change-pass">
                        <p class="card-text"> Old Password </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bxs-lock password-icon'></i></span>
                            <input type="password" class="form-control" placeholder="Old Password">
                        </div>
                    </div>
                    <div class="change-pass">
                        <p class="card-text"> New Password </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bxs-lock-alt password-icon'></i></span>
                            <input type="password" class="form-control" placeholder="New Password">
                        </div>
                    </div>
                    <div class="change-pass">
                        <p class="card-text"> Confirm Password </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bxs-lock-alt password-icon'></i></span>
                            <input type="password" class="form-control" placeholder="Confirm Password">
                        </div>
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-success" type="button"> Change Password </button>
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
        name: "changePassword",
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
    .profile-detail { width:70%; padding:40px; }
    .change-pass-cant { width:100%; padding:10px 150px; }
    .change-pass { padding-bottom:25px; width:100%; }
    .password-icon { color:#03a559; font-size:20px; }
    .card-text { margin-bottom:5px; text-transform:uppercase; color:#666; font-weight:600; }
    .btn-success { font-weight:bold; border-radius:0.375rem; }
</style>