<template>
  <div>
    <Card title="提现审核" style="margin-top: 20px">
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
  import { h } from 'vue';
  import { Card, Button, Modal } from 'ant-design-vue';
  import { columns as baseColumns } from './columns';
  import { useTable } from '@/components/core/dynamic-table';
  import { getWithdrawalListPage, prcessWithdrawal } from '@/api/manage/withdrawal';

  const [DynamicTable, dynamicTableInstance] = useTable();

  const columns: any = [
    ...baseColumns,
    {
      title: '操作',
      width: 230,
      fixed: 'right',
      align: 'center',
      customRender: ({ record }: { record: any }) => {
        if (record.audit_status === null) {
          return h('div', [
            h(
              Button,
              {
                onClick: async () => {
                  Modal.confirm({
                    title: '你确定通过该申请吗？',
                    onOk: async () => {
                      await prcessWithdrawal({
                        id: record.id,
                        audit_status: 1,
                      });
                      dynamicTableInstance?.reload();
                    },
                  });
                },
              },
              '通过',
            ),
            h(
              Button,
              {
                onClick: async () => {
                  Modal.confirm({
                    title: '你确定不通过该申请吗？',
                    onOk: async () => {
                      await prcessWithdrawal({
                        id: record.id,
                        audit_status: 2,
                      });
                      dynamicTableInstance?.reload();
                    },
                  });
                },
              },
              '不通过',
            ),
          ]);
        }
      },
    },
  ];

  const loadTableData = async (params) => {
    const data = await getWithdrawalListPage({
      ...params,
    });
    return data;
  };
</script>

<style lang="less" scoped></style>
