import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'base/routes/routes';

import { observer } from 'mobx-react';
import * as rootStore from 'stores/root_store';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createLoginLayout, createDefaultLayout } from 'base/ui/layout/layout';
import { createPages } from 'pages/create';
import Header from 'base/ui/layout/header/header';
import Sidebar from 'base/ui/layout/sideBar/sideBar';
import { Footer as FooterView } from 'base/ui/layout/footer/footer';
import NotFound from 'pages/error/404/404page';
import InternalServer from 'pages/error/500/500page';
import Logout from 'pages/logout';
import 'antd/dist/reset.css';

export function createApp() {
  const services = rootStore.services;

  // khởi tạo header, sidebar, footer
  // const Header = observer(() => <HeaderView />);
  // const Sidebar = observer(() => <SidebarView />);
  const Footer = observer(() => <FooterView />);

  // Tạo ra 2 layout
  // Layout cho trang login chỉ có content không có sidebar, header, footer
  const layoutLogin = createLoginLayout();
  // Layout mặc định sẽ có đầy đủ sidebar, header, footer
  const layoutDefault = createDefaultLayout(Header, Sidebar, Footer);
  // khỏi tạo các trang với layout tương ứng
  const { LoginPage } = createPages(layoutLogin, services);
  const {
    //=============Mobile=====================
    HomePage,
    ModulePage,
    CustomerInfoPage,
    IconsPage,
  } = createPages(layoutDefault, services);

  return () => (
    <>
      <BrowserRouter>
        <Routes>
          {/* Trang đăng nhập */}
          <Route path={ROUTES.LOGIN.BASE} element={<LoginPage />} />
          {/* Trang chủ */}
          <Route path={ROUTES.HOME} element={<HomePage />} />
          {/* ======= MODULE PAGE ============================================================================================== */}
          <Route path={ROUTES.MODULE.BASE} element={<ModulePage />} />
          {/* ======= CUSTOMER INFO PAGE ======================================================================================= */}
          <Route path={ROUTES.CUSTOMER_INFO.BASE} element={<CustomerInfoPage />} />
          {/* ======== ICONS PAGE ============================================================================================== */}
          <Route path={ROUTES.ICONS.BASE} element={<IconsPage />} />
          <Route path={'/logout'} element={<Logout />} />
          <Route path="/500" element={<InternalServer />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* React toastify // hiển thị thông báo */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
