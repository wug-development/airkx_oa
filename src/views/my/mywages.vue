<template>
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
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { wagelistmodel } from './model/wages';
import { apiWages } from '@/apis/wages';
import WageInfo from './components/wageinfo.vue';
export default defineComponent({
    components: {
        WageInfo,
    },
    setup() {
        const ls = wagelistmodel();
        const state = reactive({
            dataList: [],
            listmodel: ls,
            months: ls.slice(1, ls.length - 1),
        });

        // const dealArr = (arr) => {
        //     const obj = {};
        //     const list = [];
        //     arr.forEach((item) => {
        //         if (!obj[item.year]) {
        //             obj[item.year] = [];
        //         }
        //         obj[item.year].push(item);
        //     });
        //     for (let o in obj) {
        //         const json = {
        //             year: o,
        //             data: obj[o],
        //         };
        //         list.push(json);
        //     }
        //     return list;
        // };
        const dealArr = (arr) => {
            const obj = {};
            const years = [];
            arr.forEach((item) => {
                obj[item.year + item.month] = item;
                if (!years.includes(item.year)) {
                    years.push(item.year);
                }
            });
            console.log('years :>> ', years);
            const list = [];
            for (let year in years) {
                const json = {
                    year: years[year],
                    data: [],
                };
                console.log('json :>> ', json);
                for (let j = 1; j <= 12; j++) {
                    if (obj['' + years[year] + j]) {
                        json.data.push(obj['' + years[year] + j]);
                    } else {
                        json.data.push({
                            tip: '未获得',
                        });
                    }
                }
                list.push(json);
            }
            console.log('list :>> ', list);
            return list;
        };

        const userinfo = JSON.parse(localStorage.getItem('user'));
        userinfo.id = 'user5B292A6A7C0B4DA9AD9BC1B294F5B429';

        apiWages(userinfo.id).then((res) => {
            const arr = [];
            const obj = res[0];
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
            apiWages,
            ...toRefs(state),
        };
    },
});
</script>

<style lang="scss" scoped>
.mywages-box {
    background-color: #fff;
    min-height: 100%;
    overflow-x: auto;
    &__table {
        width: 100%;
        min-width: 1200px;
        text-align: center;
        thead td {
            height: 50px;
            color: #fff;
            background-color: rgba(0, 146, 255, 0.75);
        }
        tbody td {
            height: 50px;
        }
        &--year {
            font-weight: bold;
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
</style>
