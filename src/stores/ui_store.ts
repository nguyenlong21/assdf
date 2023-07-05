import { observable, runInAction } from 'mobx';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export type UIStore = {
  // ẩn hiện sidebar
  sidebarOpen: boolean;
  submenuOpen: {
    open: boolean;
    id: string;
    childId: string;
    active: string;
  };
  theme: string;
};

export interface IUIPresenter {
  createStore(): UIStore;
  setSidebarOpen(store: UIStore, open: boolean): Promise<void>;
  setSubmenuOpen(store: UIStore, id: string, childId?: string, active?: string, open?: boolean): Promise<void>;
  // set theme => lưu theme vào store
  setTheme(store: UIStore, theme: string): Promise<void>;
}

export function createUIPresenter(): IUIPresenter {
  return {
    createStore: (): UIStore =>
      observable({
        sidebarOpen: false,
        submenuOpen: {
          open: false,
          id: '',
          childId: '',
          active: '',
        },
        // lấy theme từ localStorage neueds không có lấy mặc định
        theme: localStorage.getItem('theme' || '{}') || '',
      }),

    setSidebarOpen: async (store: UIStore, open: boolean) => {
      try {
        runInAction(() => {
          store.sidebarOpen = open;
        });
      } catch (error) {
        console.log(error);
      }
    },

    setSubmenuOpen: async (store: UIStore, id: string, childId?: string, active?: string, open?: boolean) => {
      try {
        runInAction(() => {
          if (store.submenuOpen.id === id) {
            if (!active) {
              store.submenuOpen.open = !store.submenuOpen.open;
            }
          } else {
            if (active) {
              store.submenuOpen.id = id;
              store.submenuOpen.open = false;
            } else {
              store.submenuOpen.id = id;
              store.submenuOpen.open = true;
            }
          }
          store.submenuOpen.open = open !== undefined ? open : store.submenuOpen.open;
          store.submenuOpen.childId = childId ? childId : '';
          store.submenuOpen.active = active ? active : store.submenuOpen.active;
        });
      } catch (err) {
        console.log(err);
      }
    },
    setTheme: async (store: UIStore, theme) => {
      try {
        runInAction(() => {
          store.theme = theme;
        });
      } catch (error) {
        console.log(error);
      }
    },
  };
}
