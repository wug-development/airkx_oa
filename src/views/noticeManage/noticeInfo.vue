<template>
    <div class="notice-info-box">
        <div class="notice-info-box__back" @click="toBack"><LeftOutlined /> 返回</div>
        <div class="notice-info-box--title">{{ info.noticeTitle }}</div>
        <div class="notice-info-box--date">发布日期：{{ formatDate(info.createTime) }}</div>
        <div class="notice-info-box--content" v-html="info.noticeContent"></div>
        <div class="notice-info-box--fj"><a :href="info.noticeAnnexPath">查看附件</a></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { apiNoticeInfo } from '@/apis/notices';
import { LeftOutlined } from '@ant-design/icons-vue';
import { formatDate } from '@/utils/tool/utils';
export default defineComponent({
    components: {
        LeftOutlined,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const state = reactive({
            info: {},
        });

        onBeforeMount(async () => {
            const id = route.query.id;
            const res = await apiNoticeInfo(id);
            state.info = res;
        });

        const toBack = () => {
            router.go(-1);
        };

        return {
            ...toRefs(state),
            formatDate,
            toBack,
        };
    },
});
</script>

<style lang="scss">
.notice-info-box {
    min-height: 100%;
    background-color: #fff;
    padding: 0 60px;
    box-sizing: border-box;
    position: relative;
    &--title {
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        height: 50px;
        line-height: 50px;
    }
    &--date {
        text-align: center;
        color: #999;
        font-size: 14px;
        height: 32px;
        line-height: 32px;
    }
    &--content {
        word-break: break-all;
        max-width: 100%;
        overflow: hidden;
        padding: 30px 0;
    }
    &--fj {
        margin-top: 30px;
    }
    &__back {
        position: absolute;
        left: 30px;
        top: 20px;
        font-size: 16px;
        color: #40a9ff;
        cursor: pointer;
    }
}
</style>
