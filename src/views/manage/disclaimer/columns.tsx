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
    title: '标题',
    align: 'center',
    dataIndex: 'title',
  },
  {
    title: '内容',
    align: 'center',
    dataIndex: 'content',
    ellipsis: true,
  },
  {
    title: '唯一标志',
    align: 'center',
    dataIndex: 'pointer',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status',
  },
  {
    title: '创建时间',
    align: 'center',
    dataIndex: 'createdAt',
  },
  {
    title: '更新时间',
    align: 'center',
    dataIndex: 'updatedAt',
  },
];
