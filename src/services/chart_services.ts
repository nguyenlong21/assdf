import { BASE_API_URL } from "utils/constants";
import { post, get } from '../utils/api';
import { BaseDataResponse } from "./common_services";
import { DataResponse } from "./response";

export type TotalCustomerModel = {
    name: string;
    total: number;
}

// Interface của Chart service
export interface IChartServices {
    // Lấy data tỉ lệ khách hàng theo loại 
    getListCustomerType(companyCode: string): Promise<BaseDataResponse>;
    // Lấy data tỉ lệ khách hàng theo nhóm
    getlListPercentCustomerGroup(companyCode: string): Promise<BaseDataResponse>;
    // Lấy data số lượng nhóm khách hàng theo nhóm
    getListNumberCustomerGroup(companyCode: string): Promise<DataResponse<TotalCustomerModel[]>>;
    // Lấy data tỉ lệ khách hàng theo khu vực
    getListPercentCustomerSaleOffice(companyCode: string): Promise<BaseDataResponse>;
    // Lấy data số lượng khách hàng theo khu vực
    getListNumberCustomerSaleOffice(companyCode: string): Promise<DataResponse<TotalCustomerModel[]>>;
    // Lấy data top 10 tỉnh thành có số lượng khách hàng cao nhất
    getListTop10CustomerProvince(companyCode: string): Promise<DataResponse<TotalCustomerModel[]>>;
}
//Hàm khởi tạo các phương thức của Chart service
export function createChartServices(): IChartServices {
    return {
        //Lấy data tỉ lệ khách hàng theo loại 
        getListCustomerType: async (companyCode) => {
            return (
                await get(
                    BASE_API_URL,
                    `Chart/list-customertype?${companyCode ? `companyCode=${companyCode}` : ''}`,
                )
            ).data
        },
        // Lấy data tỉ lệ khách hàng theo nhóm
        getlListPercentCustomerGroup: async (companyCode) => {
            return (
                await get(
                    BASE_API_URL,
                    `Chart/list-percent-customergroup?${companyCode ? `companyCode=${companyCode}` : ``}`,
                )
            ).data
        },
        // Lấy data số lượng nhóm khách hàng theo nhóm
        getListNumberCustomerGroup: async (companyCode) => {
            return (
                await get(
                    BASE_API_URL,
                    `Chart/list-number-customergroup?${companyCode ? `companyCode=${companyCode}` : ``}`,
                )
            ).data
        },
        // Lấy data tỉ lệ khách hàng theo khu vực
        getListPercentCustomerSaleOffice: async (companyCode) => {
            return (
                await get(
                    BASE_API_URL,
                    `Chart/list-percent-customer-saleoffice?${companyCode ? `companyCode=${companyCode}` : ``}`,
                )
            ).data
        },
        // Lấy data số lượng khách hàng theo khu vực
        getListNumberCustomerSaleOffice: async (companyCode) => {
            return (
                await get(
                    BASE_API_URL,
                    `Chart/list-number-customer-saleoffice?${companyCode ? `companyCode=${companyCode}` : ``}`,
                )
            ).data
        },
        // Lấy data top 10 tỉnh thành có số lượng khách hàng cao nhất
        getListTop10CustomerProvince: async (companyCode) => {
            return (
                await get(
                    BASE_API_URL,
                    `Chart/list-top10-customer-province?${companyCode ? `companyCode=${companyCode}` : ``}`,
                )
            ).data
        },
    }
}
