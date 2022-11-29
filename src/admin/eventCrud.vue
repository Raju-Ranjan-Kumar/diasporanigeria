<template>
    <Header></Header>
    <Menu></Menu>

    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <section class="content">
                    <div class="box box-default">
                        <form method="post" @submit.prevent="success" novalidate>
                            <div class="cross-cut" >
                                <RouterLink to="/admin/events" class="cross-link"><i class="ph-x"></i></RouterLink>
                            </div>
                            <div class="box-body">
                                <h1 class="heading"> {{h_name}} Events</h1>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="name" aria-describedby="Username" v-model="name">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="image" class="form-label">Image</label>
                                        <input type="text" class="form-control" id="image" aria-describedby="Image" v-model="image">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="begin" class="form-label">Begin</label>
                                        <input type="time" class="form-control" id="begin" aria-describedby="Begin" v-model="begin">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="end" class="form-label">End</label>
                                        <input type="time" class="form-control" id="end" aria-describedby="End" v-model="end">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="created" class="form-label">Created At</label>
                                        <input type="date" class="form-control" id="created" aria-describedby="Created At" v-model="created_at">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="updated" class="form-label">Updated At</label>
                                        <input type="date" class="form-control" id="updated" aria-describedby="Updated At" v-model="updated_at">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea rows="5" cols="30" class="form-control" id="description" v-model="description"></textarea>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="location" class="form-label">Location</label>
                                        <textarea rows="5" cols="30" class="form-control" id="location" v-model="location"></textarea>
                                    </div>
                                    <div class="d-grid s-btn col-6 mx-auto">
                                        <button class="btn btn-primary" type="submit">{{h_name}}</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </body>

    <Footer></Footer>
</template>

<script>
    import Header from './header.vue';
    import Menu from './menu.vue';
    import Footer from './footer.vue';
    import axios from 'axios';

    export default {
        name: "eventCrud",
        components: { Header, Footer, Menu },
        props:["h_name"],
        data(){
            return{
                name:'',
                image:'',
                begin:'',
                end:'',
                created_at:'',
                updated_at:'',
                description:'',
                location:'',
                values: [],
            }
        },
        mounted () {
            axios.get("https://diasporanigeria.org/diaspora/diasporanigeria-admin/public/api/events").then((response) => {
                this.values = response.data.data;
            });
        },
        methods: {
            success(){
                alert("Successfully Added");
            }
        }
    }
</script>

<style scoped>
    .content { padding:40px 140px !important; }
    .box { border:none; margin-bottom:0; }
    .cross-cut { text-align:right; padding-top:20px; padding-right:22px; }
    .cross-link { text-decoration:none; }
    .box.box-default { border-radius:0.5rem; }
    .box-body { padding:0px 90px !important; }
    .heading { text-align:center; text-transform:uppercase; text-decoration:underline; font-size:25px; margin-bottom:25px; font-weight:bold;}
    .s-btn { text-align:center; padding:30px;}
    .btn-primary { text-transform:capitalize; }
    .btn { --bs-btn-font-weight:bold; }
</style>