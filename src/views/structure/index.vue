<template>
    <div>
        <div class="list-header">
            <a-button type="primary" @click="onAdd">添加顶级架构</a-button>
        </div>
        <a-table :columns="columns" :data-source="list" :pagination="false" :expandRowByClick="true" @expandedRowsChange="onChange">
            <template #remark="{ record }">
                <div class="list-content">{{ record.content }}</div>
            </template>
            <template #name="{ record, index }">
                <span class="list-name">
                    <span>{{ record.name }}</span>
                    <span>（{{ personNum[index].num }}）</span>
                </span>
            </template>
            <template #action="{ record }">
                <div v-if="record.type !== 2" @click.stop="() => {}">
                    <a-button type="primary" v-if="record.structureLevel < 2" @click="onAdd(record)">添加下级</a-button>
                    <a-button class="ant-btn-success" v-else @click="onAddPerson(record)">添加人员</a-button>
                    <a-button type="primary" @click="onEdit(record)">编辑</a-button>
                    <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="onDel(record)">
                        <template #title>
                            <p>确定要删除该数据吗？</p>
                        </template>
                        <a-button type="primary" danger>删除</a-button>
                    </a-popconfirm>
                </div>
                <div v-else>
                    <a-button type="primary" @click="onEditPerson(record)">编辑</a-button>
                    <a-popconfirm placement="left" ok-text="确定" cancel-text="取消" @confirm="onDelPerson(record)">
                        <template #title>
                            <p>确定要删除该人员吗？</p>
                        </template>
                        <a-button type="primary" danger>删除</a-button>
                    </a-popconfirm>
                </div>
            </template>
        </a-table>
    </div>
    <Info :item="item" v-model:isShow="isShowInfo" @confirm="onReload"></Info>
</template>

<script lang="ts">
import { columns, data } from './models/index';
import { getTree } from '@/utils/tool/utils';
import { reactive, toRefs, ref } from 'vue';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { apiGetStructureList, apiDel, apiStructureTree } from '@/apis/structure';
import Info from './components/structureInfo.vue';
export default {
    components: {
        Info,
    },
    setup() {
        const router = useRouter();
        const state = reactive({
            columns,
            list: [],
            item: {},
            personNum: [],
        });
        const isShowInfo = ref(false);

        const getJson = (obj) => {
            return Object.assign(
                {
                    key: obj.structureID,
                    name: obj.structureName,
                    content: obj.structureRemark,
                    type: 1,
                    children: [],
                },
                obj
            );
        };
        const getPersons = (arr, pid) => {
            const list = [];
            arr.forEach((item) => {
                list.push({
                    key: item.userID,
                    name: item.nickname,
                    type: 2,
                    ulabel: item.ulabel,
                    parentID: pid,
                    content: '',
                });
            });
            return list;
        };

        let treeData = [];
        const initLoad = async (pid) => {
            const res = await apiStructureTree(pid);
            if (res && res.data.structure) {
                let person = [];
                if (res.data.person) {
                    person = getPersons(res.data.person, pid);
                }
                treeData = [...treeData, ...res.data.structure, ...person];
                const tree = getTree(treeData, 'parentID', getJson);
                state.list = tree;
            }
            if (res && res.data.personNum) {
                state.personNum = res.data.personNum;
            }
        };
        initLoad('');

        const onReload = () => {
            isShowInfo.value = false;
            initLoad(state.item.parentID);
        };

        const onAdd = (row) => {
            console.log('row :>> ', row);
            state.item = {
                parentID: row.key,
                structureLevel: row.structureLevel + 1,
            };
            isShowInfo.value = true;
        };
        const onEdit = (row) => {
            state.item = row;
            isShowInfo.value = true;
        };
        const onEditPerson = (row) => {
            router.push({
                path: `/userinfo`,
                query: {
                    id: row.key,
                },
            });
        };


        let treePrantID = [];
        const onChange = (e) => {
            console.log('e :>> ', e);
            if (e && e.length) {
                const id = e[e.length - 1];
                if (!treePrantID.includes(id)) {
                    treePrantID.push(id);
                    initLoad(id);
                }
            }
        };

        const onDel = async (row) => {
            const res = await apiDel(row.key);
            if (res) {
                message.success('删除成功');
                treeData = [];
                treePrantID = [];
                state.list = [];
                initLoad('');
            }
        };
        const onDelPerson = async (row) => {
            const res = await apiDel(row.key);
            if (res) {
                message.success('删除成功');
                treeData = [];
                treePrantID = [];
                state.list = [];
                initLoad('');
            }
        };

        const onAddPerson = (record) => {
            router.push({
                path: `/userinfo`
            });
        };

        return {
            ...toRefs(state),
            onDel,
            onDelPerson,
            onReload,
            onAdd,
            onEdit,
            onEditPerson,
            onChange,
            isShowInfo,
            onAddPerson,
        };
    },
};
</script>

<style lang="scss" scoped>
.list-content {
    color: #999;
}
.list-name {
    color: #333;
}
.list-tag {
    margin-left: 10px;
}
</style>
