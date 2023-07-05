import { createChartServices, IChartServices } from './chart_services';
import { createCommonServices, ICommonServices } from './common_services';
import { createUserServices, IUserServices } from './user_services';

export interface IServices {
  // User services
  userServices: IUserServices;
  // Common services
  commonServices: ICommonServices;
  // Biểu đồ chart
  chartServices: IChartServices;
}

export function createServices(): IServices {
  return {
    // User services
    userServices: createUserServices(),
    // Common services
    commonServices: createCommonServices(),
    // Biểu đồ chart
    chartServices: createChartServices(),
  };
}
