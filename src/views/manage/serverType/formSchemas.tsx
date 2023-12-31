import { UploadOutlined } from '@ant-design/icons-vue';
import { Button } from 'ant-design-vue';
import type { FormSchema } from '@/components/core/schema-form/';

export const userSchemas: FormSchema<API.CreateServerTypeParams>[] = [
  {
    field: 'name',
    component: 'Input',
    label: '服务名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'image',
    component: 'Upload',
    // defaultValue: '123',
    valueField: 'aaa',
    label: '图片',
    // rules: [{ required: true, type: 'string' }],
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
    field: 'name',
    component: 'InputTextArea',
    label: '介绍说明',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'name',
    component: 'Input',
    label: '价格(元)',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'status',
    component: 'RadioGroup',
    label: '是否打折',
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
  {
    field: 'name',
    component: 'Input',
    label: '折扣价(元)',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'status',
    component: 'RadioGroup',
    label: '是否有启夜间额外服务费',
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
  {
    field: 'name',
    component: 'Input',
    label: '夜间开始时间',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'name',
    component: 'Input',
    label: '夜间结束时间',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'name',
    component: 'Input',
    label: '夜间额外服务费(元)',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'name',
    component: 'Input',
    label: '排序值',
    rules: [{ required: true, type: 'string' }],
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
