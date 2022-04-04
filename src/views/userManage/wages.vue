<template>
    <div class="wages-box">
        <DetailForm ref="refDetail" title="试用期工资设置" :formModel="dataModelBefore" :form="form">
            <template #subtitle>
                <div class="subtitle-name">（ {{ form.name }} ）</div>
            </template>
        </DetailForm>
        <DetailForm ref="refDetail" title="转正工资设置" :formModel="dataModel" :form="form">
            <template #subtitle>
                <div class="subtitle-name">（ {{ form.name }} ）</div>
            </template>
            <template #default>
                <a-col :span="24">
                    <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
                        <a-button type="primary" @click="onSubmit" size="large">保存</a-button>
                        <a-button style="margin-left: 10px" @click="back" size="large">返回</a-button>
                    </a-form-item>
                </a-col>
            </template>
        </DetailForm>
        <CPannal title="提成">
            <a-form ref="formRef" :model="form" :label-col="{ span: 4 }" layout="horizontal" :wrapper-col="{ span: 14 }">
                <a-row>
                    <a-col :span="12">
                        <ItemForm :item="orderTypeModel" v-model:value="form['orderType']"></ItemForm>
                    </a-col>
                    <a-col>
                        <a-button @click="onAddType" size="large">添加</a-button>
                    </a-col>
                </a-row>
            </a-form>
            <a-row>
                <a-col :span="24">
                    <a-divider orientation="left">
                        <div class="divider-text">
                            <span>国际订单</span>
                            <span class="btn-close"><CloseOutlined :style="{ fontSize: '10px', color: '#08c' }" /></span>
                        </div>
                    </a-divider>
                </a-col>
                <a-col :span="24">
                    <a-divider orientation="left">国际订单</a-divider>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
                        <a-button type="primary" @click="onSubmit" size="large">保存</a-button>
                        <a-button style="margin-left: 10px" @click="back" size="large">返回</a-button>
                    </a-form-item>
                </a-col>
            </a-row>
        </CPannal>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import DetailForm from '@/components/detailForm.vue';
import ItemForm from '@/components/itemForm.vue';
import CPannal from '@/components/pannel.vue';
import { dataModel, dataModelBefore, orderTypeModel } from './models/wagesinfo';
import { useRouter } from 'vue-router';
import { Button, Col, FormItem, message } from 'ant-design-vue';
import { CloseOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        DetailForm,
        Button,
        Col,
        FormItem,
        CPannal,
        ItemForm,
        CloseOutlined,
    },
    setup() {
        const router = useRouter();
        const refDetail = ref();
        const form = reactive({
            name: '武广',
            orderType: '',
        });
        const onSubmit = async () => {
            const isCheck = await refDetail.value.onSubmit();
            console.log('isCheck :>> ', isCheck);
        };
        const back = () => {
            router.go(-1);
        };
        const onAddType = () => {
            if (!form.orderType) {
                message.error('请选择提成类型');
                return false;
            } else {
            }
        };
        return {
            form,
            dataModel,
            dataModelBefore,
            orderTypeModel,
            onAddType,
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
    .divider-text {
        display: flex;
        align-items: center;
        user-select: none;
        .btn-close {
            margin-left: 15px;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            border: 1px solid #ddd;
            justify-content: center;
            border-radius: 30px;
            cursor: pointer;
            box-sizing: border-box;
            &:active {
                border: 1px solid #08c;
            }
        }
    }
}
</style>
