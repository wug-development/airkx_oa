import moment from 'moment';
export const listModel = [
  {
    title: '金额',
    dataIndex: 'dnPrice',
    key: 'dnPrice',
    width: '100px',
  },
  {
    title: '方式',
    dataIndex: 'dcMethod',
    key: 'dcMethod',
    width: '120px',
  },
  {
    title: '日期',
    dataIndex: 'dtCreatetime',
    align: 'center',
    key: 'dtCreatetime',
    width: '150px',
    customRender: ({ text }) => {
      return moment(text).format('YYYY-MM-DD');
    },
  },
  {
    title: '备注',
    dataIndex: 'dcOther',
    key: 'dcOther',
    width: '200px',
  },
  {
    title: '余额',
    dataIndex: 'dnBalance',
    key: 'dnBalance',
    width: '100px',
  },
  {
    title: '划款订单号',
    align: 'left',
    key: 'dcOrders',
  },
];

export const searchModel = (key, value) => [
  {
    [key]: 'orderNO',
    [value]: '订单号',
    width: '120px',
  },
  {
    [key]: 'orderType',
    [value]: '类型',
    width: '120px',
  },
  {
    [key]: 'orderCategory',
    [value]: '类别',
    width: '120px',
  },
  {
    [key]: 'persons',
    [value]: '乘机人',
    width: '120px',
  },
  {
    [key]: 'personNum',
    [value]: '人数',
    width: '120px',
  },
  {
    [key]: 'airNo',
    [value]: '航班号',
    width: '120px',
  },
  {
    [key]: 'startDate',
    [value]: '出发日期',
    width: '120px',
  },
  {
    [key]: 'ticketPrice',
    [value]: '票价',
    width: '120px',
  },
  {
    [key]: 'distinct',
    [value]: '折扣',
    width: '120px',
  },
  {
    [key]: 'shippingSpace',
    [value]: '舱位',
    width: '120px',
  },
  {
    [key]: 'mechanicalFuel',
    [value]: '机建燃油',
    width: '120px',
  },
  {
    [key]: 'servicePrice',
    [value]: '服务费',
    width: '120px',
  },
  {
    [key]: 'receivable',
    [value]: '应收',
    width: '120px',
  },
  {
    [key]: 'total',
    [value]: '合计',
    width: '120px',
  },
  {
    [key]: 'ticketNo',
    [value]: '票号',
    width: '120px',
  },
  {
    [key]: 'bookDate',
    [value]: '订票日期',
    width: '120px',
  },
  {
    [key]: 'remark',
    [value]: '备注',
    width: '120px',
  },
];
