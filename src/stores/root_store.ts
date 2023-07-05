import { createServices } from 'services/services';
import { createUserPresenter } from 'stores/user_store';
import { createCommonPresenter } from './common_store';
import { createUIPresenter } from './ui_store';
import { createChartPresenter } from './chart_store';

// khởi tạo services
export const services = createServices();

// khởi tạo presenter và store của user
export const userPresenter = createUserPresenter(services);
export const userStore = userPresenter.createStore();

// khởi tạo presenter và store của user
export const uiPresenter = createUIPresenter();
export const uiStore = uiPresenter.createStore();

// khởi tạo presenter và store của Common
export const commonPresenter = createCommonPresenter(services);
export const commonStore = commonPresenter.createStore();

// khởi tạo presenter và store của Chart
export const chartPresenter = createChartPresenter(services);
export const chartStore = chartPresenter.createStore();