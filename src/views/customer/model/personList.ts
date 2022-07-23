import moment from 'moment';
export const listModel = [
  {
      title: '编号',
      dataIndex: 'dnOrderID',
      key: 'dnOrderID',
      width: '120px',
  },
  {
      title: '姓名',
      dataIndex: 'dnOrderType',
      key: 'dnOrderType',
      width: '120px',
  },
  {
      title: '手机号',
      dataIndex: 'dcFirstLetter',
      key: 'dcFirstLetter',
      width: '120px',
  },
  {
      title: '身份证号',
      dataIndex: 'dcBusinessLinkName',
      key: 'dcBusinessLinkName',
      width: '200px',
  },
  {
      title: '护照号',
      dataIndex: 'dcSalesPerson',
      align: 'center',
      width: '200px',
      key: 'dcSalesPerson',
  },
  {
      title: '其他证件号',
      dataIndex: 'dtAddDatetime',
      align: 'center',
      key: 'dtAddDatetime',
      width: '150px',
  },
  {
      title: '护照首页照片',
      dataIndex: 'dcSalesPerson',
      align: 'center',
      width: '120px',
      key: 'dcSalesPerson',
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