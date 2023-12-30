import { request } from '@/utils/request';
import Api from '@/core/permission/modules/city';

export function getCityListPage(data: API.PageParams<{ departmentIds: number[] }>) {
  return request<API.TableListResult<API.CityListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function createCity(data: API.CreateCityParams) {
  return request(
    {
      url: Api.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建用户成功',
    },
  );
}

export function getCityInfo(query: { userId: number }) {
  return request<API.AdminCityInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateCity(data: API.UpdateAdminInfoParams) {
  return request(
    {
      url: Api.update,
      method: 'post',
      data,
    },
    {
      successMsg: '修改用户成功',
    },
  );
}

export function deleteCitys(data: { ids: number[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}
