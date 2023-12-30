import type { FormSchema } from '@/components/core/schema-form/';

export const userSchemas: FormSchema<API.CreateCityParams>[] = [
  {
    field: 'city_name',
    component: 'Input',
    label: '城市名称',
    rules: [{ required: true, type: 'string' }],
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

/**
 * @description 更新用户密码
 */
export const updatePswSchemas: FormSchema[] = [
  {
    field: 'password',
    component: 'Input',
    label: '新密码',
    rules: [{ required: true, type: 'string' }],
  },
];
/**
 * @description 将用户转移部门
 */
export const transferUserSchemas: FormSchema[] = [
  {
    field: 'departmentId',
    component: 'TreeSelect',
    label: '转移至',
    rules: [{ required: true, type: 'number' }],
  },
];
