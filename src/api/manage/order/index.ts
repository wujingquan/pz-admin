import { request } from '@/utils/request';
import Api from '@/core/permission/modules/order';

export function getOrderListPage(data: API.PageParams<{ departmentIds: number[] }>) {
  return request<API.TableListResult<API.OrderListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function createOrder(data: API.CreateOrderParams) {
  return request(
    {
      url: Api.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建订单成功',
    },
  );
}

export function getOrderInfo(query: { userId: number }) {
  return request<API.OrderInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateOrder(data: API.UpdateOrderInfoParams) {
  return request(
    {
      url: Api.update,
      method: 'post',
      data,
    },
    {
      successMsg: '修改订单成功',
    },
  );
}

export function deleteOrders(data: { ids: number[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}
