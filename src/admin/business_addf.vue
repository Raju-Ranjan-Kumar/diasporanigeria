<template>
    <Header></Header>
    <Menu></Menu>

    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <section class="content-header">
                    <h1>Update Business</h1>
                    <ol class="breadcrumb">
                        <li> <RouterLink to="/admin/welcome"> <i class='bx bxs-dashboard'></i> Home </RouterLink> </li>
                        <li> <RouterLink to="/admin/business_list"> View Business List </RouterLink> </li>
                    </ol>
                </section>
                <section class="content">
                    <div class="box box-default">
                        <form>
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>State Code</label>
                                            <input type="text" name="state_code" required value="result->state_code" class="form-control height" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>State Name</label>
                                            <input type="text" name="state_name" required value="result->state_name" class="form-control height" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Business Name</label>
                                            <input type="text" name="name" required value="result->name" class="form-control height" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Category</label>
                                            <input type="text" name="category" value="result->category" class="form-control height" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Latitude</label>
                                            <input type="text" name="latitude" value="result->latitude" class="form-control height" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Longitude</label>
                                            <input type="text" name="longitude" value="result->longitude" class="form-control height" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input type="text" name="address" value="result->address" class="form-control height" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Website</label>
                                            <input type="text" name="website" value="result->website" class="form-control height" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Logo</label>
                                            <input type="file" name="photo" class='form-control' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-success btn-sm me-2">Submit</button>
                                <button type="reset" class="btn btn-danger btn-sm">Reset</button>
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

    export default {
        name: "businessAdd",
        components: { Header, Footer, Menu }
    }
</script>

<style scoped>
    label { margin-bottom:5px; font-weight:bold; font-size:14px; }
    .form-group { margin-bottom:12px; }
    .form-control { color:#212529; font-size:14px; }
    .height { height:36px; }
</style>