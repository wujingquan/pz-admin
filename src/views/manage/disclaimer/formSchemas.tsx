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
    component: 'Input',
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
    component: 'Input',
    label: '状态',
    rules: [{ required: true, type: 'string' }],
  },
];
