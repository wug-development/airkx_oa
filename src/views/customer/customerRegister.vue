<template>
    <div class="custominfo-box">
        <DetailForm ref="refDetail" title="客户信息" :labelCol="{ flex: '0 0 88px' }" :formModel="infoModel" :form="form">
            <template #item="item">
                <div v-if="item.item.name === 'dcBusinesslicense'">
                    <a-upload
                        v-model:file-list="fileList"
                        name="avatar"
                        list-type="picture-card"
                        class="avatar-uploader"
                        :show-upload-list="false"
                        :action="apiUploadUri"
                        @change="handleChange"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="yyzz-img" alt="avatar" />
                        <div v-else>
                            <loading-outlined v-if="loading"></loading-outlined>
                            <plus-outlined v-else></plus-outlined>
                            <div class="ant-upload-text">上传</div>
                        </div>
                    </a-upload>
                </div>
            </template>
            <div class="info-box--btn">
                <a-button type="primary" @click="onSave">保 存</a-button>
                <a-button @click="onCancel">取 消</a-button>
            </div>
        </DetailForm>
    </div>
</template>

<script lang="ts">
import DetailForm from '@/components/detailForm.vue';
import { defineComponent, reactive, ref, shallowRef, toRefs } from 'vue';
import { infoModel } from './model/index';
import { useRouter, useRoute } from 'vue-router';
import { apiSave, apiQuery } from '@/apis/customer';
import { apiUploadUri } from '@/apis/utils';
import { message } from 'ant-design-vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';

interface formItem {
    dcContactDate?: String[],
    dcServices?: String[],
    dcBusinesslicense: string
}
interface dataForm {
    form: formItem
}

export default defineComponent({
    components: {
        DetailForm,
        PlusOutlined,
        LoadingOutlined
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive<dataForm>({
            form: {
                dcContactDate: [],
                dcServices: [],
                dcBusinesslicense: ''
            },
        });
        const fileList = ref([]);
        const refDetail = shallowRef();

        const onCancel = () => {
            router.go(-1);
        };

        const onSave = async () => {
            await refDetail.value.onSubmit();
            if (state.form.dcContactDate && state.form.dcContactDate.length > 1) {
                state.form['dcContactStartDate'] = state.form.dcContactDate[0];
                state.form['dcContactEndDate'] = state.form.dcContactDate[1];
            } else {
                state.form['dcContactStartDate'] = '';
                state.form['dcContactEndDate'] = '';
            }
            if (state.form.dcServices && state.form.dcServices.length) {
                state.form['dcScopeOfServices'] = state.form.dcServices.join(',');
            } else {
                state.form['dcScopeOfServices'] = '';
            }
            console.log('state.form :>> ', state.form);
            await apiSave(state.form);
            message.success('保存成功');
            onCancel();
        };


        interface FileItem {
            uid: string;
            name?: string;
            status?: string;
            response?: string;
            url?: string;
            type?: string;
            size: number;
            originFileObj: any;
        }

        interface FileInfo {
            file: FileItem;
            fileList: FileItem[];
        }

        function getBase64(img: Blob, callback: (base64Url: string) => void) {
            const reader = new FileReader();
            reader.addEventListener('load', () => callback(reader.result as string));
            reader.readAsDataURL(img);
        }

        const loading = ref<boolean>(false);
        const imageUrl = ref<string>('');

        const handleChange = (info: FileInfo) => {
            if (info.file.status === 'uploading') {
                loading.value = true;
                return;
            }
            if (info.file.status === 'done') {
                console.log('info.file.originFileObj :>> ', info.file.originFileObj);
                state.form['dcBusinesslicense'] = info.file.originFileObj.name;
                getBase64(info.file.originFileObj, (base64Url: string) => {
                    imageUrl.value = base64Url;
                    loading.value = false;
                });
            }
            if (info.file.status === 'error') {
                loading.value = false;
                message.error('upload error');
            }
        };

        return {
            ...toRefs(state),
            infoModel,
            refDetail,
            onSave,
            onCancel,
            loading,
            imageUrl,
            handleChange,
            fileList,
            apiUploadUri,
        };
    },
});
</script>

<style lang="scss" scoped>
.custominfo-box {
    min-height: 100%;
    &--btn {
        padding-left: 20%;
    }
}
.yyzz-img {
    max-width: 140px;
    max-height: 100px;
}
</style>
