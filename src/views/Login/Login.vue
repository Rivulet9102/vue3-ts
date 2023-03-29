<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter();

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    username: '',
    password: ''
});
const rules = reactive<FormRules>({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            localStorage.setItem('token', ruleForm.username)
            router.push('/home');
        } else {
            console.log('error submit!!');
            return false;
        }
    })
}

</script>
<template>
    <div class="login-page">
        <el-card class="login-form">
            <div class="login-title">登 录</div>
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon class="demo-ruleForm" :rules="rules">
                <el-form-item prop="username">
                    <el-input v-model.number="ruleForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password"
                        autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-submit" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<style lang="scss">
.login-page {
    position: fixed;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/background.png') center center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-form {
        width: 380px;
        height: 380px;

        .login-title {
            font-size: 28px;
            text-align: center;
            padding-bottom: 10px;
            margin-bottom: 40px;
        }

        .login-submit {
            margin-top: 20px;
            width: 100%;
        }
    }
}
</style>
