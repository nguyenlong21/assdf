import { Drawer, Space, Switch } from 'antd';
import { CircleCheck, Cog, Time } from 'base/ui/components/Icons';
import { observer } from 'mobx-react';
import { memo, useState } from 'react';
import { uiPresenter, uiStore } from 'stores/root_store';

function ThemeConfig() {
  const [open, setOpen] = useState(false);
  const [listTheme, setTheme] = useState([
    { color: 'bg-[#00586F]', theme: 'green', active: true },
    { color: 'bg-[#354A5F]', theme: 'gray', active: false },
    { color: 'bg-[#0052CC]', theme: 'blue', active: false },
  ]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Nhấn vào bánh răng hiển thị ô thay đổi theme */}
      <div
        onClick={showDrawer}
        className="hidden lg:flex fixed z-10 top-[95px] right-0 w-[56px] h-[56px] cursor-pointer bg-primary shadow-[-2px_2px_3px_rgba(0,0,0,0.25)] rounded-l-[3px] justify-center items-center"
      >
        <Cog className="animate-spin-slow" />
      </div>
      {/* Thay đổi theme */}
      <Drawer
        title={<h2 className="font-medium text-[23px] leading-[22px] text-dark m-0 capitalize">theme settings</h2>}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        width={422}
        extra={
          <Space onClick={onClose} className={'cursor-pointer'}>
            <Time className={'hover:fill-primary fill-textColor'} />
          </Space>
        }
        headerStyle={{ boxShadow: '0px 1px 13px rgba(0, 0, 0, 0.1)', padding: '28px 48px 27px 30px' }}
      >
        <div className="rounded shadow-[0px_0px_13px_rgba(0,88,111,0.2)]">
          {/* Phần header */}
          <div className="border-b-[1px] border-[#DEE2E6] pt-[22px] pl-[30px] pb-[22px]">
            <h3 className="text-lg leading-[22px] font-medium text-dark capitalize m-0">select theme</h3>
          </div>
          {/* Body */}
          <div className="p-[30px] pb-[44px]">
            <div className="grid grid-cols-5 gap-default">
              {listTheme.map((item, index) => (
                <ThemeColor
                  key={index}
                  color={item.color}
                  selected={uiStore.theme === item.theme}
                  onClick={() => {
                    const theme = [...listTheme];
                    setTheme((prev) =>
                      prev.map((i, id) => (id === index ? { ...i, active: true } : { ...i, active: false })),
                    );
                    localStorage.setItem('theme', theme[index].theme);
                    uiPresenter.setTheme(uiStore, theme[index].theme);
                  }}
                />
              ))}
            </div>
            <span className="flex w-full mt-[37px] gap-[12px] items-center hidden">
              <Switch className="!bg-[#d9d9d9d9] [&.ant-switch-checked]:!bg-primary" defaultChecked />
              <span className="text-default font-normal leading-[22px] text-dark">Apply Theme</span>
            </span>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default memo(observer(ThemeConfig));

export function ThemeColor({
  color,
  selected,
  onClick,
}: {
  color: string;
  selected: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      onClick={onClick}
      className={`w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer ${color}`}
    >
      {selected && <CircleCheck width="24" height="24" />}
    </div>
  );
}
