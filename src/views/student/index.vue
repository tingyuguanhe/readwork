<template>
    <div class="student_page">
        <div class="title"> 
            <div class="nr_wrap">
                <h1>Spicy Seafood Pasta</h1>
            
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="Assignments To Do" name="first">
                        <div class="pane_wrap">
                            <div class="head">
                                    <div>
                                        Assignments To Do
                                    </div>
                                    <div>
                                        Due Date
                                    </div>
                            </div>
                            
                        </div>
                        
                        
                    </el-tab-pane>
                    <el-tab-pane label="Submitted Assignments" name="second">Submitted Assignments</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            activeName: 'first',
            tabs:[
                {
                    name:'Assignments To Do',
                },
                {
                    name:'Submitted Assignments'
                }
            ]
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>


<style lang="scss">
.student_page{
    h1{
        margin:0;
        padding: 0;
        height: 95px;
        line-height: 85px;
    }
    .title{
        height: 130px;
        background: #f5f8f8;
        font-size: 22px;
        border: 2px solid #e4e7ed;
        text-align: left;
    }
    .el-tabs__active-bar{
        background-color: #f85415;
    }
    .el-tabs__item.is-active{
        color: #f85415;
    }
    .el-tabs__item{
        height: 37px;
        line-height: 36px;
        color: #838a8e;
        font-size: 16px;
    }
    .pane_wrap{
        .head{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: #838a8e;
        }
    }
}
</style>