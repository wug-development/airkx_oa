<template>
    <div class="cb-tabs">
        <div class="cb-tabs--label" @click="toPage(1)">订单列表</div>
        <div class="cb-tabs--label" @click="toPage(2)">资金流水</div>
        <div class="cb-tabs--label" @click="toPage(1)">乘机人</div>
        <div class="cb-tabs--label" @click="toPage(1)">账单下载</div>
        <div class="cb-tabs--label" @click="toPage(1)">开发票</div>
        <div class="cb-tabs--label" @click="toPage(1)">提现</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
const paths = {
    1: '/',
    2: '/businessBill',
};
export default {
    setup() {
        const router = useRouter();

        const toPage = key => {
            router.push({
                path: paths[key]
            })
        }

        return {
            toPage
        }
    }
}
</script>

<style lang="scss" scoped>
.cb-tabs {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    &--label {
        padding: 0 10px;
        font-size: 14px;
        cursor: pointer;
    }
}
</style>
