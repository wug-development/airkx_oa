<template>
    <div class="cb-tabs">
        <div class="cb-tabs--label" v-if="current !== 'info'" @click="toPage(1)">客户信息</div>
        <div class="cb-tabs--label" v-if="current !== 'order'" @click="toPage(1)">订单列表</div>
        <div class="cb-tabs--label" v-if="current !== 'liushui'" @click="toPage(2)">资金流水</div>
        <div class="cb-tabs--label" v-if="current !== 'person'" @click="toPage(3)">乘机人</div>
        <div class="cb-tabs--label" v-if="current !== 'bill'" @click="toPage(4)">账单下载</div>
        <div class="cb-tabs--label" v-if="current !== 'ticker'" @click="toPage(5)">开发票</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
const paths = {
    0: '/customerinfo',
    1: '/businessOrder',
    2: '/businessBill',
    3: '/businessPerson',
    4: '/businessBillColumn',
    5: '/drawBill',
};
export default {
    props: {
        current: {
            type: String,
            default: '',
        }
    },
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
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
