<template>
    <div class="structureinfo-box">
        <a-modal :title="form.structureID ? '编辑信息' : '添加信息'" cancelText="取消" okText="保存" @cancel="onCancel" v-model:visible="visible" :confirm-loading="confirmLoading" @ok="onSave">
            <FormItem ref="refDetail" :formModel="infoModel" :form="form"></FormItem>
        </a-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, watchEffect } from 'vue';
import { apiSave } from '@/apis/structure';
import { message } from 'ant-design-vue';
import { infoModel } from '../models/index';
import FormItem from '@/components/infoItem.vue';
export default defineComponent({
    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
        isShow: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['confirm', 'update:isShow'],
    components: {
        FormItem,
    },
    setup(props, { emit }) {
        const state = reactive({
            form: {},
        });
        const visible = ref<boolean>(false);
        const confirmLoading = ref<boolean>(false);

        const onSave = async () => {
            const res = await apiSave(state.form);
            if (res) {
                message.success('保存成功');
                emit('confirm', false);
            }
        };

        watchEffect(() => {
            visible.value = props.isShow;
            state.form = props.item;
        });

        const onCancel = () => {
            emit('update:isShow', false);
        };

        return {
            ...toRefs(state),
            confirmLoading,
            onSave,
            infoModel,
            onCancel,
            visible,
        };
    },
});
</script>

<style></style>
