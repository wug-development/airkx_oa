<template>
    <a-row class="info-table">
        <a-col :span="span" v-for="(item, i) in column" :key="i">
            <a-row class="info-row">
                <a-col :span="6" class="info-label">
                    {{ item.label }}
                </a-col>
                <a-col :span="18">
                    {{ form[item.name] }}
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script>
export default {
    props: {
        form: {
            type: Object,
            default: () => ({}),
        },
        column: {
            type: Array,
            default: () => [],
        },
        span: {
            type: Number,
            default: 8,
        },
    },
};
</script>

<style lang="scss" scoped>
.info-table {
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
