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
                <div class="add-business">
                    <div class="change-pass me-3">
                        <p class="card-text"> First Name </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bxs-user password-icon'></i></span>
                            <input type="text" class="form-control" placeholder="First Name">
                        </div>
                    </div>
                    <div class="change-pass">
                        <p class="card-text"> Last Name </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bxs-user password-icon'></i></span>
                            <input type="text" class="form-control" placeholder="Last Name">
                        </div>
                    </div>
                </div>
                <div class="add-business">
                    <div class="change-pass me-3">
                        <p class="card-text"> Gender </p>
                        <select class="form-select drop_down" name="Select">
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                        </select>
                    </div>
                    <div class="change-pass">
                        <p class="card-text"> Age </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bxs-calendar password-icon'></i></span>
                            <input type="date" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="add-business">
                    <div class="change-pass me-3">
                        <p class="card-text"> Primary School </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bxs-graduation password-icon'></i></span>
                            <input type="text" class="form-control" placeholder="Primary School">
                        </div>
                    </div>
                    <div class="change-pass">
                        <p class="card-text"> Secondary School </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bxs-graduation password-icon'></i></span>
                            <input type="text" class="form-control" placeholder="Secondary School">
                        </div>
                    </div>
                </div>
                <div class="add-business">
                    <div class="change-pass me-3">
                        <p class="card-text"> INTERESTS </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bxs-heart password-icon'></i></span>
                            <input type="text" class="form-control" placeholder="Interests">
                        </div>
                    </div>
                    <div class="change-pass">
                        <p class="card-text"> Business </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bxs-briefcase password-icon'></i></span>
                            <input type="text" class="form-control" placeholder="Business">
                        </div>
                    </div>
                </div>
                <div class="add-business">
                    <div class="change-pass me-3">
                        <p class="card-text"> State of origin </p>
                        <select class="form-select drop_down" name="category">
                            <option value="">Category</option>
                            <option value="ENTERTAINMENT">ENTERTAINMENT</option>
                            <option value="FOOD AND AGRICULTURE">FOOD AND AGRICULTURE</option>
                            <option value="LEGAL">LEGAL</option>
                            <option value="OIL, GAS, ENERGY AND MINERALS">OIL, GAS, ENERGY AND MINERALS</option>
                            <option value="ORGANIZATION/AGENCIES">ORGANIZATION/AGENCIES</option>
                            <option value="RELIGION">RELIGION</option>
                            <option value="TRADE">TRADE</option>
                        </select>
                    </div>
                    <div class="change-pass">
                        <p class="card-text"> Local Government </p>
                        <select class="form-select drop_down" name="Select">
                            <option value="">Select</option>
                            <option value="ENTERTAINMENT">ENTERTAINMENT</option>
                            <option value="FOOD AND AGRICULTURE">FOOD AND AGRICULTURE</option>
                            <option value="LEGAL">LEGAL</option>
                            <option value="OIL, GAS, ENERGY AND MINERALS">OIL, GAS, ENERGY AND MINERALS</option>
                            <option value="ORGANIZATION/AGENCIES">ORGANIZATION/AGENCIES</option>
                            <option value="RELIGION">RELIGION</option>
                            <option value="TRADE">TRADE</option>
                        </select>
                    </div>
                </div>
                <div class="add-business">
                    <div class="change-pass me-3">
                        <p class="card-text"> Profile Image </p>
                        <div class="input-group">
                            <!-- <span class="input-group-text"><i class='bx bxs-image-alt password-icon'></i></span> -->
                            <input type="file" class="form-control">
                        </div>
                    </div>
                    <div class="change-pass">
                        <p class="card-text"> Website </p>
                        <div class="input-group">
                            <span class="input-group-text"><i class='bx bx-globe password-icon'></i></span>
                            <input type="text" class="form-control" placeholder="Website">
                        </div>
                    </div>
                </div>
                <div class="d-grid col-6 mx-auto">
                    <button class="btn btn-success" type="button"> Save </button>
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
        name: "editProfile",
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
    .profile-detail { width:70%; padding:35px 55px; }
    .add-business { display:flex; width:100%; }
    .change-pass { padding-bottom:25px; width:100%; }
    .password-icon { color:#03a559; font-size:20px; }
    .card-text { margin-bottom:5px; text-transform:uppercase; color:#666; font-weight:600; }
    .btn-success { font-weight:bold; border-radius:0.375rem; }
</style>