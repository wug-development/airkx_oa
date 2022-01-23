<template>
    <div class="query-form-box">
        <a-form class="ant-advanced-search-form" ref="searchRef" :model="form" @submit="onSearch">
            <a-row :gutter="24">
                <a-col v-for="(item, i) in dataModel" :key="i" :span="item.span || 8" :style="{ display: i < count ? 'block' : 'none' }">
                    <a-form-item :label="item.label" :rules="item.rules" :name="item.name">
                        <a-date-picker v-if="item.type === 'date'" v-model:value="form[item.name]" @change="item.onChange || (() => {})" :inputReadOnly="true" v-bind="item" />
                        <a-month-picker
                            v-else-if="item.type === 'month'"
                            v-model:value="form[item.name]"
                            @change="item.onChange || (() => {})"
                            placeholder="请选择年月"
                            :inputReadOnly="true"
                            v-bind="item"
                        />
                        <a-range-picker
                            v-else-if="item.type === 'daterange'"
                            v-model:value="form[item.name]"
                            @change="item.onChange || (() => {})"
                            :placeholder="['开始日期', '截止日期']"
                            :inputReadOnly="true"
                            v-bind="item"
                        />
                        <a-select v-else-if="item.type === 'select'" :placeholder="item.placeholder || ''" v-bind="item" v-model:value="form[item.name]">
                            <a-select-option value="">{{ item.placeholder || '全部' }}</a-select-option>
                            <template v-for="({ value, label }, i) in item.options" :key="i">
                                <a-select-option :value="value">{{ label }}</a-select-option>
                            </template>
                        </a-select>
                        <a-input v-else :placeholder="item.placeholder || ''" :allowClear="typeof item.allowClear === 'boolean' ? item.allowClear : true" v-model:value="form[item.name]" />
                    </a-form-item>
                </a-col>
                <a-col :span="btnCol" :style="{ textAlign: 'right' }">
                    <div class="btns">
                        <a-button type="primary" @click="onSearch"> 搜索 </a-button>
                        <a-button :style="{ marginLeft: '8px' }" @click="onReset"> 重置 </a-button>
                        <a class="query-form-box-toggle" v-if="maxShow !== 0" @click="toggle">
                            {{ expand ? '收起' : '高级搜索' }}
                            <UpOutlined v-if="expand" />
                            <DownOutlined v-else />
                        </a>
                    </div>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, toRefs, onMounted } from 'vue';
import { UpOutlined, DownOutlined } from '@ant-design/icons-vue';
import { Form, FormItem, Row, Col, Button, Input, Select, SelectOption, DatePicker, MonthPicker, RangePicker } from 'ant-design-vue';

import bus from '../utils/bll/bus';

export default defineComponent({
    components: {
        UpOutlined,
        DownOutlined,
        Form,
        FormItem,
        Row,
        Col,
        Button,
        Input,
        Select,
        SelectOption,
        DatePicker,
        MonthPicker,
        RangePicker,
    },
    props: {
        dataModel: {
            type: Object,
            default: () => ({}),
        },
        btnCol: {
            type: Number,
            default: 24,
        },
        maxShow: {
            type: Number,
            default: 0,
        },
        initData: {
            type: Object,
            default: () => {},
        },
    },
    emits: ['update:form'],
    setup(props, { emit }) {
        console.log('props.dataModel :>> ', props.dataModel);
        // 表单ref
        const searchRef = ref();

        // 表单内容
        const state = reactive({
            form: {},
        });

        // 搜索
        const onSearch = async () => {
            return await new Promise((resolve, reject) => {
                searchRef.value
                    .validate()
                    .then(() => {
                        bus.$emit('searchData', state.form);
                        emit('update:form', state.form);
                        resolve(state.form);
                    })
                    .catch((error: any) => {
                        console.log('error', error);
                        reject(error);
                    });
            });
        };

        // 重置
        const onReset = () => {
            searchRef.value.resetFields();
            console.log('state.form :>> ', state.form);
        };

        // 打开关闭更多搜索
        const expand = ref(false);
        const toggle = () => {
            expand.value = !expand.value;
        };

        // 控制最大显示数量
        const count = computed(() => {
            return expand.value ? props.dataModel.length : props.maxShow ? props.maxShow : props.dataModel.length;
        });

        onMounted(() => {
            onSearch();
        });

        return {
            ...toRefs(state),
            expand,
            onSearch,
            onReset,
            searchRef,
            toggle,
            count,
        };
    },
});
</script>

<style lang="scss" scoped>
.query-form-box {
    background-color: #fff;
    padding: 25px 25px 5px 25px;
    margin-bottom: 25px;
    &-toggle {
        margin-left: 8px;
        font-size: 14px;
        width: 80px;
        display: inline-block;
        text-align: left;
    }
    .btns {
        margin-bottom: 24px;
    }
}
</style>
