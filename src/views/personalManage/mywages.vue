<template>
    <div class="mywages-info">
        <Pannel title="工资组成">
            <MyGrid :column="infoWage" :form="form" />
            <div class="mywages-info-take">
                <div class="mywages-info-take-row" v-for="(item, i) in take" :key="i">
                    <div class="mywages-info-take-row-label">{{ item.typename }}</div>
                    <div class="mywages-info-take-row-content">
                        <a-tag color="#108ee9" v-for="(t, index) in item.takes" :key="index"> {{ t.takeUserName }} {{ t.takePrice }}% </a-tag>
                    </div>
                </div>
            </div>
        </Pannel>
        <Pannel title="我的工资" padding="0">
            <div class="mywages-box">
                <table class="mywages-box__table" rowspan="1">
                    <thead>
                        <td v-for="(item, i) in listmodel" :key="i">{{ item.title }}</td>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in dataList" :key="index">
                            <td class="mywages-box__table--year">{{ item.year }}</td>
                            <td v-for="(month, i) in item.data" :key="i">
                                <template v-if="month.wageID">
                                    <a-popover placement="right">
                                        <template #content>
                                            <WageInfo :info="month"></WageInfo>
                                        </template>
                                        <template #title>
                                            <span>{{ `${item.year}年${month.month}月工资明细` }}</span>
                                        </template>
                                        <span class="mywages-box__wages">{{ month.netpayment }}</span>
                                    </a-popover>
                                </template>
                                <span class="mywages-box__tip" v-else> {{ month.tip }} </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Pannel>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onBeforeMount } from 'vue';
import Pannel from '@/components/pannel.vue';
import MyGrid from '@/components/myGrid.vue';
import { infoWage, dealArr, wagelistmodel } from './model/wages';
import { apiMyWagesInfo, apiWages } from '@/apis/wages';
import { orderTypes } from '@/config/appsetting';
import WageInfo from './components/wageinfo.vue';
export default defineComponent({
    components: {
        Pannel,
        MyGrid,
        WageInfo,
    },
    setup() {
        const state = reactive({
            form: {},
            take: [],
            dataList: [],
            listmodel: wagelistmodel(),
        });

        onBeforeMount(async () => {
            const res = await apiMyWagesInfo();
            state.form = res.info;
            // 提成数据
            if (res.take && res.take.length) {
                const takes = {};
                res.take.forEach((item) => {
                    if (!takes[item.takeType]) {
                        takes[item.takeType] = [];
                    }
                    takes[item.takeType].push(item);
                });
                for (let obj in takes) {
                    state.take.push({
                        typename: orderTypes[obj],
                        takes: takes[obj],
                    });
                }
            }

            const result = await apiWages();
            const arr = [];
            const obj = result[0];
            for (let i = 1; i <= 12; i++) {
                const json = JSON.parse(JSON.stringify(obj));
                if (i > 3) {
                    json.year = '2021';
                }
                json.month = i;
                arr.push(json);
            }
            state.dataList = dealArr(arr);
            console.log('state.dataList :>> ', state.dataList);
        });

        return {
            infoWage,
            ...toRefs(state),
        };
    },
});
</script>

<style lang="scss" scoped>
.mywages-info {
    min-height: 100%;
    &-take {
        margin-top: 5px;
        &-row {
            height: 50px;
            line-height: 50px;
            display: flex;
            &-label {
                width: 8.25%;
                text-align: right;
                &::after {
                    content: '：';
                }
            }
            &-content {
                flex: 1;
            }
        }
    }
    .mywages-box {
        width: 100%;
        overflow-x: auto;
        border: 1px solid #ccc;
        border-top: 0;
        &__table {
            width: 100%;
            min-width: 1200px;
            text-align: center;
            thead td {
                height: 50px;
                color: #000000;
                font-weight: bold;
                background-color: #f0f2f5;
            }
            tbody td {
                height: 50px;
            }
            &--year {
                font-weight: bold;
                width: 100px;
            }
        }
        &__wages {
            font-weight: bold;
            color: rgba(0, 146, 255, 0.75);
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
        &__tip {
            color: #666;
        }
    }
}
</style>
