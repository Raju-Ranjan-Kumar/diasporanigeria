<template>
    <Header></Header>
    <Menu></Menu>

    <div class="wrapper">
        <div class="content-wrapper">
            <section class="content-header">
                <h1> Administrator Panel </h1>
            </section>
            <section class="content">
                <div class="row">
                    <div class="col-lg-4 col-xs-6">
                        <div class="small-box bg-aqua">
                            <div class="inner">
                                <h3>100</h3>
                                <p>Total Users</p>
                            </div>
                            <div class="icon">
                                <i class='bx bx-group'></i>
                                <ion-icon name="contact"></ion-icon>
                            </div>
                            <router-link to="" class="small-box-footer">More information <i class='bx bx-right-arrow-circle'></i></router-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xs-6">
                        <div class="small-box bg-orange">
                            <div class="inner">
                                <h3>100</h3>
                                <p>Total Business</p>
                            </div>
                            <div class="icon">
                                <i class='bx bx-bar-chart'></i>
                            </div>
                            <router-link to="" class="small-box-footer">More information <i class='bx bx-right-arrow-circle'></i></router-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xs-6">
                        <div class="small-box bg-green">
                            <div class="inner">
                                <h3>100</h3>
                                <p>Total Categories</p>
                            </div>
                            <div class="icon">
                                <i class='bx bx-bar-chart'></i>
                            </div>
                            <router-link to="" class="small-box-footer">More information <i class='bx bx-right-arrow-circle'></i> </router-link>
                        </div>
                    </div>
                </div>
    
                <div class="row">
                    <section class="col-lg-12 connectedSortable ui-sortable">
                        <div class="box box-danger" v-if="!isRemove">
                            <div class="box-header with-border">
                                <h3 class="box-title">Recently Add Users </h3>
                                <div class="box-tools pull-right">
                                    <button type="button" class="btn btn-box-tool" data-widget="collapse" v-on:click="isHidden = !isHidden">
                                        <i :class="{ 'bx bx-minus vr-align-btm fs-5 fw-bold': !isHidden, 'bx bx-plus vr-align-btm fs-5 fw-bold': isHidden }"> </i>
                                    </button>
                                    <button type="button" class="btn btn-box-tool" data-widget="remove" v-on:click="isRemove = true">
                                        <i class='bx bx-plus bx-multiply vr-align-btm fs-5'></i>
                                    </button>
                                </div>
                            </div>
                            <div class="box" v-if="!isHidden">
                                <div class="box-body">
                                    <table id="example1" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>SNo.</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email Address</th>
                                                <th>Phone Number</th>
                                                <th>Register Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Oladayo</td>
                                                <td>Success</td>
                                                <td>kamardeenoladayo@gmail.com</td>
                                                <td>+27 798328409</td>
                                                <td>2022-10-06 09:15:01</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Opeoluwa</td>
                                                <td>Solaja</td>
                                                <td>adeolaolubusoye@gmail.com</td>
                                                <td>+1 7806606121</td>
                                                <td>2022-10-05 12:05:35</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Dubaidenis</td>
                                                <td>Mamba</td>
                                                <td>dubaidenis@gmail.com</td>
                                                <td>+1 4253899505</td>
                                                <td>2022-10-05 03:30:02</td>
                                            </tr>
                                        </tbody>
                                        <tfoot> </tfoot>
                                    </table>
                                </div>
                                <div class="box-footer text-center">
                                    <RouterLink to="" class="mor-rec"> More records </RouterLink>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </div>

    <Footer></Footer>
</template>

<script>
    import Header from './header.vue';
    import Footer from './footer.vue';
    import Menu from './menu.vue';

    export default {
        name: "welcomePage",
        components: { Header, Footer, Menu },
        data() {
            return{
                isHidden: false,
                isRemove: false,
            }
        }
    }
</script>

<style scoped>
    .bx-multiply { transform:rotate(45deg); font-weight:bold; }
    .vr-align-btm { margin-bottom:0; padding-bottom:0; vertical-align:bottom; }
    .table-bordered>thead>tr>th, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>tbody>tr>td, 
    .table-bordered>tfoot>tr>td { border:1px solid #dee2e6; }
    .mor-rec { color:#3c8dbc; text-decoration:none; }
    .mor-rec:hover { text-decoration:underline; }
</style>