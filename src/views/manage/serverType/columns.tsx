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
    title: '服务类型',
    align: 'center',
    dataIndex: 'name',
  },
  {
    title: '图标',
    align: 'center',
    dataIndex: 'images',
  },
];
