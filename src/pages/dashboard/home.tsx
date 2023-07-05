import * as Icon from 'base/ui/components/Icons';
import { observer } from 'mobx-react-lite';
import { createElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeConfig from './changeTheme';
import { uiStore } from 'stores/root_store';
import './dashboard.css';
import CollapseWrapper from 'base/ui/components/CustomCollapse';
import CustomPie from 'base/ui/components/CustomChart/PieChart';
import CustomBar from 'base/ui/components/CustomChart/BarChart';
import CustomBarRace from 'base/ui/components/CustomChart/BarRaceChart';
import CustomMixedLineAndBar from 'base/ui/components/CustomChart/MixedLineAndBar';
import CardDashBoard from './cardDashBoard';
import CustomSelect from 'base/ui/components/CustomSelect';
import {
  ActivityUpdate,
  dataBarRaceVisit,
  dataBarTop10,
  dataCatalog,
  dataComplain,
  dataComplainError,
  dataDisplay,
  dataProductTrend,
  dataProductTrendShowroom,
  dataVisitShowroom,
  NewsBoard,
} from './mock';
import { BaseModel } from 'services/common_services';
import { chartPresenter } from 'stores/root_store';
import { chartStore } from 'stores/root_store';
import { TotalCustomerModel } from 'services/chart_services';

const valueName = [
  'Point',
  'Case'
]

export function createDashboard() {
  document.title = 'Trang chủ - iCRM System';

  return observer(() => {
    // Lấy data tỉ lệ khách hàng theo loại
    const [listCustomerType, setListCustomerType] = useState<BaseModel[]>([]);
    // Lấy data tỉ lệ khách hàng theo nhóm
    const [listPercentCustomerGroup, setListPercentCustomerGroup] = useState<BaseModel[]>([]);
    // Lấy data số lượng nhóm khách hàng theo nhóm
    const [listNumberCustomerGroup, setListNumberCustomerGroup] = useState<TotalCustomerModel[]>([]);
    // Lấy data tỉ lệ khách hàng theo khu vực
    const [listPercentCustomerSaleOffice, setListPercentCustomerSaleOffice] = useState<BaseModel[]>([]);
    // Lấy data số lượng khách hàng theo khu vực
    const [listNumberCustomerSaleOffice, setListNumberCustomerSaleOffice] = useState<TotalCustomerModel[]>([]);
    // Lấy data top 10 tỉnh thành có số lượng khách hàng cao nhất
    const [listTop10CustomerProvince, setListTop10CustomerProvince] = useState<TotalCustomerModel[]>([]);

    // Lấy data tỉ lệ khách hàng theo loại
    const getListCustomerType = async (companyCode: string) => {
      await chartPresenter.getListCustomerType(chartStore, companyCode);
      if (chartStore.listCustomerTypeResponse.isSuccess) {
        setListCustomerType(chartStore.listCustomerTypeResponse.data);
      }
    };
    // Lấy data tỉ lệ khách hàng theo nhóm
    const getListPercentCustomerGroup = async (companyCode: string) => {
      await chartPresenter.getlListPercentCustomerGroup(chartStore, companyCode);
      if (chartStore.listCustomerTypeResponse.isSuccess) {
        setListPercentCustomerGroup(chartStore.listCustomerTypeResponse.data);
      }
    };
    // Lấy data số lượng nhóm khách hàng theo nhóm
    const getListNumberCustomerGroup = async (companyCode: string) => {
      await chartPresenter.getListNumberCustomerGroup(chartStore, companyCode);
      if (chartStore.listNumberCustomerGroupResponse.isSuccess) {
        setListNumberCustomerGroup(chartStore.listNumberCustomerGroupResponse.data);
      }
    };
    // Lấy data tỉ lệ khách hàng theo khu vực
    const getListPercentCustomerSaleOffice = async (companyCode: string) => {
      await chartPresenter.getListPercentCustomerSaleOffice(chartStore, companyCode);
      if (chartStore.listPercentCustomerSaleOfficeResponse.isSuccess) {
        setListPercentCustomerSaleOffice(chartStore.listPercentCustomerSaleOfficeResponse.data);
      }
    }
    // Lấy data số lượng khách hàng theo khu vực
    const getListNumberCustomerSaleOffice = async (companyCode: string) => {
      await chartPresenter.getListNumberCustomerSaleOffice(chartStore, companyCode);
      if (chartStore.listNumberCustomerSaleOfficeResponse.isSuccess) {
        setListNumberCustomerSaleOffice(chartStore.listNumberCustomerSaleOfficeResponse.data);
      }
    }
    // Lấy data top 10 tỉnh thành có số lượng khách hàng cao nhất
    const getListTop10CustomerProvince = async (companyCode: string) => {
      await chartPresenter.getListTop10CustomerProvince(chartStore, companyCode);
      if (chartStore.listTop10CustomerProvinceResponse.isSuccess) {
        setListTop10CustomerProvince(chartStore.listTop10CustomerProvinceResponse.data);
      }
    }

    //Load data
    useEffect(() => {
      const loadData = async () => {
        await getListCustomerType('1000');
        await getListPercentCustomerGroup('1000')
        await getListNumberCustomerGroup('1000')
        await getListPercentCustomerSaleOffice('1000')
        await getListNumberCustomerSaleOffice('1000')
        await getListTop10CustomerProvince('1000')
      };
      loadData();
    }, [])

    return (
      <div className="px-[16px] py-[5px] flex flex-col gap-default">
        {/* Nhóm chức năng */}
        <div>
          {/* title */}
          <h3 className="text-textColor text-base font-semibold pt-2 uppercase ">Nhóm chức năng</h3>
          {/* content */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-default">
            <div className="bg-white h-[140px] rounded-[3px] shadow-box">
              <Link to="/" className="w-full h-full flex flex-col justify-center items-center gap-[7px]">
                <Icon.CustomerCircle className={`${uiStore.theme === 'gray' ? '!fill-[#354A5F]' : '!fill-[#02A886]'}`} />
                <span className="text-sm font-semibold text-dark capitalize">Khách hàng</span>
              </Link>
            </div>
            <div className="bg-white h-[140px] rounded-[3px] shadow-box">
              <Link to="/" className="w-full h-full flex flex-col justify-center items-center gap-[7px]">
                <Icon.Project className={`${uiStore.theme === 'gray' ? '!fill-[#354A5F]' : '!fill-[#2261BE]'}`} />
                <span className="text-sm font-semibold text-dark capitalize">Dự án</span>
              </Link>
            </div>
            <div className="bg-white h-[140px] rounded-[3px] shadow-box">
              <Link to="/" className="w-full h-full flex flex-col justify-center items-center gap-[7px]">
                <Icon.FolderOpen className={`${uiStore.theme === 'gray' ? '!fill-[#354A5F]' : '!fill-[#2AB2C0]'}`} />
                <span className="text-sm font-semibold text-dark capitalize">Catalogue</span>
              </Link>
            </div>
            <div className="bg-white h-[140px] rounded-[3px] shadow-box">
              <Link to="/" className="w-full h-full flex flex-col justify-center items-center gap-[7px]">
                <Icon.TotalRevennue className={`${uiStore.theme === 'gray' ? '!fill-[#354A5F]' : '!fill-[#CA6B8D]'}`} />
                <span className="text-sm font-semibold text-dark capitalize">XLKN & Bảo hành</span>
              </Link>
            </div>
            <div className="bg-white h-[140px] rounded-[3px] shadow-box">
              <Link to="/" className="w-full h-full flex flex-col justify-center items-center gap-[7px]">
                <Icon.Marketing className={`${uiStore.theme === 'gray' ? '!fill-[#354A5F]' : '!fill-[#F19041]'}`} />
                <span className="text-sm font-semibold text-dark capitalize">Marketing</span>
              </Link>
            </div>
            <div className="bg-white h-[140px] rounded-[3px] shadow-box">
              <Link to="/" className="w-full h-full flex flex-col justify-center items-center gap-[7px]">
                <Icon.System className={`${uiStore.theme === 'gray' ? '!fill-[#354A5F]' : '!fill-[#F76949]'}`} />
                <span className="text-sm font-semibold text-dark capitalize">Hệ thống</span>
              </Link>
            </div>
          </div>
        </div>

        {/* bảng thông tin */}
        <div className="">
          {/* title */}
          <h3 className="text-textColor text-base font-semibold uppercase">Bảng thông tin</h3>
          {/* content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-default">
            {NewsBoard.map((item, index) => (
              <CardDashBoard
                key={index}
                color={item.color}
                colorDark={item.colorDark}
                colorLight={item.colorLight}
                title={item.title}
                value={item.value}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        {/* Thay đổi theme */}
        <ThemeConfig />

        {/* Chart */}
        <div className="grid lg:grid-cols-2 gap-default">
          <CollapseWrapper title="Tổng hợp thị hiếu sản phẩm">
            <div className="h-[363px]">
              <CustomBarRace data={dataProductTrend} color={['#8B5A90', '#BE95C4']} className={'!h-full'} />
            </div>
          </CollapseWrapper>
          <CollapseWrapper title="Tổng hợp kho trên toàn quốc">
            <div className="h-[363px]">
              <CustomMixedLineAndBar
                data={dataDisplay}
                color={uiStore.theme === 'blue' ? ['#126DAE', '#F3974B'] : ['#3CA1BA', '#F3974B']}
                rotateLabel
                valueName={valueName[0]}
                className={'!h-full'}
              />
            </div>
          </CollapseWrapper>
          <CollapseWrapper title="Số lượng khách hàng theo nhóm">
            <div className="h-[400px]">
              <CustomBar
                data={[
                  {
                    name: 'Số lượng khách hàng',
                    data: [30000, 22000, 16000, 11500, 7000, 6000, 12500, 4550, 4000, 4000, 3500, 2000, 2000],
                  },
                ]}
                label={[
                  'Người tiêu dùng',
                  'Thiết kế-Thi công',
                  'KH chưa qua xử lý',
                  'Thiết kế',
                  'Chủ đầu tư',
                  'Tổng thầu',
                  'Cửa hàng',
                  'TKTC hàng XK(G.Tiếp)',
                  'Trường ĐH-Cao Đẳng',
                  'Đại lý',
                  'Nhà phân phối',
                  'SR nhượng quyền',
                  'Nhóm khác',
                ]}
                rotateLabel
                className={'!h-full'}
              />
            </div>
          </CollapseWrapper>
          <CollapseWrapper title="Top 10 tỉnh thành có số lượng khách hàng cao nhất">
            <div className="h-[400px]">
              <CustomBarRace data={dataBarTop10} className={'!h-full'} />
            </div>
          </CollapseWrapper>
          <CollapseWrapper title="Tổng hợp xử lý khiếu nại theo nhóm hàng">
            <div className="h-[458px]">
              <CustomMixedLineAndBar
                data={dataComplain}
                color={['#42C4D2', '#F3974B']}
                rotateLabel
                className={'!h-full'} />
            </div>
          </CollapseWrapper>
          <CollapseWrapper title="Tổng hợp xử lý khiếu nại lỗi thường gặp">
            <div className="h-[458px]">
              <CustomMixedLineAndBar
                data={dataComplainError}
                smooth
                color={['#825CC0', '#1FB5AD']}
                rotateLabel
                className={'!h-full'}
              />
            </div>
          </CollapseWrapper>
          <CollapseWrapper title="Thị hiếu khách hàng đến showroom">
            <div className="h-[363px]">
              <CustomBarRace data={dataProductTrendShowroom}
                className={'!h-full'}
                color={
                  uiStore.theme === 'green' ? ['#3C6E71'] :
                    uiStore.theme === 'gray' ? ['#2667B2'] :
                      ['#5470C6']
                }
              />
            </div>
          </CollapseWrapper>
          <CollapseWrapper title="Tổng hợp xuất nhập tồn catalog">
            <div className="h-[363px]">
              <CustomBarRace data={dataCatalog}
                className={'!h-full'}
                color={
                  uiStore.theme === 'green' ? ['#AA4466'] :
                    uiStore.theme === 'gray' ? ['#809E57'] :
                      ['#AA4466']
                } />
            </div>
          </CollapseWrapper>
          <CollapseWrapper title="Thống kê doanh thu theo tháng">
            <CustomPie
              data={[
                { value: 10.96, name: '06/2022' },
                { value: 13.69, name: '07/2022' },
                { value: 11.76, name: '08/2022' },
                { value: 16.78, name: '09/2022' },
                { value: 12.38, name: '10/2022' },
                { value: 15.86, name: '11/2022' },
                { value: 18.57, name: '12/2022' },
              ]}
              color={['#1899BF', '#04C599', '#8D71D3', '#809E57', '#cafe69', '#755575', '#ff8833']}
            />
          </CollapseWrapper>
          <CollapseWrapper title="Thống kê doanh thu theo tháng">
            <CustomBar
              data={[
                {
                  name: 'Tổng doanh thu theo tháng',
                  data: [5000, 6245, 5364, 7654, 5647, 7234, 8457],
                },
              ]}
              valueName={valueName[0]}
              color={['#0BA396']}
              label={['06/2022', '07/2022', '08/2022', '09/2022', '10/2022', '11/2022', '12/2022']}
              className={'!h-full'}
            />
          </CollapseWrapper>
        </div>

        {/* cập nhật hoạt động */}
        <div className="">
          {/* title */}
          <div className="lg:flex justify-between mb-2.5 items-center">
            <h3 className="text-textColor text-title font-semibold uppercase mb-2.5">Cập nhật hoạt động</h3>
            <CustomSelect
              defaultValue="Tháng này"
              options={[
                { label: 'Hôm nay', value: 'Today' },
                { label: 'Tuần trước', value: 'LastWeek' },
                { label: 'Tuần này', value: 'ThisWeek' },
                { label: 'Tháng này', value: 'ThisMonth' },
              ]}
              className={'!min-w-[240px]'}
            />
          </div>
          {/* content */}
          <div className="grid lg:grid-cols-3 gap-default">
            {ActivityUpdate.map((item, index) => (
              <CardDashBoard
                key={index}
                color={item.color}
                colorDark={item.colorDark}
                colorLight={item.colorLight}
                title={item.title}
                value={item.value}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        {/* Thông tin cập nhật */}
        <div className="">
          {/* content */}
          <div className="grid lg:grid-cols-3 gap-default">
            <div className="bg-white rounded-[3px] shadow-box relative pb-[41px]">
              <div className="border-b border-dashed min-w-[46px] py-3 px-4">
                <h3 className="text-base font-semibold text-textColor m-0">Thông tin cập nhật (409,628)</h3>
              </div>
              <div className="px-4">
                <div className="border-b border-solid min-w-[59px] pt-[17px] text-[#0070B1] text-xs">
                  <div className="flex items-center gap-2">
                    <span>
                      <Icon.ClipboardListCircle className="!fill-[#4074B5]" />
                    </span>
                    <span className="">(GT) Nguyễn Ngọc Thiên Trân-10/03-VHG</span>
                  </div>
                  <div className="w-full text-end text-lightText">10/03/2023 14:26:38</div>
                </div>
                <div className="border-b border-solid min-w-[59px] pt-[17px] text-[#0070B1] text-xs">
                  <div className="flex items-center gap-2">
                    <span>
                      <Icon.ChartMixedLineUpCircle className="!fill-[#4074B5]" />
                    </span>
                    <span className="">(GT) Nguyễn Thị Bích Phương (Sales)-10/03-Miền Đông (Thủ Đức)</span>
                  </div>
                  <div className="w-full text-end text-lightText">10/03/2023 14:26:38</div>
                </div>

                <div className="border-b border-solid min-w-[59px] pt-[17px] text-[#0070B1] text-xs">
                  <div className="flex items-center gap-2">
                    <span>
                      <Icon.BookBookmarkCircle className="!fill-[#4074B5]" />
                    </span>
                    <span className="">(HDSD_MLC) Hướng dẫn sử dụng (MLC)-10/03/2023- Chị Trang</span>
                  </div>
                  <div className="w-full text-end text-lightText">10/03/2023 14:26:38</div>
                </div>

                <div className="border-b border-solid min-w-[59px] pt-[17px] text-[#0070B1] text-xs">
                  <div className="flex items-center gap-2">
                    <span>
                      <Icon.WrenchCircle className="!fill-[#4074B5]" />
                    </span>
                    <span className=""> (BH) Bảo hành-10/03/2023-Chị Nhung</span>
                  </div>
                  <div className="w-full text-end text-lightText">10/03/2023 14:26:38</div>
                </div>
              </div>
              <div className="w-full absolute bottom-0 left-0 pt-[7px] pb-[12px] px-4 min-h-[41px] text-primary/90 text-xs">
                <div className="w-full text-end text-lightText ">
                  <Link
                    to=""
                    className="inline-flex items-center gap-[10px] text-[#0070B1] leading-[22px] text-xs font-medium hover:text-primaryLigh"
                  >
                    <span>Xem thêm</span>
                    <span>
                      <Icon.ArrowDown width="11" height="14" className="!fill-textColor -rotate-90" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[3px] shadow-box relative pb-[41px]">
              <div className="border-b border-dashed min-w-[46px] py-3 px-4">
                <h3 className="text-base font-semibold text-textColor m-0">Thông tin cập nhật (409,628)</h3>
              </div>
              <div className="px-4">
                <div className="border-b border-solid min-w-[59px] pt-[17px] text-[#0070B1] text-xs">
                  <div className="flex items-center gap-2">
                    <span>
                      <Icon.NewCircle className="!fill-[#4074B5]" />
                    </span>
                    <span className="">Thông báo mới</span>
                  </div>
                  <div className="w-full text-end text-lightText">22/03/2023 14:26:38</div>
                </div>
              </div>
              <div className="w-full absolute bottom-0 left-0 pt-[7px] pb-[12px] px-4 min-h-[41px] text-primary/90 text-xs">
                <div className="w-full text-end text-lightText ">
                  <Link
                    to=""
                    className="inline-flex items-center gap-[10px] text-[#0070B1] leading-[22px] text-xs font-medium hover:text-primaryLigh"
                  >
                    <span>Xem thêm</span>
                    <span>
                      <Icon.ArrowDown width="11" height="14" className="!fill-textColor -rotate-90" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Công việc được phân công */}
            <div className="bg-white rounded-[3px] shadow-box">
              <div className="border-b border-dashed min-w-[46px] py-3 px-4">
                <h3 className="text-base font-semibold text-textColor m-0">Công việc được phân công</h3>
              </div>
              <div className="px-4 py-[12px] grid grid-cols-2 gap-default">
                <div className={`${uiStore.theme === 'gray' ? 'bg-[#E3EFFA]' : uiStore.theme === 'green' ? 'bg-[#E6F4F5]' : 'bg-[#E6F4F5]'} min-h-[113px] rounded pb-[11px] pt-[11px] pl-4 pr-[11px]`}>
                  <div className="flex justify-between items-start">
                    <div className="text-4xl font-medium">5</div>
                    <div>
                      <Icon.ListBoardPencilCircle className={`${uiStore.theme === 'gray' ? '!fill-[#427CAC]' : uiStore.theme === 'green' ? '!fill-[#0087A9]' : '!fill-[#2261BE]'}`} />
                    </div>
                  </div>
                  <div className="text-base min-h-[38px] text-[#1A1A1A] flex items-center mt-[6px]">
                    <span>Được phân công</span>
                  </div>
                </div>
                <div className={`${uiStore.theme === 'gray' ? 'bg-[#E9F8D6]' : 'bg-[#EBFFE1]'} min-h-[113px] rounded pb-[11px] pt-[11px] pl-4 pr-[11px]`}>
                  <div className="flex justify-between items-start">
                    <div className="text-4xl font-medium">3</div>
                    <div>
                      <Icon.RotateCircle className={`${uiStore.theme === 'gray' ? '!fill-[#809E57]' : '!fill-[#9FBD39]'}`} />
                    </div>
                  </div>
                  <div className="text-base min-h-[38px] text-[#1A1A1A] flex items-center mt-[6px]">
                    <span>Đang thực hiện</span>
                  </div>
                </div>
                <div className={`${uiStore.theme === 'gray' ? 'bg-[#DDF8F6]' : 'bg-[#FFF2E8]'} min-h-[113px] rounded pb-[11px] pt-[11px] pl-4 pr-[11px]`}>
                  <div className="flex justify-between items-start">
                    <div className="text-4xl font-medium">2</div>
                    <div>
                      <Icon.ListTimeCircle className={`${uiStore.theme === 'gray' ? '!fill-[#12CFC7]' : '!fill-[#FF8811]'}`} />
                    </div>
                  </div>
                  <div className="text-base min-h-[38px] text-[#1A1A1A] flex items-center mt-[6px]">
                    <span>Đã quá hạn</span>
                  </div>
                </div>
                <div className={`${uiStore.theme === 'gray' ? 'bg-[#E9E3FA]' : 'bg-[#E0FCF6]'} min-h-[113px] rounded pb-[11px] pt-[11px] pl-4 pr-[11px]`}>
                  <div className="flex justify-between items-start">
                    <div className="text-4xl font-medium">9</div>
                    <div>
                      <Icon.CheckCircle className={`${uiStore.theme === 'gray' ? '!fill-[#8667D3]' : '!fill-[#3DA758]'}`} />
                    </div>
                  </div>
                  <div className="text-base min-h-[38px] text-[#1A1A1A] flex items-center mt-[6px]">
                    <span>Đã hoàn thành</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
