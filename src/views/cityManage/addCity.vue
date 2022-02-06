<template>
    <div class="info-box">
        <DetailForm ref="refDetail" title="城市信息" :formModel="infoModel" :form="form">
            <div class="info-box--btn">
                <a-button type="primary" @click="onSave">保 存</a-button>
                <a-button @click="onCancel">取 消</a-button>
            </div>
        </DetailForm>
    </div>
</template>

<script lang="ts">
import DetailForm from '@/components/detailForm.vue';
import { defineComponent, reactive, ref } from 'vue';
import { infoModel } from './model/index';
import { useRouter } from 'vue-router';
import { apiSave } from '@/apis/city';
import { message } from 'ant-design-vue';
export default defineComponent({
    components: {
        DetailForm,
    },
    setup() {
        const router = useRouter();
        const form = reactive({});
        const refDetail = ref();

        const onCancel = () => {
            router.go(-1);
        };

        const onSave = async () => {
            await refDetail.value.onSubmit().then(async () => {
                const res: any = await apiSave(form);
                message.success(res.msg);
                onCancel();
            });
        };

        return {
            form,
            infoModel,
            refDetail,
            onSave,
            onCancel,
        };
    },
});
</script>

<style lang="scss" scoped>
.info-box {
    min-height: 100%;
    &--btn {
        padding-left: 20%;
    }
}
</style>
