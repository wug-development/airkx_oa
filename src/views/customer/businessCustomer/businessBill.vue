<template>
  <div class="bb-box">
    <Pannel :padding="'0'" title="资金流水">
      <template #subtitle>
        <div class="bb-box--tabs">
          <NavTabs current="liushui"></NavTabs>
          <div class="bb-box--tabs--tx" @click="toPage">提现</div>
        </div>
      </template>
      <DataList :dataApi="apiGetList" :detaModel="listModel" rowKey="Row">
        <template #action="record">
          <a-button type="primary" @click="edit(record)">编辑</a-button>
          <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="del(record)">
            <template #title>
              <p>确定要删除该客户吗？</p>
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
import { useRouter } from 'vue-router';
import NavTabs from '../components/nav-tabs.vue';
import DataList from '@/components/dataList.vue';
import Pannel from '@/components/pannel.vue';
import { listModel } from '../model/bill';
import { apiGetList, apiDel } from '@/apis/customerbill';
export default defineComponent({
  components: {
    NavTabs,
    DataList,
    Pannel
  },
  setup() {
    const router = useRouter();
    const toPage = () => {
      //Withdrawal
      router.push({
        path: '/withdrawal'
      })
    };

    return {
      listModel,
      apiGetList,
      apiDel,
      toPage
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
