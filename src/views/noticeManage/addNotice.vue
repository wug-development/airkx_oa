<template>
    <div class="addnotice-box">
        <DetailForm ref="refDetail" title="添加通知" :formModel="infoNotice" :form="form">
            <template #item="row">
                <div id="fwb"></div>
            </template>
        </DetailForm>
    </div>
</template>

<script lang="ts">
import DetailForm from '@/components/detailForm.vue'
import { defineComponent, reactive } from 'vue'
import { infoNotice } from './model/notice'
import Editor from 'wangeditor'
export default defineComponent({
    components: {
        DetailForm
    },
    setup() {
        const form = reactive({});

        

        return {
            form,
            infoNotice
        }
    },
    onMounted() {
        const editor = new Editor('#fwb');
        editor.create();
    },
})
</script>

<style lang="scss" scoped>
.addnotice-box{
    min-height: 100%;
}
</style>