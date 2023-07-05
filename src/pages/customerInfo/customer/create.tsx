import { createCustomer } from '.';
import { createCustomerDetail } from './detail';
import { customerRoutes } from './routes';

export const createCustomerPage = () => {
  const Customer = createCustomer();
  const CustomerDetail = createCustomerDetail();
  const CustomerPage = customerRoutes;

  return () => <CustomerPage SearchPage={Customer} DetailPage={CustomerDetail} />;
};
