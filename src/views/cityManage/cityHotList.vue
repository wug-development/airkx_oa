<template>
    <div class="noticelist-box">
        <div class="query-form-box">
            <a-form class="ant-advanced-search-form" ref="searchRef" :model="form">
                <a-row :gutter="24">
                    <a-col v-for="(item, i) in addModel" :key="i" :span="item.span || 8">
                        <a-form-item :label="item.label" :rules="item.rules" :name="item.name">
                            <a-select :placeholder="item.placeholder || ''" show-search v-bind="item" v-model:value="form[item.name]" @search="onSearch" :filter-option="false">
                                <a-select-option value="">{{ item.placeholder || '全部' }}</a-select-option>
                                <template v-for="({ value, label }, i) in item.options" :key="i">
                                    <a-select-option :value="value">{{ label }}</a-select-option>
                                </template>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="8">
                        <a-button type="primary" @click="onInsert"> 添加 </a-button>
                    </a-col>
                </a-row>
            </a-form>
        </div>
        <DataList :dataApi="apiGetHotList" :detaModel="tableModel" rowKey="dcCode" :scroll="{ x: false }">
            <template #action="record">
                <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="del(record)">
                    <template #title>
                        <p>确定要删除该热门城市吗？</p>
                    </template>
                    <a-button type="primary" danger>删除</a-button>
                </a-popconfirm>
            </template>
        </DataList>
    </div>
</template>

<script lang="ts">
import CSearchForm from '@/components/searchForm.vue';
import DataList from '@/components/dataList.vue';
import { defineComponent, toRefs, reactive, ref, onMounted } from 'vue';
import { insertModel, tableModel } from './model/index';
import { apiGetList, apiInsertHotList, apiGetHotList, apiDelHot } from '@/apis/city';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import bus from '@/utils/bll/bus';
import { debounce } from '@/utils/tool/utils';
import { nextTick } from 'process';

export default defineComponent({
    components: {
        CSearchForm,
        DataList,
    },
    setup() {
        // 删除
        const del = async (row: any) => {
            await apiDelHot(row.data.text.TCID);
            message.success('删除成功');
            bus.$emit('reloadData', '');
        };
        const searchRef = ref();

        // 表单内容
        const state = reactive({
            form: {},
            addModel: insertModel,
        });

        const onSearch = debounce(async (v: string) => {
            const res = await apiGetList({
                page: 1,
                pageNum: 10,
                cityname: v,
            });
            const arr = [];
            if (res && res.data && res.data.length) {
                res.data.forEach((item) => {
                    arr.push({
                        label: item.dcCityName,
                        value: item.dnCityID,
                    });
                });
            }
            nextTick(() => {
                state.addModel[0].options = arr;
                console.log('state.addModel[0].options', arr);
            });
        });

        const onInsert = debounce(async () => {
            const valid = await searchRef.value.validate();
            if (valid) {
                await apiInsertHotList(state.form.id);
                message.success('添加成功');
                bus.$emit('reloadData', '');
            }
        });

        onMounted(() => {
            bus.$emit('searchData', '');
        });

        return {
            apiGetHotList,
            tableModel,
            del,
            ...toRefs(state),
            onSearch,
            onInsert,
            searchRef,
        };
    },
});
</script>

<style lang="scss" scoped>
.query-form-box {
    background-color: #fff;
    padding: 25px 25px 5px 25px;
    margin-bottom: 25px;
    .btns {
        margin-bottom: 24px;
    }
}
</style>
