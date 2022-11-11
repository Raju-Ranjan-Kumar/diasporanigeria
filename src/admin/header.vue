<template>
    <header class="main-header">
        <router-link to="/admin/welcome" class="logo logo-lg header-route">Diaspora Nigeria</router-link>

        <nav class="navbar navbar-expand-lg nav-hedr navbar-static-top">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-lg-0 txt-dec-none">
                        <li class="nav-item">
                            <router-link to="#" class="navbar-brand">
                                <i class='bx bx-menu boxi-icon vr-middle'></i> 
                            </router-link>
                        </li>
                    </ul>
                    <ul class="d-flex txt-dec-none">
                        <li class="nav-item dropdown">
                            <router-link to="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                <i class='bx bx-envelope boxi-icon vr-middle'></i> <span class="label label-success" id="total_msg"></span>
                            </router-link>
                            <ul class="dropdown-menu menu-left" aria-labelledby="navbarDropdown">
                                <li class="dropdown-item txt">You have <span id="">10</span> messages</li> <hr class="m-0"/>
                                <li class="text-center">
                                    <router-link to="#"> See All Messages </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" class="text-light vr-middle header-text">
                                <i class='bx bx-desktop boxi-icon vr-middle'></i> Visit Website
                            </router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link to="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                <img src="../assets/images/avatar.png" class="user-image img-hedr" alt="User Image" /> <span class="text-light ms-1 header-text" > Admin User Name </span>
                            </router-link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="dropdown-item signout-container">
                                    <div class="text-center">
                                        <img src="../assets/images/avatar.png" class="user-image signout-img" alt="User Image" />
                                        <p> Admin User Name <br> <small> Member since with date </small> </p>
                                    </div>
                                </li> <hr class="m-0"/>

                                <li class="text-end"><button type="button" class="btn btn-sm border-secondary btn-outline-secondary">Sign out</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'headerPage',
        data() {
            return {
                isActive: false,
            };
        }
    }
</script>

<style scoped>
    .main-header { background-color:#3c8dbc; }
    .main-header .logo { font-weight:600; background-color:#367fa9;}
    .header-route { color:white; font-size:20px; text-decoration:none;}
    .nav-hedr { transition:margin-left .3s ease-in-out; margin-bottom:0; border-radius:0; margin-left:230px; border:none; min-height:50px;}
    .navbar-brand { margin-right:0;}
    .container-fluid { --bs-gutter-x:none;}
    .txt-dec-none { text-decoration:none; list-style:none; }
    ul.txt-dec-none{ margin-bottom: 0rem; }
    .txt-dec-none li{ padding:12px 12px; }
    .nav-item:hover { background-color:#367fa9; }
    .boxi-icon { font-size:20px; color:white; font-weight:normal !important;}
    .img-hedr { border-radius:0px; height:25px; width:25px; }
    .vr-middle { vertical-align:middle; text-decoration:none;}
    .header-text { font-size:14px; }
    .menu-left { width:17rem !important; left:-227px !important; --bs-dropdown-link-hover-bg:none !important;}
    .menu-left>li>a { font-size:12px; color:#444 !important; text-align:center; text-decoration:none; }
    .menu-left>li>a:hover { background-color:#ffffff; }
    .dropdown-menu[data-bs-popper] { left:-132px; width:19rem; --bs-dropdown-padding-x:none; --bs-dropdown-link-hover-bg:#3c8dbc; 
        border:1px solid #ccc; --bs-dropdown-border-radius:none; border-bottom-left-radius:0.375rem; border-bottom-right-radius:0.375rem;
    }
    .dropdown-menu>li.txt { color:#444444; font-size:14px; }
    .dropdown-toggle::after { display:none; }
    .signout-container { background-color:#3c8dbc; }
    .signout-img { height:90px; width:90px; }
    ul li div p { color:#fff; font-size:17px; margin-top:10px; }
    ul li div p small { font-size:12px;}
</style>