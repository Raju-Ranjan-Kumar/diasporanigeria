<template>
    <div class="card user-profile">
        <div class="profile-img-cant">
            <img src="../assets/images/pic2.jpg" class="profile-img" alt="profile-image">
            <!-- <img :src="profile_img" class="profile-img" alt="profile-image"> -->
        </div>
        <div class="card-body">
            <ul class="list">
                <li>
                    <RouterLink to="/user/my-profile" :class="currentRouteName == 'myProfile' ? 'active' : '' "> My Profile </RouterLink>
                </li>
                <li>
                    <RouterLink to="/user/edit-profile" :class="currentRouteName == 'editProfile' ? 'active' : '' "> Edit Profile </RouterLink>
                </li>
                <li>
                    <RouterLink to="/user/add-business" :class="currentRouteName == 'addBusiness' ? 'active' : '' "> Add Business </RouterLink>
                </li>
                <li>
                    <RouterLink to="/user/change-password" :class="currentRouteName == 'changePassword' ? 'active' : '' "> Change Password </RouterLink>
                </li>
                <li>
                    <RouterLink to="#" :class="currentRouteName == 'indexPage' ? 'active' : '' " v-on:click="logout"> Logout </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { useRoute } from "vue-router";
    import { computed } from 'vue';

    export default {
        name: "profilePage",
        data() {
            const route = useRoute();
            return {
                currentRouteName : computed(() => {
                    return route.name;
                }),
                // profile_img: "",
            }
        },
        methods: {
            logout() {
                localStorage.removeItem('token');
                this.$router.push("/");
            }
        },
        // mounted () {
        //     const token = JSON.parse(localStorage.getItem('token'));
        //     if (!token) {
        //         this.$router.push("/");
        //     }

        //     const id = JSON.parse(localStorage.getItem('id'));

        //     this.axios.post("https://api2.diasporanigeria.org/api/get-user", {
        //         id: Number(id),
        //     },{
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer ' + `${token}`
        //         }
        //     }).then((response) => {
        //         console.warn(response.data.data);
        //         this.profile_img = response.data?.data?.image
        //     });
        // }
    }
</script>

<style scoped>

</style>