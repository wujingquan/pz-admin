<template>
  <div>
    <Card title="医院信息管理" style="margin-top: 20px">
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
  import { useRouter } from 'vue-router';
  import { Card } from 'ant-design-vue';
  import { columns as baseColumns, type TableColumnType } from './columns';
  import { userSchemas } from './formSchemas';
  import { useTable } from '@/components/core/dynamic-table';
  import { getHospitalListPage, createHospital, updateHospital } from '@/api/manage/hospital';
  import { getCityListPage } from '@/api/manage/city';
  // import type { LoadDataParams } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/index';

  const [DynamicTable, dynamicTableInstance] = useTable();
  const [showModal] = useFormModal();
  const router = useRouter();
  const cityList = ref<API.CityListPageResult>([]);
  const images = ref('');

  const columns: TableColumnType = [
    ...baseColumns,
    {
      title: '操作',
      align: 'center',
      dataIndex: 'ACTION',
      actions: ({ record }) => [
        {
          label: '服务管理',
          onClick: () => {
            console.log('查看详情');
            router.push(`/manage/hospital/${record.id}`);
          },
        },
        {
          label: '删除',
          popConfirm: {
            title: '您确定要删除吗？',
            onConfirm: () => {
              // delRowConfirm(record.id);
            },
          },
        },
      ],
    },
  ];

  getCityListPage({}).then((res) => {
    cityList.value = res.list;
    console.log('cityList', cityList.value);
  });

  const loadTableData = async (params) => {
    const data = await getHospitalListPage({
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
          console.log('新增/编辑医院信息', values);
          // values.id = record.id;
          await (record.id ? updateHospital : createHospital)({
            ...values,
            images: images.value,
          });
          dynamicTableInstance?.reload();
        },
      },
      formProps: {
        labelWidth: 100,
        schemas: [
          {
            field: 'city_id',
            component: 'Select',
            label: '所属城市',
            rules: [{ required: true, type: 'number' }],
            componentProps: {
              options: cityList.value,
              fieldNames: {
                label: 'city_name',
                value: 'id',
              },
            },
          },
          ...userSchemas,
        ],
        autoSubmitOnEnter: true,
      },
    });

    formRef?.updateSchema([
      {
        field: 'images',
        componentProps: {
          onChange: ({ file }) => {
            if (file.status === 'done') {
              if (file.response.code === 200) {
                images.value = file.response.data.path;
              }
            }
          },
        },
      },
    ]);
  };
</script>

<style lang="less" scoped></style>
