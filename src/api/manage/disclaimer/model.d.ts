declare namespace API {
  type DisclaimerListPageResultItem = {
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

  type DisclaimerListPageResult = DisclaimerListPageResultItem[];

  type CreateDisclaimerParams = {
    title: string;
    content: string;
    pointer: string;
    status: string;
  };

  type DisclaimerInfo = {
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
}
