import { BASE_API_URL } from 'utils/constants';
import { post } from '../utils/api';
import { DataResponse } from './response';

// ===================== User Model =============================//
// Menu con // submenu
export type ChildMenu = {
  menuId: string;
  icon: string;
  pageName: string;
  pageId: string;
  pageUrl: string;
  domainConfigUrl: string;
  domainConfig: number;
};

export type Menu = {
  menuId: string;
  icon: string;
  menuName: string;
};
export interface PagePermissionModel {
  pageId: string;
  functionId: string;
}
export type WebPermission = {
  menuModel: Menu[];
  pageModel: ChildMenu[];
  pagePermissionModel: PagePermissionModel[];
};

// user
export type User = {
  accountId: string;
  token: string;
  userName: string;
  employeeCode: string;
  fullName: string;
  validaty: string;
  refreshToken: string;
  companyId: string;
  role: string;
  roleName: string;
  roles: string;
  expiredTime: Date;
  webPermission: WebPermission;
  plantCode: string;
  plantName: string;
};
// interface của user service
// Khai báo phương thức
export interface IUserServices {
  // Đăng nhập
  login(data: any): Promise<DataResponse<User>>;
}
// Hàm khởi tạo các phươn thức của user service
export function createUserServices(): IUserServices {
  return {
    login: async (data: any): Promise<DataResponse<User>> => {
      return (await post(BASE_API_URL, `Auth/login`, data)).data;
    },
  };
}
