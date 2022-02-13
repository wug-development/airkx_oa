<template>
    <div class="jobinfo-box" v-if="dataModel && dataModel.length">
        <DetailForm ref="refDetail" title="职位信息" :formModel="dataModel" :form="form">
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
import { defineComponent, reactive, ref, toRefs, onMounted } from 'vue';
import DetailForm from '@/components/detailForm.vue';
import { dataModel } from './models/jobinfo';
import { useRouter, useRoute } from 'vue-router';
import { Button, FormItem } from 'ant-design-vue';
import { apiGetList } from '@/apis/department';
import { apiSave } from '@/apis/job';

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
        const state = reactive({
            form: {
                jobID: null,
                jobName: '',
                departmentName: '',
            },
            dataModel: dataModel,
        });
        const back = () => {
            router.go(-1);
        };
        const onSubmit = async () => {
            const isCheck = await refDetail.value.onSubmit();
            if (isCheck) {
                const res = await apiSave(state.form);
                console.log('res :>> ', res);
                if (res) {
                    back();
                }
            }
        };

        onMounted(async () => {
            const res = await apiGetList({});
            if (res && res.data && res.data.length) {
                const options = [];
                res.data.forEach((item) => {
                    options.push({
                        value: item.departmentName,
                        label: item.departmentName,
                    });
                });
                state.dataModel[0].options = options;
            }

            const { jobID, jobName, departmentName } = route.params;
            if (jobID && jobName && departmentName) {
                state.form.jobID = jobID;
                state.form.departmentName = departmentName.toString();
                state.form.jobName = jobName.toString();
            }
        });

        return {
            ...toRefs(state),
            onSubmit,
            refDetail,
            back,
        };
    },
});
</script>

<style lang="scss" scoped>
.jobinfo-box {
    min-height: 100%;
}
</style>
