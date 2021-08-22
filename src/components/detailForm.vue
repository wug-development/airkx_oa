<template>
    <Pannel :title="title">
        <a-form ref="formRef" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
			<template v-for="item of formModel">
                <template v-if="item.children">
                    <template v-for="sub of item.children">
                        <a-form-item :label="sub.label" :rules="sub.rules" :name="[item.name, sub.name]">
                            <a-input v-model:value="form[item.name][sub.name]" />
                        </a-form-item>
                    </template>
                </template>
                <template v-else>
                    <a-form-item :label="item.label" :rules="item.rules" :name="item.name">
                        <a-input v-model:value="form[item.name]" />
                    </a-form-item>
                </template>
            </template>
            <slot></slot>
		</a-form>
    </Pannel>
</template>

<script>
import Pannel from '@/components/pannel.vue'
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
        }
    },
    components: {
        Pannel
    },
    setup () {
        const formRef = ref()
        const onSubmit = async () => {
            return await new Promise((resolve, reject) => {
                formRef.value.validate().then(() => {
                    console.log('111 :>> ', 111);
                    resolve(true)
                }).catch((error) => {
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
    .ant-btn {
        padding: 0 50px;
    }
    .ant-input{
        height: 40px;
        line-height: 40px;
    }
    .ant-form-item-label label{
        height: 40px;
        line-height: 40px;
    }
}
</style>