declare namespace API {
  type HospitalListPageResultItem = {
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

  /** 获取医院信息列表结果 */
  type HospitalListPageResult = HospitalListPageResultItem[];

  /** 创建医院信息参数 */
  type CreateHospitalParams = {
    city_id: number;
    hospital_name: string;
    address: string;
    short_description: string;
    content: string;
    images: string;
    weight: number;
    status: number;
  };

  /** 医院信息详情 */
  type HospitalInfo = {
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

  /** 更新医院信息参数 */
  type UpdateHospitalInfoParams = {
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
