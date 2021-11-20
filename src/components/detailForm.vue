<template>
    <Pannel :title="title">
        <a-form ref="formRef" :model="form" :label-col="labelCol" :layout="layout" :wrapper-col="wrapperCol">
            <a-row>
                <template v-for="item of formModel">
                    <template v-if="item.children">
                        <template v-for="sub of item.children">
                            <!-- :name="[item.name, sub.name]" -->
                            <a-col :span="item.col || 24">
                                <ItemForm :item="sub" v-model:value="form[item.name][sub.name]" :disabled="disabled || sub.disabled">
                                    <template #item="item">
                                        <slot :item="item"></slot>
                                    </template>
                                </ItemForm>
                            </a-col>
                        </template>
                    </template>
                    <template v-else>
                        <a-col :span="item.col || 24">
                            <ItemForm :item="item" v-model:value="form[item.name]" :disabled="disabled || item.disabled">
                                <template #item="item">
                                    <slot name="item" :item="item.item"></slot>
                                </template>
                            </ItemForm>
                        </a-col>
                    </template>
                </template>
            </a-row>
            <slot></slot>
		</a-form>
        <template #subtitle>
            <slot name="subtitle"></slot>
        </template>
    </Pannel>
</template>

<script lang="ts">
import Pannel from '@/components/pannel.vue'
import ItemForm from '@/components/itemForm.vue'
import { Form, Row, Col } from 'ant-design-vue'
import { ref } from 'vue'
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        formModel: {
            type: Array,
            default: () => ([])
        },
        form: {
            type: Object,
            default: () => {}
        },
        layout: {
            type: String,
            default: 'horizontal'
        },
        labelCol: {
            type: Object,
            default: () => {
                return { span: 4 }
            }
        },
        wrapperCol: {
            type: Object,
            default: () => {
                return { span: 14 }
            }
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Pannel,
        ItemForm,
        Form,
        Row,
        Col
    },
    setup () {
        const formRef = ref()
        const onSubmit = async () => {
            return await new Promise((resolve, reject) => {
                formRef.value.validate().then(() => {
                    console.log('111 :>> ', 111);
                    resolve(true)
                }).catch((error: any) => {
                    console.log('error', error);
                });
            })
        }

        return {
            onSubmit,
            formRef
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep(.ant-form){
    .ant-form-item {
        margin-bottom: 32px;
    }
    .ant-form-item-with-help {
        margin-bottom: 0px;
    }
    .ant-form-item-explain {
        min-height: 32px;
    }
    // .ant-input, .ant-select, .ant-select-selector, .ant-select-selection-item{
    //     height: 40px;
    //     line-height: 40px;
    // }
    // .ant-form-item-label label{
    //     height: 40px;
    //     line-height: 40px;
    // }
    // .ant-select-selection-item:nth-child(1){
    //     color: #111;
    // }
    .ant-calendar-picker{
        width: 100%;
    }
}
</style>