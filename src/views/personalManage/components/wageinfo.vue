<template>
    <div class="wageinfo-box">
        <a-row v-for="(item, i) in datalist" :key="i">
            <a-col class="wageinfo-box-label" :span="12">{{ item.name }}</a-col>
            <a-col class="wageinfo-box-content" :span="12">{{ item.fix }}{{ info[item.key] }}</a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
const list = [
    { key: 'baseWage', name: '基本工资' },
    { key: 'subsidy', name: '补助' },
    { key: 'socialSecurity', name: '保险' },
    { key: 'publicFunds', name: '公积金' },
    { key: 'deduction', name: '扣款', fix: '-' },
    { key: 'fullAttendenceReward', name: '全勤奖' },
    { key: 'tax', name: '个税' },
];
import { computed } from 'vue';
export default {
    props: {
        info: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        const datalist = computed(() => {
            return list.filter((item) => {
                return props.info[item.key] > 0;
            });
        });

        return {
            list,
            datalist,
        };
    },
};
</script>

<style lang="scss" scoped>
.wageinfo-box {
    background-color: #fff;
    width: 160px;
    &-label {
        color: #333;
        text-align: right;
        &::after {
            content: '：';
        }
    }
    &-content {
        color: #999;
    }
}
</style>
