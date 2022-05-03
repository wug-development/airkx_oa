<template>
    <div class="take-box">
        <CPannal title="提成">
            <template #subtitle>
                <div class="subtitle-name">（ {{ name }} ）</div>
            </template>
            <a-form ref="formRef" :label-col="{ span: 4 }" layout="horizontal" :wrapper-col="{ span: 14 }">
                <a-row>
                    <a-col :span="12">
                        <ItemForm :item="orderTypeModel" v-model:value="orderType"></ItemForm>
                    </a-col>
                    <a-col>
                        <a-button @click="onAddType" size="large">添加</a-button>
                    </a-col>
                </a-row>
            </a-form>
            <a-row class="item" v-for="(item, index) in takeList" :key="item.type">
                <a-col :span="2">
                    <div class="item-label">
                        <span class="btn-close" @click="onCloseTakeItem(item, index)"><CloseOutlined size="small"></CloseOutlined> </span>
                        <span>{{ item.name }}</span>
                    </div>
                </a-col>
                <a-col :span="16" class="item-tags">
                    <a-tag color="#2db7f5" closable @close="onDelTakeItem(index, i)" v-for="(user, i) in item.children" :key="user.takeUserID">{{ user.takeUserName }} * {{ user.takePrice }}%</a-tag>

                    <a-button @click="onShowModal(item)" class="item-btn" size="small">添加</a-button>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
                        <a-button type="primary" @click="onSubmit" size="large">保存</a-button>
                    </a-form-item>
                </a-col>
            </a-row>
        </CPannal>
        <TakeLayer v-model:isShow="isShowLayer" :modalType="modalType" :title="modalTitle" @submit="onSubmitTake"></TakeLayer>
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref, watchEffect, onBeforeUnmount } from 'vue';
import CPannal from '@/components/pannel.vue';
import ItemForm from '@/components/itemForm.vue';
import TakeLayer from './takeLayer.vue';
import { orderTypes } from '@/config/appsetting';
import { orderTypeModel } from '../models/wagesinfo';
import { CloseOutlined } from '@ant-design/icons-vue';
import { Button, Col, FormItem, message } from 'ant-design-vue';
import { apiTakeSet } from '@/apis/wages';
export default defineComponent({
    components: {
        CPannal,
        ItemForm,
        TakeLayer,
        Col,
        FormItem,
        Button,
        CloseOutlined,
    },
    props: {
        name: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
        list: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const state = reactive({
            takeList: [],
            orderType: '',
        });

        const dealArr = (arr) => {
            let obj = {};
            let list = [];
            arr.forEach((item, index) => {
                if (!obj[item.takeType]) {
                    obj[item.takeType] = {
                        name: orderTypes[item.takeType],
                        type: item.takeType,
                        index,
                        children: [],
                    };
                }
                obj[item.takeType].children.push(item);
            });
            for (let o in obj) {
                list.push(obj[o]);
            }
            return list;
        };
        const w = watchEffect(() => {
            state.takeList = dealArr(props.list);
        });
        onBeforeUnmount(() => {
            w();
        });

        // 保存提成
        const onSubmit = async () => {
            let isCheck = true;
            console.log('state.takeList :>> ', state.takeList);
            if (state.takeList.length < 1) {
                message.error('请选择并添加提成');
                return false;
            } else {
                state.takeList.forEach((item) => {
                    if (item.children < 1) {
                        message.error(`请添加${item.name}提成`);
                        isCheck = false;
                    }
                });
            }
            if (isCheck) {
                const params = {
                    wagetakes: state.takeList,
                    userid: props.id,
                };
                await apiTakeSet(params);
                message.success('保存成功');
            }
        };

        // 添加提成类型
        const onAddType = () => {
            if (!state.orderType) {
                message.error('请选择提成类型');
                return false;
            } else {
                const len = state.takeList.length;
                const index = state.takeList.findIndex((item) => {
                    return item.type === state.orderType;
                });
                if (index < 0) {
                    state.takeList.push({
                        name: orderTypes[state.orderType],
                        type: state.orderType,
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
            state.takeList.splice(i, 1);
        };
        const onSubmitTake = (info) => {
            state.takeList.forEach((item) => {
                if (item.type === modalType.value) {
                    info.name.forEach((o) => {
                        const d = JSON.parse(o);
                        if (repeatValite(item.children, d)) {
                            item.children.push({
                                takeUserName: d.name,
                                takeUserID: d.id,
                                takePrice: info.take,
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
            state.takeList[index].children.splice(i, 1);
        };

        return {
            ...toRefs(state),
            onSubmit,
            onShowModal,
            onCloseTakeItem,
            onDelTakeItem,
            onAddType,
            onSubmitTake,
            isShowLayer,
            modalTitle,
            modalType,
            orderTypeModel,
        };
    },
});
</script>

<style lang="scss" scoped>
.take-box {
    margin: 0;
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
