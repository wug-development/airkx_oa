<template>
    <div class="edituser-box">
        <DetailForm ref="refDetail" title="人员信息" :formModel="dataModel" :form="form">
            <template #default>
                <a-col :span="24">
                    <a-form-item :wrapper-col="{ span: 20, offset: 3 }">
                        <a-button type="primary" @click="onSubmit" size="large">保存</a-button>
                        <a-button @click="back" size="large">返回列表</a-button>
                        <a-button @click="toPage('permission')" class="ant-btn-warning" size="large">权限设置</a-button>
                        <a-button @click="toPage('wages')" class="ant-btn-info" size="large">工资管理</a-button>
                    </a-form-item>
                </a-col>
            </template>
        </DetailForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watchEffect } from 'vue';
import DetailForm from '@/components/detailForm.vue';
import { dataModel } from './models/userinfo';
import { useRouter, useRoute } from 'vue-router';
import { Col, FormItem, Button, message } from 'ant-design-vue';
import { apiGetDepartList } from '@/apis/department';
import { apiGetJobList } from '@/apis/job';
import { apiQuery, apiSave } from '@/apis/user';

export default defineComponent({
    components: {
        DetailForm,
        Col,
        FormItem,
        Button,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const refDetail = ref();
        const depart = ref(0);
        const state = reactive({
            form: {},
            dataModel: dataModel(depart),
        });

        const id = route.query.id;
        if (id) {
            apiQuery(id).then((res) => {
                state.form = res[0];
            });
        }
        apiGetDepartList().then((res) => {
            if (res && res.data && res.data.length) {
                const options = [];
                res.data.forEach((item) => {
                    options.push({
                        value: item.departmentName,
                        label: item.departmentName,
                    });
                });
                state.dataModel[2].options = options;
            }
        });

        watchEffect(() => {
            apiGetJobList({
                departmentName: depart.value,
            }).then((res) => {
                if (res && res.data && res.data.length) {
                    const options = [];
                    res.data.forEach((item) => {
                        options.push({
                            value: item.jobName,
                            label: item.jobName,
                        });
                    });
                    state.dataModel[3].options = options;
                }
            });
        });

        const back = () => {
            router.go(-1);
        };

        const onSubmit = async () => {
            const isCheck = await refDetail.value.onSubmit();
            const res = await apiSave(state.form);
            message.success('保存成功');
            back();
        };

        const toPage = (path: string) => {
            router.push({
                path,
                query: {
                    id: state.form['userID'],
                },
            });
        };

        return {
            ...toRefs(state),
            onSubmit,
            refDetail,
            back,
            toPage,
        };
    },
});
</script>

<style lang="scss" scoped>
.edituser-box {
    height: 100%;
}
</style>
