<template>
    <div class="student_login clearfix">
        <div class="conttent">
            <div class="login_wrap">
                <div class="head">
                    <h1>Student Log In</h1>
                    <p>You need a code from your teacher to use ReadWorks.</p>
                    <p>Thanks.</p>
                </div>
                <div class="body">
                    <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">   
                        <el-form-item label="" prop="code">
                            <el-input v-model.number="ruleForm2.code" placeholder="请输入code"></el-input>
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
                    code:''
                },
                rules:{
                    code:[
                        { required: true, message: '请输入code', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push({name: 'studentLoginAuthentication'});
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style lang="scss">
    .student_login{
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
    }


</style>