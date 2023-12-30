import type { TableColumn } from '@/components/core/dynamic-table';

// 数据项类型
export type TableColumnType = TableColumn[];
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
    title: '医院名称',
    align: 'center',
    dataIndex: 'hospital_name',
  },
  {
    title: '封面图',
    align: 'center',
    dataIndex: 'images',
  },
  {
    title: '医院地址',
    align: 'center',
    dataIndex: 'address',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status',
  },
  {
    title: '排序值',
    align: 'center',
    dataIndex: 'weight',
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
