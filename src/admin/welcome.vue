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
                            <a href="#" class="small-box-footer">More information <i class='bx bx-right-arrow-circle'></i></a>
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
                            <a href="#" class="small-box-footer">More information <i class='bx bx-right-arrow-circle'></i></a>
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
                            <a href="#" class="small-box-footer">More information <i class='bx bx-right-arrow-circle'></i> </a>
                        </div>
                    </div>
                </div>
    
                <div class="row">
                    <section class="col-lg-12 connectedSortable ui-sortable">
                        <div class="box box-danger">
                            <div class="box-header with-border">
                                <h3 class="box-title">Recently Add Users </h3>
                                <div class="box-tools pull-right">
                                    <button type="button" class="btn btn-box-tool" data-widget="collapse"> <i class='bx bx-minus vr-bt fs-5 fw-bold'></i> </button>
                                    <button type="button" class="btn btn-box-tool" data-widget="remove"> <i class='bx bx-plus vr-bt fs-5 fw-bold'></i> </button>
                                </div>
                            </div>
                            <div class="box">
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
                                                <td>asas</td>
                                                <td>sasas</td>
                                                <td>sss</td>
                                                <td>ssss</td>
                                                <td>asss</td>
                                                <td>sadsdsd</td>
                                            </tr>
                                            <tr>
                                                <td>asas</td>
                                                <td>sasas</td>
                                                <td>sss</td>
                                                <td>ssss</td>
                                                <td>asss</td>
                                                <td>sadsdsd</td>
                                            </tr>
                                        </tbody>
                                        <tfoot> </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div class="box-footer text-center">
                                <a href="#" class="uppercase"> more records</a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
        <div class="control-sidebar-bg"></div>
    </div>

    <Footer></Footer>
</template>

<script>
    import Header from './header.vue';
    import Footer from './footer.vue';
    import Menu from './menu.vue';

    export default {
    name: "welcomePage",
    components: { Header, Footer, Menu }
}
</script>

<style scoped>
    .bx-plus{transform: rotate(45deg); }
    .vr-bt{  margin-bottom:0; padding-bottom:0; vertical-align:bottom;}
</style>