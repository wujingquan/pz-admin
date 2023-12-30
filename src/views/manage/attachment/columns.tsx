import type { TableColumn } from '@/components/core/dynamic-table';
import { waitTime } from '@/utils/common';

const names = ['王路飞', '王大蛇', '李白', '刺客伍六七'];

export const fetchStatusMapData = (keyword = '') => {
  const data = [
    {
      label: '已售罄',
      value: 0,
    },
    {
      label: '热卖中',
      value: 1,
    },
  ].filter((n) => n.label.includes(keyword));
  return waitTime<LabelValueOptions>(2000, data);
};

export const getClothesByGender = (gender: number) => {
  if (gender === 1) {
    // 男
    return [
      {
        label: '西装',
        value: 1,
      },
      {
        label: '领带',
        value: 0,
      },
    ];
  } else if (gender === 0) {
    //女
    return [
      {
        label: '裙子',
        value: 1,
      },
      {
        label: '包包',
        value: 0,
      },
    ];
  }
  return [];
};

export const tableData = Array.from({ length: 30 }).map((_, i) => {
  const gender = ~~(Math.random() * 2);
  return {
    id: i + 1,
    date: new Date().toLocaleString(),
    name: names[~~(Math.random() * 4)],
    clothes: getClothesByGender(gender)[~~(Math.random() * 2)].label,
    price: ~~(Math.random() * 1000),
    gender,
    img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    status: ~~(Math.random() * 2),
  };
});

// 数据项类型
export type ListItemType = (typeof tableData)[number];
// 使用TableColumn<ListItemType> 将会限制dataIndex的类型，但换来的是dataIndex有类型提示
export const columns: TableColumn<ListItemType>[] = [
  {
    title: 'Id',
    align: 'center',
    dataIndex: 'id',
    width: 50,
    resizable: true,
  },
  {
    title: '图片',
    align: 'center',
    dataIndex: 'image',
  },
  {
    title: '路径',
    align: 'center',
    dataIndex: 'path',
  },
];
