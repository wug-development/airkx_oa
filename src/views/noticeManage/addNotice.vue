<template>
    <div class="addnotice-box">
        <DetailForm ref="refDetail" title="添加通知" :formModel="infoNotice" :form="form">
            <template #item="row">
                <template v-if="row.item.name === 'noticeContent'">
                    <div id="div_editor" class="addnotice-box-editor">
                        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
                        <Editor style="height: 500px; overflow-y: hidden" v-model="form['noticeContent']" :defaultConfig="editorConfig" :mode="mode" @onCreated="editorCreated" />
                    </div>
                </template>
                <template v-else>
                    <input type="file" @change="onUpload" />
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
import { defineComponent, reactive, shallowRef, toRefs, onMounted, onBeforeUnmount } from 'vue';
import { infoNotice } from './model/notice';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { message } from 'ant-design-vue';
import { apiUploadUri, apiUploadFile } from '@/apis/utils';
import { apiSaveNotice, apiNoticeInfo } from '@/apis/notices';
import { useRouter, useRoute } from 'vue-router';
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
        const route = useRoute();
        const state = reactive({
            infoNotice,
            defaultContent: [],
            form: {
                noticeContent: '',
                type: 1,
                noticeID: undefined,
            },
        });
        const fileList = reactive([]);

        // 编辑器实例，必须用 shallowRef
        const editorRef = shallowRef();

        onMounted(async () => {
            const { type, id } = route.query;
            if (type) {
                state.form.type = Number(type) || 1;
            }
            if (id) {
                state.form.noticeID = id;
                const res = await apiNoticeInfo(id);
                state.form = res;
                state.defaultContent = res.noticeContent;
            }
        });
        const toolbarConfig = {};
        const editorConfig = { placeholder: '请输入内容...' };

        const editorCreated = (editor) => {
            editorRef.value = editor; // 记录 editor 实例，重要！
        };
        // 组件销毁时，也及时销毁编辑器
        onBeforeUnmount(() => {
            state.infoNotice = [];
            const editor = editorRef.value;
            if (editor == null) return;
            editor.destroy();
        });
        const onChange = (v) => {
            state.form.noticeContent = v.getHtml();
        };

        const onUpload = (e) => {
            const f = new FormData();
            e.target.files.forEach((file) => {
                f.append('files', file, file.name);
            });
            apiUploadFile(f).then((res) => {
                console.log('uploadres', res);
            });
        };
        const refDetail = shallowRef();
        const onSave = async () => {
            await refDetail.value.onSubmit().then(async () => {
                const res: any = await apiSaveNotice(state.form);
                message.success('保存成功');
                onCancel();
            });
        };

        const onCancel = () => {
            router.go(-1);
        };

        return {
            ...toRefs(state),
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
            onChange,
            onUpload,
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
    &-editor {
        border: 1px solid #ccc;
    }
}
</style>
