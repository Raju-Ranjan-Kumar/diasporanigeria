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
                <div class="card-body">

                </div>
            </div>

            <div class="card chat-section">
                <div class="chat-hedr">
                    <img src="../assets/images/pic2.jpg" class="chat-img" alt="profile-image">
                </div>

                <div class="chat-panel">
                    <div class="longEnoughChat">
                        <div class="homecontent">
                            <img src="../assets/images/undraw_chatting_2.png">
                            <p>Click on the user for starting the chat.</p>
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
        name: "chatPage",
        components: { userdHeader, footerPage },
    }
</script>

<style scoped>
    #connect { width:100%; height:auto; background:#efefef; padding:30px 0px; }
    .container { width:100%; padding:10px; display:flex; }
    .user-profile { width:30%; margin-right:20px; }
    .chat-container { border-bottom:1px solid black; }
    .chat-img-cant { text-align:center; padding:5px 15px; background:#03a559; border-radius:0.375rem; }
    .chat-img { height:50px; width:50px; border-radius:50%; }
    .search-box-hedr { padding:0px 6px; margin:15px; display:flex; align-items:center; height:40px; border-radius:2rem !important; border:1px solid #ced4da; }
    .search-box-hedr input { border:none;  outline:none; }
    .search-box-hedr input:focus { outline:0px !important; box-shadow:none !important}
    .search-icon { font-size:18px; cursor:pointer; padding-right:6px; font-weight:bold;}
    .chat-section { width:70%; }
    .chat-hedr { padding:5px 15px; background:#03a559; border-radius:0.375rem; }
    .homecontent { text-align:center; margin:140px; }
    .longEnoughChat { max-height:460px; width:100%; overflow:auto; }
</style>