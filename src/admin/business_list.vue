<template>
    <Header></Header>
    <Menu></Menu>

     <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="row icon-text-center">
                        <div class="col-md-4">
                            <div class="col-md-8 listpage ">
                                <h4 class="mb-0">Manage Business</h4>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <form class="form-horizontal" method="post">
                                <div class="row">
                                    <div class="col-md-12">
                                        <input type="file" class="btn btn-primary me-1 width" ref="file" v-on:change="onChangeFileUpload()"/>
                                        <input type="submit" class="btn btn-primary me-1" value="Upload excel/CSV"/>
                                        <input type="button" class="btn btn-primary me-1" value="Sample CSV" download onclick="location.href='#'" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-2 text-end">
                            <RouterLink to="/admin/business_addf">
                                <input type="button" value="Add Business" class="btn btn-success add-business"/> 
                            </RouterLink>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-xs-12">
                            <form method="post">
                                <div class="box">
                                    <div class="box-body">

                                        <div class="row p-b">
                                            <div class="col-md-3">
                                                <div class="input-group">
                                                    <span class="pe-2 csr-dflt">Show</span>
                                                    <select class="form-select drop_down">
                                                        <option selected> 10 </option>
                                                        <option value="1"> 25 </option>
                                                        <option value="2"> 50 </option>
                                                        <option value="3"> 100 </option>
                                                    </select>
                                                    <span class="ps-2 csr-dflt">entries</span>
                                                </div>
                                            </div>
                                            <!-- <div>
                                                <p>Checkbox value {{check_all}}</p>
                                            </div> -->
                                            <div class="col-md-3 ms-auto">
                                                <div class="input-group">
                                                    <span class="pe-2 csr-dflt">Search:</span>
                                                    <input type="search" class="form-control drop_down">
                                                </div>
                                            </div>
                                        </div>

                                        <table id="example1" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th class="text-center" style="width:5%">
                                                        <div class="squaredFour">
                                                            <input  type="checkbox" id="check_all" value="All" v-model="check_all"/>
                                                            <label for="check_all"></label>
                                                        </div>
                                                    </th>
                                                    <th class="text-center" style="width:6%"> Logo </th>
                                                    <th class="text-center" style="width:12%"> Category </th>
                                                    <th class="text-center" style="width:20%"> Business Name </th>
                                                    <th class="text-center" style="width:12%"> State </th>
                                                    <th class="text-center" style="width:6%"> Status </th>
                                                    <th class="text-center" style="width:5%"> Action </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="text-center">
                                                    <td class="text-center">
                                                        <div class="squaredFour">
                                                            <input type="checkbox" id="check_box" value="First" v-model="check_all" />
                                                            <label for="check_box"></label>
                                                        </div>
                                                    </td>
                                                    <td class="text-center">
                                                        <img src="../assets/images/avatar.png" class="img-thumbnail-prod" />
                                                    </td>
                                                    <td>ENTERTAINMENT</td>
                                                    <td>Abdul aka</td>
                                                    <td class="text-center">Makkah Province</td>
                                                    <td class="text-center">
                                                        <label class="switch">
                                                            <input type="checkbox" class="chkstatus"/>
                                                            <div class="slider round"></div>
                                                        </label>
                                                    </td>
                                                    <td class="text-center">
                                                        <RouterLink to="/admin/business_addf" class="btn btn-primary">
                                                            <i class='bx bxs-pencil'></i> 
                                                        </RouterLink>
                                                    </td>
                                                </tr>
                                                <tr class="text-center">
                                                    <td class="text-center">
                                                        <div class="squaredFour">
                                                            <input type="checkbox" id="check_box2" value="Second" v-model="check_all"/>
                                                            <label for="check_box2"></label>
                                                        </div>
                                                    </td>
                                                    <td class="text-center">
                                                        <img src="../assets/images/bg.jpg" class="img-thumbnail-prod" />
                                                    </td>
                                                    <td>ENTERTAINMENT</td>
                                                    <td>Abdul aka</td>
                                                    <td class="text-center">Makkah Province</td>
                                                    <td class="text-center">
                                                        <label class="switch">
                                                            <input type="checkbox" class="chkstatus"/>
                                                            <div class="slider round"></div>
                                                        </label>
                                                    </td>
                                                    <td class="text-center">
                                                        <RouterLink to="/admin/business_addf" class="btn btn-primary">
                                                            <i class='bx bxs-pencil'></i> 
                                                        </RouterLink>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-success btn-sm me-2">Enable</button>
                                        <button type="submit" class="btn btn-warning btn-sm me-2 text-light">Disable</button>
                                        <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                    </div>
                                </div>
                            </form>
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

    export default {
        el : ".squaredFour",
        name: "businessList",
        components: { Header, Footer, Menu },
        data(){
            return{
                check_all : [],
            }
        }
    }
</script>

<style scoped>
    table th{ font-size:12px; }  
    .listpage h4 { font-size:20px; text-transform:uppercase; font-weight:800;}
    .btn { display:inline-block; padding:4px 8px; margin-bottom:0; font-size:14px; font-weight:normal; line-height:1.42857143;
        text-align:center; white-space:nowrap; vertical-align:middle; cursor:pointer; border:1px solid transparent; border-radius:4px;
    }
    .btn-primary { color:#fff; background-color:#337ab7; border-color:#2e6da4; }
    .btn-success { color:#fff; background-color:#5cb85c; border-color:#4cae4c; }
    .width{ width:200px; }
    .p-b { padding-bottom:10px;}
    .drop_down { height:30px; padding:5px 10px; font-size:12px; line-height:1.5; border-radius:3px !important; }
    .csr-dflt { cursor:default; font-size:14px; align-self:center;}
    .table-bordered>thead>tr>th, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>tbody>tr>td, .table-bordered>tfoot>tr>td {
        border:1px solid #dee2e6;
    }
    .add-business { font-size:14px; font-weight:bold; padding:6px 8px; }
</style>