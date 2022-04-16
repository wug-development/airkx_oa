<template>
    <div class="addnotice-box">
        <DetailForm ref="refDetail" title="添加通知" :formModel="infoNotice" :form="form">
            <template #item="row">
                <template v-if="row.item.name === 'noticeContent'">
                    <div id="div_editor" class="addnotice-box-editor"></div>
                    <Toolbar class="addnotice-box-etool" editorId="div_editor" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
                    <Editor class="addnotice-box-ebox" editorId="div_editor" v-model="form.noticeContent" :defaultConfig="editorConfig" :mode="mode" @onCreated="editorCreated" />
                </template>
                <template v-else>
                    <a-upload :action="apiUploadUri" v-model:file-list="fileList">
                        <a-button>
                            <upload-outlined></upload-outlined>
                            上传
                        </a-button>
                    </a-upload>
                </template>
            </template>
            <div class="info-box--btn">
                <a-row>
                    <a-col :span="4"></a-col>
                    <a-col>
                        <a-button type="primary" size="large" @click="onSave">保 存</a-button>
                        <a-button size="large" @click="onCancel">取 消</a-button>
                    </a-col>
                </a-row>
            </div>
        </DetailForm>
    </div>
</template>

<script lang="ts">
import '@wangeditor/editor/dist/css/style.css';
import DetailForm from '@/components/detailForm.vue';
import { defineComponent, reactive, shallowRef, ref, onMounted, onBeforeUnmount } from 'vue';
import { infoNotice } from './model/notice';
import { Editor, Toolbar } from '@/components/cEditor';
import { message } from 'ant-design-vue';
import { apiUploadUri, apiUploadFile } from '@/apis/utils';
import { apiSaveNotice } from '@/apis/notices';
import { useRouter } from 'vue-router';
import { UploadOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: {
        DetailForm,
        UploadOutlined,
        Editor,
        Toolbar,
    },
    setup() {
        const router = useRouter();
        const form = reactive({
            noticeContent: '',
        });
        const fileList = reactive([]);

        // 编辑器实例，必须用 shallowRef
        const editorRef = shallowRef();

        // 内容 HTML
        onMounted(() => {});
        const toolbarConfig = {};
        const editorConfig = { placeholder: '请输入内容...' };

        const editorCreated = (editor) => {
            editorRef.value = editor; // 记录 editor 实例，重要！
        };
        // 组件销毁时，也及时销毁编辑器
        onBeforeUnmount(() => {
            const editor = editorRef.value;
            if (editor == null) return;
            editor.destroy();
        });

        // const onUpload = () => {
        //     apiUploadFile().then((res) => {
        //         console.log('uploadres', res);
        //     });
        // };
        const refDetail = ref('');
        const onSave = async () => {
            await refDetail.value.onSubmit().then(async () => {
                const res: any = await apiSaveNotice(form);
                message.success('保存成功');
                onCancel();
            });
        };

        const onCancel = () => {
            router.go(-1);
        };

        return {
            form,
            infoNotice,
            editorRef,
            fileList,
            apiUploadUri,
            refDetail,
            onSave,
            onCancel,
            editorCreated,
            editorConfig,
            toolbarConfig,
            mode: 'default',
            // onUpload,
        };
    },
});
</script>

<style lang="scss" scoped>
.addnotice-box {
    min-height: 100%;
    &-ebox {
        border: 1px solid #ccc;
        height: 360px !important;
        overflow-y: auto;
    }
    &-etool {
        border: 1px solid #ccc;
        border-bottom: 0 !important;
    }
}
</style>
