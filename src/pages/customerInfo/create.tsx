import { LayoutHOC } from 'base/ui/layout/layout';
import { createCustomerPage } from './customer/create';
import { customerInfoRoutes } from './routes';

export const createCustomerInfoPage = (layoutHOC: LayoutHOC) => {
  const Custommer = createCustomerPage();
  const CustomerInfoPage = layoutHOC(customerInfoRoutes);

  return () => <CustomerInfoPage CustomerPage={Custommer} />;
};
