<template>
  <div class="column-list">
    <Pannel :padding="'0'" title="账单下载">
      <template #subtitle>
        <NavTabs></NavTabs>
      </template>
      <div class="column-list--search">
        <a-form class="ant-advanced-search-form" ref="searchRef" :model="form" @submit="onSearch">
          <a-form-item label="设置账单显示字段" name="column">
            <a-checkbox-group v-model:value="form.column" :options="searchOption" />
          </a-form-item>
          <a-row :gutter="24">
            <a-col :span="8">
              <a-form-item label="选择账单日期" name="date">
                <a-range-picker v-model:value="form.date" :locale="locale" :valueFormat="'YYYY-MM-DD HH:mm:ss'" />
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <a-button type="primary" @click="onSearch"> 搜索 </a-button>
            </a-col>
          </a-row>
        </a-form>
        <DataList :dataApi="apiGetList" :dealList="dealList" :detaModel="listModel" :showPage="false" rowKey="Row"></DataList>
        <div class="total--info">
          <a-button type="primary" @click="onExport"> 导出 </a-button>
          <span class="total--info__item">订单数量：{{ order.num }}</span>
          <span class="total--info__item">票价：{{ order.ticketPrice }}元</span>
          <span class="total--info__item">折扣：{{ order.distinct }}元</span>
          <span class="total--info__item">机建燃油：{{ order.oil }}元</span>
          <span class="total--info__item">服务费：{{ order.servicePrice }}元</span>
          <span class="total--info__item">合计：{{ order.total }}元</span>
        </div>
      </div>
    </Pannel>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import NavTabs from '../components/nav-tabs.vue';
import DataList from '@/components/dataList.vue';
import SearchForm from '@/components/searchForm.vue';
import Pannel from '@/components/pannel.vue';
import { searchModel } from '../model/bill';
import { apiGetList, apiDel } from '@/apis/customerbill';
export default defineComponent({
  components: {
    NavTabs,
    DataList,
    Pannel,
    SearchForm
  },
  setup() {
    const search = reactive({
      form: {
        column: [],
        date: []
      },
      listModel: [],
      order: {
        num: 0,
        ticketPrice: 0,
        distinct: 0,
        oil: 0,
        servicePrice: 0,
        total: 0,
      },
    });
    search.listModel = searchModel('key', 'title');
    const searchOption = searchModel('value', 'label');
    const dealList = (list) => {
      return list;
    }

    // 导出
    const onExport = () => { };

    return {
      locale,
      searchOption,
      ...toRefs(search),
      apiGetList,
      apiDel,
      dealList,
      onExport,
    }
  }
})
</script>

<style lang="scss" scoped>
.column-list {
  min-height: 100%;
  &--search {
    padding: 20px;
  }
}
.pannel-box {
  margin: 0;
}
.total--info {
  padding-top: 15px;
  &__item {
    margin-right: 40px;
  }
}
</style>
