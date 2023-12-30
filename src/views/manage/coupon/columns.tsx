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
    title: '优惠券类型',
    align: 'center',
    dataIndex: 'coupon_type',
  },
  {
    title: '名称',
    align: 'center',
    dataIndex: 'name',
  },
  {
    title: '图标',
    align: 'center',
    dataIndex: 'image',
  },
  {
    title: '最低消费金额',
    align: 'center',
    dataIndex: 'low_limit_price',
  },
  {
    title: '减免金额',
    align: 'center',
    dataIndex: 'price',
  },
  {
    title: '到期类型',
    align: 'center',
    dataIndex: 'expire_type',
  },
  {
    title: '有效天数',
    align: 'center',
    dataIndex: 'validity_day',
  },
  {
    title: '开始时间',
    align: 'center',
    dataIndex: 'validity_start_time',
  },
  {
    title: '结束时间',
    align: 'center',
    dataIndex: 'validity_end_time',
  },
  {
    title: '没人限制领取张数',
    align: 'center',
    dataIndex: 'draw_limit',
  },
  {
    title: '发放总数量',
    align: 'center',
    dataIndex: 'grant',
  },
  {
    title: '已被领取总数量',
    align: 'center',
    dataIndex: 'already_grant',
  },
  {
    title: '已使用总数量',
    align: 'center',
    dataIndex: 'use_grant',
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
