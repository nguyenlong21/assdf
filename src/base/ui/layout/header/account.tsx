import { Avatar, Divider, Dropdown, MenuProps, Space, theme } from 'antd';
import { ArrowRightFromCircle, ChevronDown, CogOutline } from 'base/ui/components/Icons';
import { observer } from 'mobx-react';
import React from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { uiStore } from 'stores/root_store';

const { useToken } = theme;

const items: MenuProps['items'] = [
  {
    label: (
      <Link to={''} className={'flex items-center gap-default px-[10px] py-[5px]'}>
        <CogOutline className="fill-[#00000073]" />
        <span className="text-default leading-[22px] font-medium text-dark">Setting</span>
      </Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link to={''} className={'flex items-center gap-default px-[10px] py-[5px]'}>
        <ArrowRightFromCircle className="fill-[#00000073]" />
        <span className="text-default leading-[22px] font-medium text-dark">Logout</span>
      </Link>
    ),
    key: '2',
  },
];

function AcountSetting() {
  const { token } = useToken();

  const data = JSON.parse(localStorage.getItem('user_session') || '{}');

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: '3px',
    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
  };

  const menuStyle = {
    boxShadow: 'none',
    padding: 0,
  };

  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          <div className="min-h-[165px] min-w-[240px] flex flex-col justify-center items-center">
            <Avatar style={{ backgroundColor: 'bg-primary', verticalAlign: 'middle' }} size={68}>
              {data.userName}
            </Avatar>
            <span>{data.userName}</span>
          </div>
          <Divider style={{ margin: 0 }} />
          {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
        </div>
      )}
    >
      <Space className="cursor-pointer">
        <div className="flex items-center">
          <div className="h-[48px] flex items-center gap-[6px] text-white cursor-pointer">
            <Avatar style={{ backgroundColor: 'bg-primary', verticalAlign: 'middle' }} size={32}>
              {data.userName}
            </Avatar>
            <span
              className={`hidden lg:block font-[400] text-sm select-none capitalize ${uiStore.theme === 'gray' ? 'text-white' : 'text-dark'
                }`}
            >
              {data.userName}
            </span>
            <span className="hidden lg:block">
              <ChevronDown className={`${uiStore.theme === 'gray' ? '!fill-[#D1E8FF]' : '!fill-dark'}`} />
            </span>
          </div>
        </div>
      </Space>
    </Dropdown>
  );
}

export default memo(observer(AcountSetting));
