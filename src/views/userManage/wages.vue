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
            <a-row class="item" v-for="(item, index) in form.takeList" :key="item.type">
                <a-col :span="2">
                    <div class="item-label">
                        <span class="btn-close" @click="onCloseTakeItem(item, index)"><CloseOutlined size="small"></CloseOutlined> </span>
                        <span>{{ item.name }}</span>
                    </div>
                </a-col>
                <a-col :span="16" class="item-tags">
                    <a-tag color="#2db7f5" closable @close="onDelTakeItem(index, i)" v-for="(user, i) in item.children" :key="user.id">{{ user.name }} * {{ user.take }}%</a-tag>

                    <a-button @click="onShowModal(item)" class="item-btn" size="small">添加</a-button>
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
        <TakeLayer v-model:isShow="isShowLayer" :modalType="modalType" :title="modalTitle" @submit="onSubmitTake"></TakeLayer>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import DetailForm from '@/components/detailForm.vue';
import ItemForm from '@/components/itemForm.vue';
import CPannal from '@/components/pannel.vue';
import TakeLayer from './components/takeLayer.vue';
import { dataModel, dataModelBefore, orderTypeModel, orderTypes, takeItem } from './models/wagesinfo';
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
        TakeLayer,
        CloseOutlined,
    },
    setup() {
        const router = useRouter();
        const refDetail = ref();
        const form = reactive({
            name: '武广',
            orderType: '',
            takeList: [],
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
                const len = form.takeList.length;
                const index = form.takeList.findIndex((item) => {
                    return item.type === form.orderType;
                });
                if (index < 0) {
                    form.takeList.push({
                        name: orderTypes[form.orderType],
                        type: form.orderType,
                        index: len ? len - 1 : 0,
                        children: [],
                    });
                } else {
                    message.error('该提成类型已存在');
                }
            }
        };

        const isShowLayer = ref(false);
        const modalTitle = ref('');
        const modalType = ref('0');
        const repeatValite = (arr, user) => {
            const index = arr.findIndex((item) => {
                return item.id === user.id;
            });
            return index === -1;
        };
        const onShowModal = (item) => {
            isShowLayer.value = true;
            modalTitle.value = item.name;
            modalType.value = item.type;
        };
        const onCloseTakeItem = (item, i) => {
            form.takeList.splice(i, 1);
        };
        const onSubmitTake = (info) => {
            form.takeList.forEach((item) => {
                if (item.type) {
                    info.name.forEach((o) => {
                        const d = JSON.parse(o);
                        if (repeatValite(item.children, d)) {
                            item.children.push({
                                name: d.name,
                                id: d.id,
                                take: info.take,
                            });
                        } else {
                            message.warning('已过滤重复人员：' + d.name);
                        }
                    });
                }
            });
            isShowLayer.value = false;
        };
        const onDelTakeItem = (index, i) => {
            form.takeList[index].children.splice(i, 1);
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
            isShowLayer,
            modalTitle,
            modalType,
            onShowModal,
            onCloseTakeItem,
            onSubmitTake,
            onDelTakeItem,
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
    }
    .btn-close {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        border: 1px solid coral;
        justify-content: center;
        border-radius: 30px;
        cursor: pointer;
        box-sizing: border-box;
        color: coral;
        margin-right: 5px;
        position: relative;
        top: 1px;
        font-size: 12px;
        &:active {
            border: 1px solid #08c;
            color: #08c;
        }
    }
    .item {
        margin-bottom: 20px;
        &-btn {
            padding: 0 10px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .item-tags {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .item-label {
        text-align: right;
        height: 100%;
        line-height: 1px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        user-select: none;
        &::after {
            content: '：';
        }
    }
}
</style>
