<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username"
            ><el-input
              type="text"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input
          ></el-form-item>
          <el-form-item prop="password"
            ><el-input
              :prefix-icon="Lock"
              type="password"
              v-model="loginForm.password"
              show-password
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              @click="login"
              size="default"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
let useStore = useUserStore()
//路由器
const $router = useRouter()
//加载按钮状态
const loading = ref(false)
//收集账号和密码的数据
const loginForm = reactive({ username: '', password: '' })
const login = async () => {
  // 登录
  console.log('login')
  try {
    await useStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({ type: 'success', message: '登录成功' })
  } catch (err) {
    ElNotification({ type: 'error', message: (err as Error).message })
  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    margin: auto;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
