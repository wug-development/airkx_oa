<template>
  <div class="wagegrant-box">
    <CSearchForm :dataModel="searchModel" :btnCol="8"></CSearchForm>
    <DataList :dataApi="apiGetNotice" :defaultParams="defaultParams" :detaModel="listModel" rowKey="id" :scroll="{ x: false }">
        <template #action="record">
            <a-button type="primary" @click="onGrant(record)">发放</a-button>
        </template>
    </DataList>
  </div>
</template>

<script lang="ts">
import CSearchForm from '@/components/searchForm.vue';
import DataList from '@/components/dataList.vue';
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import { searchModel, listModel } from './model';
// import { apiGetWages } from '@/apis/wages';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  components: {
    CSearchForm,
    DataList
  },
  setup() {
    const onGrant = () => {}

    return {
      searchModel,
      listModel,
      onGrant,
    }
  },
})
</script>

<style>

</style>
