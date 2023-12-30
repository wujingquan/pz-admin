<template>
  <div>
    <Card title="轮播图" style="margin-top: 20px">
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
    getBannerListPage,
    createBanner,
    updateBanner,
    deleteBanners,
  } from '@/api/manage/banner';
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
          await deleteBanners({ ids });
          // fetchDeptList();
        },
      });
    } else {
      await deleteBanners({ ids: [ids] }).finally(dynamicTableInstance?.reload);
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
    const data = await getBannerListPage({
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
          await (record.id ? updateBanner : createBanner)({
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
