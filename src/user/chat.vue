<template>
    <userd-header></userd-header>

    <section id="connect">
        <div class="container">
            <div class="card user-profile">
                <div class="chat-container">
                    <div class="chat-img-cant">
                        <img src="../assets/images/pic2.jpg" class="chat-img" alt="profile-image">
                    </div>
                    <div class="search-box-hedr">
                        <input class="form-control" type="text" placeholder="Search here" aria-label="Search">
                        <i class='bx bx-search search-icon'></i>
                    </div>
                </div>
                <router-link to="">
                    <div class="userList ">
                        <img class="not-img" src="../assets/images/pic1.jpg">
                        <h6 class="chat-name"> Raju Ranjan </h6>
                        <span class="time"> 5 hours ago </span>
                    </div>
                </router-link>
                <router-link to="">
                    <div class="userList ">
                        <img class="not-img" src="../assets/images/pic4.jpg">
                        <h6 class="chat-name"> Rajat Mehta </h6>
                        <span class="time"> 8 hours ago </span>
                    </div>
                </router-link>
            </div>

            <div class="card chat-section">
                <div class="chat-hedr">
                    <img src="../assets/images/pic1.jpg" class="chat-img" alt="profile-image">
                    <h1> Raju Ranjan Kumar </h1>
                </div>
                <div class="chat-panel">
                    <div class="longEnoughChat">
                        <div class="homecontent">
                            <img src="../assets/images/undraw_chatting_2.png">
                            <p> Click on the user for starting the chat. </p>
                        </div>
                    </div>
                </div>

                <div class="send-msg">
                    <div class="send-msg-text">
                        <input class="form-control" type="text" placeholder="Type your message here...">
                        <i class="ph-paperclip"></i>
                    </div>
                    <div class="send-icon">
                        <i class='bx bxs-send'></i>
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
        name: "chatPage",
        components: { userdHeader, footerPage },
    }
</script>

<style scoped>
    .container { width:100%; padding:10px; display:flex; }
    .search-box-hedr { padding:0px 6px; margin:15px; display:flex; align-items:center; height:40px; border-radius:2rem !important; border:1px solid #ced4da; }
    .search-box-hedr input { border:none; outline:none; border-radius:2rem !important; }
    .search-box-hedr input:focus { outline:0px !important; box-shadow:none !important; }
</style>