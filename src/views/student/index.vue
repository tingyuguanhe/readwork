<template>
    <div class="student_page">
        <div class="title"> 
            <div class="nr_wrap">
                <h1>Spicy Seafood Pasta</h1>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="transparent" text-color="#666"
                active-text-color="#f85415">
                    <el-menu-item index="1">Assignments To Do</el-menu-item>
                    <el-menu-item index="2">Submitted Assignments</el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            activeIndex: '1',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>


<style lang="scss">
.student_page{
    h1{
        margin:0;
        padding: 0;
        height: 100px;
        line-height: 100px;
    }
    .title{
        height: 130px;
        background: #efefef;
        font-size: 22px;
        border: 2px solid #dbdbdb;
        text-align: left;
    }
    .el-menu--horizontal > .el-menu-item{
        height: 31px;
        line-height: 25px;
        border-color: #dbdbdb;
        &:visited,&:hover,&:active{
            background: transparent !important;
        }
    }
}
</style>