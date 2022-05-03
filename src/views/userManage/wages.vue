<template>
    <div class="wages-box">
        <DetailForm ref="refDetail" title="试用期工资设置" :formModel="dataModelBefore" :form="form">
            <template #subtitle>
                <div class="subtitle-name">（ {{ form.name }} ）</div>
            </template>
        </DetailForm>
        <DetailForm ref="refDetails" title="转正工资设置" :formModel="dataModel" :form="form">
            <template #subtitle>
                <div class="subtitle-name">（ {{ form.name }} ）</div>
            </template>
            <template #default>
                <a-col :span="24">
                    <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
                        <a-button type="primary" @click="onSubmit" size="large">保存</a-button>
                    </a-form-item>
                </a-col>
            </template>
        </DetailForm>
        <TakeForm :name="form.name" :id="form.userID" :list="takeList"></TakeForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, onBeforeMount } from 'vue';
import DetailForm from '@/components/detailForm.vue';
import TakeForm from './components/take.vue';
import { dataModel, dataModelBefore, orderTypeModel } from './models/wagesinfo';
import { useRouter, useRoute } from 'vue-router';
import { Button, Col, FormItem, message } from 'ant-design-vue';
import { apiMyWagesInfo, apiWageSet } from '@/apis/wages';

export default defineComponent({
    components: {
        DetailForm,
        Button,
        Col,
        FormItem,
        TakeForm,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const back = () => {
            router.go(-1);
        };
        const refDetail = ref();
        const state = reactive({
            form: {
                name: '',
                userID: '',
            },
            takeList: [],
        });
        onBeforeMount(async () => {
            state.form.userID = '' + route.query.id;
            const res = await apiMyWagesInfo();
            state.form = res.info;
            state.takeList = res.take;
            state.form.name = '' + route.query.name;
        });

        // 保存基本工资组成
        const onSubmit = async () => {
            const isCheck = await refDetail.value.onSubmit();
            if (isCheck) {
                await apiWageSet(state.form);
                message.success('保存成功');
            }
        };

        return {
            ...toRefs(state),
            dataModel,
            dataModelBefore,
            orderTypeModel,
            onSubmit,
            refDetail,
            back,
        };
    },
});
</script>

<style lang="scss" scoped>
.wages-box {
    min-height: 100%;
    padding-bottom: 20px;
    .subtitle-name {
        font-size: 14px;
    }
}
</style>
