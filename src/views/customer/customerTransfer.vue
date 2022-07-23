<template>
  <div class="ctansfer-box">
    <div>将客户经理</div>
    <a-select :placeholder="'请选择'" v-model:value="state.form['souceID']" allowClear>
      <template v-for="({ value, label }, i) in sourceOptions" :key="i">
        <a-select-option :value="value">{{ label }}</a-select-option>
      </template>
    </a-select>
    <div>的客户全部转移至</div>
    <a-select :placeholder="'请选择'" v-model:value="state.form['toID']" allowClear>
      <template v-for="({ value, label }, i) in toOptions" :key="i">
        <a-select-option :value="value">{{ label }}</a-select-option>
      </template>
    </a-select>
    <a-button type="primary" @click="onTransfer"> 转移 </a-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  form: {
    souceID: '',
    toID: '',
  },
  sourceOptions: [],
  toOptions: [],
})

const onTransfer = (): void => {};
</script>

<style lang="scss" scoped>
.ctansfer-box {
  display: flex;
  align-items: baseline;
  padding: 20px 0 0 25px;
  background-color: #fff;
  min-height: 100%;
  .ant-select {
    margin: 0 5px;
  }
  .ant-btn {
    margin-left: 30px;
  }
}
</style>
