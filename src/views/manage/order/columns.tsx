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
    title: '订单号',
    align: 'center',
    dataIndex: 'order_no',
  },
  {
    title: '城市',
    align: 'center',
    dataIndex: 'city.city_name',
    customRender: ({ record }: { record: any }) => {
      return record.city.city_name;
    },
  },
  {
    title: '医院',
    align: 'center',
    dataIndex: 'hospital.hospital_name',
    customRender: ({ record }: { record: any }) => {
      return record.hospital.hospital_name;
    },
  },
  {
    title: '服务类型',
    align: 'center',
    dataIndex: 'server.server_name',
    customRender: ({ record }: { record: any }) => {
      return record.server.server_name;
    },
  },
  {
    title: '就诊时间',
    align: 'center',
    dataIndex: 'visit_time',
  },
  {
    title: '就诊人姓名',
    align: 'center',
    dataIndex: 'name',
  },
  {
    title: '就诊人电话',
    align: 'center',
    dataIndex: 'mobile',
  },
  {
    title: '服务地址',
    align: 'center',
    dataIndex: 'address',
  },
  {
    title: '服务单价(元)',
    align: 'center',
    dataIndex: 'price',
  },
  {
    title: '夜间额外服务费(元)',
    align: 'center',
    dataIndex: 'night_other_money',
  },
  {
    title: '合计总金额(元)',
    align: 'center',
    dataIndex: 'sum_price',
  },
  {
    title: '优惠券减免金额(元)',
    align: 'center',
    dataIndex: 'coupon_price',
  },
  {
    title: '实际支出金额(元)',
    align: 'center',
    dataIndex: 'total_price',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status',
  },
  {
    title: '下单时间',
    align: 'center',
    dataIndex: 'createdAt',
  },
  {
    title: '支付时间',
    align: 'center',
    dataIndex: 'payment_time',
  },
  {
    title: '接单人',
    align: 'center',
    dataIndex: 'member.name',
  },
  {
    title: '接单人联系电话',
    align: 'center',
    dataIndex: 'weight',
  },
  {
    title: '接单时间',
    align: 'center',
    dataIndex: 'receiving_time',
  },
];
