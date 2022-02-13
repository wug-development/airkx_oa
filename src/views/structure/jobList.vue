<template>
    <div class="jobs-box">
        <div class="list-header">
            <a-button type="primary" @click="edit">添加职位</a-button>
        </div>
        <DataList :dataApi="apiGetList" rowKey="jobID" :detaModel="DataModel">
            <template #action="{ data: { record } }">
                <a-button type="primary" @click="edit(record)">编辑</a-button>
                <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="del(record)">
                    <template #title>
                        <p>确定要删除该职位吗</p>
                    </template>
                    <a-button type="primary" danger>删除</a-button>
                </a-popconfirm>
            </template>
        </DataList>
    </div>
</template>

<script lang="ts">
import DataList from '@/components/dataList.vue';
import DataModel from './models/jobs';
import { useRouter } from 'vue-router';
import { Button, notification } from 'ant-design-vue';
import { apiGetList, apiDel } from '@/apis/job';
import { onMounted } from 'vue';
import bus from '@/utils/bll/bus';

export default {
    components: {
        DataList,
        Button,
    },
    setup() {
        const router = useRouter();

        // 删除职位
        const del = async (row: any) => {
            const res = await apiDel(row.jobID);
            if (res) {
                notification.success({
                    message: '删除成功',
                });
                bus.$emit('reloadData', '');
            }
        };

        // 编辑职位
        const edit = (row: any) => {
            const { jobID, jobName, departmentName } = row;
            router.push({
                name: 'jobinfo',
                params: {
                    jobID,
                    jobName,
                    departmentName,
                },
            });
        };

        onMounted(() => {
            bus.$emit('searchData', {});
        });

        return {
            DataModel,
            apiGetList,
            del,
            edit,
        };
    },
};
</script>

<style lang="scss" scoped>
.jobs-box {
    min-height: 100%;
    .ant-btn {
        margin: 0 5px;
    }
    .list-header {
        padding: 25px;
        background-color: #fff;
        margin-bottom: 25px;
    }
}
</style>
