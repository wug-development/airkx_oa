<template>
  <div class="bb-box">
    <Pannel :padding="'0'" title="短信记录">
      <template #subtitle>
        <div class="bb-box--tabs">
          <NavTabs current="sms"></NavTabs>
        </div>
      </template>
      <DataList :dataApi="apiGetList" :detaModel="listModel" rowKey="Row">
      </DataList>
    </Pannel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';
import NavTabs from '../components/p-nav-tabs.vue';
import DataList from '@/components/dataList.vue';
import Pannel from '@/components/pannel.vue';
import { apiGetList, apiDel } from '@/apis/customerbill';

const listModel = [
  {
      title: '短信内容',
      dataIndex: 'dcSMSContent',
      key: 'dcSMSContent',
  },
  {
      title: '发送时间',
      dataIndex: 'dtSendTime',
      key: 'dtSendTime',
      width: '120px',
  },
];

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
