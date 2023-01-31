<template>
    <userd-header></userd-header>

    <section id="connect">
        <div class="container">
            <profile-img></profile-img>

            <div class="card user-profiles">
                <div class="pf-details">
                    <div class="pf-img-cant">
                        <img class="profile-img pf-image" src="../assets/images/pic4.jpg">
                    </div>
                    <div class="profile-detail">
                        <div>
                            <h1 class="profile-name">Raju Ranjan Kumar</h1>
                        </div>
                        <div class="user-pf-details">
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
                                        <i class='bx bxs-map profile-icon'></i> <span> UP </span>
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
                        <div class="c-r-button u-p-b">
                            <div class="c-r-button2 u-p-b-2">
                                <button type="button" class="btn btn-success bttn-f" v-on:click="sentFriendRequest = sentFriendRequest === 'connect' ? null : 'connect'">
                                    Connect
                                </button>
                            </div>
                            <div class="c-r-button2 u-p-b-2">
                                <button type="button" class="btn btn-danger bttn-f" v-on:click="sentFriendRequest = sentFriendRequest === 'report' ? null : 'report'">
                                    Report
                                </button>
                            </div>
                        </div>
                        <div class="sent-f-r" v-if="sentFriendRequest === 'connect'"> Friend request send successfully </div>
                        <div class="sent-f-r" v-if="sentFriendRequest === 'report'"> Success </div>
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
    import profileImg from './profile-img'

    export default {
        name: "userProfile",
        components: { userdHeader, footerPage, profileImg },
        data() {
            return {
                sentFriendRequest:null,
            }
        }
    }
</script>

<style scoped>
    .pf-details { display:flex; }
    .user-pf-details { display:flex; }
    .user-profiles { width:100%; margin-top:40px; padding:1rem; }
    .pf-image { height:auto; width:100%; border-radius:8px; box-shadow:0px 0px 2px #e4e7e6; }
    .profile-detail { width:70%; padding:1rem; }
    .card-body { width:50%; }
    .card-text { margin-bottom:5px; text-transform:uppercase; color:#666; font-weight:600; }
    .text-group { border-bottom:1px solid #ced4da; margin-bottom:1rem; padding-bottom:5px; }
    .icon-text-center span { width:93%; }
    .sent-f-r { text-align:center; padding:5px; }
</style>