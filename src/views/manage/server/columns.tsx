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
    title: '服务名称',
    align: 'center',
    dataIndex: 'server_name',
  },
  {
    title: '图片',
    align: 'center',
    dataIndex: 'images',
  },
  {
    title: '价格(元)',
    align: 'center',
    dataIndex: 'price',
  },
  {
    title: '夜间额外服务费(元)',
    align: 'center',
    dataIndex: 'night_other_money',
  },
  {
    title: '是否打折',
    align: 'center',
    dataIndex: 'have_discount',
  },
  {
    title: '是否有启夜间额外服务',
    align: 'center',
    dataIndex: 'have_night_server',
  },
  {
    title: '医院ID',
    align: 'center',
    dataIndex: 'hospital_id',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status',
  },
  {
    title: '排序值',
    align: 'center',
    dataIndex: 'weigh',
  },
  {
    title: '创建时间',
    align: 'center',
    dataIndex: 'updatedAt',
  },
  {
    title: '更新时间',
    align: 'center',
    dataIndex: 'updatedAt',
  },
];
