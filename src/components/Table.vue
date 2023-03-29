<script lang="ts" setup>
const props = defineProps(['title', 'tableTitle', 'tableData','data'])
const emit = defineEmits(["reSubmit"])
const handleSizeChange = (val: number) => {
    emit('reSubmit', 1, val)
}
const handleCurrentChange = (val: number) => {
    emit('reSubmit', val, props.tableData.pageSize)
}
</script>


<template>
    <div class="table-main">
        <h3>{{ title }}</h3>
        <el-table :data="data" style="width: 100%">
            <el-table-column v-for="item in tableTitle" :prop="item.dataIndex" :label="item.label"
                :width="item.width"></el-table-column>
        </el-table>

        <el-pagination v-model:current-page="tableData.pageNum" v-model:page-size="tableData.pageSize"
            :page-sizes="[1, 2, 3, 4]" small="small" layout="sizes, prev, pager, next" :total="tableData.count"
            @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
</template>
  

<style lang="scss" scoped>
.table-main {
    margin-top: 20px;
    width: 94%;
    overflow: hidden;
}

.el-pagination {
    margin-top: 20px;
}
</style>