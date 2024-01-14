declare namespace API {
  type WithdrawalListPageResultItem = {
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
  type WithdrawalListPageResult = WithdrawalListPageResultItem[];

  /** 创建轮播图参数 */
  type CreateWithdrawalParams = {
    name: string;
    image: number;
  };

  /** 管理员轮播图详情 */
  type WithdrawalInfo = {
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
  type UpdateWithdrawalInfoParams = {
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
  type UpdateWithdrawalPassword = {
    userId: number;
    password: string;
  };

  type ProcessWithdrawalAuditStatus = {
    id: number;
    audit_status: number;
  };
}
