<template>
	<div class="query-form-box">
		<a-form class="ant-advanced-search-form" ref="searchRef" :model="form" @submit="onSearch">
			<a-row :gutter="24">
				<a-col v-for="(item, i) in dataModel" :key="i" :span="8" :style="{ display: i < count ? 'block' : 'none' }">
					<a-form-item :label="item.label" :rules="item.rules" :name="item.name">
                        <a-range-picker @change="item.onChange || (() => {})" v-if="item.type==='date'" />
						<a-select :placeholder="item.placeholder" v-model:value="form[item.name]" v-else-if="item.type === 'select'">
                            <a-select-option value="">全部</a-select-option>
                            <template v-for="({value, label}, i) in item.options" :key="i">
                                <a-select-option :value="value">{{label}}</a-select-option>
                            </template>
                        </a-select>
						<a-input :placeholder="item.placeholder" v-model:value="form[item.name]" v-else/>
					</a-form-item>
				</a-col>
			</a-row>
			<a-row>
				<a-col :span="24" :style="{ textAlign: 'right' }">
					<a-button type="primary" html-type="submit">
						搜索
					</a-button>
					<a-button :style="{ marginLeft: '8px' }" @click="onReset">
						重置
					</a-button>
					<a class="query-form-box-toggle" @click="toggle">
						{{expand? '收起' : '高级搜索'}}
                        <UpOutlined v-if="expand" />
                        <DownOutlined v-else />
					</a>
				</a-col>
			</a-row>
		</a-form>
	</div>
</template>

<script lang="ts">
import { reactive, ref, computed } from 'vue'
import {
    UpOutlined,
    DownOutlined
} from '@ant-design/icons-vue';
export default {
    components: {
        UpOutlined,
        DownOutlined
    },
    props: {
        dataModel: {
            type: Object,
            default: () => ({})
        },
        maxShow: {
            type: Number,
            default: 0
        }
    },
    setup (props) {
        // 表单ref
        const searchRef = ref()

        // 表单内容
        const form = reactive({})

        // 搜索
        const onSearch = (e: any) => {
            searchRef.value.validate().then(() => {
                console.log('ok')
            }).catch ((error: any) => {
                console.log('error', error);
            })
        }

        // 重置
        const onReset = () => {}

        // 打开关闭更多搜索
        const expand = ref(false)
        const toggle = () => {
            expand.value = !expand.value;
        }

        // 控制最大显示数量
        const count = computed(() => {
            return expand.value? props.dataModel.length : (props.maxShow? props.maxShow : props.dataModel.length)
        })

        return {
            form,
            expand,
            onSearch,
            onReset,
            searchRef,
            toggle,
            count,
        }
    }
}
</script>

<style lang="scss" scoped>
.query-form-box {
	background-color: #fff;
    padding: 25px;
    &-toggle{
        margin-left: 8px;
        font-size: 14px;
        width: 80px;
        display: inline-block;
        text-align: left;
    }
}
</style>