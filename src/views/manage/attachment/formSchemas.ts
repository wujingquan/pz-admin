import type { FormSchema } from '@/components/core/schema-form/';

export const deptSchemas: FormSchema<API.CreateDeptParams>[] = [
  {
    field: 'name',
    component: 'Input',
    label: '部门名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'parentId',
    component: 'TreeSelect',
    label: '上级部门',
    componentProps: {
      getPopupContainer: () => document.body,
    },
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'orderNum',
    component: 'InputNumber',
    label: '排序号',
    defaultValue: 255,
    componentProps: {
      style: {
        width: '100%',
      },
    },
  },
];

export const userSchemas: FormSchema<API.CreateBannerParams>[] = [
  {
    field: 'title',
    component: 'Input',
    label: '标题',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'image',
    component: 'Input',
    label: '图片',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'weight',
    component: 'Input',
    label: '排序值',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'image',
    component: 'Upload',
    label: '上传文件',
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
