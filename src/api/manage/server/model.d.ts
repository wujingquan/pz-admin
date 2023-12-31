declare namespace API {
  type ServerListPageResultItem = {
    createdAt: string;
    departmentId: number;
    email: string;
    headImg: string;
    id: number;
    name: string;
    nickName: string;
    phone: string;
    remark: string;
    status: number;
    updatedAt: string;
    username: string;
    departmentName: string;
    roleNames: string[];
    keyPath?: number[];
  };

  /** 获取轮播图列表结果 */
  type ServerListPageResult = ServerListPageResultItem[];

  /** 创建医院服务参数 */
  type CreateServerParams = {
    images: string;
    server_name: string;
    content: string;
    price: number;
    status: number;
    weigh: number;
    hospital_id: number;
    have_discount: number;
    discount_price: number;
    have_night_server: number;
    night_start_time: string;
    night_end_time: string;
    night_other_money: number;
  };

  /** 服务详情 */
  type ServerInfo = {
    createTime: string;
    updateTime: string;
    id: number;
    departmentId: number;
    name: string;
    username: string;
    password: string;
    psalt: string;
    nickName: string;
    headImg: string;
    email: string;
    phone: string;
    remark: string;
    status: number;
    roles: string[];
    departmentName: string;
  };

  /** 更新服务参数 */
  type UpdateServerInfoParams = {
    departmentId: number;
    name: string;
    username: string;
    roles: number[];
    nickName: string;
    email: string;
    phone: string;
    remark: string;
    status: number;
    id: number;
  };
}
