declare namespace API {
  type CityListPageResultItem = {
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
  type CityListPageResult = CityListPageResultItem[];

  /** 创建轮播图参数 */
  type CreateCityParams = {
    city_name: string;
    weight: number;
    status: number;
  };

  /** 管理员轮播图详情 */
  type AdminCityInfo = {
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

  /** 更新管理员轮播图参数 */
  type UpdateAdminInfoParams = {
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

  /** 更新管理员密码 */
  type UpdateAdminCityPassword = {
    userId: number;
    password: string;
  };
}
