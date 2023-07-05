import { LayoutHOC } from 'base/ui/layout/layout';
import { createLogin } from './login';

export const createLoginPage = (layoutHOC: LayoutHOC) => {
    return layoutHOC(createLogin());
};
