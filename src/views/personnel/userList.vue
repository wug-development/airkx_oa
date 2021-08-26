<template>
    <div>
        <searchForm :dataModel="searchModel"></searchForm>
    </div>
</template>

<script>
import searchForm from '@/components/searchForm.vue'
import { searchModel } from './model/userlist'
export default {
    components: {
        searchForm
    },
    setup () {
        return {
            searchModel
        }
    }
}
</script>

<style>

</style>