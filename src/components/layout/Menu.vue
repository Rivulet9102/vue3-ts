<script lang="ts" setup>
import { PropType } from "vue";
import type { menuList } from "@/types/interface";
import Menu from "./Menu.vue";
import { baseView } from "@/hooks/baseView";
const { toView } = baseView()

// 声明类型 menuList（types）
// const props = defineProps(["list"])
const props = defineProps({
  list: {
    type: Array<menuList>,
    require: true
  }
})
const authType = localStorage.getItem('token') || 0;

</script>
<template>
  <div>
    <template v-for="item in props.list">
      <el-sub-menu v-if="item.children && item.children.length" :index="item.pageUrl" :key="item.pageUrl">
        <template #title>
          <component :is="item.icon" style="min-width: 16px;width:16px;height:16px;"></component>
          <span class="list-node">{{ item.name }}</span>
        </template>
        <Menu :list="item.children"></Menu>
      </el-sub-menu>
      <el-menu-item v-else-if="item.auth.includes(Number(authType))" :index="item.pageUrl" :key="item.name"
        @click="toView(item.pageUrl)">
        <component :is="item.icon" style="min-width: 16px;width:16px;height:16px;"></component>
        <template #title>{{ item.name }}</template>
      </el-menu-item>
    </template>
  </div>
</template>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

@media screen and (max-width: 750px) {

  .list-node,
  .el-sub-menu .el-sub-menu__icon-arrow {
    display: none;
  }
}
</style>
