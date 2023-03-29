<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { baseView } from "@/hooks/baseView";
const { logout } = baseView()

const router = useRouter();
let userMenuShow = ref<boolean>(false);

</script>
<template>
    <div class="user-info" @mouseover="userMenuShow = true" @mouseleave="userMenuShow = false">
        <img src="../assets/images/avatar.png" alt="avatar" />姓名
        <div v-show="userMenuShow" class="user-menu">
            <div class="user-menu-item" @click="logout">登出</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user-info {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 100px;
    cursor: pointer;
    padding: 0 12px;

    img {
        margin-right: 10px;
        width: 24px;
        border-radius: 50%;
    }

    .user-menu {
        width: 100%;
        position: absolute;
        padding: 10px 0;
        left: 0;
        top: 60px;
        text-align: center;
        font-size: 14px;
        background: #fff;
        border: 1px solid #e4e7ed;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        line-height: 36px;

        .user-menu-item:hover {
            background-color: #ecf5ff;
            color: #66b1ff;
        }
    }

    &:hover {
        background: rgba(0, 0, 0, 0.025);
    }
}
</style>