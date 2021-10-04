<template>
	<div class="salestats-box">
        <SearchForm :dataModel="searchParams" :btnCol="24"></SearchForm>
        <div class="salestats-body">
            <template v-if="isReady">
                <v-chart class="chart" :option="option" />
            </template>
        </div>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, reactive, toRefs } from 'vue';
// echarts
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, LineChart } from 'echarts/charts';
import {
	TitleComponent,
	TooltipComponent,
	LegendComponent,
    GridComponent,
    ToolboxComponent,
    
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
// Compontent
import SearchForm from '@/components/searchForm.vue'
import { searchParams } from './models/salestats'

import bus from '../../utils/bll/bus'

use([
	CanvasRenderer,
	PieChart,
    LineChart,
	TitleComponent,
	TooltipComponent,
	LegendComponent,
    GridComponent,
    ToolboxComponent
]);

export default defineComponent({
	name: 'sale-stats',
	components: {
		VChart,
        SearchForm
	},
	provide: {
		[THEME_KEY]: 'dark',
	},
	setup() {
        const isReady = ref(false)
        const dataModel = reactive({
            searchParams,
            searchDefault: {
                sdate: '',
                edate: ''
            }
        })

        // 初始化默认一年
        const initDate = () => {
            const d = new Date()
            
        }

		bus.$on('searchData', (form: any) => {
			console.log('form1 :>> ', JSON.stringify(form));
		})

		const option = ref({
			// title: {
			// 	text: '折线图堆叠',
			// },
			// legend: {
			// 	data: [
			// 		'邮件营销',
			// 		'联盟广告',
			// 		'视频广告',
			// 		'直接访问',
			// 		'搜索引擎',
			// 	],
			// },
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true,
			},
			toolbox: {
				feature: {
					saveAsImage: {
						type: 'jpg',
						name: '销售统计',
						title: ''
					},
				},
			},
			tooltip: {
				trigger: 'axis',
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			},
			yAxis: {
				type: 'value',
			},
			series: [
				{
					name: '邮件营销',
					type: 'line',
					stack: '总量',
					data: [120, 132, 101, 134, 90, 230, 210],
				},
				{
					name: '联盟广告',
					type: 'line',
					stack: '总量',
					data: [220, 182, 191, 234, 290, 330, 310],
				},
				{
					name: '视频广告',
					type: 'line',
					stack: '总量',
					data: [150, 232, 201, 154, 190, 330, 410],
				},
				{
					name: '直接访问',
					type: 'line',
					stack: '总量',
					data: [320, 332, 301, 334, 390, 330, 320],
				},
				{
					name: '搜索引擎',
					type: 'line',
					stack: '总量',
					data: [820, 932, 901, 934, 1290, 1330, 1320],
				},
			],
		});

        onMounted(() => {
            isReady.value = true
        })

		return { 
            option, 
            isReady,
            ...toRefs(dataModel),
        };
	},
});
</script>

<style lang="scss" scoped>
.salestats-box {
	min-height: 100%;
    .salestats-body{
        background-color: #ffffff;
    }
	.chart {
		max-width: 100%;
		height: 400px;
	}
}
</style>