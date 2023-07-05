import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { ROUTES } from 'base/routes/routes';

// components
import SearchBarInSideBar from './searchBar/searchBar';
import MenuItem from 'base/ui/layout/sideBar/menuItem';

// Icons
import { Bars } from 'base/ui/components/Icons';
import logoCRM from 'assets/images/logo-iCRM.svg';

// Models

// Store
import { User } from 'services/user_services';
import { uiPresenter, uiStore } from 'stores/root_store';

// Styles
import Style from './sidebar.module.css';
import { toJS } from 'mobx';
import { Link } from 'react-router-dom';

const dataMenu = [
  {
    value: 'Lịch',
    url: '/warehouse/GoodReceipt',
    icon: 'Calendar',
    active: false,
  },
  {
    value: 'Tiềm năng',
    url: '',
    icon: 'BookWithCog',
    active: false,
    child: [
      {
        url: '',
        value: 'Khách hàng tiềm năng',
      },
      {
        url: '',
        value: 'Cơ hội bán hàng',
      },
    ],
  },
  {
    value: 'Thông tin khách hàng',
    url: '/warehouse/import',
    icon: 'CircleUser',
    active: false,
    child: [
      {
        url: ROUTES.CUSTOMER_INFO.CUSTOMER.LINK,
        value: 'Khách hàng',
      },
      {
        url: '',
        value: 'Liên hệ',
      },
    ],
  },
  {
    value: 'Ghé thăm',
    icon: 'ClipboardUser',
    active: false,
    child: [
      {
        url: '',
        value: 'Ghé thăm',
      },
      {
        url: '',
        value: 'Thị hiếu khách hàng',
      },
    ],
  },
  {
    value: 'Hoạt động CSKH',
    url: '/warehouse/finished-product',
    icon: 'UserHeadset',
    active: false,
    child: [
      {
        url: '',
        value: 'Thăm hỏi khách hàng',
      },
      {
        url: '',
        value: 'Nhiệm vụ',
      },
    ],
  },
  {
    value: 'Bảo hành - Khiếu nại',
    url: '/warehouse/by-product',
    icon: 'CogWithWrench',
    active: false,
    child: [
      {
        url: '',
        value: 'Đăng ký bảo hành',
      },
      {
        url: '',
        value: 'Xử lý khiếu nại',
      },
      {
        url: '',
        value: 'Bảo hành',
      },
    ],
  },
  {
    value: 'Điểm trưng bày',
    url: '/warehouse/consumedproduct',
    icon: 'Category',
    active: true,
    child: [
      {
        url: '',
        value: 'Góc vật liệu',
      },
      {
        url: '',
        value: 'Góc A5',
      },
      {
        url: '',
        value: 'Kệ ván sàn',
        active: true,
      },
      {
        url: '',
        value: 'Bục phụ kiện',
      },
      {
        url: '',
        value: 'Vách phối',
      },
      {
        url: '',
        value: 'Vách phối phụ kiện',
      },
      {
        url: '',
        value: 'Thu hồi',
      },
      {
        url: '',
        value: 'Tất cả điểm trung bày',
      },
    ],
  },
  {
    value: 'Category',
    url: '/warehouse/export-transferwh',
    icon: 'Book',
    active: false,
    child: [
      {
        url: '',
        value: 'Cập nhật tồn kho đầu kỳ',
      },
      {
        url: '',
        value: 'Nhập kho',
      },
      {
        url: '',
        value: 'Kiểm kho',
      },
      {
        url: '',
        value: 'Yêu cầu kiểm kho',
      },
      {
        url: '',
        value: 'Chuyển kho',
      },
      {
        url: '',
        value: 'Xuất kho',
      },
      {
        url: '',
        value: 'Báo cáo tồn kho',
      },
    ],
  },
  {
    value: 'Quản lý công việc',
    url: '/warehouse/import-transferwh',
    icon: 'ClipboardListCheck',
    active: false,
    child: [
      {
        url: '',
        value: 'Công việc đã giao',
      },
      {
        url: '',
        value: 'Công việc được phân công',
      },
      {
        url: '',
        value: 'Công việc đang theo dõi',
      },
      {
        url: '',
        value: 'Nhóm được phân công',
      },
      {
        url: '',
        value: 'Giao việc',
      },
    ],
  },
  {
    value: 'Quản lý dự án',
    url: '/warehouse/import-internal',
    icon: 'CircleCog',
    active: false,
    child: [
      {
        url: '',
        value: 'Báo cáo',
      },
      {
        url: '',
        value: 'Thông tin ban đầu',
      },
      {
        url: '',
        value: 'Update dự án',
      },
      {
        url: '',
        value: 'Quản lý đối thủ',
      },
    ],
  },
  {
    value: 'Chiến dịch Marketing',
    icon: 'ChartLineUp',
    active: false,
    child: [
      {
        url: '',
        value: 'Nhóm mục tiêu',
      },
      {
        url: '',
        value: 'Quản lý nội dung',
      },
      {
        url: '',
        value: 'Quản lý chiến dịch',
      },
      {
        url: '',
        value: 'Email Unfollow',
      },
      {
        url: '',
        value: 'Nhóm mục tiêu gửi mẫu & quà Tết',
      },
      {
        url: '',
        value: 'Chiến dịch gửi mẫu & quà Tết',
      },
    ],
  },
  {
    value: 'Chiến dịch Event',
    // url: '/warehouse/import-and-export-other',
    icon: 'MarketingGroup',
    active: false,
  },
  {
    value: 'Chiến dịch quảng bá sản phẩm',
    url: '/warehouse/track-weighing-activity',
    icon: 'Bullhorn',
    active: false,
  },
  {
    value: 'Ngân hàng hỏi đáp (Q&A)',
    url: '/warehouse/truck-weight-declaration',
    icon: 'Chat',
    active: false,
  },
  {
    value: 'Tiện ích',
    url: '/warehouse/truck-weight-declaration',
    icon: 'FileChartColumn',
    active: false,
  },
  {
    value: 'Báo cáo',
    url: '/warehouse/truck-weight-declaration',
    icon: 'RectangleHistoryCircleUser',
    active: false,
  },
  {
    value: 'Hướng dẫn sử dụng',
    url: '/warehouse/truck-weight-declaration',
    icon: 'ArrowUpRightFromSquare',
    active: false,
  },
  {
    value: 'Sản phẩm',
    url: '/warehouse/truck-weight-declaration',
    icon: 'PhoneVolume',
    active: false,
  },
];

export const Sidebar = () => {
  const data = JSON.parse(localStorage.getItem('user_session') || '{}') as User;
  const parentMenu = data.webPermission?.menuModel;
  const childMenu = data.webPermission?.pageModel;

  const handleShowSidebar = () => {
    if (uiStore.sidebarOpen) {
      uiPresenter.setSubmenuOpen(
        uiStore,
        toJS(uiStore.submenuOpen.id),
        toJS(uiStore.submenuOpen.childId),
        toJS(uiStore.submenuOpen.active),
        false,
      );
      uiPresenter.setSidebarOpen(uiStore, false);
    } else {
      uiPresenter.setSidebarOpen(uiStore, true);
    }
  };

  return (
    <div
      className={`absolute h-full z-20 sm:h-auto sm:relative bg-primary min-h-screen ${uiStore.sidebarOpen ? 'sm:block w-[75%] sm:w-[270px]' : 'w-0 sm:w-[68px]'
        } duration-300 overflow-y-auto overflow-x-hidden`}
    >
      <div
        className={`flex w-full items-center justify-center px-[10px] ${Style.split} ${uiStore.sidebarOpen ? 'h-[48px]' : 'h-[64px]'
          }`} onClick={handleShowSidebar}
      >
        <span
          className={`w-full h-full overflow-hidden flex items-center ${uiStore.sidebarOpen ? 'justify-between' : 'justify-center'
            }`}
        >
          <Link to="/">
            {' '}
            <img src={logoCRM} alt="Logo" className={`w-[40px] h-[40px] ${uiStore.sidebarOpen ? 'block' : 'hidden'}`} />
          </Link>
          {/* nav icon */}
          <span className="cursor-pointer">
            <Bars width={uiStore.sidebarOpen ? '16' : '18'} height={uiStore.sidebarOpen ? '16' : '18'} />
          </span>
        </span>
      </div>
      <ul className={`py-[7px] px-[10px] ${uiStore.sidebarOpen ? '' : 'hidden sm:block'}`}>
        <div className={`${uiStore.sidebarOpen ? '' : 'hidden '}relative w-full outline-none`}>
          <SearchBarInSideBar />
        </div>
        {dataMenu
          ? dataMenu.map((parentItem: any, index: any) => (
            <MenuItem
              key={index}
              active={parentItem.active}
              // menuId={parentItem.menuId}
              menuId={parentItem.value}
              menuName={parentItem.value}
              icon={parentItem.icon}
              // childMenu={childMenu}
              childMenu={parentItem.child}
            />
          ))
          : ''}
      </ul>
    </div>
  );
};

export default React.memo(observer(Sidebar));
