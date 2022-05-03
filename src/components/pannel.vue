<template>
    <div class="pannel-box">
        <div class="pannel-box-title">
            <div class="pannel-box-title-name">{{ title }}</div>
            <div class="pannel-box-title-subtitle">
                <slot name="subtitle"></slot>
            </div>
        </div>
        <div class="pannel-box-content" :style="{ padding }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        bgColor: {
            type: String,
            default: '#1890ff',
        },
        color: {
            type: String,
            default: '#FFFFFF',
        },
        padding: {
            type: String,
            default: '25px',
        },
        style: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>

<style lang="scss" scoped>
.pannel-box {
    margin-bottom: 25px;
    &-title {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #fff;
        background-color: #1890ff;
        display: flex;
        &-name {
            padding: 0 25px;
        }
        &-subtitle {
            flex: 1;
            position: relative;
        }
    }
    &-content {
        padding: 25px;
        background-color: #fff;
    }
}
</style>
