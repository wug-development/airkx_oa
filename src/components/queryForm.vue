<template>
	<div class="query-form-box">
		<a-form class="ant-advanced-search-form" :form="form" @submit="handleSearch">
			<a-row :gutter="24">
				<a-col v-for="i in 10" :key="i" :span="8" :style="{ display: i < count ? 'block' : 'none' }">
					<a-form-item :label="`Field ${i}`">
						<a-input v-decorator="[
                `field-${i}`,
                {
                  rules: [
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ],
                },
              ]" placeholder="placeholder" />
					</a-form-item>
				</a-col>
			</a-row>
			<a-row>
				<a-col :span="24" :style="{ textAlign: 'right' }">
					<a-button type="primary" html-type="submit">
						Search
					</a-button>
					<a-button :style="{ marginLeft: '8px' }" @click="handleReset">
						Clear
					</a-button>
					<a :style="{ marginLeft: '8px', fontSize: '12px' }" @click="toggle">
						Collapse
						<a-icon :type="expand ? 'up' : 'down'" />
					</a>
				</a-col>
			</a-row>
		</a-form>
	</div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { Form } from 'ant-design-vue'
const useForm = Form.useForm;
export default {
    setup () {
        const modelRef = reactive({
            name: ''
        })
        const { resetFields, validate, validateInfos, mergeValidateInfo } = useForm(modelRef, rulesRef);
        const onSearch = (e: any) => {
            e.preventDefault();
            validate().then(() => {
                console.log('ok')
            }).catch (error => {
                console.log('error', error);
            })
        }

        const expand = ref(false)
        const toggle = () => {
            expand.value = !expand.value;
        }

        return {
            modelRef,
            expand,
            onSearch,
            resetFields
        }
    }
}
</script>

<style lang="scss" scoped>
.query-form-box {
	background-color: #fff;
}
</style>