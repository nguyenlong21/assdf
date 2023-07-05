import { observable, runInAction } from 'mobx';
import { BaseModel, CommonModel, ICommonServices } from 'services/common_services';

export type CommonStore = {
  commonRespone: {
    data: CommonModel[];
    message: string;
    isSuccess: boolean;
  };
};

export type BaseStore = {
  commonRespone: {
    data: BaseModel[];
    message: string;
    isSuccess: boolean;
  };
};

export interface ICommonPresenter {
  createStore(): CommonStore;
}

export function createCommonPresenter({ commonServices }: { commonServices: ICommonServices }): ICommonPresenter {
  return {
    createStore: (): CommonStore =>
      observable({
        commonRespone: {
          data: [],
          message: '',
          isSuccess: false,
        },
      }),
  };
}
