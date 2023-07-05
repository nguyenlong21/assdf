import { ROUTES } from 'base/routes/routes';
import { Route, Routes } from 'react-router-dom';

export const customerRoutes = ({
  SearchPage,
  DetailPage,
}: {
  SearchPage: React.ComponentType;
  DetailPage: React.ComponentType;
}) => (
  <Routes>
    <Route path={''} element={<SearchPage />} />
    <Route path={ROUTES.CUSTOMER_INFO.CUSTOMER.DETAIL} element={<DetailPage />} />
  </Routes>
);
