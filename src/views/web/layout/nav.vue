<template>
    <el-header height="80px">
        <div class="menus clearfix">
            <div class="logo">
                logo
            </div>
            <el-menu :default-active="$route.path" v-cloak class="el-menu-demo menu_nav"
            mode="horizontal"  background-color="#f85415" :router="true"
            text-color="#fff" active-text-color="#fff">
                <el-menu-item v-for="item in menu_routes" v-if="!username && !!item.meta.studentShow" :key="item.name" :index="item.path">
                    <span>{{item.text}}</span>
                </el-menu-item>
                <el-menu-item v-for="item in menu_routes" v-if="!!username && item.path != '/login' && !!item.meta.studentShow" :key="item.name" :index="item.path">
                    <span>{{username}}，你好！</span>
                </el-menu-item>
                <el-menu-item index="" v-if="!!username" @click="login_out">
                    <span>Log Out</span>
                </el-menu-item>
            </el-menu>
        </div>
    </el-header>
</template>


<script>

    export default{
        data(){
            return{
                activeMenu:'login',
                searchBarFixed: false,
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        computed: {
            menu_routes () {
                return this.$router.options.routes[0].children
            },
            username(){
                console.log(45678);
                return sessionStorage.getItem('username');
            }
        },
        methods: {
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                var offsetTop = document.querySelector('header').offsetTop;
                //console.log(scrollTop);
                if (scrollTop > offsetTop) {
                    this.searchBarFixed = true
                } else {
                    this.searchBarFixed = false
                }
            },
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


