import { LayoutHOC } from 'base/ui/layout/layout';
import { moduleRoutes } from './routes';
import { createTask } from './task';

export const createModulePage = (layoutHOC: LayoutHOC) => {
  const TaskPage = createTask();
  const ModulePage = layoutHOC(moduleRoutes);

  return () => <ModulePage Task={TaskPage} />;
};
