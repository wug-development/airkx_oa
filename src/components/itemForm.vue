<template>
    <a-form-item
        :label="item.label"
        :labelCol="item.labelCol || { span: 4, offset: 0 }"
        :wrapperCol="item.wrapperCol || { span: 12, offset: 0 }"
        :rules="item.rules"
        :name="item.parentName || item.name"
    >
        <a-select v-if="item.type === 'select'" :placeholder="'请选择'" v-model:value="modelValue" @change="onChange" :disabled="disabled" size="large" allowClear>
            <a-select-option v-for="(option, i) in item.options" :value="option.value || option.label">{{ option.label }}</a-select-option>
        </a-select>
        <a-radio-group v-else-if="item.type === 'radio'" :name="item.name" :disabled="disabled" v-model:value="modelValue" :defaultValue="item.defaultValue">
            <a-radio v-for="(option, i) in item.options" :value="option.value || option.label">{{ option.label }}</a-radio>
        </a-radio-group>
        <a-date-picker v-else-if="item.type === 'date'" v-model:value="modelValue" :placeholder="item.placeholder || '请选择日期'" :disabled="disabled" size="large" />
        <div v-else-if="item.type === 'text'">{{ modelValue }}</div>
        <div v-else-if="item.type === 'br'" class="item-br"></div>
        <template v-else-if="item.type === 'custom'">
            <slot name="item" :item="item"></slot>
        </template>
        <a-input v-else v-model:value="modelValue" :maxlength="item.maxlength || 50" :disabled="disabled" size="large" allowClear />
    </a-form-item>
</template>

<script lang="ts">
import { ref, watch, watchEffect } from 'vue';
import { FormItem, Select, SelectOption, RadioGroup, Radio, DatePicker, Input } from 'ant-design-vue';
export default {
    components: { FormItem, Select, SelectOption, RadioGroup, Radio, DatePicker, Input },
    props: ['item', 'value', 'disabled'],
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
