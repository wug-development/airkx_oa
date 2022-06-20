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