import React, { useEffect, useRef, useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as rootStore from 'stores/root_store';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { MVC_URL } from 'utils/constants';
import { Avatar, Badge } from 'antd';
import { Bars, BarsSort, Bell, EnglandFlag, Location } from 'base/ui/components/Icons';
import Module from './module';
import AcountSetting from './account';

const Header = () => {
  const navigate = useNavigate();
  // show details
  const [show, setShow] = useState(false);

  const handleShowSidebar = () => {
    if (rootStore.uiStore.sidebarOpen) {
      rootStore.uiPresenter.setSubmenuOpen(
        rootStore.uiStore,
        toJS(rootStore.uiStore.submenuOpen.id),
        toJS(rootStore.uiStore.submenuOpen.childId),
        toJS(rootStore.uiStore.submenuOpen.active),
        false,
      );
      rootStore.uiPresenter.setSidebarOpen(rootStore.uiStore, false);
    } else {
      rootStore.uiPresenter.setSidebarOpen(rootStore.uiStore, true);
    }
  };

  return (
    <div className={`${rootStore.uiStore.theme === 'gray' ? '!bg-[#354A5F]' : 'bg-primary'} h-[48px] relative top-0 left-0 w-full 
      bg-primary lg:bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1)] z-[1] flex items-center justify-between px-[16px] py-[9px] 
      before:absolute before:w-full before:h-full before:z-[2] before:bg-primary before:top-0 before:left-0 before:lg:hidden`}
    >
      {/* các nút show sibar và show header trên giao diện mobile */}
      <div className="z-10 flex lg:hidden w-full h-full justify-between items-center">
        <span onClick={handleShowSidebar} className="cursor-pointer">
          <BarsSort width="19" className="!fill-white" />
        </span>
        <span className="uppercase text-xl font-semibold text-white">Dash</span>
        <span className="cursor-pointer" onClick={() => setShow(!show)}>
          <Bars width="24" className="!fill-white" />
        </span>
      </div>
      {/* Chọn module */}
      <div className={`hidden lg:inline-flex justify-center items-center gap-[6px]`}>
        <Module />
      </div>
      <div
        className={`absolute lg:relative flex justify-between lg:justify-end items-center top-full lg:top-0 left-0 w-full 
        lg:w-fit px-[11px] py-5 lg:p-0 lg:bg-white gap-[22px] z-[1] ${rootStore.uiStore.theme === 'gray' && '!bg-hover'} 
        ${show ? 'translate-y-0' : 'translate-y-[-200%]'} lg:translate-y-0 duration-500`}
      >
        {/* plant */}
        <div className={`${rootStore.uiStore.theme === 'gray' ? 'bg-[#E3EDF6]' : rootStore.uiStore.theme === 'green' ? 'bg-[#30778C]' : 'bg-[#0061F2]'} 
        rounded-[2px] h-[30px] px-[15px] py-[4px] flex justify-center items-center gap-[8px] border-[1px] border-[#30778C]`}
        >
          <span>
            <Location className={`${rootStore.uiStore.theme === 'gray' ? '!fill-[#354A5F]' : '!fill-[#FFFFFF]'}`} />
          </span>
          <p className={`${rootStore.uiStore.theme === 'gray' ? 'text-[#354A5F]' : 'text-white'} font-[400] text-[14px] m-0`}>1000 | Tổng công ty</p>
        </div>
        {/* Thông báo */}
        <div>
          <Badge count={8} size="small" offset={[-8, 0]}>
            <Bell className={`${rootStore.uiStore.theme === 'gray' ? '!fill-[#D1E8FF]' : '!fill-primary'}`} />
          </Badge>
        </div>
        {/* Quốc gia */}
        <div>
          <EnglandFlag />
        </div>
        {/* Avatar */}
        <AcountSetting />
      </div>
    </div>
  );
};

export default memo(observer(Header));
