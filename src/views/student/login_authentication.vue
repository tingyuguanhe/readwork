<template>
    <div class="student_authentication clearfix">
        <div class="conttent">
            <div class="login_wrap">
                <div class="head">
                    <h1>Student Log In</h1>
                </div>
                <div class="body">
                    <h2>Select Your Name</h2>
                    <el-form :model="ruleForm2" ref="ruleForm2" class="name_form">   
                        <el-form-item label="">
                            <el-input v-model.number="ruleForm2.name" placeholder="search name"></el-input>
                        </el-form-item>
                        <el-form-item label="" v-for="(item, index) in namesList" :key="index">
                           <div  @click="submit(item)">
                                {{item.name}}
                           </div> 
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <div class="teacher_login">
            Are you a teacher? <a href="javascript:;"> &nbsp;Teacher LogIn&nbsp;</a>   
        </div>
   
    </div>
</template>

<script>
    export default{
        data(){
            return{
                ruleForm2:{
                    name:''
                },
                copyNamesList: [],
                namesList:[
                    {
                        name:'abcd',
                        id: 1
                    },
                    {
                        name:'aaa',
                        id: 2
                    },
                    {
                        name:'bbb',
                        id: 3
                    },
                    {
                        name:'cccc',
                        id: 3
                    }
                ]
                
            }
        },
        watch: {
            'ruleForm2.name': function(newVal, oldVal){
                if(newVal == oldVal){
                    return;
                }
                if(!!newVal){
                    this.namesList = this.namesList.filter(item => {
                        if(item.name.indexOf(newVal) > -1){
                            return item;
                        }
                    })
                }else{
                    this.namesList =  this.copyNamesList;
                }
            }
        },
        mounted () {
            this.copyNamesList = this.namesList;
        },
        methods: {
            submit(item){
                this.$router.push({name:'studentLoginConfirm', params: {name: item.name} });
            }
        }
    }
</script>

<style lang="scss">
    .student_authentication{
        .conttent{
            margin-top: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .login_wrap{
            width: 40%;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 2px;
            box-sizing: border-box;
        }
        .body{
            padding: 0 20px;
        }
        .teacher_login{
            margin-top: 40px;
            color: #666;
            font-size: 13px;
        }
        .name_form{
            .el-form-item__content{
                font-size: 18px;
            }
            .el-form-item{
                cursor: pointer;
                margin-bottom: 10px;
                padding: 6px 0;
            }
            .el-form-item:not(:first-child):hover{
                background: #ffe3d8;
            }
            
        }
    }


</style>