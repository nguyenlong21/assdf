import { BASE_API_URL } from 'utils/constants';
import { get } from '../utils/api';

//Interface của common service
export interface CommonModel {
  key: string;
  value: string;
  name: string;
  data?: boolean | string;
  unit?: string;
  type?: string;
  code?: string;
}

export interface BaseModel {
  key?: string;
  value: number;
  name: string;
  data?: boolean | string;
  unit?: string;
  type?: string;
  code?: string;
}
//Type của common service
export type CommonDataResponse = {
  data: BaseModel[];
  message: string;
  isSuccess: boolean;
};

export type BaseDataResponse = {
  data: BaseModel[];
  message: string;
  isSuccess: boolean;
};
// ============ Khai báo phương thức =====================
export interface ICommonServices { }
// Hàm khởi tạo các phương thức của NKMH service
export function createCommonServices(): ICommonServices {
  return {};
}
