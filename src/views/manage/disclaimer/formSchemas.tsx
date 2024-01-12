import type { FormSchema } from '@/components/core/schema-form/';

export const userSchemas: FormSchema<API.CreateDisclaimerParams>[] = [
  {
    field: 'title',
    component: 'Input',
    label: '标题',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'content',
    component: 'InputTextArea',
    label: '内容',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'pointer',
    component: 'Input',
    label: '唯一标志',
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
