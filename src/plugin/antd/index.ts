import { Card, CardMeta } from 'ant-design-vue'

const antd = {
    install (Vue: any) {
        Vue.component(Card.name, Card)
        Vue.component(CardMeta.name, CardMeta)
    }
}

export default antd