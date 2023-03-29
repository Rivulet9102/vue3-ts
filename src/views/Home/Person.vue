<script lang="ts" setup>
import QueryComponent from "@/components/Query.vue";
import TableComponent from "@/components/Table.vue";
import {reactive, ref } from "vue";
const tableTitle = reactive([
    { label: '日期', dataIndex: 'date', width: 150 },
    { label: '姓名', dataIndex: 'name', width: 100 },
    { label: '地址', dataIndex: 'address', width: 300 },
])
// 模拟数据
const data = reactive([
    {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
    },
    {
        date: "2016-05-04",
        name: "王小虎2",
        address: "上海市普陀区金沙江路 1517 弄"
    },
    {
        date: "2016-05-01",
        name: "王小虎3",
        address: "上海市普陀区金沙江路 1519 弄"
    },
    {
        date: "2016-05-03",
        name: "王小虎4",
        address: "上海市普陀区金沙江路 1516 弄"
    }
])
let tableData = reactive({
    count: 4,
    pageNum: 1,
    pageSize: 1,
});
let newData = ref()

// 请求数据
const handleQuery = () => {
    reSubmit(1, 4)
}

// 分页(模拟接口返回)
const reSubmit = (num: number, size: number) => {
    tableData = {
        count: 4,
        pageNum: num,
        pageSize: size,
    }
    let dataList = againGroup(data, size)
    newData.value = dataList[num - 1];
}

// 分组(模拟接口返回)
const againGroup = (data: Array<Object>, num: number) => {
    var result = [];
    for (var i = 0, len = data.length; i < len; i += num) {
        result.push(data.slice(i, i + num));
    }
    return result;
}

</script>

<template>
    <div class="index-page">
        <QueryComponent @handleQuery="handleQuery"></QueryComponent>
        <TableComponent :title="'基本信息'" :tableTitle="tableTitle" :tableData="tableData" :data="newData"
            @reSubmit="reSubmit">
        </TableComponent>
    </div>
</template>

<style lang="scss"></style>
