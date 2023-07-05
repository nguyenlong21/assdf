import { Dropdown, MenuProps, Space } from 'antd';
import { ChevronDown, LayerGroup } from 'base/ui/components/Icons';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { uiStore } from 'stores/root_store';

function Module() {
  const [selected, setSelected] = useState('Chọn');
  const items: MenuProps['items'] = [
    {
      label: (
        <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Module/Task'}>
          Công việc
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Module/Customer'}>
          Khách hàng
        </Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Module/Project'}>
          Dự án
        </Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Module/Catalogue'}>
          Catalogue
        </Link>
      ),
      key: '3',
    },
    {
      label: (
        <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Module/Guarantee'}>
          XLKN & Bảo hành
        </Link>
      ),
      key: '4',
    },
    {
      label: (
        <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Module/System'}>
          Hệ thống
        </Link>
      ),
      key: '5',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Module/Development'}>
          Development
        </Link>
      ),
      key: '6',
    },
    {
      label: (
        <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Module/Marketing'}>
          Marketing
        </Link>
      ),
      key: '7',
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Space className="cursor-pointer h-[46px]">
        <span>
          <LayerGroup className={`${uiStore.theme === 'gray' ? '!fill-[#D1E8FF]' : '!fill-primary'}`} />
        </span>
        <span className={`${uiStore.theme === 'gray' ? 'text-[#FFFFFF]' : 'text-dark'} font-[400] text-[14px] leading-[22px]`}>
          {selected}
        </span>
        <span >
          <ChevronDown className={`${uiStore.theme === 'gray' ? '!fill-[#D1E8FF]' : '!fill-dark'}`} />
        </span>
      </Space>
    </Dropdown>
  );
}

export default memo(observer(Module));
