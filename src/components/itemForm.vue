<template>
    <a-form-item
        :label="item.label"
        :labelCol="item.labelCol || { span: 4, offset: 0 }"
        :wrapperCol="item.wrapperCol || { span: 16, offset: 0 }"
        :rules="item.rules"
        :name="item.parentName || item.name"
    >
        <a-select v-if="item.type === 'select'" :mode="item.mode" :placeholder="'请选择'" v-model:value="modelValue" @change="onChange" :disabled="disabled" size="large" allowClear>
            <a-select-option v-for="(option, i) in item.options" :value="option.value || option.label">{{ option.label }}</a-select-option>
        </a-select>
        <a-tree-select
            v-else-if="item.type === 'tree'"
            tree-data-simple-mode
            placeholder="请选择"
            :tree-data="item.treeData"
            v-model:value="modelValue"
            :disabled="disabled"
            size="large"
            labelInValue
            :load-data="item.onLoadData"
            allowClear
        ></a-tree-select>
        <a-radio-group v-else-if="item.type === 'radio'" :name="item.name" :disabled="disabled" v-model:value="modelValue" :defaultValue="item.defaultValue">
            <a-radio v-for="(option, i) in item.options" :value="option.value || option.label">{{ option.label }}</a-radio>
        </a-radio-group>
        <a-date-picker
            v-else-if="item.type === 'date'"
            v-model:value="modelValue"
            :valueFormat="item.format || 'YYYY-MM-DD'"
            :placeholder="item.placeholder || '请选择日期'"
            :disabled="disabled"
            :locale="locale"
            size="large"
        ></a-date-picker>
        <a-range-picker
            v-else-if="item.type === 'date-range'"
            v-model:value="modelValue"
            :valueFormat="item.format || 'YYYY-MM-DD'"
            :disabled="disabled"
            :locale="locale"
            size="large"
        />
        <a-checkbox-group v-else-if="item.type === 'checkbox'" v-model:value="modelValue" :options="item.options" />
        <div v-else-if="item.type === 'text'">{{ modelValue }}</div>
        <div v-else-if="item.type === 'br'" class="item-br"></div>
        <template v-else-if="item.type === 'custom'">
            <slot name="item" :item="item"></slot>
        </template>
        <a-textarea v-else-if="item.type === 'textarea'" v-model:value.trim="modelValue" showCount :maxlength="item.maxlength || 500" :disabled="disabled" size="large" allowClear />
        <a-input v-else v-model:value.trim="modelValue" :placeholder="item.placeholder || '请输入'" :maxlength="item.maxlength || 50" :disabled="disabled" size="large" allowClear />
    </a-form-item>
</template>

<script lang="ts">
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import { ref, watch, watchEffect } from 'vue';
import { FormItem, Select, SelectOption, RadioGroup, Radio, DatePicker, Input } from 'ant-design-vue';
export default {
    components: { FormItem, Select, SelectOption, RadioGroup, Radio, DatePicker, Input },
    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
        value: {
            type: [String, Array, Number],
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:value'],
    setup(props, { emit }) {
        const modelValue = ref();
        const unWatch = watchEffect(() => {
            if (props.item.type === 'select' && props.value === '') {
                modelValue.value = undefined;
            } else {
                modelValue.value = props.value;
            }
        });
        // unWatch()
        watch(modelValue, (newVal, oldVal) => {
            if (newVal !== oldVal) {
                emit('update:value', newVal);
            }
        });

        // change事件
        const onChange = () => {
            props.item.onChange && props.item.onChange(modelValue.value);
        };

        return {
            modelValue,
            locale,
            onChange,
        };
    },
};
</script>

<style lang="scss" scoped>
.item-br {
    width: 100%;
    border-top: 1px solid #e0c9c9;
}
</style>
