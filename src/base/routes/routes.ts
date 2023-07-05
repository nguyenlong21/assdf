export const ROUTES = {
  HOME: '/',
  LOGIN: {
    BASE: 'login',
  },
  MODULE: {
    BASE: '/Module/:id',
    TASK: {
      BASE: 'Task',
      LINK: '/Module/Task',
    },
  },
  CUSTOMER_INFO: {
    BASE: '/Form/*',
    CUSTOMER: {
      BASE: 'Customer/*',
      LINK: '/Form/Customer',
      DETAIL: 'Profile',
    },
  },
  ICONS: {
    BASE: '/Icons',
  },
};
