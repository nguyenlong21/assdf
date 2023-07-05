import { observable, runInAction } from 'mobx';

import { User, WebPermission } from 'services/user_services';
import { IUserServices } from 'services/user_services';
import { clearUserSession, setUserSession } from '../utils/localStorageHelper';
import { createBrowserHistory } from 'history';

type UserSession = {
  userName: string;
  role: string;
  token: string;
  refreshToken: string;
  webPermission: WebPermission;
};

export const history = createBrowserHistory();

export type UserStore = {
  isVendor: boolean;
  userRespone: {
    data: User | undefined;
    isSuccess: boolean;
    message: string;
  };
  // ẩn hiện sidebar
  sidebarOpen: boolean;
  submenuOpen: {
    open: boolean;
    id: string;
  };
};

export interface IUserPresenter {
  createStore(): UserStore;
  login(store: UserStore, data: object): Promise<boolean>;
  signOut(): Promise<void>;
  setSidebarOpen(store: UserStore, open: boolean): Promise<void>;
  setSubmenuOpen(store: UserStore, id: string): Promise<void>;
}

export function createUserPresenter({ userServices }: { userServices: IUserServices }): IUserPresenter {
  return {
    createStore: (): UserStore =>
      observable({
        userRespone: {
          data: undefined,
          isSuccess: false,
          message: '',
        },
        isVendor: false,
        pageId: '',
        sidebarOpen: false,
        submenuOpen: {
          open: false,
          id: '',
        },
      }),
    login: async (store: UserStore, data: object) => {
      try {
        const result = await userServices.login(data);
        runInAction(() => {
          store.userRespone.data = result.data;
          store.userRespone.message = result.message;
          store.userRespone.isSuccess = result.isSuccess;
          // kiểm tra nếu có data thì lưu thông tin vào localStore
          if (result.data) {
            const userSession = {
              // accountId: result.accountId,
              userName: result.data.userName,
              // companyCode: result.data.companyCode,
              // companyId: result.data.companyId,
              // companyName: result.data.companyName,
              expiredTime: result.data.expiredTime,
              // saleOrg: result.data.saleOrg,
              // saleOrgName: result.data.saleOrgName,
              // validaty: result.data.validaty,
              // roles: result.data.roles,
              role: result.data.role,
              roleName: result.data.roleName,
              token: result.data.token,
              plantCode: result.data.plantCode,
              plantName: result.data.plantName,
              // refreshToken: result.data.refreshToken,
              webPermission: result.data.webPermission,
            };
            setUserSession(userSession);
          }
        });

        if (result) {
          return true;
        } else {
          return false;
        }
      } catch {
        // error
        return false;
      }
    },

    setSidebarOpen: async (store: UserStore, open: boolean) => {
      try {
        runInAction(() => {
          store.sidebarOpen = open;
        });
      } catch (error) {
        console.log(error);
      }
    },
    setSubmenuOpen: async (store: UserStore, id: string) => {
      try {
        runInAction(() => {
          if (store.submenuOpen.id === id) {
            store.submenuOpen.open = !store.submenuOpen.open;
          } else {
            store.submenuOpen.id = id;
            store.submenuOpen.open = true;
          }
        });
      } catch (err) {
        console.log(err);
      }
    },

    signOut: async () => {
      try {
        clearUserSession();
        // window.location.href = `${URL_HOME}/Permission/Auth/Logout`;
      } catch (e) { }
    },
  };
}
