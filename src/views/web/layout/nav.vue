<template>
    <el-header height="80px">
        <div class="menus clearfix">
            <div class="logo">
                logo
            </div>
            <div v-if="!isStudentPage">
                <el-menu :default-active="$route.path" v-cloak class="el-menu-demo menu_nav"
                mode="horizontal"  background-color="#f85415" :router="true"
                text-color="#fff" active-text-color="#fff">
                    <el-menu-item v-for="item in menu_routes" v-if="!!item.meta.navShow && !isStudentPage" :key="item.name" :index="item.path">
                        <span>{{item.text}}</span>
                    </el-menu-item>
                    <el-menu-item index="/student/login">
                        <div>学生登录</div>
                    </el-menu-item>
                </el-menu>
            </div>
            <div v-else>
                <el-menu :default-active="$route.path" v-cloak class="el-menu-demo menu_nav"
                mode="horizontal"  background-color="#f85415" :router="true"
                text-color="#fff" active-text-color="#fff">
                    <el-menu-item index="">
                        <div>你好，{{username}}</div>
                    </el-menu-item>
                    <el-menu-item index="" v-if="!!username" @click="login_out">
                        <span>Log Out</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </el-header>
</template>

<script>
    export default{
        data(){
            return{
                activeMenu:'login'
            }
        },
        
        computed: {
            routes(){
                return this.$router.options.routes;
            },
            menu_routes () {
                return this.$router.options.routes[0].children
            },
            username(){
                return localStorage.getItem('username');
            },
            isStudentPage(){
                if(this.$route.path.indexOf('student') > -1){

                    return true;
                }else{
                    return false;
                }
            }
        },
        methods: {
            
            login_out(){

            }
        }

    }
</script>


<style lang="scss">
    .menus{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #f85415;
        color:#fff;
        .logo{
            padding: 0 100px;
            line-height: 80px;
        }
    
        .menu_nav{
            margin: 0 150px 0 0;
        }
        
        .el-menu.el-menu--horizontal{
            border-bottom: none;
        }
        .el-menu--horizontal>.el-menu-item{
            height: 80px;
            line-height: 80px;
            &.is-active{
                border-bottom: none;
                border-bottom-color: #f85415 !important;
            }
        }
    }
    .el-header{
        padding: 0;
    }
</style>


