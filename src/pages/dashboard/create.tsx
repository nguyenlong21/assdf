import { LayoutHOC } from 'base/ui/layout/layout';
import { createDashboard } from './home';

export const createHomePage = (layoutHOC: LayoutHOC) => {
  return layoutHOC(createDashboard());
};
