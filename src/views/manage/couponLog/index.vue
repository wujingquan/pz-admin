<template>
  <div>
    <Card title="卡券领取记录" style="margin-top: 20px">
      <DynamicTable
        size="small"
        bordered
        :data-request="loadTableData"
        :columns="columns"
        row-key="id"
      >
        <template #toolbar>
          <a-button type="primary" @click="openUserModal({})"> <PlusOutlined /> 新增 </a-button>
        </template>
      </DynamicTable>
    </Card>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import { columns } from './columns';
  import { userSchemas } from './formSchemas';
  import { useTable } from '@/components/core/dynamic-table';
  import { getEntityListPage, createEntity, updateEntity } from '@/api/manage/couponLog';
  // import type { LoadDataParams } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/index';

  const [DynamicTable, dynamicTableInstance] = useTable();
  const [showModal] = useFormModal();
  const image = ref('');

  const loadTableData = async (params) => {
    const data = await getEntityListPage({
      ...params,
    });
    return data;
  };

  /**
   * @description 打开用户弹窗
   */
  const openUserModal = async (record) => {
    const [formRef] = await showModal<any>({
      modalProps: {
        title: '牛逼',
        width: 700,
        onFinish: async (values) => {
          console.log('新增/编辑用户', values);
          // values.id = record.id;
          await (record.id ? updateEntity : createEntity)({
            ...values,
            image: image.value,
          });
          dynamicTableInstance?.reload();
        },
      },
      formProps: {
        labelWidth: 100,
        schemas: userSchemas,
        autoSubmitOnEnter: true,
      },
    });

    formRef?.updateSchema([
      {
        field: 'image',
        componentProps: {
          onChange: ({ file }) => {
            if (file.status === 'done') {
              if (file.response.code === 200) {
                image.value = file.response.data.path;
              }
            }
          },
        },
      },
    ]);
  };
</script>

<style lang="less" scoped></style>
