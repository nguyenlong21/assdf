import { observer } from 'mobx-react';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ChildMenu } from 'services/user_services';
import { uiPresenter, uiStore } from 'stores/root_store';
import { BASE_URL } from 'utils/constants';
import { createElement, memo, ReactNode, useEffect, useState } from 'react';
import Style from './sidebar.module.css';
import * as Icon from 'base/ui/components/Icons';
import { ClassNames } from '@emotion/react';

type MenuItemProps = {
  menuId: string;
  menuName: string;
  icon: string;
  // childMenu: Array<ChildMenu>;
  childMenu?: Array<ChildModel>;
  active?: boolean;
};

interface ChildModel {
  url: string;
  value: string;
  active?: boolean;
}

const MenuItem = ({ menuId, menuName, icon, childMenu, active: sidebarActive }: MenuItemProps) => {
  let path = window.location.pathname;
  let theme = uiStore.theme
  const handleDropdown = async () => {
    if (childMenu) {
      if (uiStore.sidebarOpen) {
        await uiPresenter.setSubmenuOpen(uiStore, menuId, uiStore.submenuOpen.childId, undefined);
      } else {
        uiPresenter.setSidebarOpen(uiStore, true);
      }
    } else {
      //
      if (uiStore.sidebarOpen) {
        await uiPresenter.setSubmenuOpen(uiStore, menuId, undefined, menuId);
      } else {
        uiPresenter.setSidebarOpen(uiStore, true);
      }
    }
  };

  return (
    <>
      <li
        onClick={handleDropdown}
        className={`group relative flex items-center [&.${Style.active
          }]:bg-primary justify-between cursor-pointer pr-[10px] hover:bg-hover hover:rounded-[4px] before:content-[''] before:absolute  before:w-[4px] before:h-[16px] before:bg-primary before:rounded-[0px_2px_2px_0px]  before:hidden [&::before]:hover:block ${!(uiStore.submenuOpen.active === menuId)
            ? 'mb-[2px] bg-primary'
            : uiStore.submenuOpen.id === menuId && uiStore.submenuOpen.open && uiStore.sidebarOpen
              ? `${theme} rounded-t-[4px]`
              : Style.active
          } ${uiStore.submenuOpen.id === menuId && uiStore.submenuOpen.open
            ? `bg-third rounded-t-[4px] !mb-0`
            : 'bg-primary'
          } ease-linear 
        `}
      >
        <div className="flex items-center flex-1">
          <span
            className={`${uiStore.sidebarOpen ? 'w-[40px]' : 'w-[48px]'
              } flex justify-center items-center text-base select-none ${uiStore.submenuOpen.active === menuId ? 'text-white' : 'text-sidebar_item'
              } ${uiStore.sidebarOpen ? 'h-[44px]' : 'h-[46px]'}`}
          >
            {/*  @ts-ignore */}
            {createElement(Icon[`${icon}`], { className: 'group-hover:fill-white' })}
          </span>
          {/* nếu side bar đang đóng thì ẩn các items */}
          <span
            className={`group-hover:text-white text-sm font-medium leading-5 flex-1 w-[156px] ${!uiStore.sidebarOpen ? 'hidden' : 'block'
              } duration-400 ${!(uiStore.submenuOpen.active === menuId)
                ? 'text-sidebar_item'
                : uiStore.submenuOpen.id === menuId && uiStore.submenuOpen.open
                  ? 'text-sidebar_item'
                  : 'text-white'
              }`}
          >
            {menuName}
          </span>
        </div>
        {/* nếu side bar đang mở thì hiện nút dropdown */}
        {/* nếu submenu mở thì dropdowm icon hướng lên trên (rotate 180 deg) */}
        {childMenu && uiStore.sidebarOpen && (
          // <HiChevronDown
          //   className={`duration-200 ${uiStore.submenuOpen.open && uiStore.submenuOpen.id === menuId && 'rotate-180'} ${
          //     !active
          //       ? 'text-sidebar_item'
          //       : uiStore.submenuOpen.id === menuId && uiStore.submenuOpen.open
          //       ? 'text-sidebar_item'
          //       : 'text-white'
          //   }`}
          // />
          <Icon.ArrowDown
            className={`group-hover:fill-white ${uiStore.submenuOpen.open && uiStore.submenuOpen.id === menuId && 'rotate-180'
              } ${!(uiStore.submenuOpen.active === menuId)
                ? 'fill-sidebar_item'
                : uiStore.submenuOpen.id === menuId && uiStore.submenuOpen.open
                  ? 'fill-sidebar_item'
                  : 'fill-white'
              }`}
          />
        )}
      </li>
      <ul
        className={`!bg-third overflow-hidden rounded-b-[4px] mb-[2px] ${uiStore.submenuOpen.open && uiStore.submenuOpen.id === menuId && uiStore.sidebarOpen
          ? 'max-h-96 overflow-auto'
          : 'max-h-0 '
          } duration-300 ${!uiStore.sidebarOpen && 'hidden'}`}
      >
        {/* {childMenu.map((item: ChildModel, index) => {
          if (item.menuId === menuId) {
            if (item.domainConfigUrl !== BASE_URL) {
              return (
                <a href={`${item.domainConfigUrl}${item.pageUrl}`} className="w-full" key={index}>
                  <li className="text-slate-400 text-default flex items-center gap-x-4 cursor-pointer select-none p-2 pl-11 hover:text-gray-200">
                    <span>{item.pageName}</span>
                  </li>
                </a>
              );
            } else {
              return (
                <Link
                  onClick={() => uiPresenter.setSidebarOpen(uiStore, false)}
                  to={`${item.pageUrl}`}
                  className="w-full"
                  key={index}
                >
                  <li
                    className={`text-slate-400 text-default flex items-center gap-x-4 cursor-pointer select-none p-2 pl-11 hover:text-gray-200 ${
                      path.includes(item.pageUrl) ? '!text-gray-200' : ''
                    }`}
                  >
                    <span>{item.pageName}</span>
                  </li>
                </Link>
              );
            }
            // }
          }
        })} */}
        {childMenu
          ? childMenu.map((item, index) => (
            <Link
              onClick={() => {
                // uiPresenter.setSidebarOpen(uiStore, false);
                uiPresenter.setSubmenuOpen(uiStore, menuId, item.value, menuId);
              }}
              to={`${item.url}`}
              className="w-full"
              key={index}
            >
              <li
                className={`text-sidebar_item text-sm leading-[22px] flex items-center cursor-pointer select-none p-1 hover:text-gray-200`}
              >
                <div
                  className={`w-full p-[7px] flex items-center ${uiStore.submenuOpen.childId === item.value && Style.active
                    }`}
                >
                  <span
                    className={`w-[5px] h-[5px] ml-[9px] mr-[21px] rounded-full ${uiStore.submenuOpen.childId === item.value ? 'bg-white' : 'bg-sidebar_item'
                      }`}
                  ></span>
                  <span>{item.value}</span>
                </div>
              </li>
            </Link>
          ))
          : ''}
      </ul>
    </>
  );
};

export default memo(observer(MenuItem));
