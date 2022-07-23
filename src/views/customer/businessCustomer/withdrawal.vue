<template>
    <div class="custominfo-box">
        <DetailForm ref="refDetail" title="提现申请单" :labelCol="{ flex: '0 0 88px' }" :formModel="infoModel" :form="form">
            <template #subtitle>
                <NavTabs></NavTabs>
            </template>
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
                <a-button type="primary" @click="onSave">确认提交</a-button>
            </div>
        </DetailForm>

        <Pannel :padding="'0'" title="提现纪录">
          <DataList :dataApi="apiGetList" :detaModel="listModel" :showPage="false" rowKey="Row"></DataList>
        </Pannel>
    </div>
</template>

<script lang="ts">
import DetailForm from '@/components/detailForm.vue';
import Pannel from '@/components/pannel.vue';
import DataList from '@/components/dataList.vue';
import { defineComponent, reactive, ref, shallowRef, toRefs } from 'vue';
import { infoModel, listModel } from '../model/withdrawal';
import { useRouter, useRoute } from 'vue-router';
import { apiSave, apiQuery } from '@/apis/customer';
import { apiUploadUri } from '@/apis/utils';
import { message } from 'ant-design-vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { apiGetList } from '@/apis/customerbill';
import NavTabs from '../components/nav-tabs.vue';

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
        NavTabs,
        PlusOutlined,
        LoadingOutlined,
        Pannel,
        DataList
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
        const isShowTab = ref(false);

        const id = route.query.id;
        console.log('id :>> ', id);
        if (id) {
            isShowTab.value = true;
            console.log('eee :>> ', 222);
            apiQuery(id).then((res) => {
                state.form = res;
                if (res['dcScopeOfServices']) {
                    state.form.dcServices = res['dcScopeOfServices'].split(',');
                }
                if (res['dcContactStartDate'] && res['dcContactEndDate']) {
                    state.form.dcContactDate = [res['dcContactStartDate'], res['dcContactEndDate']]
                }
            });
        }

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

        // infoModel[1].options = cityData.provinces.province.map((item) => {
        //     return {
        //         label: item.ssqname,
        //         value: item.ssqname,
        //     };
        // });

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
            listModel,
            refDetail,
            isShowTab,
            onSave,
            onCancel,
            loading,
            imageUrl,
            handleChange,
            fileList,
            apiUploadUri,
            apiGetList,
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
