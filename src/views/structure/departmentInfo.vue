<template>
    <div class="departmentinfo-box">
        <DetailForm ref="refDetail" title="部门信息" :formModel="dataModel" :form="form">
            <template #default>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" @click="onSubmit" size="large">保存</a-button>
                    <a-button style="margin-left: 10px" @click="back" size="large">取消</a-button>
                </a-form-item>
            </template>
        </DetailForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue';
import DetailForm from '@/components/detailForm.vue';
import { dataModel } from './models/departmentinfo';
import { useRouter, useRoute } from 'vue-router';
import { Button, FormItem } from 'ant-design-vue';
import { apiSave } from '@/apis/department';

export default defineComponent({
    components: {
        DetailForm,
        FormItem,
        Button,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const refDetail = ref();
        const form = reactive({
            departmentID: null,
            departmentName: '',
        });
        const back = () => {
            router.go(-1);
        };
        const onSubmit = async () => {
            const isCheck = await refDetail.value.onSubmit();
            if (isCheck) {
                const res = await apiSave(form);
                console.log('res :>> ', res);
                if (res) {
                    back();
                }
            }
        };

        onMounted(() => {
            const { id, name } = route.query;
            if (id && name) {
                form.departmentID = id;
                form.departmentName = name.toString();
            }
        });

        return {
            form,
            dataModel,
            onSubmit,
            refDetail,
            back,
        };
    },
});
</script>

<style lang="scss" scoped>
.departmentinfo-box {
    min-height: 100%;
}
</style>
