<template>
    <nav class="header">
        <div class="cant">
            <div :class="['cant-2', menuOpen ? 'menu-open' : '']">
                <div :class="['tgle-cant', bdrBtm ? 'bdr-btm' : '']">
                    <div class="tgle-img">
                        <router-link to="/user/dashboard" class="navbar-brand">
                            <img class="he-logo" src="../assets/images/logo.jpg">
                        </router-link>
                    </div>

                    <div class="toggle-content">
                        <button class="tgle-btn" v-on:click="toggleMenu()">
                            <i class='bx bx-menu tgle-icon'></i>
                        </button>
                    </div>
                </div>

                <div class="search-box-hedr">
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" @input="filter" v-model="search">
                    <i class='bx bx-search search-icon'></i>
                </div>

                <div class="profile-section">
                    <div id="navContent">
                        <ul class="d-flex list-stl-none mb-0">
                            <li class="mid-icon"><RouterLink to="/user/dashboard" class="icon-text-center"> <i class='bx bx-home h-icon'></i> </RouterLink></li>
                            <li class="mid-icon"><RouterLink to="/user/friend-request" class="position-relative icon-text-center">
                                <i class='bx bx-user-plus h-icon'></i> <span class="notification-count">10</span></RouterLink>
                            </li>
                            <li class="mid-icon"><RouterLink to="/user/chat" class="icon-text-center"> <i class='bx bx-message-rounded-dots h-icon'></i> </RouterLink></li>
                            <li class="mid-icon">
                                <RouterLink to="#" class="nav-link dropdown-toggle icon-text-center icon-del" role="button">
                                    <i class='bx bx-bell h-icon' v-on:click="activeDropDown = activeDropDown === 'notification' ? null : 'notification'"></i>
                                </RouterLink>
                                <div class="not-container" v-if="activeDropDown === 'notification'">
                                    <div class="not-cant">
                                        <div class="not-info"> Notification </div>
                                        <div class="not-menu-link">
                                            <div class="notification-img">
                                                <img class="not-img" src="../assets/images/pic1.jpg">
                                            </div>
                                            <div>
                                                <strong class="not-name"> Raju Ranjan </strong>
                                                <div class="not-text"> Kayode has sent to you a friend request </div>
                                                <small class="not-date"> 22-jun-2020 </small>
                                            </div>
                                        </div>
                                        <div class="not-menu-link">
                                            <div class="notification-img">
                                                <img class="not-img" src="../assets/images/pic2.jpg">
                                            </div>
                                            <div>
                                                <strong class="not-name"> Raju Ranjan </strong>
                                                <div class="not-text"> Kayode has sent to you a friend request </div>
                                                <small class="not-date"> 22-jun-2020 </small>
                                            </div>
                                        </div>
                                        <div class="not-menu-link">
                                            <div class="notification-img">
                                                <img class="not-img" src="../assets/images/pic3.jpg">
                                            </div>
                                            <div>
                                                <strong class="not-name"> Raju Ranjan </strong>
                                                <div class="not-text"> Kayode has sent to you a friend request </div>
                                                <small class="not-date"> 22-jun-2020 </small>
                                            </div>
                                        </div>
                                        <div class="not-menu-link">
                                            <div class="notification-img">
                                                <img class="not-img" src="../assets/images/pic4.jpg">
                                            </div>
                                            <div>
                                                <strong class="not-name"> Raju Ranjan </strong>
                                                <div class="not-text"> Kayode has sent to you a friend request </div>
                                                <small class="not-date"> 22-jun-2020 </small>
                                            </div>
                                        </div>
                                        <div class="not-menu-link">
                                            <div class="notification-img">
                                                <img class="not-img" src="../assets/images/pic4.jpg">
                                            </div>
                                            <div>
                                                <strong class="not-name"> Raju Ranjan </strong>
                                                <div class="not-text"> Kayode has sent to you a friend request </div>
                                                <small class="not-date"> 22-jun-2020 </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="mid-icon">
                                <img src="../assets/images/pic4.jpg" alt="" class="user-pic icon-text-center" v-on:click="activeDropDown = activeDropDown === 'profile' ? null : 'profile'">
                                <div class="sub-menu-wrap" v-if="activeDropDown === 'profile'">
                                    <div class="sub-menu">
                                        <div class="user-info">
                                            <img src="../assets/images/pic4.jpg" alt="">
                                            <p> {{ user_data.firstname }} {{ user_data.lastname }} </p>
                                        </div>
                                        <hr>
                                        <router-link to="/user/my-profile" class="sub-menu-link">
                                            <i class='bx bxs-user'></i>
                                            <p> My Profile </p>
                                            <span> > </span>
                                        </router-link>
                                        <router-link to="/user/add-business" class="sub-menu-link">
                                            <i class='bx bxs-briefcase'></i>
                                            <p> Add Business </p>
                                            <span> > </span>
                                        </router-link>
                                        <router-link to="/user/change-password" class="sub-menu-link">
                                            <i class='bx bxs-lock'></i>
                                            <p> Change Password </p>
                                            <span> > </span>
                                        </router-link>
                                        <hr>
                                        <router-link to="#" class="sub-menu-link" v-on:click="logout">
                                            <i class='bx bxs-log-in'></i>
                                            <p> Logout </p>
                                            <span> > </span>
                                        </router-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "userdHeader",
        data() {
            return {
                menuOpen: false,
                bdrBtm: false,
                activeDropDown:null,
                user_data : {},
                search:'',
                eventValue: [],
                eventData: []
            }
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen,
                this.bdrBtm = !this.bdrBtm
            },
            filter() {
                if (!this.search) {
                    this.eventData = this.eventValue;
                } else {
                    this.eventData = this.eventValue.filter(({ firstname, lastname }) =>
                        (firstname).toLowerCase().includes(this.search.toLowerCase()) || (lastname).toLowerCase().includes(this.search.toLowerCase()) 
                    );
                }
            },
            logout() {
                localStorage.removeItem('token');
                this.$router.push("/");
            }
        },
        mounted () {
            const token = JSON.parse(localStorage.getItem('token'));
            const id = JSON.parse(localStorage.getItem('id'));

            if (!token) {
                this.$router.push("/");
            }

            this.axios.post("https://api2.diasporanigeria.org/api/get-user", {
                id: Number(id),
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + `${token}`
                }
            }).then((response) => {
                this.user_data = response.data?.data
            });

            // this.axios.post("https://api2.diasporanigeria.org/api/search", {
            //     search: this.search,
            // }, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
            //     }
            // }).then((response) => {
            //     console.log(response)
            //     this.eventValue = response.data.data;
            //     this.eventData = [...this.eventValue];
            // });
        },
    }
</script>

<style scoped>
    .search-box-hedr { background-color:#ece9eb; padding:0px 10px; display:flex; align-items:center; height:35px; width:30%; border-radius:2rem !important; border:1px solid #ced4da; }
    .search-box-hedr input { background-color:#ece9eb; border:none; outline:none; padding:0px 10px; border-radius:2rem !important; }
    .search-box-hedr input:focus { outline:0px !important; box-shadow:none !important}
    .profile-section { flex:1; min-width:100px; display:flex; justify-content:flex-end; }
</style>