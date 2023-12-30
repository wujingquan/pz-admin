import { request } from '@/utils/request';
import Api from '@/core/permission/modules/coupon';

export function getEntityListPage(data: API.PageParams<{ departmentIds: number[] }>) {
  return request<API.TableListResult<API.CouponListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function createEntity(data: API.CreateCouponParams) {
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

export function getEntityInfo(query: { userId: number }) {
  return request<API.AdminCouponInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateEntity(data: API.UpdateAdminInfoParams) {
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

export function deleteEntities(data: { ids: number[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}
