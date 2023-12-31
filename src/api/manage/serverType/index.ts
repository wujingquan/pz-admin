import { request } from '@/utils/request';
import Api from '@/core/permission/modules/serverType';

export function getServerTypeListPage(data: API.PageParams<{ departmentIds: number[] }>) {
  return request<API.TableListResult<API.ServerTypeListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function createServerType(data: API.CreateServerTypeParams) {
  return request(
    {
      url: Api.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建服务类型成功',
    },
  );
}

export function getServerTypeInfo(query: { userId: number }) {
  return request<API.AdminServerTypeInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateServerType(data: API.UpdateAdminInfoParams) {
  return request(
    {
      url: Api.update,
      method: 'post',
      data,
    },
    {
      successMsg: '修改服务类型成功',
    },
  );
}

export function deleteServerTypes(data: { ids: number[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}
