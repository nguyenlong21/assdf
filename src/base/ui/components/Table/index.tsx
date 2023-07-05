import { Table } from 'antd';
import { DndContext } from '@dnd-kit/core';
import type { ColumnsType } from 'antd/es/table';
import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import type { DragEndEvent } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import { Print } from '../Icons';
import { Link } from 'react-router-dom';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, useDrag, useDrop } from 'react-dnd';

interface DataType {
  key: React.Key;
  stt: number;
  crm: string;
  sap: string;
  name: string;
  market: string;
  customerType: string;
  phone: string;
  email: string;
  address: string;
  resources: string;
  branch: string;
  age: string;
  tax: string;
  group: string;
  job: string;
  area: string;
  description: string;
  business: string;
  department: string;
  createBy: string;
  createDate: string;
  status: string;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const windowSize = getWindowSize();

const columns: ColumnsType<DataType> = [
  { title: 'STT', dataIndex: 'stt', key: 'stt', className: 'whitespace-nowrap', width: 100, fixed: 'left' },
  {
    title: 'Mã CRM', dataIndex: 'crm', key: 'crm', className: 'whitespace-nowrap', fixed: windowSize.innerWidth > 1024 ? 'left' : false,
    render: (text) => (
      <span className="flex gap-3">
        <span>{text}</span>
        <Print className="fill-[#346187]" />
      </span>
    ),
    sorter: (a, b) => {
      const nameA = Number(a.crm); // ignore upper and lowercase
      const nameB = Number(b.crm); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    },
  },
  { title: 'Mã SAP', dataIndex: 'sap', key: 'sap', className: 'whitespace-nowrap min-w-[80px]', fixed: windowSize.innerWidth > 1024 ? 'left' : false },
  {
    title: 'Tên', dataIndex: 'name', className: 'whitespace-nowrap min-w-[80px]', key: '1',
    render: (value) => (
      <Link to="Profile" className="text-[#0070B1]">
        {value}
      </Link>
    ),
  },
  { title: 'Thị trường', dataIndex: 'market', key: '2', className: 'whitespace-nowrap ' },
  { title: 'Phân loại khách hàng', dataIndex: 'customerType', key: '3', className: 'whitespace-nowrap min-w-[190px]' },
  { title: 'Số điện thoại', dataIndex: 'phone', key: '4', className: 'whitespace-nowrap min-w-[130px]' },
  { title: 'Email', dataIndex: 'email', key: '5', className: 'whitespace-nowrap min-w-[140px]' },
  { title: 'Đia chỉ', dataIndex: 'address', key: '6', className: 'whitespace-nowrap min-w-[650px]' },
  { title: 'Nguồn khách hàng', dataIndex: 'resources', key: '7', className: 'whitespace-nowrap min-w-[170px]' },
  { title: 'Chi nhánh', dataIndex: 'branch', key: '8', className: 'whitespace-nowrap min-w-[240px]' },
  { title: 'Độ tuổi', dataIndex: 'age', key: '9', className: 'whitespace-nowrap min-w-[80px]' },
  { title: 'Mã số thuế', dataIndex: 'tax', key: '10', className: 'whitespace-nowrap  min-w-[85px]' },
  { title: 'Nhóm khách hàng', dataIndex: 'group', key: '11', className: 'whitespace-nowrap min-w-[170px]' },
  { title: 'Ngành nghề', dataIndex: 'job', key: '12', className: 'whitespace-nowrap min-w-[100px]' },
  { title: 'Khu vực', dataIndex: 'area', key: '13', className: 'whitespace-nowrap min-w-[135px]' },
  { title: 'Ghi chú', dataIndex: 'description', key: '14', className: 'whitespace-nowrap min-w-[80px]' },
  { title: 'NV kinh doanh', dataIndex: 'business', key: '15', className: 'whitespace-nowrap min-w-[140px]' },
  { title: 'Phòng ban', dataIndex: 'department', key: '16', className: 'whitespace-nowrap min-w-[140px]' },
  { title: 'Người tạo', dataIndex: 'createBy', key: '17', className: 'whitespace-nowrap min-w-[140px]' },
  { title: 'Ngày tạo', dataIndex: 'createDate', key: '18', className: 'whitespace-nowrap min-w-[140px]' },
  { title: 'Trạng thái', dataIndex: 'status', key: '19', className: 'whitespace-nowrap  min-w-[110px]' },
];
interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

const Row = (props: RowProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: props['data-row-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    cursor: 'move',
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  return <tr {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
};

function CustomTable() {
  // const[columns, setColumns] = useState(columns);
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      stt: 1,
      crm: '100444684 ',
      sap: '17119329',
      name: 'Cty XD Vĩnh Phát',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: 'Nguyễn Xiển , Phường Kim Giang, Quận Thanh Xuân, Hà Nội',
      resources: 'HT SHOWROOM',
      branch: 'SR HN (Cầu Giấy)',
      age: '',
      tax: '',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Nguyễn Linh',
      department: 'CHI NHÁNH HÀ NỘI',
      createBy: 'Nguyễn Thị Linh (HN)',
      createDate: '27/03/2023 10:50',
      status: '',
    },
    {
      key: '2',
      stt: 2,
      crm: '100444683 ',
      sap: '',
      name: 'Anh Vinh - 0338333731',
      market: 'Trong nước',
      customerType: 'Cá nhân',
      phone: '0338333731',
      email: '',
      address: '27/6 Đường 27, Phường Hiệp Bình Chánh, Thành Phố Thủ Đức, Hồ Chí Minh',
      resources: 'HT SHOWROOM',
      branch: 'SR BD (Tổng Kho 1)',
      age: '',
      tax: '',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: 'Kim Anh',
      department: 'TỔNG KHO',
      createBy: 'Nguyễn Thị Kim Anh',
      createDate: '27/03/2023 10:49',
      status: '',
    },
    {
      key: '3',
      stt: 3,
      crm: '100444682 ',
      sap: '',
      name: 'Nội Thất Hòa Trinh',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '0966697661',
      email: '',
      address: 'Số 76 đường Nguyễn Sinh Sắc, Phường Cửa Nam, Thành phố Vinh, Nghệ An',
      resources: 'HT NPP/ ĐL/ SRNQ',
      branch: 'ĐL Trang Anh - Nghệ An',
      age: '',
      tax: '',
      group: 'Thiết kế& T.công',
      job: 'Nội thất văn phòng',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Đl Trang Anh - Nghệ An',
      department: '',
      createBy: 'ĐL Trang Anh - Nghệ An',
      createDate: '27/03/2023 10:30',
      status: '',
    },
    {
      key: '4',
      stt: 4,
      crm: '100444681 ',
      sap: '',
      name: 'Công Ty TNHH IOT Minh Hoàng',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: 'Số 63, Đường Hùng Vương 3, Phường Hoàng Văn Thụ, Thành phố Bắc Giang, Bắc Giang',
      resources: 'KHÁC',
      branch: 'Công Ty Cổ Phần Gỗ An Cường',
      age: '',
      tax: '2400857434',
      group: 'Đại lý',
      job: 'Ngành nghề khác',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Phương Thảo',
      department: 'CHI NHÁNH HÀ NỘI',
      createBy: 'Nguyễn Phương Thảo',
      createDate: '27/03/2023 10:29',
      status: '',
    },
    {
      key: '5',
      stt: 5,
      crm: '100444680 ',
      sap: '17119328',
      name: 'Xưởng Gỗ Công Nghiệp Đức Thơm',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: 'Xã Thọ Bình, Huyện Triệu Sơn, Thanh Hóa',
      resources: 'HT SHOWROOM',
      branch: 'SR HN (Chương Dương Độ)',
      age: '',
      tax: '',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Chi Linh',
      department: 'CHI NHÁNH HÀ NỘI',
      createBy: 'Trần Ngọc Chi Linh',
      createDate: '27/03/2023 9:44',
      status: '',
    },
    {
      key: '6',
      stt: 6,
      crm: '100444679 ',
      sap: '',
      name: 'Công Ty TNHH Tư Vấn Thương Mại Truyền Thông Liên Thành',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: '443/52 Lê Văn Sỹ, Phường 12, Quận 3, Hồ Chí Minh',
      resources: 'HT SHOWROOM',
      branch: 'Công Ty Cổ Phần Gỗ An Cường',
      age: '',
      tax: '314444944',
      group: '',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: '',
      department: '',
      createBy: 'Bùi Minh Hiếu',
      createDate: '26/03/2023 14:41',
      status: '',
    },
    {
      key: '7',
      stt: 7,
      crm: '100444678 ',
      sap: '',
      name: 'Công Ty TNHH Đầu Tư Và Xây Dựng Phcons',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: 'hoadon@gmail.com',
      address: '46 Đường Số 1, Khu Nhà ở Hưng Phú, Phường Tam Phú, Thành Phố Thủ Đức, Hồ Chí Minh',
      resources: 'HT SHOWROOM',
      branch: 'SR HCM (Vinhomes Grand Park Q9)',
      age: '',
      tax: '315746539',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: 'Bích Phương (Sale)',
      department: 'SHOWROOM',
      createBy: 'Nguyễn Thị Bích Phương (Sales)',
      createDate: '26/03/2023 8:58',
      status: '',
    },
    {
      key: '8',
      stt: 8,
      crm: '100444677 ',
      sap: '',
      name: 'Xưởng Nội Thất TUDO',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '0947160246',
      email: '',
      address: 'Lương Định Của, Phường Trà Bá, Thành phố Pleiku, Gia Lai',
      resources: 'HT NPP/ ĐL/ SRNQ',
      branch: 'Công Ty Cổ Phần Gỗ An Cường',
      age: '',
      tax: '',
      group: '',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: '',
      department: '',
      createBy: 'Trần Hoàng Khoa',
      createDate: '25/03/2023 18:35',
      status: '',
    },
    {
      key: '9',
      stt: 9,
      crm: '100444676 ',
      sap: '',
      name: 'Nội Thất Thiên Ân CNC & Funiture',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '0388936956',
      email: '',
      address: '79 Dương Thành Đạt, Thành phố Pleiku, Gia Lai',
      resources: 'HT NPP/ ĐL/ SRNQ',
      branch: 'Công Ty Cổ Phần Gỗ An Cường',
      age: '',
      tax: '',
      group: '',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: '',
      department: '',
      createBy: 'Trần Hoàng Khoa',
      createDate: '25/03/2023 18:08',
      status: '',
    },
    {
      key: '10',
      stt: 10,
      crm: '100444675 ',
      sap: '',
      name: 'Cty CP ĐT TM & PT Dịch Vụ BHC Việt Nam',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: 'Tầng 2, SH18 đường San Hô, khu đô thị Vinhomes Ocean Park, Xã Đa Tốn, Huyện Gia Lâm, Hà Nội',
      resources: 'HT SHOWROOM',
      branch: 'SR HN (Chương Dương Độ)',
      age: '',
      tax: '110250570',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Thu Thủy',
      department: 'CHI NHÁNH HÀ NỘI',
      createBy: 'Nguyễn Thu Thủy',
      createDate: '25/03/2023 16:57',
      status: '',
    },
    {
      key: '11',
      stt: 11,
      crm: '100444676 ',
      sap: '',
      name: 'Nội Thất Thiên Ân CNC & Funiture',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '0388936956',
      email: '',
      address: '79 Dương Thành Đạt, Thành phố Pleiku, Gia Lai',
      resources: 'HT NPP/ ĐL/ SRNQ',
      branch: 'Công Ty Cổ Phần Gỗ An Cường',
      age: '',
      tax: '',
      group: '',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: '',
      department: '',
      createBy: 'Trần Hoàng Khoa',
      createDate: '25/03/2023 18:08',
      status: '',
    },
    {
      key: '12',
      stt: 12,
      crm: '100444675 ',
      sap: '',
      name: 'Cty CP ĐT TM & PT Dịch Vụ BHC Việt Nam',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: 'Tầng 2, SH18 đường San Hô, khu đô thị Vinhomes Ocean Park, Xã Đa Tốn, Huyện Gia Lâm, Hà Nội',
      resources: 'HT SHOWROOM',
      branch: 'SR HN (Chương Dương Độ)',
      age: '',
      tax: '110250570',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Thu Thủy',
      department: 'CHI NHÁNH HÀ NỘI',
      createBy: 'Nguyễn Thu Thủy',
      createDate: '25/03/2023 16:57',
      status: '',
    },
    {
      key: '13',
      stt: 13,
      crm: '100444676 ',
      sap: '',
      name: 'Nội Thất Thiên Ân CNC & Funiture',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '0388936956',
      email: '',
      address: '79 Dương Thành Đạt, Thành phố Pleiku, Gia Lai',
      resources: 'HT NPP/ ĐL/ SRNQ',
      branch: 'Công Ty Cổ Phần Gỗ An Cường',
      age: '',
      tax: '',
      group: '',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: '',
      department: '',
      createBy: 'Trần Hoàng Khoa',
      createDate: '25/03/2023 18:08',
      status: '',
    },
    {
      key: '14',
      stt: 14,
      crm: '100444675 ',
      sap: '',
      name: 'Cty CP ĐT TM & PT Dịch Vụ BHC Việt Nam',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: 'Tầng 2, SH18 đường San Hô, khu đô thị Vinhomes Ocean Park, Xã Đa Tốn, Huyện Gia Lâm, Hà Nội',
      resources: 'HT SHOWROOM',
      branch: 'SR HN (Chương Dương Độ)',
      age: '',
      tax: '110250570',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Thu Thủy',
      department: 'CHI NHÁNH HÀ NỘI',
      createBy: 'Nguyễn Thu Thủy',
      createDate: '25/03/2023 16:57',
      status: '',
    },
    {
      key: '15',
      stt: 15,
      crm: '100444676 ',
      sap: '',
      name: 'Nội Thất Thiên Ân CNC & Funiture',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '0388936956',
      email: '',
      address: '79 Dương Thành Đạt, Thành phố Pleiku, Gia Lai',
      resources: 'HT NPP/ ĐL/ SRNQ',
      branch: 'Công Ty Cổ Phần Gỗ An Cường',
      age: '',
      tax: '',
      group: '',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: '',
      department: '',
      createBy: 'Trần Hoàng Khoa',
      createDate: '25/03/2023 18:08',
      status: '',
    },
    {
      key: '16',
      stt: 16,
      crm: '100444675 ',
      sap: '',
      name: 'Cty CP ĐT TM & PT Dịch Vụ BHC Việt Nam',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: 'Tầng 2, SH18 đường San Hô, khu đô thị Vinhomes Ocean Park, Xã Đa Tốn, Huyện Gia Lâm, Hà Nội',
      resources: 'HT SHOWROOM',
      branch: 'SR HN (Chương Dương Độ)',
      age: '',
      tax: '110250570',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Thu Thủy',
      department: 'CHI NHÁNH HÀ NỘI',
      createBy: 'Nguyễn Thu Thủy',
      createDate: '25/03/2023 16:57',
      status: '',
    },
    {
      key: '17',
      stt: 17,
      crm: '100444676 ',
      sap: '',
      name: 'Nội Thất Thiên Ân CNC & Funiture',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '0388936956',
      email: '',
      address: '79 Dương Thành Đạt, Thành phố Pleiku, Gia Lai',
      resources: 'HT NPP/ ĐL/ SRNQ',
      branch: 'Công Ty Cổ Phần Gỗ An Cường',
      age: '',
      tax: '',
      group: '',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: '',
      department: '',
      createBy: 'Trần Hoàng Khoa',
      createDate: '25/03/2023 18:08',
      status: '',
    },
    {
      key: '18',
      stt: 18,
      crm: '100444675 ',
      sap: '',
      name: 'Cty CP ĐT TM & PT Dịch Vụ BHC Việt Nam',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: 'Tầng 2, SH18 đường San Hô, khu đô thị Vinhomes Ocean Park, Xã Đa Tốn, Huyện Gia Lâm, Hà Nội',
      resources: 'HT SHOWROOM',
      branch: 'SR HN (Chương Dương Độ)',
      age: '',
      tax: '110250570',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Thu Thủy',
      department: 'CHI NHÁNH HÀ NỘI',
      createBy: 'Nguyễn Thu Thủy',
      createDate: '25/03/2023 16:57',
      status: '',
    },
    {
      key: '19',
      stt: 19,
      crm: '100444676 ',
      sap: '',
      name: 'Nội Thất Thiên Ân CNC & Funiture',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '0388936956',
      email: '',
      address: '79 Dương Thành Đạt, Thành phố Pleiku, Gia Lai',
      resources: 'HT NPP/ ĐL/ SRNQ',
      branch: 'Công Ty Cổ Phần Gỗ An Cường',
      age: '',
      tax: '',
      group: '',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: '',
      department: '',
      createBy: 'Trần Hoàng Khoa',
      createDate: '25/03/2023 18:08',
      status: '',
    },
    {
      key: '20',
      stt: 20,
      crm: '100444675 ',
      sap: '',
      name: 'Cty CP ĐT TM & PT Dịch Vụ BHC Việt Nam',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: 'Tầng 2, SH18 đường San Hô, khu đô thị Vinhomes Ocean Park, Xã Đa Tốn, Huyện Gia Lâm, Hà Nội',
      resources: 'HT SHOWROOM',
      branch: 'SR HN (Chương Dương Độ)',
      age: '',
      tax: '110250570',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Thu Thủy',
      department: 'CHI NHÁNH HÀ NỘI',
      createBy: 'Nguyễn Thu Thủy',
      createDate: '25/03/2023 16:57',
      status: '',
    },
    {
      key: '21',
      stt: 21,
      crm: '100444676 ',
      sap: '',
      name: 'Nội Thất Thiên Ân CNC & Funiture',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '0388936956',
      email: '',
      address: '79 Dương Thành Đạt, Thành phố Pleiku, Gia Lai',
      resources: 'HT NPP/ ĐL/ SRNQ',
      branch: 'Công Ty Cổ Phần Gỗ An Cường',
      age: '',
      tax: '',
      group: '',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực miền Nam',
      description: '',
      business: '',
      department: '',
      createBy: 'Trần Hoàng Khoa',
      createDate: '25/03/2023 18:08',
      status: '',
    },
    {
      key: '22',
      stt: 22,
      crm: '100444675 ',
      sap: '',
      name: 'Cty CP ĐT TM & PT Dịch Vụ BHC Việt Nam',
      market: 'Trong nước',
      customerType: 'Doanh nghiệp',
      phone: '',
      email: '',
      address: 'Tầng 2, SH18 đường San Hô, khu đô thị Vinhomes Ocean Park, Xã Đa Tốn, Huyện Gia Lâm, Hà Nội',
      resources: 'HT SHOWROOM',
      branch: 'SR HN (Chương Dương Độ)',
      age: '',
      tax: '110250570',
      group: 'Thiết kế& T.công',
      job: 'Nội thất tổng hợp',
      area: 'Khu vực Miền Bắc',
      description: '',
      business: 'Thu Thủy',
      department: 'CHI NHÁNH HÀ NỘI',
      createBy: 'Nguyễn Thu Thủy',
      createDate: '25/03/2023 16:57',
      status: '',
    },
  ]);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext onDragEnd={onDragEnd}>
      <SortableContext
        // rowKey array
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="key"
          columns={columns.sort()}
          dataSource={dataSource}
          scroll={{ x: 'auto' }}
          className={'border'}
          pagination={{ pageSize: 10 }}
        />
      </SortableContext>
    </DndContext>

  );
}

export default CustomTable;