import { request } from '@/utils/request';
import Api from '@/core/permission/modules/server';

export function getServerListPage(data: API.PageParams<{ departmentIds: number[] }>) {
  return request<API.TableListResult<API.ServerListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function createServer(data: API.CreateServerParams) {
  return request(
    {
      url: Api.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建服务成功',
    },
  );
}

export function getServerInfo(query: { userId: number }) {
  return request<API.ServerInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateServer(data: API.UpdateServerInfoParams) {
  return request(
    {
      url: Api.update,
      method: 'post',
      data,
    },
    {
      successMsg: '修改服务成功',
    },
  );
}

export function deleteServers(data: { ids: number[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}
