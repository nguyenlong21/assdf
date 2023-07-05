import { Breadcrumb, Drawer, Select, Pagination, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import CustomButton from 'base/ui/components/Button';
import { observer } from 'mobx-react';
import { useState } from 'react';

// icons
import * as Icon from 'base/ui/components/Icons';
import CustomInputSearch from 'base/ui/components/Input/InputSearch';
import BoxContainer from 'base/ui/components/BoxContainer';
import CustomTable from 'base/ui/components/Table';
import CustomSelect from 'base/ui/components/CustomSelect';
import { Link } from 'react-router-dom';

export const createCustomer = () => {
  //   document.title = 'Công việc - iCRM System';
  return observer(() => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };
    //Phân trang
    const [paging, setPaging] = useState({
      pageIndex: 1,
      pageSize: 10
    });

    const [selected, setSelected] = useState('Export');
    const items: MenuProps['items'] = [
      {
        label: (
          <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Form/Customer'}>
            Export thêm mới
          </Link>
        ),
        key: '0',
      },
      {
        label: (
          <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Form/Customer'}>
            Export email
          </Link>
        ),
        key: '1',
      },
      {
        label: (
          <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Form/Customer'}>
            Export KH cho chiến dịch
          </Link>
        ),
        key: '2',
      },
      {
        label: (
          <Link onClick={(e) => setSelected(e.currentTarget.textContent || '')} to={'/Form/Customer'}>
            Export KH cần tạo ở ECC
          </Link>
        ),
        key: '3',
      },
    ];

    return (
      <div className="mt-[2px] flex flex-col h-full">
        <div className="min-h-[56px] flex flex-col w-full bg-white px-4 pt-[12px] pb-2 gap-default">
          <div className="lg:flex items-center justify-between">
            <Breadcrumb
              className="pb-2.5 [&_ol_li:last-child]:font-medium [&_ol_li:last-child]:text-dark [&_ol_li:last-child]:text-[17px] [&_ol]:items-center"
              items={[
                {
                  title: 'Home',
                  href: '/'
                },

                {
                  title: 'Khách hàng',
                },
              ]}
            />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,_1fr))] lg:flex gap-[6px]">
              <CustomButton>
                <Dropdown menu={{ items }} trigger={['click']}>
                  <Space className="cursor-pointer h-[46px]">
                    <span>
                      <Icon.Download className={'!fill-dark'} />
                    </span>
                    <span className={`text-dark font-[400] text-[14px] leading-[22px]`}>{selected}</span>
                    <span >
                      <Icon.ChevronDown className={'!fill-dark'} />
                    </span>
                  </Space>
                </Dropdown>
              </CustomButton>
              <CustomButton icon={<Icon.Upload />}>Import</CustomButton>
              <CustomButton type="primary" icon={<Icon.Plus className="!fill-white" />}>
                Thêm mới
              </CustomButton>

              <CustomButton type="primary">
                <Icon.SynchronizeArrows className="!fill-white" width="12" />
                Đồng bộ khách hàng
              </CustomButton>
              <CustomButton
                type="primary"
                color="#FCAF63"
                icon={<Icon.Database className="!fill-white" />}
              >
                Gộp mã CRM
              </CustomButton>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3">
              <CustomInputSearch size="middle" placeholder="Tìm kiếm..." />
            </div>
            <div>
              <CustomButton onClick={showDrawer} type="primary" color="#EFF4F9" className="!px-0 w-8">
                <Icon.Filter className="fill-primary" />
              </CustomButton>
            </div>
          </div>
        </div>

        <BoxContainer>
          <div className="flex text-dark text-default items-center gap-2">
            <span>Xem</span>
            <Select
              defaultValue="10"
              className={
                '!min-w-[72px] [&>.ant-select-selector]:rounded-none [&>.ant-select-selector]:border [&>.ant-select-selector]:border-border [&>.ant-select-selector]:!px-3 text-textColor ' +
                '[&>.ant-select-selector:hover]:!border-border [&_.ant-select-selection-item]:font-semibold [&_.ant-select-selection-item]:text-default'
              }
              options={[
                { value: 10, label: '10' },
                { value: 25, label: '25' },
                { value: 50, label: '50' },
                { value: 100, label: '100' },
              ]}
            />
            <span>mục</span>
          </div>
          <CustomTable />
        </BoxContainer>
        <Drawer
          title={<h2 className="font-medium text-[18px] leading-[26px] text-dark m-0">Thông tin tìm kiếm</h2>}
          placement={'left'}
          width={'100%'}
          contentWrapperStyle={{ boxShadow: 'none' }}
          onClose={onClose}
          className="!w-full lg:!w-[70%]"
          open={open}
          headerStyle={{ padding: '12px 32px' }}
          closeIcon={<Icon.Time width="14" height="14" className={'hover:fill-primary fill-textColor'} />}
          bodyStyle={{ padding: '24px 32px' }}
        >
          <div className="lg:grid grid-cols-4 gap-default w-[112%] lg:w-full">
            <div className="grid grid-cols-11 lg:col-span-3 gap-2 mb-3 lg:mb-0">
              <CustomInputSearch className="!min-w-1/2 col-span-10 lg:col-span-0" />
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <CustomSelect defaultValue={'Mặc định'} className="col-span-10 lg:col-span-6" />
                <Icon.Thumbtack className="fill-primaryLigh my-auto" />
              </div>
            </div>
            <div className="col-span-2 col-start-1">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0<">
                <label className=" col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Mã</label>
                <CustomSelect className="col-span-6 lg:col-span-4" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Mã SAP</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Tên</label>
                <CustomSelect className="col-span-6 lg:col-span-4" />
                <Icon.ArrowUpRightFromSquareThin className="fill-primaryLigh my-auto text-dark/80 text-default" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">SĐT - SĐT liên hệ</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Top chủ đầu tư</label>
                <CustomSelect defaultValue={'Tất cả'} className="col-span-6 lg:col-span-4" />
                <Icon.ArrowUpRightFromSquareThin className="fill-primaryLigh my-auto text-dark/80 text-default" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Là chủ đầu tư</label>
                <CustomSelect defaultValue={'Tất cả'} className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Là thiết kế</label>
                <CustomSelect defaultValue={'Tất cả'} className="col-span-6 lg:col-span-4" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Là tổng thầu</label>
                <CustomSelect defaultValue={'Tất cả'} className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Phân loại KH</label>
                <CustomSelect defaultValue={'Tất cả'} className="col-span-6 lg:col-span-4" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Nguồn khách hàng</label>
                <CustomSelect defaultValue={'Tất cả'} className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Công ty</label>
                <CustomSelect defaultValue={'Tất cả'} className="col-span-6 lg:col-span-4" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Chi nhánh</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>
            <div className="col-span-2 col-start-3">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Phân nhóm khách hàng</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Khu vực</label>
                <CustomSelect className="col-span-6 lg:col-span-4" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Tỉnh/ Thành phố</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2 col-start-3">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Quận/Huyện</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Phường/ Xã</label>
                <CustomSelect className="col-span-6 lg:col-span-4" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Địa chỉ</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Nhóm khách hàng</label>
                <CustomSelect className="col-span-6 lg:col-span-4" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Ngành nghề</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>
            <div className="col-span-2 col-start-3">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">NV kinh doanh</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Phòng ban</label>
                <CustomSelect className="col-span-6 lg:col-span-4" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Mã số thuế</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Trạng thái</label>
                <CustomSelect defaultValue={'Đang sử dụng'} className="col-span-6 lg:col-span-4" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Người tạo</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Ngày tạo</label>
                <CustomSelect className="col-span-6 lg:col-span-4" />
              </div>
            </div>
            <div className="col-span-2 col-start-1">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Ngày tạo từ</label>
                <CustomSelect className="col-span-6 lg:col-span-4" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Ngày tạo đến</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-7 gap-2 mb-3 lg:mb-0">
                <label className="col-span-4 lg:col-span-2 my-auto text-dark/80 text-default">Email</label>
                <CustomSelect className="col-span-6 lg:col-span-4" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-11 lg:grid-cols-8 gap-2 mb-5 lg:mb-0">
                <label className="col-span-4 lg:col-span-3 my-auto text-dark/80 text-default">Yêu cầu tạo khách ở ECC</label>
                <CustomSelect className="col-span-6 lg:col-span-5" />
              </div>
            </div>

            <div className="col-span-4 justify-self-end">
              <div className="flex gap-2 pl-[192px] lg:pl-0">
                <CustomButton>Hủy</CustomButton>
                <CustomButton type="primary">Tìm kiếm</CustomButton>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  });
};
