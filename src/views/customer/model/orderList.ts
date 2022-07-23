import moment from 'moment';
export const listModel = [
  {
      title: '订单ID',
      dataIndex: 'dnOrderID',
      key: 'dnOrderID',
      width: '120px',
  },
  {
      title: '订单类型',
      dataIndex: 'dnOrderType',
      key: 'dnOrderType',
      width: '120px',
  },
  {
      title: '订单类别',
      dataIndex: 'dcFirstLetter',
      key: 'dcFirstLetter',
      width: '120px',
  },
  {
      title: '乘机人',
      dataIndex: 'dcBusinessLinkName',
      key: 'dcBusinessLinkName',
      width: '200px',
  },
  {
      title: '出发日期',
      dataIndex: 'dcBusinessLinkPhone',
      key: 'dcBusinessLinkPhone',
      width: '150px',
      customRender: ({ text }) => {
          return moment(text).format('YYYY-MM-DD');
      },
  },
  {
      title: '行程',
      dataIndex: 'dcSalesPerson',
      align: 'center',
      width: '200px',
      key: 'dcSalesPerson',
  },
  {
      title: '订单日期',
      dataIndex: 'dtAddDatetime',
      align: 'center',
      key: 'dtAddDatetime',
      width: '150px',
      customRender: ({ text }) => {
          return moment(text).format('YYYY-MM-DD');
      },
  },
  {
      title: '订单状态',
      dataIndex: 'dcSalesPerson',
      align: 'center',
      width: '120px',
      key: 'dcSalesPerson',
  },
  {
      title: '合计',
      dataIndex: 'dnTotal',
      align: 'center',
      width: '120px',
      key: 'dnTotal',
  },
  {
      title: '支付状态',
      dataIndex: 'dnStatus',
      align: 'center',
      width: '120px',
      key: 'dnStatus',
  },
  {
      title: '客服',
      dataIndex: 'dnStatus',
      align: 'center',
      width: '120px',
      key: 'dnStatus',
  },
  {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      align: 'center',
      width: 200,
      slots: {
          customRender: 'action',
      },
  },
];