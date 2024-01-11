import { request } from '@/utils/request';
import Api from '@/core/permission/modules/disclaimer';

export function getDisclaimerListPage(data: API.PageParams<{ departmentIds: number[] }>) {
  return request<API.TableListResult<API.DisclaimerListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function createDisclaimer(data: API.CreateDisclaimerParams) {
  return request(
    {
      url: Api.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建服务条款成功',
    },
  );
}

export function getDisclaimerInfo(query: { userId: number }) {
  return request<API.DisclaimerInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateDisclaimer(data: API.UpdateAdminInfoParams) {
  return request(
    {
      url: Api.update,
      method: 'post',
      data,
    },
    {
      successMsg: '修改服务条款成功',
    },
  );
}

export function deleteDisclaimers(data: { ids: number[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}
