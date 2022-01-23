<template>
    <div class="addnotice-box">
        <DetailForm ref="refDetail" title="添加通知" :formModel="infoNotice" :form="form">
            <template #item="row">
                <template v-if="row.item.name === 'content'">
                    <div ref="refEditor"></div>
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
        </DetailForm>
    </div>
</template>

<script lang="ts">
import DetailForm from '@/components/detailForm.vue';
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { infoNotice } from './model/notice';
import Editor from 'wangeditor';
import { apiUploadUri } from '@/apis/utils';
export default defineComponent({
    components: {
        DetailForm,
    },
    setup() {
        const form = reactive({});
        const refEditor = ref('');
        let editor: any = '';
        const fileList = reactive([]);

        onMounted(() => {
            console.log('refEditor.value :>> ', refEditor.value);

            editor = new Editor(refEditor.value);
            console.log('editor :>> ', editor);
            editor.create();
        });

        return {
            form,
            infoNotice,
            refEditor,
            fileList,
            apiUploadUri,
        };
    },
});
</script>

<style lang="scss" scoped>
.addnotice-box {
    min-height: 100%;
}
</style>
