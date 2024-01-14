import type { TableColumn } from '@/components/core/dynamic-table';

// 数据项类型
export type ListItemType = {};
export type TableColumnType = TableColumn<ListItemType>[];
// 使用TableColumn<ListItemType> 将会限制dataIndex的类型，但换来的是dataIndex有类型提示
export const columns: TableColumnType = [
  {
    title: 'Id',
    align: 'center',
    dataIndex: 'id',
    width: 50,
    resizable: true,
  },
  {
    title: '提现单号',
    align: 'center',
    dataIndex: 'order_no',
  },
  {
    title: '陪诊师ID',
    align: 'center',
    dataIndex: 'member_id',
  },
  {
    title: '姓名',
    align: 'center',
    dataIndex: 'member.name',
    customRender: ({ record }: { record: any }) => {
      return record.member.name;
    },
  },
  {
    title: '联系电话',
    align: 'center',
    dataIndex: 'member.mobile',
    customRender: ({ record }: { record: any }) => {
      return record.member.mobile;
    },
  },
  {
    title: '金额',
    align: 'center',
    dataIndex: 'money',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'audit_status',
    customRender: ({ record }: { record: any }) => {
      const list = [
        {
          value: null,
          label: '待审核',
        },
        {
          value: 1,
          label: '已通过',
        },
        {
          value: 2,
          label: '未通过',
        },
      ];
      return list.find((item) => item.value === record.audit_status)?.label;
    },
  },
  {
    title: '创建时间',
    align: 'center',
    dataIndex: 'createdAt',
  },
  {
    title: '审核时间',
    align: 'center',
    dataIndex: 'audit_time',
  },
];
