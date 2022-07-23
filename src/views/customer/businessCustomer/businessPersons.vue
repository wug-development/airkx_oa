<template>
  <div class="bb-box">
    <Pannel :padding="'0'" title="乘机人">
      <template #subtitle>
        <div class="bb-box--tabs">
          <NavTabs current="person"></NavTabs>
        </div>
      </template>
      <DataList :dataApi="apiGetList" :detaModel="listModel" rowKey="Row">
        <template #action="record">
          <a-button type="primary" @click="edit(record)">编辑</a-button>
          <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="del(record)">
            <template #title>
              <p>确定要删除该乘机人吗？</p>
            </template>
            <a-button type="primary" danger>删除</a-button>
          </a-popconfirm>
        </template>
      </DataList>
    </Pannel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavTabs from '../components/nav-tabs.vue';
import DataList from '@/components/dataList.vue';
import Pannel from '@/components/pannel.vue';
import { listModel } from '../model/orderList';
import { apiGetList, apiDel } from '@/apis/customerbill';
export default defineComponent({
  components: {
    NavTabs,
    DataList,
    Pannel
  },
  setup() {
    return {
      listModel,
      apiGetList,
      apiDel
    }
  }
})
</script>

<style lang="scss" scoped>
.bb-box {
  min-height: 100%;
  &--tabs {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    &--tx {
      font-size: 14px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
