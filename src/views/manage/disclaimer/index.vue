<template>
  <div>
    <Card title="免责声明设置" style="margin-top: 20px">
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
  import { Card, Modal } from 'ant-design-vue';
  import { columns as baseColumns } from './columns';
  import { userSchemas } from './formSchemas';
  import { useTable } from '@/components/core/dynamic-table';
  import {
    getDisclaimerListPage,
    createDisclaimer,
    updateDisclaimer,
    deleteDisclaimers,
  } from '@/api/manage/disclaimer';
  // import type { LoadDataParams } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/index';

  const [DynamicTable, dynamicTableInstance] = useTable();
  const [showModal] = useFormModal();
  const image = ref('');

  const delRowConfirm = async (ids: number | number[]) => {
    if (Array.isArray(ids)) {
      Modal.confirm({
        title: '确定要删除所选的用户吗?',
        // icon: <ExclamationCircleOutlined />,
        centered: true,
        onOk: async () => {
          await deleteDisclaimers({ ids });
          // fetchDeptList();
        },
      });
    } else {
      await deleteDisclaimers({ ids: [ids] }).finally(dynamicTableInstance?.reload);
    }
  };

  const columns = [
    ...baseColumns,
    {
      title: '操作',
      width: 230,
      dataIndex: 'ACTION',
      align: 'center',
      fixed: 'right',
      actions: ({ record }) => [
        {
          label: '编辑',
          auth: {
            perm: 'sys.user.update',
            effect: 'disable',
          },
          onClick: () => openModal(record),
        },
        {
          label: '删除',
          auth: 'sys.user.delete',
          popConfirm: {
            title: '你确定要删除吗？',
            onConfirm: () => delRowConfirm(record.id),
          },
        },
      ],
    },
  ];

  const loadTableData = async (params) => {
    const data = await getDisclaimerListPage({
      ...params,
    });
    return data;
  };

  const openModal = async (record) => {
    const [formRef] = await showModal<any>({
      modalProps: {
        title: `${record.id ? '编辑' : '新增'}免责声明`,
        width: 700,
        onFinish: async (values) => {
          console.log('新增/编辑用户', values);
          values.id = record.id;
          await (record.id ? updateDisclaimer : createDisclaimer)({
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
    formRef?.setFieldsValue(record);
  };
</script>

<style lang="less" scoped></style>
