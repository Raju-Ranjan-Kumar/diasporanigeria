<template>
    <Header></Header>
    <Menu></Menu>

     <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="row icon-text-center">
                        <div class="col-md-4">
                            <div class="listpage ">
                                <h4 class="mb-0">Manage Ticket</h4>
                            </div>
                        </div>
                        <div class="col-md-8 justify-content-end d-flex align-items-center">
                            <input type="search" class="form-control search-box" placeholder="Search" @input="filter" v-model="searchText">
                            <RouterLink to="/admin/ticket-crud/add">
                                <input type="button" value="Add Ticket" class="btn btn-success add-business"/> 
                            </RouterLink>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="box">
                                <div class="box-body">
                                    <table id="example1" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th class="text-center" style="width:3%"> Id </th>
                                                <th class="text-center" style="width:6%"> Name </th>
                                                <th class="text-center" style="width:6%"> Image </th>
                                                <th class="text-center" style="width:20%"> Description </th>
                                                <th class="text-center" style="width:4%"> Event_Id </th>
                                                <th class="text-center" style="width:4%"> Ticket_Id </th>
                                                <th class="text-center" style="width:4%"> Quantity </th>
                                                <th class="text-center" style="width:5%"> Price </th>
                                                <th class="text-center" style="width:9%"> Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center" v-for="value in tableData" v-bind:key="value">
                                                <td class="text-center"> {{value.id}} </td>
                                                <td class="text-center"> {{value.name}} </td>
                                                <td class="text-center"> {{value.image}} </td>
                                                <td class="text-center"> {{value.description}} </td>
                                                <td class="text-center"> {{value.pivot.event_id}} </td>
                                                <td class="text-center"> {{value.pivot.ticket_id}} </td>
                                                <td class="text-center"> {{value.quantity}} </td>
                                                <td class="text-center"> {{value.price}} </td>
                                                <td class="text-center">
                                                    <RouterLink to="/admin/ticket-crud/update" class="btn btn-primary me-2"> <i class="ph-eye action"></i> </RouterLink>
                                                    <RouterLink to="/admin/ticket-crud/update" class="btn btn-warning text-light me-2"> <i class='bx bxs-pencil action'></i> </RouterLink>
                                                    <RouterLink to="#" class="btn btn-danger"> <i class='bx bx-trash action'></i> </RouterLink>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="no-found" v-if="!tableData.length">
                                        No matching records found! 
                                    </div>
                                </div>
                            </div>
                        </div>
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
        name: "ticketPage",
        components: { Header, Footer, Menu },
        data(){
            return{
                searchText:'',
                values: [],
                tableData: []
            }
        },
        mounted () {
            axios.get("https://diasporanigeria.org/diaspora/diasporanigeria-admin/public/api/ticket/5").then((response) => {
                this.values = response.data.data;
                this.tableData = [...this.values];
            });
        },
        methods:{
            filter() {
                if (!this.searchText) {
                    this.tableData = this.values;
                } else {
                    this.tableData = this.values.filter(({ name, description }) =>
                        (name).toLowerCase().includes(this.searchText.toLowerCase()) || (description).toLowerCase().includes(this.searchText.toLowerCase())
                    );
                }
            }
        },
    }
</script>

<style scoped>
    .listpage h4 { font-size:20px; text-transform:uppercase; font-weight:800;}
    .btn { display:inline-block; padding:2px 6px; margin-bottom:0; font-size:14px; font-weight:normal; line-height:1.42857143;
        text-align:center; white-space:nowrap; vertical-align:middle; cursor:pointer; border:1px solid transparent; border-radius:4px;
    }
    .btn-success { color:#fff; background-color:#5cb85c; border-color:#4cae4c; }
    .table-bordered>thead>tr>th, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>tbody>tr>td, .table-bordered>tfoot>tr>td {
        border:1px solid #dee2e6;
    }
    .add-business { font-size:14px; padding:6px 8px; }
    .action { font-size:15px; font-weight:bold; margin-top:3px;}
    .search-box{ width:15rem; margin-right:10px;}
    .no-found { text-align:center; color:red; padding:6px; border:1px solid #dee2e6; font-size:12px; }
</style>