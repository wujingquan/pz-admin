import { UploadOutlined } from '@ant-design/icons-vue';
import { Button } from 'ant-design-vue';
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

const typeList = [
  {
    value: 1,
    label: '满减券',
    key: 1,
  },
  {
    value: 2,
    label: '新人券',
    key: 2,
  },
  {
    value: 3,
    label: '每日自动送券',
    key: 3,
  },
];

const validateType = [
  {
    value: 1,
    label: '领后天数',
    key: '1',
  },
  {
    value: 2,
    label: '固定时间',
    key: '2',
  },
];

export const userSchemas: FormSchema[] = [
  {
    field: 'coupon_type',
    component: 'Select',
    label: '优惠券类型',
    defaultValue: 1,
    rules: [{ required: true, type: 'number' }],
    componentProps: {
      options: typeList,
    },
  },
  {
    field: 'name',
    component: 'Input',
    label: '名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'image',
    component: 'Upload',
    // defaultValue: '123',
    valueField: 'aaa',
    label: '图标',
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
    field: 'grant',
    component: 'InputNumber',
    label: '发放总数量',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'low_limit_price',
    component: 'InputNumber',
    label: '最低消费金额',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'price',
    component: 'InputNumber',
    label: '减免金额',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'expire_type',
    component: 'Select',
    label: '到期类型',
    rules: [{ required: true, type: 'number' }],
    componentProps: {
      options: validateType,
    },
  },
  {
    field: 'validity_day',
    component: 'InputNumber',
    label: '有效天数',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'draw_limit',
    component: 'InputNumber',
    label: '每人领取限制数',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'content',
    component: 'Input',
    label: '卡券使用说明',
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
