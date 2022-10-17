<template>
    <Header></Header>
    <Menu></Menu>

    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="row margin-t-b">
                        <div class="col-md-3 listpage"> <h4 class="mb-0"> Update Setting </h4> </div>
                        <div class="col-md-6"> 
                            <p class="text-center mb-0"> session message 
                            <span class="box-title"> <strong>Setting updated successfully</strong></span></p> 
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="box box-default">
                        <form @submit.prevent="update" method="post" novalidate>
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Mobile Number</label>
                                            <input name="mobile" type="text" id="mobile" class='form-control' size="36" value="1234567" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Telephone</label>
                                            <input name="landline" type="text" id="landline" class='form-control' size="36" value="1234567">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input name="email" type="text" id="email" class='form-control' size="36" value="asdfg@g.com" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea name="address" rows="5" cols="30" class='form-control'>User Address</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-success btn-sm">Update</button>
                            </div>
                        </form>
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
        name: "updateSetting",
        components: { Header, Menu, Footer },
        methods:{
            update(){
                console.log("Successfully update");
            }
        }
    }
</script>

<style scoped>
    .listpage h4 { font-size:20px; text-transform:uppercase; font-weight:800;}
    .form-group { margin-bottom:12px; }
    label { margin-bottom:5px; font-weight:bold; font-size:14px; }
    .form-control { font-size:14px; }
    .margin-t-b { margin:5px 0px; }
    .button { background:#337ab7 none repeat scroll 0 0; border:medium none; border-radius:3px; color:#fff; padding:5px 10px;}
    .box-title { font-size:12px; color:#a94442; }
</style>