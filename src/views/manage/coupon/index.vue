<template>
  <div>
    <Card title="优惠券设置" style="margin-top: 20px">
      <DynamicTable
        size="small"
        bordered
        :data-request="loadTableData"
        :columns="columns"
        row-key="id"
      >
        <!-- <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'name'">
            {{ record.name }} <a class="text-red-500">[测试bodyCell]</a>
          </template>
        </template> -->
        <template #toolbar>
          <a-button type="primary" @click="openUserModal({})"> <PlusOutlined /> 新增 </a-button>
        </template>
      </DynamicTable>
    </Card>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card, Modal } from 'ant-design-vue';
  import { columns as baseColumns, type TableColumnType } from './columns';
  import { userSchemas } from './formSchemas';
  import { useTable } from '@/components/core/dynamic-table';
  import {
    getEntityListPage,
    createEntity,
    updateEntity,
    deleteEntities,
  } from '@/api/manage/coupon';
  // import type { LoadDataParams } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/index';

  const [DynamicTable, dynamicTableInstance] = useTable();
  const [showModal] = useFormModal();
  const image = ref('');

  /**
   * @description 表格删除行
   */
  const delRowConfirm = async (ids: number | number[]) => {
    if (Array.isArray(ids)) {
      Modal.confirm({
        title: '确定要删除所选的用户吗?',
        // icon: <ExclamationCircleOutlined />,
        centered: true,
        onOk: async () => {
          await deleteEntities({ ids });
          // fetchDeptList();
        },
      });
    } else {
      await deleteEntities({ ids: [ids] }).finally(dynamicTableInstance?.reload);
    }
  };

  const columns: TableColumnType = [
    ...baseColumns,
    {
      title: '操作',
      align: 'center',
      dataIndex: 'ACTION',
      actions: ({ record }) => [
        {
          label: '查看详情',
          onClick: () => {
            console.log('查看详情');
          },
        },
        {
          label: '查看详情',
          onClick: () => {
            console.log('查看详情');
          },
        },
        {
          label: '删除',
          popConfirm: {
            title: '您确定要删除吗？',
            onConfirm: () => {
              delRowConfirm(record.id);
            },
          },
        },
      ],
    },
  ];

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
    await showModal<any>({
      modalProps: {
        title: '添加',
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
  };
</script>

<style lang="less" scoped></style>
