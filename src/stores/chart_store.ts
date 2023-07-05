import { uiStore } from 'stores/root_store';
import { CompanyBranch } from './../base/ui/components/Icons/index';
import { observable, runInAction } from "mobx";
import { IChartServices, TotalCustomerModel } from "services/chart_services";
import { BaseModel } from 'services/common_services';
import { DataResponse } from "services/response";

export type ChartStore = {
    //Lấy data tỉ lệ khách hàng theo loại 
    listCustomerTypeResponse: {
        data: BaseModel[];
        message: string;
        isSuccess: boolean;
    }
    // Lấy data tỉ lệ khách hàng theo nhóm
    listPercentCustomerGroupResponse: {
        data: BaseModel[];
        message: string;
        isSuccess: boolean;
    }
    // Lấy data tỉ lệ khách hàng theo khu vực
    listPercentCustomerSaleOfficeResponse: {
        data: BaseModel[];
        message: string;
        isSuccess: boolean;
    }
    // Lấy data số lượng nhóm khách hàng theo nhóm
    listNumberCustomerGroupResponse: DataResponse<Array<TotalCustomerModel>>
    // Lấy data số lượng khách hàng theo khu vực
    listNumberCustomerSaleOfficeResponse: DataResponse<Array<TotalCustomerModel>>
    // Lấy data top 10 tỉnh thành có số lượng khách hàng cao nhất
    listTop10CustomerProvinceResponse: DataResponse<Array<TotalCustomerModel>>
}

export interface IChartPresenter {
    createStore(): ChartStore;
    //Lấy data tỉ lệ khách hàng theo loại 
    getListCustomerType(store: ChartStore, companyCode: string): Promise<void>;
    // Lấy data tỉ lệ khách hàng theo nhóm
    getlListPercentCustomerGroup(store: ChartStore, companyCode: string): Promise<void>;
    // Lấy data số lượng nhóm khách hàng theo nhóm
    getListNumberCustomerGroup(store: ChartStore, companyCode: string): Promise<void>;
    // Lấy data tỉ lệ khách hàng theo khu vực
    getListPercentCustomerSaleOffice(store: ChartStore, companyCode: string): Promise<void>;
    // Lấy data số lượng khách hàng theo khu vực
    getListNumberCustomerSaleOffice(store: ChartStore, companyCode: string): Promise<void>;
    // Lấy data top 10 tỉnh thành có số lượng khách hàng cao nhất
    getListTop10CustomerProvince(store: ChartStore, companyCode: string): Promise<void>;
}

export function createChartPresenter({ chartServices }: { chartServices: IChartServices }): IChartPresenter {
    return {
        createStore: (): ChartStore =>
            observable({
                //Lấy data tỉ lệ khách hàng theo loại 
                listCustomerTypeResponse: {
                    data: [],
                    message: '',
                    isSuccess: false,
                },
                // Lấy data tỉ lệ khách hàng theo nhóm
                listPercentCustomerGroupResponse: {
                    data: [],
                    message: '',
                    isSuccess: false,
                },
                // Lấy data số lượng nhóm khách hàng theo nhóm
                listNumberCustomerGroupResponse: {
                    data: [],
                    message: '',
                    isSuccess: false,
                },
                // Lấy data tỉ lệ khách hàng theo khu vực
                listPercentCustomerSaleOfficeResponse: {
                    data: [],
                    message: '',
                    isSuccess: false,
                },
                // Lấy data số lượng khách hàng theo khu vực
                listNumberCustomerSaleOfficeResponse: {
                    data: [],
                    message: '',
                    isSuccess: false,
                },
                // Lấy data top 10 tỉnh thành có số lượng khách hàng cao nhất
                listTop10CustomerProvinceResponse: {
                    data: [],
                    message: '',
                    isSuccess: false,
                }

            }),
        //Lấy data tỉ lệ khách hàng theo loại 
        getListCustomerType: async (store, companyCode) => {
            try {
                const result = await chartServices.getListCustomerType(companyCode);
                runInAction(() => {
                    store.listCustomerTypeResponse.data = result.data;
                    store.listCustomerTypeResponse.message = result.message;
                    store.listCustomerTypeResponse.isSuccess = result.isSuccess;
                });
            } catch (error) {
                console.log(error);
            }
        },
        //Lấy data tỉ lệ khách hàng theo nhóm
        getlListPercentCustomerGroup: async (store, companyCode) => {
            try {
                const result = await chartServices.getlListPercentCustomerGroup(companyCode);
                runInAction(() => {
                    store.listPercentCustomerGroupResponse.data = result.data;
                    store.listPercentCustomerGroupResponse.message = result.message;
                    store.listPercentCustomerGroupResponse.isSuccess = result.isSuccess;
                });
            } catch (error) {
                console.log(error);

            }
        },
        // Lấy data số lượng nhóm khách hàng theo nhóm
        getListNumberCustomerGroup: async (store, companyCode) => {
            try {
                const result = await chartServices.getListNumberCustomerGroup(companyCode);
                runInAction(() => {
                    store.listNumberCustomerGroupResponse.data = result.data;
                    store.listNumberCustomerGroupResponse.message = result.message;
                    store.listNumberCustomerGroupResponse.isSuccess = result.isSuccess;
                });
            } catch (error) {
                console.log(error);

            }
        },
        // Lấy data tỉ lệ khách hàng theo khu vực
        getListPercentCustomerSaleOffice: async (store, companyCode) => {
            try {
                const result = await chartServices.getListPercentCustomerSaleOffice(companyCode);
                runInAction(() => {
                    store.listPercentCustomerSaleOfficeResponse.data = result.data;
                    store.listPercentCustomerSaleOfficeResponse.message = result.message;
                    store.listPercentCustomerSaleOfficeResponse.isSuccess = result.isSuccess;
                });
            } catch (error) {
                console.log(error);
            }
        },
        // Lấy data số lượng khách hàng theo khu vực
        getListNumberCustomerSaleOffice: async (store, companyCode) => {
            try {
                const result = await chartServices.getListNumberCustomerSaleOffice(companyCode);
                runInAction(() => {
                    store.listNumberCustomerSaleOfficeResponse.data = result.data;
                    store.listNumberCustomerSaleOfficeResponse.message = result.message;
                    store.listNumberCustomerSaleOfficeResponse.isSuccess = result.isSuccess;
                });
            } catch (error) {
                console.log(error);
            }
        },
        getListTop10CustomerProvince: async (store, companyCode) => {
            try {
                const result = await chartServices.getListTop10CustomerProvince(companyCode);
                runInAction(() => {
                    store.listTop10CustomerProvinceResponse.data = result.data;
                    store.listTop10CustomerProvinceResponse.message = result.message;
                    store.listTop10CustomerProvinceResponse.isSuccess = result.isSuccess;
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
}