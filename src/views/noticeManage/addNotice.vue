<template>
    <div class="addnotice-box">
        <DetailForm ref="refDetail" title="添加通知" :formModel="infoNotice" :form="form">
            <template #item="row">
                <div ref="refEditor"></div>
            </template>
        </DetailForm>
    </div>
</template>

<script lang="ts">
import DetailForm from '@/components/detailForm.vue';
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { infoNotice } from './model/notice';
import Editor from 'wangeditor';
export default defineComponent({
    components: {
        DetailForm,
    },
    setup() {
        const form = reactive({});
        const refEditor = ref('');
        let editor: any = '';

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
        };
    },
});
</script>

<style lang="scss" scoped>
.addnotice-box {
    min-height: 100%;
}
</style>
