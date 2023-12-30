import { request } from '@/utils/request';
import Api from '@/core/permission/modules/attachment';

export function getAttachmentListPage(data: API.PageParams<{ departmentIds: number[] }>) {
  return request<API.TableListResult<API.BannerListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function createBanner(data: API.CreateBannerParams) {
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

export function getBannerInfo(query: { userId: number }) {
  return request<API.AdminBannerInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateBanner(data: API.UpdateAdminInfoParams) {
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

export function deleteBanners(data: { userIds: number[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}
