<template>
    <div class="container">
        <form v-if="!submited">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!--
                    1)根据下面的信息内容创建一个Form表单
                    Full Name (First Name + Last Name)
                    Mail
                    Password
                    Store Data? Yes/No

                    2)如果表单没有被提交，只显示表单数据，如果表单被提交，则需显示提交的数据内容

                    3)创建一个自定义的控制内容，来实现Full Name的操作
                    -->
                    <app-full-name v-model="fullName"></app-full-name>
                    <div class="form-gruop">
                        <label>First Name</label>
                        <input type="text" class="form-control" v-model="firstName">
                    </div>
                    <div class="form-gruop">
                        <label>Last Name</label>
                        <input type="text" class="form-control" v-model="lastName">
                    </div>
                    <div class="form-gruop">
                        <label>Mail</label>
                        <input type="text" class="form-control" v-model="email">
                    </div>
                    <div class="form-gruop">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-gruop">
                        <label>
                            <input type="radio" value="Yes" v-model="storeData"> Yes
                        </label>
                         <label>
                            <input type="radio" value="No" v-model="storeData"> No
                        </label>
                    </div>

                    <button type="submit" @click.prevent="submited = true">提交数据</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submited">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}}</p>
                        <p>Full Name: {{firstName}} {{lastName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        data(){
            return {
                fullName:'Vane Fang',
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                storeData:true,
                submited:false
            }
        },
        components:{
            appFullName:FullName
        }
    }
</script>

<style>
</style>
