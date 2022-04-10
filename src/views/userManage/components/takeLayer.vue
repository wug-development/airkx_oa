<template>
    <a-modal v-model:visible="visible" :title="title">
        <InfoForm ref="refDetail" :formModel="takeModal" :form="form"></InfoForm>
        <template #footer>
            <a-button @click.stop="onCancel">取消</a-button>
            <a-button type="primary" @click.stop="onSubmit">确定</a-button>
        </template>
    </a-modal>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watchEffect, toRefs } from 'vue';
import { Modal } from 'ant-design-vue';
import { takeModal } from '../models/wagesinfo';
import InfoForm from '@/components/infoItem.vue';
import { apiGetList } from '@/apis/user';
import { arrayToOptions } from '@/utils/tool/utils';

const showEmit = 'update:isShow';
const submitEmit = 'submit';
export default defineComponent({
    components: {
        Modal,
        InfoForm,
    },
    emits: [showEmit, submitEmit],
    props: {
        isShow: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '提成',
        },
        modalType: {
            type: String,
            default: '0',
        },
    },
    setup(props, { emit }) {
        const refDetail = ref();

        const state = reactive({
            takeModal,
            form: {
                type: '0',
            },
        });

        apiGetList({
            page: 1,
            pageNum: 100,
        }).then((res) => {
            console.log('res :>> ', res);
            const options = arrayToOptions(res.data, 'userID', 'username');
            console.log('options :>> ', options);
            state.takeModal[0].options = options;
        });

        const visible = ref(false);
        watchEffect(() => {
            visible.value = props.isShow;
            if (props.isShow) {
                state.form = {
                    type: '0',
                };
            }
            state.form.type = props.modalType;
        });

        const onCancel = () => {
            emit(showEmit, false);
        };

        const onSubmit = async () => {
            await refDetail.value.onSubmit();
            console.log('state.form :>> ', state.form);
            emit(submitEmit, state.form);
        };

        return {
            visible,
            ...toRefs(state),
            refDetail,
            takeModal,
            onCancel,
            onSubmit,
        };
    },
});
</script>

<style></style>
