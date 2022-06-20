<template>
    <div class="bb-box">
        <Pannel :padding="'0'" title="资金流水">
            <template #subtitle>
                <NavTabs></NavTabs>
            </template>
            <DataList :dataApi="apiGetList" :detaModel="listModel" rowKey="Row">
                <template #action="record">
                    <a-button type="primary" @click="edit(record)">编辑</a-button>
                    <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="del(record)">
                        <template #title>
                            <p>确定要删除该客户吗？</p>
                        </template>
                        <a-button type="primary" danger>删除</a-button>
                    </a-popconfirm>
                </template>
            </DataList>
        </Pannel>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavTabs from './components/nav-tabs.vue';
import DataList from '@/components/dataList.vue';
import Pannel from '@/components/pannel.vue';
import { listModel } from './model/bill';
import { apiGetList, apiDel } from '@/apis/customerbill';
export default defineComponent({
    components: {
        NavTabs,
        DataList,
        Pannel
    },
    setup() {
        return {
            listModel,
            apiGetList,
            apiDel
        }
    }
})
</script>

<style lang="scss" scoped>
.bb-box {
    min-height: 100%;
}
</style>
