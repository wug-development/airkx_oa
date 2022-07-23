<template>
    <div class="cb-tabs">
        <div class="cb-tabs--label" v-if="current !== 'info'" @click="toPage(1)">客户信息</div>
        <div class="cb-tabs--label" v-if="current !== 'order'" @click="toPage(2)">订单列表</div>
        <div class="cb-tabs--label" v-if="current !== 'person'" @click="toPage(3)">乘机人</div>
        <div class="cb-tabs--label" v-if="current !== 'recommend'" @click="toPage(4)">推荐好友</div>
        <div class="cb-tabs--label" v-if="current !== 'ticker'" @click="toPage(5)">开发票</div>
        <div class="cb-tabs--label" v-if="current !== 'sms'" @click="toPage(6)">短信记录</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
const paths = {
    1: '/pcustomerinfo',
    2: '/pcustomerOrder',
    3: '/pcustomerPerson',
    4: '/pcustomerRcommend',
    5: '/pcustomerDrawBill',
    6: '/pcustomerSMS',
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
