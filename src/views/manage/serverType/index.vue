<template>
  <div>
    <Card title="服务类型" style="margin-top: 20px">
      <DynamicTable
        size="small"
        bordered
        :data-request="loadTableData"
        :columns="columns"
        row-key="id"
      >
        <template #toolbar>
          <a-button type="primary" @click="openModal({})"> <PlusOutlined /> 新增 </a-button>
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
  import {
    getServerTypeListPage,
    createServerType,
    updateServerType,
  } from '@/api/manage/serverType';
  // import type { LoadDataParams } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/index';

  const [DynamicTable, dynamicTableInstance] = useTable();
  const [showModal] = useFormModal();
  const image = ref('');

  const loadTableData = async (params) => {
    const data = await getServerTypeListPage({
      ...params,
    });
    return data;
  };

  const openModal = async (record) => {
    const [formRef] = await showModal<any>({
      modalProps: {
        title: '新增',
        width: 700,
        onFinish: async (values) => {
          console.log('新增/编辑用户', values);
          // values.id = record.id;
          await (record.id ? updateServerType : createServerType)({
            ...values,
            images: image.value,
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
