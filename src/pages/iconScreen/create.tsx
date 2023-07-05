import { LayoutHOC } from 'base/ui/layout/layout';
import createIconScreen from './index';

export const createIconPage = (layoutHOC: LayoutHOC) => {
  return layoutHOC(createIconScreen);
};
