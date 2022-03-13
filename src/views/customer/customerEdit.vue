<template>
    <div class="custominfo-box">
        <DetailForm ref="refDetail" title="客户信息" :formModel="infoModel" :form="form">
            <div class="info-box--btn">
                <a-button type="primary" @click="onSave">保 存</a-button>
                <a-button @click="onCancel">取 消</a-button>
            </div>
        </DetailForm>
    </div>
</template>

<script lang="ts">
import DetailForm from '@/components/detailForm.vue';
import { defineComponent, reactive, ref, toRefs } from 'vue';
import { infoModel } from './model/index';
import { useRouter, useRoute } from 'vue-router';
import { apiSave, apiQuery } from '@/apis/customer';
import { message } from 'ant-design-vue';
import cityData from '@/utils/tool/city.json';
export default defineComponent({
    components: {
        DetailForm,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
            form: {},
        });
        const refDetail = ref();

        const id = route.query.id;

        if (id) {
            apiQuery(id).then((res) => {
                state.form = res;
            });
        }

        const onCancel = () => {
            router.go(-1);
        };

        const onSave = async () => {
            await refDetail.value.onSubmit();
            if (!state.form['KHXSY']) {
                const user = localStorage.getItem('user');
                if (user) {
                    state.form['KHXSY'] = JSON.parse(user).uname;
                }
            }
            await apiSave(state.form);
            message.success('保存成功');
            onCancel();
        };

        infoModel[1].options = cityData.provinces.province.map((item) => {
            return {
                label: item.ssqname,
                value: item.ssqname,
            };
        });

        return {
            ...toRefs(state),
            infoModel,
            refDetail,
            onSave,
            onCancel,
        };
    },
});
</script>

<style lang="scss" scoped>
.info-box {
    min-height: 100%;
    &--btn {
        padding-left: 20%;
    }
}
</style>
