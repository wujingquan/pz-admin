import { UploadOutlined } from '@ant-design/icons-vue';
import { Button } from 'ant-design-vue';
import type { FormSchema } from '@/components/core/schema-form/';

export const userSchemas: FormSchema<API.CreateServerParams>[] = [
  {
    field: 'server_name',
    component: 'Input',
    label: '服务名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'images',
    component: 'Upload',
    label: '图片',
    colProps: {
      span: 24,
    },
    componentProps: {
      action: 'http://localhost:7001/common/attachment',
      name: 'file',
    },
    componentSlots: {
      default: () => (
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      ),
    },
  },
  {
    field: 'content',
    component: 'InputTextArea',
    label: '介绍说明',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'price',
    component: 'InputNumber',
    label: '价格(元)',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'have_discount',
    component: 'RadioGroup',
    label: '是否打折',
    defaultValue: 0,
    componentProps: {
      options: [
        {
          label: '否',
          value: 0,
        },
        {
          label: '是',
          value: 1,
        },
      ],
    },
  },
  {
    field: 'discount_price',
    component: 'InputNumber',
    label: '折扣价(元)',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'have_night_server',
    component: 'RadioGroup',
    label: '是否有启夜间额外服务费',
    defaultValue: 0,
    componentProps: {
      options: [
        {
          label: '否',
          value: 0,
        },
        {
          label: '是',
          value: 1,
        },
      ],
    },
  },
  {
    field: 'night_start_time',
    component: 'Input',
    label: '夜间开始时间',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'night_end_time',
    component: 'Input',
    label: '夜间结束时间',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'night_other_money',
    component: 'InputNumber',
    label: '夜间额外服务费(元)',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'weigh',
    component: 'InputNumber',
    label: '排序值',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'status',
    component: 'RadioGroup',
    label: '状态',
    defaultValue: 1,
    componentProps: {
      options: [
        {
          label: '启用',
          value: 1,
        },
        {
          label: '禁用',
          value: 0,
        },
      ],
    },
  },
];
