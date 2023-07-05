import { ROUTES } from 'base/routes/routes';
import NotFound from 'pages/error/404/404page';
import { Route, Routes } from 'react-router-dom';

export const customerInfoRoutes = ({ CustomerPage }: { CustomerPage: React.ComponentType }) => (
  <Routes>
    <Route path={ROUTES.CUSTOMER_INFO.CUSTOMER.BASE} element={<CustomerPage />} />
  </Routes>
);
