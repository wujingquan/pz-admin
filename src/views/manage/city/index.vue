<template>
  <div>
    <Card title="城市管理" style="margin-top: 20px">
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
  import { Card } from 'ant-design-vue';
  import { columns } from './columns';
  import { userSchemas } from './formSchemas';
  import { useTable } from '@/components/core/dynamic-table';
  import { getCityListPage, createCity, updateCity } from '@/api/manage/city';
  // import type { LoadDataParams } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/index';

  const [DynamicTable, dynamicTableInstance] = useTable();
  const [showModal] = useFormModal();

  const loadTableData = async (params) => {
    const data = await getCityListPage({
      ...params,
    });
    return data;
  };

  const openModal = async (record) => {
    await showModal<any>({
      modalProps: {
        title: '新增',
        width: 700,
        onFinish: async (values) => {
          console.log('新增/编辑用户', values);
          // values.id = record.id;
          await (record.id ? updateCity : createCity)({
            ...values,
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
  };
</script>

<style lang="less" scoped></style>
