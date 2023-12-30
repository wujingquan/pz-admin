<template>
  <div>
    <Card title="附件管理" style="margin-top: 20px">
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
    <a-modal v-model:open="dialogVisible" title="Basic Modal" @ok="() => {}">
      <a-upload
        v-model:file-list="fileList"
        name="file"
        :action="`http://localhost:7001/common/attachment`"
        :headers="headers"
        @change="handleChange"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          Click to Upload
        </a-button>
      </a-upload>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import { columns } from './columns';
  import { useTable } from '@/components/core/dynamic-table';
  import { getAttachmentListPage } from '@/api/attachment';
  // import type { LoadDataParams } from '@/components/core/dynamic-table';
  // import { useFormModal } from '@/hooks/useModal/index';

  const [DynamicTable] = useTable();
  const dialogVisible = ref(false);
  // const [showModal] = useFormModal();
  const headers = ref({});
  const fileList = ref([]);

  const loadTableData = async (params) => {
    const data = await getAttachmentListPage({
      ...params,
    });
    return data;
  };

  const openUserModal = (args) => {
    console.log(args);
    dialogVisible.value = true;
  };

  const handleChange = () => {};

  /**
   * @description 打开用户弹窗
   */
  // const openUserModal = async (record) => {
  //   const [formRef] = await showModal<any>({
  //     modalProps: {
  //       title: '牛逼',
  //       width: 700,
  //       onFinish: async (values) => {
  //         console.log('新增/编辑用户', values);
  //         // values.id = record.id;
  //         await (record.id ? updateBanner : createBanner)(values);
  //         // dynamicTableInstance?.reload();
  //       },
  //     },
  //     formProps: {
  //       labelWidth: 100,
  //       schemas: userSchemas,
  //       autoSubmitOnEnter: true,
  //     },
  //   });

  // formRef?.updateSchema([
  //   {
  //     field: 'departmentId',
  //     componentProps: {
  //       treeDefaultExpandedKeys:
  //         findChildById(record?.departmentId, state.deptTree)?.keyPath || [],
  //       treeData: state.deptTree,
  //     },
  //   },
  // ]);

  // formRef?.setFieldsValue(record);
  // if (record?.id) {
  //   const { roles } = await getUserInfo({ userId: record.id });
  //   formRef?.setFieldsValue({ roles });
  // }
  // };
</script>

<style lang="less" scoped></style>
