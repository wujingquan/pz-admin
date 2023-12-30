<template>
  <div>
    <Card title="陪诊订单" style="margin-top: 20px">
      <DynamicTable
        size="small"
        bordered
        :data-request="loadTableData"
        :columns="columns"
        row-key="id"
      >
      </DynamicTable>
    </Card>
  </div>
</template>

<script lang="ts" setup>
  import { Card } from 'ant-design-vue';
  import { columns } from './columns';
  import { useTable } from '@/components/core/dynamic-table';
  import { getOrderListPage } from '@/api/manage/order';

  const [DynamicTable] = useTable();

  const loadTableData = async (params) => {
    const data = await getOrderListPage({
      ...params,
    });
    return data;
  };
</script>

<style lang="less" scoped></style>
