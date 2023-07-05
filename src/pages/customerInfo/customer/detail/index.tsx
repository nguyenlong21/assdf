import {
  Breadcrumb,
  Collapse,
  Descriptions,
  Drawer,
  DrawerProps,
  Input,
  Select,
  Space,
  Tabs,
  Tooltip,
  Typography,
} from 'antd';
import CustomButton from 'base/ui/components/Button';
import { observer } from 'mobx-react';
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// icons
import * as Icon from 'base/ui/components/Icons';
import BoxContainer from 'base/ui/components/BoxContainer';
import CollapseWrapper from 'base/ui/components/CustomCollapse';
import CustomTable from 'base/ui/components/Table';

type dataSharedType = {
  label: string;
  value: string;
};

const dataShared: dataSharedType[] = [
  {
    label: 'Mã',
    value: '100444684',
  },
  {
    label: 'Khu vực',
    value: 'Miền Nam',
  },
  {
    label: 'Thị trường',
    value: 'Trong nước',
  },
  {
    label: 'Nguồn khách hàng',
    value: 'HT SHOWROOM',
  },
  {
    label: 'Mã SAP',
    value: '17119329',
  },
  {
    label: 'Địa chỉ',
    value: 'Nguyễn Xiển, Phường Kim Giang, Quận Thanh Xuân, Hà Nội',
  },
  {
    label: 'Phân loại KH',
    value: 'Doanh nghiệp',
  },
  {
    label: 'Ngày ghé thăm',
    value: '27/03/2023',
  },
  {
    label: 'Tên ngắn',
    value: '',
  },
  {
    label: 'SĐT liên hệ',
    value: '08549030666',
  },
  {
    label: 'Nhóm KH',
    value: 'Thiết kế & thi công',
  },
  {
    label: 'Ghi chú',
    value: '',
  },
  {
    label: 'Tên',
    value: 'Cty XD Vĩnh Phát	',
  },
  {
    label: 'Email',
    value: '',
  },
  {
    label: 'Mã CRM',
    value: '100444286',
  },
];

var matrix: dataSharedType[][] = [],
  i,
  k;
for (i = 0, k = -1; i < dataShared.length; i++) {
  if (i % 4 === 0) {
    k++;
    matrix[k] = [];
  }
  matrix[k].push(dataShared[i]);
}

export const createCustomerDetail = () => {
  return observer(() => {
    return (
      <div className="mt-[2px] flex flex-col h-full">
        <div className="min-h-[56px] flex flex-col w-full bg-white px-4 py-[12px] gap-default">
          <div className="md:block lg:flex items-center justify-between">
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
            <div className="flex gap-[6px] md:!mt-1 lg:!mt-0">
              <CustomButton icon={<Icon.Download />}>Lưu</CustomButton>
              <CustomButton className="!bg-hover" type="primary" icon={<Icon.Download className="!fill-white" />}>
                Lưu và tiếp tục cập nhật
              </CustomButton>
              <CustomButton className="!bg-hover" type="primary" icon={<Icon.Profile className="!fill-white" />}>
                Profile
              </CustomButton>
            </div>
          </div>
        </div>
        <BoxContainer>
          <Tabs
            defaultActiveKey="1"
            type="card"
            size={'small'}
            className={
              '[&_.ant-tabs-tab]:!rounded-t-sm [&_.ant-tabs-tab]:!text-default [&_.ant-tabs-tab]:!font-semibold [&_.ant-tabs-tab:hover]:!text-primary [&_.ant-tabs-tab]:!border-[#F0F0F0] [&>:nth-child(1)>:nth-child(1)>div>div]:bg-[#FAFAFA] ' +
              '[&_.ant-tabs-tab-active]:!bg-white [&_.ant-tabs-tab-active]:!border-b-white [&_.ant-tabs-tab-active>div]:!text-primary ' +
              '[&_.ant-tabs-nav]:mb-0'
            }
            items={[
              {
                label: 'Thông tin chung',
                key: '1',
                children: (
                  <div className="p-3 border border-t-0 rounded-b-sm">
                    <CollapseWrapper
                      title="Thông tin chung"
                      customClassName="shadow-none [&_.ant-collapse-header]:!py-2 [&_.ant-collapse-header]:!px-[12px] [&_.ant-collapse-content-box]:!p-0"
                      bordered
                      headerColor="bg-[#F0F2F4]"
                      titleClassName="!text-default"
                    >
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <tbody>
                            {matrix.map((item, index) => (
                              <tr key={index} className={index !== matrix.length - 1 ? 'border-b' : ''}>
                                {item.map((i, idx) => (
                                  <Fragment key={idx}>
                                    <th className="text-left text-default font-semibold text-dark px-3 py-2 align-top whitespace-nowrap">
                                      {i.label}
                                    </th>
                                    <td className="text-left text-default font-normal text-dark min-w-[100px] max-w-[263px] py-2 align-top">
                                      {i.value}
                                    </td>
                                  </Fragment>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CollapseWrapper>
                    <Tabs
                      className="mt-[20px] [&_.ant-tabs-ink-bar]:!bg-primary"
                      defaultActiveKey="4"
                      items={[
                        {
                          key: '1',
                          label: `Phụ trách`,
                          children: `Content of Tab Pane 1`,
                        },
                        {
                          key: '2',
                          label: `Liên hệ`,
                          children: `Content of Tab Pane 2`,
                        },
                        {
                          key: '3',
                          label: `Điểm trưng bày`,
                          children: `Content of Tab Pane 3`,
                        },
                        {
                          key: '4',
                          label: `Bảo hành`,
                          children: (
                            <div className="p-3 pb-0">
                              <CustomTable />
                            </div>
                          ),
                        },
                        {
                          key: '5',
                          label: `Thị hiếu`,
                          children: `Content of Tab Pane 5`,
                        },
                        {
                          key: '6',
                          label: `Hoạt động`,
                          children: `Content of Tab Pane 6`,
                        },
                        {
                          key: '7',
                          label: `Catalogue`,
                          children: `Content of Tab Pane 7`,
                        },
                        {
                          key: '8',
                          label: `Đăng ký bảo hành`,
                          children: `Content of Tab Pane 8`,
                        },
                      ]}
                    />
                  </div>
                ),
              },
              {
                label: 'Thông tin chi tiết',
                key: '2',
                children: <div className="p-3 border border-t-0 rounded-b-sm">Thông tin chi tiết</div>,
              },
              {
                label: 'Liên hệ',
                key: '3',
                children: <div className="p-3 border border-t-0 rounded-b-sm">Liên hệ</div>,
              },
              {
                label: 'Hoạt động',
                key: '4',
                children: <div className="p-3 border border-t-0 rounded-b-sm">Hoạt động</div>,
              },
              {
                label: 'Xử lý khiếu nại',
                key: '5',
                children: <div className="p-3 border border-t-0 rounded-b-sm">Xử lý khiếu nại</div>,
              },
              {
                label: 'Địa điểm trưng bày',
                key: '6',
                children: <div className="p-3 border border-t-0 rounded-b-sm">Địa điểm trưng bày</div>,
              },
              {
                label: 'Địa chỉ',
                key: '7',
                children: <div className="p-3 border border-t-0 rounded-b-sm">Địa chỉ</div>,
              },
              {
                label: 'Phụ trách',
                key: '8',
                children: <div className="p-3 border border-t-0 rounded-b-sm">Phụ trách</div>,
              },
              {
                label: 'Tài liệu',
                key: '9',
                children: <div className="p-3 border border-t-0 rounded-b-sm">Tài liệu</div>,
              },
              {
                label: 'Catalogue',
                key: '10',
                children: <div className="p-3 border border-t-0 rounded-b-sm">Catalogue</div>,
              },
              {
                label: 'Thị hiếu',
                key: '11',
                children: <div className="p-3 border border-t-0 rounded-b-sm">Thị hiếu</div>,
              },
            ]}
          />
        </BoxContainer>
      </div>
    );
  });
};
