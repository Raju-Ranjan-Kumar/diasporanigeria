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
                                <RouterLink to="/admin/ticket" class="cross-link"><i class="ph-x"></i></RouterLink>
                            </div>
                            <div class="box-body">
                                <h1 class="heading"> {{heading_name}} Tickets </h1>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="name" aria-describedby="Username" v-model="name">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="image" class="form-label">Image</label>
                                        <input type="file" class="form-control" id="image" aria-describedby="Image" v-on:change="image">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="event_id" class="form-label">Event Id</label>
                                        <input type="text" class="form-control" id="event_id" aria-describedby="event_id" v-model="event_id">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="ticket_id" class="form-label">Ticket Id</label>
                                        <input type="text" class="form-control" id="ticket_id" aria-describedby="ticket_id" v-model="ticket_id">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="quantity" class="form-label">Quantity</label>
                                        <input type="number" class="form-control" id="quantity" aria-describedby="quantity" v-model="quantity">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="price" class="form-label">Price</label>
                                        <input type="number" class="form-control" id="price" aria-describedby="price" v-model="price">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea rows="5" cols="30" class="form-control" id="description" v-model="description"></textarea>
                                    </div>
                                    <div class="d-grid s-btn col-6 mx-auto">
                                        <button class="btn btn-primary" type="submit">{{heading_name}}</button>
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
        name: "ticketCrud",
        components: { Header, Footer, Menu },
        props:["heading_name"],
        data(){
            return{
                name:'',
                // image:'',
                event_id:'',
                ticket_id:'',
                quantity:'',
                price:'',
                description:'',
                values: [],
            }
        },
        mounted () {
            axios.get("https://diasporanigeria.org/diaspora/diasporanigeria-admin/public/api/events").then((response) => {
                this.values = response.data.data;
            });
        },
        methods: {
            image(e) {
                this.image = e.target.files.length ? e.target.files[0] : ''
            },
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