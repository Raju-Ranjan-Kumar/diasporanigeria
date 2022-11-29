<template>
    <nav class="user-hed">
        <div class="cant">
            <div class="cant-2">
                <div>
                    <router-link to="/user/dashboard" class="navbar-brand">
                        <img class="hedr-logo" src="../assets/images/logo.jpg">
                    </router-link>
                </div>

                <div>
                    <ul class="d-flex list-stl-none mb-0">
                        <li class="mx-3 m-auto"><RouterLink to="/user/dashboard" class="icon-text-center"> <i class='bx bx-home h-icon'></i> </RouterLink></li>
                        <li class="mx-3 m-auto "><RouterLink to="/user/friend-request" class="position-relative icon-text-center">
                            <i class='bx bx-user-plus h-icon'></i> <span class="notification-count">10</span></RouterLink>
                        </li>
                        <li class="mx-3 m-auto"><RouterLink to="/user/chat" class="icon-text-center"> <i class='bx bx-message-rounded-dots h-icon'></i> </RouterLink></li>
                        <li class="mx-3 m-auto">
                            <RouterLink to="#" class="nav-link dropdown-toggle icon-text-center icon-del" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class='bx bx-bell h-icon'></i>
                            </RouterLink>
                            <ul class="dropdown-menu notification-hedr" aria-labelledby="navbarDropdown">
                                <div class="not-drop"> Notification </div>
                                <li>
                                    <div class="card-head dropdown-item">
                                        <div class="notification-img">
                                            <img class="not-img" src="../assets/images/pic2.jpg">
                                        </div>
                                        <div class="card-body">
                                            <strong class="not-name"> Raju Ranjan </strong>
                                            <div class="not-text"> Kayode has sent to you a friend request </div>
                                            <small class="not-date"> 22-jun-2020 </small>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="card-head dropdown-item">
                                        <div class="notification-img">
                                            <img class="not-img" src="../assets/images/pic2.jpg">
                                        </div>
                                        <div class="card-body">
                                            <strong class="not-name"> Raju Ranjan </strong>
                                            <div class="not-text"> Kayode has sent to you a friend request </div>
                                            <small class="not-date"> 22-jun-2020 </small>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="card-head dropdown-item">
                                        <div class="notification-img">
                                            <img class="not-img" src="../assets/images/pic2.jpg">
                                        </div>
                                        <div class="card-body">
                                            <strong class="not-name"> Raju Ranjan </strong>
                                            <div class="not-text"> Kayode has sent to you a friend request </div>
                                            <small class="not-date"> 22-jun-2020 </small>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="card-head dropdown-item">
                                        <div class="notification-img">
                                            <img class="not-img" src="../assets/images/pic2.jpg">
                                        </div>
                                        <div class="card-body">
                                            <strong class="not-name"> Raju Ranjan </strong>
                                            <div class="not-text"> Kayode has sent to you a friend request </div>
                                            <small class="not-date"> 22-jun-2020 </small>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div id="navbarSupportedContent">
                    <form class="d-flex align-items-center">
                        <div class="search-box-hedr">
                            <input class="form-control" type="text" placeholder="Search" aria-label="Search">
                            <i class='bx bx-search search-icon'></i>
                        </div>
                        <ul class="list-stl-none mb-0">
                            <li class="nav-item dropdown">
                                <router-link to="#" class="nav-link dropdown-toggle icon-text-center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img class="img-circle me-1" src="../assets/images/pic2.jpg">
                                    <span> User Name </span>
                                </router-link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><router-link to="/user/my-profile" class="dropdown-item">My Profile</router-link></li>
                                    <li><router-link to="/user/change-password" class="dropdown-item">Change Password</router-link></li>
                                    <li><router-link to="/user/add-business" class="dropdown-item">Add Business</router-link></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><router-link to="#" class="dropdown-item">Logout</router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "userdHeader",
    }
</script>

<style scoped>
    .user-hed { background-color:white; box-shadow:0px 0px 10px #c7c9c8; }
    .cant { margin:0px 45px;}
    .cant-2 { display:flex; justify-content:space-between; align-items:center; padding:5px 0px; }
    .hedr-logo { width:115px; height:85px; }
    .list-stl-none { text-decoration:none; list-style:none; padding-left:1rem; }
    .h-icon { color:grey; font-size:25px;  }
    .h-icon:hover { color:#03a559; }
    .notification-count { position:absolute; font-size:10px; padding:2px 3px; border:1px solid #03a559; border-radius:50%; background-color:#03a559; color:white; top:-13px; left:16px; }
    .icon-del::after { display:none; }
    .search-box-hedr { background-color:#ece9eb; padding:0px 6px; display:flex; align-items:center; height:36px; width:12rem; border-radius:2rem !important; border:1px solid #ced4da; }
    .search-box-hedr input { border:none;  outline:none; background-color:#ece9eb; }
    .search-box-hedr input:focus { outline:0px !important; box-shadow:none !important}
    .search-icon { font-size:18px; cursor:pointer; padding-right:6px; font-weight:bold;}
    .img-circle { height:35px; width:35px; border-radius:50%; }
    .dropdown-toggle::after{ vertical-align:middle; }
    a { text-decoration:none; }
    .not-drop { border-radius:3px 3px 0px 0px; box-shadow:0px 0px 14px #cacdcc; padding:10px 15px; color:#000; font-size:18px; }
    .notification-hedr { transform:translate(535px, 65px) !important; overflow:auto; max-height:335px; }
    .not-img { height:70px; width:70px; border-radius:50%; }
    .card-head { width:22rem; display:flex; border-bottom:1px solid #ced4da; padding:2px 5px; }
    .notification-img { padding:6px; }
    .card-body { padding:6px 15px; }
    .not-name { color:#31708f; font-size:13px; }
    .not-text { color:#000; font-size:13px; line-height:15px; white-space:pre-line; }
    .not-date { color:#8a6d3b; font-size:11px; }
</style>