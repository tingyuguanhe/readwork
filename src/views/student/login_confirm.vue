<template>
        <div class="student_confirm clearfix">
            <div class="conttent">
                <div class="login_wrap">
                    <div class="head">
                        <h1>Welcome, {{username}}!</h1>
                        <p><router-link class="back_page" to="/stu_login_authentication">我不是 {{username}} </router-link></p>
                    </div>
                    <div class="body">
                        <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="name_form">   
                            <el-form-item label="" prop="password">
                                <el-input v-model.number="ruleForm2.password" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm2')">Continue</el-button>
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
                        password:''
                    },
                    username:'',
                    rules:{
                        password:[
                        { required: true, message: '请输入密码', trigger: 'blur' }
                        ]
                    }
                   
                }
            },
            mounted () {
                this.username = this.$route.params.name;
            },
            methods: {
                submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            localStorage.setItem('username', this.username);
                            this.$router.push({name: 'studentIndex'});
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                },
            }
        }
    </script>
    
    <style lang="scss" scoped>
        .student_confirm{
            .conttent{
                margin-top: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .login_wrap{
                width: 34%;
                padding: 10px 10px 20px 10px;
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
            button{
                width: 100%;
            }
            .back_page{
                font-size: 13px;
            }
        }
    
    </style>