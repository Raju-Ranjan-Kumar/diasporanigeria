<template>
    <userd-header></userd-header>

    <section id="connect">
        <div class="container">
            <profile-img></profile-img>

            <div class='page-heading'> Friend Requests </div>
            <div class='f-r-sent'>
                <RouterLink to="/user/friend-request-sent"> Friend Request Sent (3) </RouterLink>
            </div>
            <div class="card-cant">
                <div class="card card-head">
                    <div class="sent-request">
                        <div class="d-b-img">
                            <img class="dashboard-img" src="../assets/images/logo.jpg">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title"> Raju Ranjan Kumar </h3>
                            <h4 class="card-text"> No Mutual friends </h4>
                        </div>
                    </div>
                    <div class="c-r-button">
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-success bttn-f"> Confirm </button>
                        </div>
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-danger bttn-f"> Delete </button>
                        </div>
                    </div>
                </div>
                <div class="card card-head">
                    <div class="sent-request">
                        <div class="d-b-img">
                            <img class="dashboard-img" src="../assets/images/pic1.jpg">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title"> Raju Ranjan Kumar </h3>
                            <h4 class="card-text"> No Mutual friends </h4>
                        </div>
                    </div>
                    <div class="c-r-button">
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-success bttn-f"> Confirm </button>
                        </div>
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-danger bttn-f"> Delete </button>
                        </div>
                    </div>
                </div>
                <div class="card card-head">
                    <div class="sent-request">
                        <div class="d-b-img">
                            <img class="dashboard-img" src="../assets/images/pic2.jpg">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title"> Raju Ranjan Kumar </h3>
                            <h4 class="card-text"> No Mutual friends </h4>
                        </div>
                    </div>
                    <div class="c-r-button">
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-success bttn-f"> Confirm </button>
                        </div>
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-danger bttn-f"> Delete </button>
                        </div>
                    </div>
                </div>
                <div class="card card-head">
                    <div class="sent-request">
                        <div class="d-b-img">
                            <img class="dashboard-img" src="../assets/images/pic3.jpg">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title"> Raju Ranjan Kumar </h3>
                            <h4 class="card-text"> No Mutual friends </h4>
                        </div>
                    </div>
                    <div class="c-r-button">
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-success bttn-f"> Confirm </button>
                        </div>
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-danger bttn-f"> Delete </button>
                        </div>
                    </div>
                </div>
                <div class="card card-head">
                    <div class="sent-request">
                        <div class="d-b-img">
                            <img class="dashboard-img" src="../assets/images/pic4.jpg">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title"> Raju Ranjan Kumar </h3>
                            <h4 class="card-text"> No Mutual friends </h4>
                        </div>
                    </div>
                    <div class="c-r-button">
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-success bttn-f"> Confirm </button>
                        </div>
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-danger bttn-f"> Delete </button>
                        </div>
                    </div>
                </div>
                <div class="card card-head">
                    <div class="sent-request">
                        <div class="d-b-img">
                            <img class="dashboard-img" src="../assets/images/pic1.jpg">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title"> Raju Ranjan Kumar </h3>
                            <h4 class="card-text"> No Mutual friends </h4>
                        </div>
                    </div>
                    <div class="c-r-button">
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-success bttn-f"> Confirm </button>
                        </div>
                        <div class="c-r-button2">
                            <button type="button" class="btn btn-danger bttn-f"> Delete </button>
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
    import profileImg from './profile-img'

    export default {
        name: "friendRequest",
        components: { userdHeader, footerPage, profileImg },
    }
</script>

<style scoped>
    .card-head { padding:10px; width:32%; margin:0px 4px 15px 4px; box-shadow:0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .card-head:hover { transform: scale(1.05); }
    .card-body { text-align:center; padding:0px;}
    .card-body h3 { color:#000; font-size:19px; margin:0px; padding:0px; text-transform:uppercase; margin-top:5px; }
    .card-body h4 { color:#666; font-size:17px; line-height:21px; display:inline-block; width:100%; margin:10px 0px; }
</style>