import { request } from '@/utils/request';
import Api from '@/core/permission/modules/hospital';

export function getHospitalListPage(data: API.PageParams<{ departmentIds: number[] }>) {
  return request<API.TableListResult<API.HospitalListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function createHospital(data: API.CreateHospitalParams) {
  return request(
    {
      url: Api.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建医院信息成功',
    },
  );
}

export function getHospitalInfo(query: { userId: number }) {
  return request<API.HospitalInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateHospital(data: API.UpdateHospitalInfoParams) {
  return request(
    {
      url: Api.update,
      method: 'post',
      data,
    },
    {
      successMsg: '修改医院信息成功',
    },
  );
}

export function deleteHospitals(data: { ids: number[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}
