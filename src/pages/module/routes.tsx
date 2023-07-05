import { ROUTES } from 'base/routes/routes';
import { Route, Routes } from 'react-router-dom';

export const moduleRoutes = ({ Task }: { Task: React.ComponentType }) => (
  <Routes>
    <Route path={''} element={<Task />} />
  </Routes>
);
