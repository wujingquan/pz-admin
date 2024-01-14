import { request } from '@/utils/request';
import Api from '@/core/permission/modules/withdrawal';

export function getWithdrawalListPage(data: API.PageParams<{ departmentIds: number[] }>) {
  return request<API.TableListResult<API.WithdrawalListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function createWithdrawal(data: API.CreateWithdrawalParams) {
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

export function getWithdrawalInfo(query: { userId: number }) {
  return request<API.WithdrawalInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateWithdrawal(data: API.UpdateAdminInfoParams) {
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

export function deleteWithdrawals(data: { ids: number[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}

export function prcessWithdrawal(data: API.ProcessWithdrawalAuditStatus) {
  return request(
    {
      url: Api.process,
      method: 'post',
      data,
    },
    {
      successMsg: '修改服务类型成功',
    },
  );
}
