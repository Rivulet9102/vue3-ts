<script lang="ts" setup>
import { ref } from "vue";
const name = ref("");
const emit = defineEmits(["handleQuery"])
const submitForm = () => {
    emit('handleQuery', name)
}
</script>


<template>
    <div>
        <el-form status-icon>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="name" />
            </el-form-item>
            <el-button type="primary" @click="submitForm()">
                查询
            </el-button>
        </el-form>
    </div>
</template>
  

<style lang="scss" scoped></style>