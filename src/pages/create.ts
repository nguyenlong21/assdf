import { IServices } from 'services/services';
import { LayoutHOC } from 'base/ui/layout/layout';
import { createHomePage } from './dashboard/create';
import { createLoginPage } from './login/create';
import { createModulePage } from './module/create';
import { createCustomerInfoPage } from './customerInfo/create';
import { createIconPage } from './iconScreen/create';

export function createPages(layoutHOC: LayoutHOC, services: IServices) {
  return {
    HomePage: createHomePage(layoutHOC),
    LoginPage: createLoginPage(layoutHOC),
    // trang modules
    ModulePage: createModulePage(layoutHOC),
    // Thông tin khách hàng
    CustomerInfoPage: createCustomerInfoPage(layoutHOC),
    // Xem icons
    IconsPage: createIconPage(layoutHOC),
  };
}
