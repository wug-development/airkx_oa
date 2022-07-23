<template>
  <div class="bb-box">
    <Pannel :padding="'0'" title="我推荐的好友">
      <template #subtitle>
        <div class="bb-box--tabs">
          <NavTabs current="recommend"></NavTabs>
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
import { listModel } from '../model/recommend';
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
