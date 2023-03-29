
<script lang="ts" setup>
import { baseView } from "@/hooks/baseView";
const { toView, logout } = baseView()
</script>
<template>
  <div class="content">
    <img class="img" src="@/assets/images/notfound.png" />
    <div>
      <el-button type="primary" @click="toView('/home')">返回首页</el-button>
      <el-button type="danger" @click="logout">退出系统</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;

  .img {
    width: 100%;
  }

  &>div {
    text-align: center;
  }
}
</style>