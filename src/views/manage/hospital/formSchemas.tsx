import { UploadOutlined } from '@ant-design/icons-vue';
import { Button } from 'ant-design-vue';
import type { FormSchema } from '@/components/core/schema-form/';

export const userSchemas: FormSchema<API.CreateHospitalParams>[] = [
  {
    field: 'hospital_name',
    component: 'Input',
    label: '医院名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'address',
    component: 'Input',
    label: '医院地址',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'images',
    component: 'Upload',
    label: '封面图',
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
    field: 'short_description',
    component: 'Input',
    label: '简短描述',
    rules: [{ required: false, type: 'string' }],
  },
  {
    field: 'content',
    component: 'InputTextArea',
    label: '医院介绍',
    rules: [{ required: false, type: 'string' }],
  },
  {
    field: 'weight',
    component: 'InputNumber',
    label: '排序值',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'status',
    component: 'RadioGroup',
    label: '状态',
    defaultValue: 1,
    rules: [{ required: true, type: 'number' }],
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
