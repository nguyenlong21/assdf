// kiểu Response trả về dùng chung
export interface DataResponse<T> {
  isSuccess: boolean;
  message: string;
  data: T;
  errors?: Errors;
  resultsCount?: number;
  recordsTotal?: number;
  pagesCount?: number;
}

export interface Errors {
  StepCode: string[];
  TargetName: string[];
}
