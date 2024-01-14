import { UploadOutlined } from '@ant-design/icons-vue';
import { Button } from 'ant-design-vue';
import type { FormSchema } from '@/components/core/schema-form/';

export const userSchemas: FormSchema<API.CreateServerTypeParams>[] = [
  {
    field: 'name',
    component: 'Input',
    label: '服务类型',
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
];
