<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import HeaderComponent from "./Header.vue";
import MenuComponent from "./Menu.vue";
const router = useRouter();
const isCollapse = ref(false);

// ref: []
// reactive: {}
const menuList = ref([
    { name: '首页', auth: [1, 2, 999], icon: 'HomeFilled', pageUrl: '/home' },
    {
        name: '信息列表',
        auth: [1, 2, 999],
        icon: 'HomeFilled',
        children: [
            { id: 0, name: '个人', auth: [1, 999], icon: 'HomeFilled', pageUrl: '/person' },
            { id: 1, name: '企业', auth: [2, 999], icon: 'HomeFilled', pageUrl: '/company' },
        ]
    },
    { name: '404', auth: [1, 2, 999], icon: 'HomeFilled', pageUrl: '/notfound' }
])

onMounted(() => {
    window.addEventListener('resize', function () {
        if (document.documentElement.clientWidth <= 750) {
            isCollapse.value = true;
        } else {
            isCollapse.value = false;
        }
        console.log(document.documentElement.clientWidth, "===");
    });
})
</script>

<template>
    <el-container class="container">
        <el-header class="header">
            <HeaderComponent></HeaderComponent>
        </el-header>
        <el-container class="main">
            <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" default-active="/home"
                style="height: 100%; overflow-y: auto">
                <MenuComponent :list="menuList"></MenuComponent>
            </el-menu>
            <el-main class="main-body">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.logo {
    padding-left: 25px;
    height: 60px;
    line-height: 60px;
    font-weight: bold;
    font-size: 18px;
}

.el-header {
    width: 100vw;
    height: 60px;
    line-height: 60px;
    padding: 0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    display: flex;
    flex-direction: row-reverse;
    background-color: #b3c0d1;
    z-index: 10;
}

.el-menu {
    height: 100%;
    background: #d3dce6;
    border-right: 0;
}

.el-menu-vertical-demo {
    position: fixed;
    left: 0px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-width: 200px;
}

.main-body {
    padding-left: 220px;
    width: 100vw;
    overflow: hidden;
}

@media screen and (max-width: 750px) {

    .main-body {
        padding-left: 100px;
    }
}
</style>
