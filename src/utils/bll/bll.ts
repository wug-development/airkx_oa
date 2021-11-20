import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue'
import { Modal } from 'ant-design-vue';
interface IDataModel {
    name: String,
    path: String
}
// 对象转数组
export const objToArr = (obj: any) => {
    const arr: IDataModel[]= [];
    (function getDeepObj(v: any) {
        let {name, path} = v
        arr.push({
            name,
            path,
        });
        if (v.children && v.children.length > 0) {
            getDeepObj(v.children[0]);
        }
    })(obj);
    return arr;
};

// 导出confirm提示框
export const confirm = (obj: any) => {
    Modal.confirm({
        title: obj.title || '',
        // icon: createVNode(ExclamationCircleOutlined),
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        closable: true,
        onOk() {
            obj.callback && obj.callback()
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}