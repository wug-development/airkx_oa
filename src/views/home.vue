<template>
	<div class="home-box">
		<div class="home-box-card">
			<a-card hoverable class="home-box-card-item" @click="toPage(1)">
				<img slot="cover" alt="example" src="@/assets/images/manage.png" />
				<a-card-meta title="凯行网后台管理系统"></a-card-meta>
			</a-card>
			<a-card hoverable class="home-box-card-item" @click="toPage(2)">
				<img slot="cover" alt="example" src="@/assets/images/cp.png" />
				<a-card-meta title="企业预定后台"></a-card-meta>
			</a-card>
			<a-card hoverable class="home-box-card-item" @click="toPage(3)">
				<img slot="cover" alt="example" src="@/assets/images/gj.png" />
				<a-card-meta title="国际出票系统"></a-card-meta>
			</a-card>
			<a-card hoverable class="home-box-card-item" @click="toPage(4)">
				<img slot="cover" alt="example" src="@/assets/images/gn.png" />
				<a-card-meta title="国内出票系统"></a-card-meta>
			</a-card>
			<a-card hoverable class="home-box-card-item" @click="toPage(5)">
				<img slot="cover" alt="example" src="@/assets/images/zc.jpg" />
				<a-card-meta title="支出管理系统"></a-card-meta>
			</a-card>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { Card, CardMeta } from 'ant-design-vue/es'
export default defineComponent({
    // components: {
    //     Card,
    //     CardMeta
    // },
	setup() {
        const toPage = (v: number) => {
            let _url = ''
            switch (v) {
                case 1: _url = 'http://www.airkx.com/manage/'; break;
                case 2: _url = 'http://cp.airkx.cn/'; break;
                case 3: _url = 'http://gj.airkx.cn/Main.aspx'; break;
                case 4: _url = 'http://gn.airkx.cn/Main.aspx'; break;
                case 5: _url = 'http://zc.airkx.cn/Main.aspx'; break;
            }
            _url && window.open(_url)
        }

        return {
            toPage
        }
	},
});
</script>

<style lang="scss" scoped>
.home-box {
	min-height: 100%;
	background-color: #fff;
    &-card{
        padding: 25px 0;
        display: flex;
        flex-wrap: wrap;
        &-item{
            width: 240px;
            margin: 0 0 25px 25px;
            img{
                display: block;
                width: 190px;
                height: 190px;
            }
            .ant-card-meta{
                margin: 0;
                padding-top: 20px;
                text-align: center;
            }
        }
    }
}
</style>