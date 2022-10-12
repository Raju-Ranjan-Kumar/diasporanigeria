<template>
    <Header></Header>
    <Menu></Menu>

     <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="col-md-8 listpage margin-t-b"><h4 class="mb-0">Manage Business</h4></div>
                        </div>
                        <div class="col-md-6">
                            <form class="form-horizontal" action="#" method="post" name="upload_excel" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-md-12">
                                        <input type="file" class="btn btn-primary me-1 width" ref="file" v-on:change="onChangeFileUpload()"/>
                                        <input type="submit" class="btn btn-primary me-1" value="Upload excel/CSV"/>
                                        <input type="button" class="btn btn-primary me-1" value="Sample CSV" download onclick="location.href='#'" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-2">
                            <div class="col-md-10">
                                <p>
                                    <span><input type="button" name="add" value="Add Business"  class="button form-control btn-success" onclick="location.href='#'" /></span>  
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-xs-12">
                            <form name="frm" method="post" action="#" enctype="multipart/form-data">
                                <div class="box">
                                    <div class="box-body">
                                        <div class="row p-b">
                                            <div class="col-md-3">
                                                <div class="input-group">
                                                    <span class="pe-2 csr-dflt">Show</span>
                                                    <select class="form-select input-sm">
                                                        <option selected>10</option>
                                                        <option value="1">25</option>
                                                        <option value="2">50</option>
                                                        <option value="3">100</option>
                                                    </select>
                                                    <span class="ps-2 csr-dflt">entries</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3 ms-auto">
                                                <div class="input-group">
                                                    <span class="pe-2 csr-dflt">Search:</span>
                                                    <input type="search" class="form-control input-sm">
                                                </div>
                                            </div>
                                        </div>

                                        <table id="example1" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th class="text-center" style="width:3%">
                                                        <div class="squaredFour">
                                                            <input name="check_all" type="checkbox"  id="check_all" value="check_all" />
                                                            <label for="check_all"></label>
                                                        </div>
                                                    </th>
                                                    <th class="text-center" style="width:6%">Logo</th>
                                                    <th class="text-center" style="width:12%">Category</th>
                                                    <th class="text-center" style="width:20%">Business Name</th>
                                                    <th class="text-center" style="width:10%">State</th>
                                                    <th class="text-center" style="width:5%">Status</th>
                                                    <th class="text-center" style="width:5%">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style="text-align:center">
                                                    <td style="text-align:center">
                                                        <div class="squaredFour">
                                                            <input type="checkbox" class="checkall" id="" name="ids[]" value="id" />
                                                            <label for="id"></label>
                                                        </div>
                                                    </td>
                                                    <td style="text-align:center">
                                                        <img src="#" class="img-thumbnail-prod" />
                                                        <img src="#" class="img-thumbnail-prod" />
                                                    </td>
                                                    <td>category</td>
                                                    <td>name</td>
                                                    <td style="text-align:center">state_name</td>
                                                    <td style="text-align:center">
                                                        <label class="switch">
                                                            <input type="checkbox" class="chkstatus" value="">
                                                            <div class="slider round"></div>
                                                        </label>
                                                    </td>
                                                    <td class="text-center"><RouterLink to="" class="btn btn-primary" title="edit"> <i class='bx bxs-pencil'></i> </RouterLink></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="Submit" class="btn btn-success btn-sm me-2">Enable</button>
                                        <button type="Submit" class="btn btn-warning btn-sm me-2">Disable</button>
                                        <button type="Submit" class="btn btn-danger btn-sm">Delete</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <div class="control-sidebar-bg"></div>
        </div>
    </body>

    <Footer></Footer>
</template>

<script>
    import Header from './header.vue';
    import Menu from './menu.vue';
    import Footer from './footer.vue';

    export default {
        name: "businessList",
        components: { Header, Footer, Menu }
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
    .margin-t-b { margin-top:10px; margin-bottom:10px; }
    .input-sm { height:30px; padding:5px 10px; font-size:12px; line-height:1.5; border-radius:3px !important; }
    .csr-dflt { cursor:default; font-size:14px; align-self:center;}
</style>