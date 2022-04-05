<template>
    <div class="edituser-box">
        <DetailForm ref="refDetail" title="人员信息" :formModel="dataModel" :form="form">
            <template #item>
                <a-cascader v-model:value="form.depart" @change="onSelectChange" :defaultValue="defaultValue" :options="treeData" placeholder="请选择" size="large" change-on-select />
            </template>
            <template #default>
                <a-col :span="24">
                    <a-form-item :wrapper-col="{ span: 20, offset: 3 }">
                        <a-button type="primary" @click="onSubmit" size="large">保存</a-button>
                        <a-button @click="back" size="large">返回列表</a-button>
                        <a-button @click="toPage('permission')" class="ant-btn-warning" size="large">权限设置</a-button>
                        <a-button @click="toPage('wages')" class="ant-btn-info" size="large">工资设置</a-button>
                    </a-form-item>
                </a-col>
            </template>
        </DetailForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import DetailForm from '@/components/detailForm.vue';
import { dataModel } from './models/userinfo';
import { useRouter, useRoute } from 'vue-router';
import { Col, FormItem, Button, message } from 'ant-design-vue';
import { apiGetStructureList } from '@/apis/structure';
import { getTree } from '@/utils/tool/utils';
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
        const state = reactive({
            form: {
                departID: '',
                depart: [],
                department: {
                    label: '',
                    value: '',
                },
            },
            treeData: [],
            defaultValue: [],
            dataModel: dataModel(),
        });

        const id = route.query.id;
        if (id) {
            apiQuery(id).then((res) => {
                const info = res[0];
                console.log('info :>> ', info);
                state.form = info;
                if (info.departmentID) {
                    state.defaultValue = info.departmentID.split(',');
                    state.form.depart = info.departmentID.split(',');
                    state.form.department = {
                        label: info.departmentName,
                        value: info.departmentID,
                    };
                } else {
                    state.form.department = {
                        label: '',
                        value: '',
                    };
                }
                console.log('state.form :>> ', state.form);
            });
        }
        const getJson = (obj) => {
            return Object.assign(
                {
                    value: obj.structureID,
                    label: obj.structureName,
                    key: obj.structureID,
                    name: obj.structureName,
                    children: [],
                },
                obj
            );
        };

        let departData = [];
        const getInfo = async () => {
            apiGetStructureList().then((res) => {
                if (res && res.data.length) {
                    departData = res.data;
                    const tree = getTree(res.data, 'parentID', getJson);
                    state.treeData = tree;
                }
            });
        };
        getInfo();

        const back = () => {
            router.go(-1);
        };

        const onSubmit = async () => {
            await refDetail.value.onSubmit();
            state.form.departID = state.form.depart[state.form.depart.length - 1];
            console.log('state.form :>> ', JSON.stringify(state.form));
            await apiSave(state.form);
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

        const onSelectChange = (v) => {
            const labels = [];
            v.forEach((item) => {
                departData.forEach((d) => {
                    if (d.structureID === item) {
                        labels.push(d.structureName);
                    }
                });
            });
            state.form.department.label = labels.join('/');
            state.form.department.value = v.join(',');
        };

        return {
            ...toRefs(state),
            onSubmit,
            refDetail,
            onSelectChange,
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
