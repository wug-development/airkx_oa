<template>
    <div class="personal-info-box">
        <MyGrid :column="infoNotice" :form="form" />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onBeforeMount } from 'vue';
import { apiPersonalInfo } from '@/apis/user';
import { infoNotice } from './model/info';
import MyGrid from '@/components/myGrid.vue';
export default defineComponent({
    components: {
        MyGrid,
    },
    setup() {
        const state = reactive({
            form: {},
        });

        onBeforeMount(async () => {
            const res = await apiPersonalInfo();
            state.form = res[0];
        });

        return {
            ...toRefs(state),
            infoNotice,
        };
    },
});
</script>

<style lang="scss" scoped>
.personal-info-box {
    background-color: #fff;
    min-height: 100%;
    padding: 25px;
    .info-label {
        text-align: right;
        &::after {
            content: '：';
        }
    }
    .info-row {
        height: 50px;
        line-height: 50px;
    }
}
</style>
