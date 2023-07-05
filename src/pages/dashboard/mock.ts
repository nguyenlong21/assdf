import { ChartType } from 'base/ui/components/CustomChart/models';
import { Customer, IdCard, Mission, Phone, Team } from 'base/ui/components/Icons';
import { CardDashBoardProps } from './cardDashBoard';
import React from 'react';

// SỐ LƯỢNG KH GHÉ THĂM NPP/SRNQ THÁNG NÀY NÀY VÀ THÁNG TRƯỚC
export const dataBarRaceVisit: ChartType[][] = [
  [
    { name: 'Tháng hiện tại', label: 'NPP Ái Linh - Hà Nội', value: 57 },
    { name: 'Tháng hiện tại', label: 'NPP Ngọc Thơm - Gia Lai', value: 30 },
    { name: 'Tháng hiện tại', label: 'ĐL Quang Minh - Quảng Bình', value: 40 },
    { name: 'Tháng hiện tại', label: 'SRNQ Thái Tuấn - Hải Phòng', value: 46 },
    { name: 'Tháng hiện tại', label: 'SRNQ Duyên Sinh - Lạng Sơn', value: 58 },
    { name: 'Tháng hiện tại', label: 'NPP Thanh Tâm - Cần Thơ', value: 31 },
    { name: 'Tháng hiện tại', label: 'SRNQ Hồng Đức - Thanh Hóa', value: 59 },
    { name: 'Tháng hiện tại', label: 'NPP Nghệ thuật - Đắk Lắk', value: 79 },
    { name: 'Tháng hiện tại', label: 'ĐL Duy Cường - Đà Lạc', value: 25 },
    { name: 'Tháng hiện tại', label: 'NPP Kim Hoàng Gia - BRVT', value: 24 },
    { name: 'Tháng hiện tại', label: 'ĐL Trang Anh - Nghệ An', value: 23 },
    { name: 'Tháng hiện tại', label: 'ĐL Trần Tấn Lộc - Trà Vinh', value: 19 },
    { name: 'Tháng hiện tại', label: 'NPP Ái Linh - Hòa Bình', value: 18 },
  ],
  [
    { name: 'Tháng trước', label: 'NPP Ái Linh - Hà Nội', value: 34 },
    { name: 'Tháng trước', label: 'NPP Ngọc Thơm - Gia Lai', value: 32 },
    { name: 'Tháng trước', label: 'ĐL Quang Minh - Quảng Bình', value: 37 },
    { name: 'Tháng trước', label: 'SRNQ Thái Tuấn - Hải Phòng', value: 40 },
    { name: 'Tháng trước', label: 'SRNQ Duyên Sinh - Lạng Sơn', value: 40 },
    { name: 'Tháng trước', label: 'NPP Thanh Tâm - Cần Thơ', value: 26 },
    { name: 'Tháng trước', label: 'SRNQ Hồng Đức - Thanh Hóa', value: 26 },
    { name: 'Tháng trước', label: 'NPP Nghệ thuật - Đắk Lắk', value: 48 },
    { name: 'Tháng trước', label: 'ĐL Duy Cường - Đà Lạc', value: 26 },
    { name: 'Tháng trước', label: 'NPP Kim Hoàng Gia - BRVT', value: 24 },
    { name: 'Tháng trước', label: 'ĐL Trang Anh - Nghệ An', value: 20 },
    { name: 'Tháng trước', label: 'ĐL Trần Tấn Lộc - Trà Vinh', value: 19 },
    { name: 'Tháng trước', label: 'NPP Ái Linh - Hòa Bình', value: 8 },
  ],
];
// SỐ LƯỢNG KH GHÉ THĂM SHOWROOM THÁNG NÀY NÀY VÀ THÁNG TRƯỚC
export const dataVisitShowroom: ChartType[][] = [
  [
    { name: 'Tháng hiện tại', label: 'SR HCM (297 NVT Phú Nhuận)', value: 57 },
    { name: 'Tháng hiện tại', label: 'SR HN (Chương Dương Độ)', value: 30 },
    { name: 'Tháng hiện tại', label: 'SR HN (Cầu Giấy)', value: 40 },
    { name: 'Tháng hiện tại', label: 'SR HCM (39 NCT Q2)', value: 46 },
    { name: 'Tháng hiện tại', label: 'SR Đà Nẵng', value: 58 },
    { name: 'Tháng hiện tại', label: 'SR HCM (816 NVL Q7)', value: 31 },
    { name: 'Tháng hiện tại', label: 'SR HCM (Sư Vạn Hạnh Q10)', value: 59 },
    { name: 'Tháng hiện tại', label: 'Trung Hiếu 2', value: 79 },
    { name: 'Tháng hiện tại', label: 'SR HCM (Vinhomes Grand Park Q9)', value: 25 },
    { name: 'Tháng hiện tại', label: 'SR HCM (SDP 1)', value: 24 },
    { name: 'Tháng hiện tại', label: 'SR HCM (SDP 2)', value: 23 },
    { name: 'Tháng hiện tại', label: 'SR BD (Tổng kho 1)', value: 19 },
    { name: 'Tháng hiện tại', label: 'SR BD (NM Tân Uyên)', value: 24 },
    { name: 'Tháng hiện tại', label: 'SR BD (Tổng kho 3)', value: 18 },
    { name: 'Tháng hiện tại', label: 'SR BD (MN Đất Cuốc)', value: 48 },
    { name: 'Tháng hiện tại', label: 'SR HCM (KCX Tân Thuận Q7)', value: 31 },
  ],
  [
    { name: 'Tháng trước', label: 'SR HCM (297 NVT Phú Nhuận)', value: 34 },
    { name: 'Tháng trước', label: 'SR HN (Chương Dương Độ)', value: 32 },
    { name: 'Tháng trước', label: 'SR HN (Cầu Giấy)', value: 37 },
    { name: 'Tháng trước', label: 'SR HCM (39 NCT Q2)', value: 40 },
    { name: 'Tháng trước', label: 'SR Đà Nẵng', value: 40 },
    { name: 'Tháng trước', label: 'SR HCM (816 NVL Q7)', value: 26 },
    { name: 'Tháng trước', label: 'SR HCM (Sư Vạn Hạnh Q10)', value: 26 },
    { name: 'Tháng trước', label: 'Trung Hiếu 2', value: 48 },
    { name: 'Tháng trước', label: 'SR HCM (Vinhomes Grand Park Q9)', value: 26 },
    { name: 'Tháng trước', label: 'SR HCM (SDP 1)', value: 24 },
    { name: 'Tháng trước', label: 'SR HCM (SDP 2)', value: 20 },
    { name: 'Tháng trước', label: 'SR BD (Tổng kho 1)', value: 19 },
    { name: 'Tháng trước', label: 'SR BD (NM Tân Uyên)', value: 34 },
    { name: 'Tháng trước', label: 'SR BD (Tổng kho 3)', value: 50 },
    { name: 'Tháng trước', label: 'SR BD (MN Đất Cuốc)', value: 32 },
    { name: 'Tháng trước', label: 'SR HCM (KCX Tân Thuận Q7)', value: 8 },
  ],
];

// TOP 10 TỈNH THÀNH CÓ SỐ LƯỢNG KHÁCH HÀNG CAO NHẤT

export const dataBarTop10: ChartType[][] = [
  [
    { name: 'Số lượng khách hàng', label: 'Hà Nội', value: 5200 },
    { name: 'Số lượng khách hàng', label: 'Thanh Hóa', value: 47000 },
    { name: 'Số lượng khách hàng', label: 'Quảng Ninh', value: 43000 },
    { name: 'Số lượng khách hàng', label: 'Thái Nguyên', value: 11000 },
    { name: 'Số lượng khách hàng', label: 'Hải Phòng', value: 7230 },
    { name: 'Số lượng khách hàng', label: 'Đà Nẵng', value: 17852 },
    { name: 'Số lượng khách hàng', label: 'Bình Dương', value: 39000 },
    { name: 'Số lượng khách hàng', label: 'Đồng Nai', value: 21000 },
    { name: 'Số lượng khách hàng', label: 'Bà Rịa-Vũng Tàu', value: 28520 },
    { name: 'Số lượng khách hàng', label: 'Hồ Chí Minh', value: 29200 },
  ],
];

// TỔNG HỢP THỊ HIẾU SẢN PHẨM
export const dataProductTrend: ChartType[][] = [
  [
    { name: 'Tổng số lượng lượt view và like', label: 'Gạch Terrazzo 40x40cm xám', value: 8 },
    { name: 'Tổng số lượng lượt view và like', label: 'Gạch giả đá hoa cương', value: 18 },
    { name: 'Tổng số lượng lượt view và like', label: 'Gạch Ceramic  50x50cm', value: 19 },
    { name: 'Tổng số lượng lượt view và like', label: 'Gạch viglacera 40x40cm', value: 20 },
    { name: 'Tổng số lượng lượt view và like', label: 'Gạch đá tự nhiên', value: 23 },
    { name: 'Tổng số lượng lượt view và like', label: 'Gạch nung bốn lỗ', value: 24 },
    { name: 'Tổng số lượng lượt view và like', label: 'Gạch nung  hai lỗ', value: 25 },
    { name: 'Tổng số lượng lượt view và like', label: 'Sơn Nippon 5 lít', value: 26 },
    { name: 'Tổng số lượng lượt view và like', label: 'Sơn Dulux ngoài trời 18 lít', value: 27 },
    { name: 'Tổng số lượng lượt view và like', label: 'Lưới thủy tinh 4x4 70g/m2', value: 38 },
    { name: 'Tổng số lượng lượt view và like', label: 'Gỗ xoan', value: 49 },
    { name: 'Tổng số lượng lượt view và like', label: 'Gỗ lim', value: 57 },
    { name: 'Tổng số lượng lượt view và like', label: 'Gỗ tần bì', value: 95 },
  ],
];

// TỔNG HỢP ĐIỂM TRƯNG BÀY
export const dataDisplay: ChartType[][] = [
  [
    { name: 'Số lượng', label: 'Miền Nam', value: 20 },
    { name: 'Số lượng', label: 'Miền Bắc', value: 16 },
    { name: 'Số lượng', label: 'Miền Trung', value: 8 },
  ],
  [
    { name: 'Giá trị', label: 'Miền Nam', value: 26209351 },
    { name: 'Giá trị', label: 'Miền Bắc', value: 96332874 },
    { name: 'Giá trị', label: 'Miền Trung', value: 30073261 },
  ],
];

// TỔNG HỢP XỬ LÝ KHIẾU NẠI THEO NHÓM HÀNG

export const dataComplain: ChartType[][] = [
  [
    { name: 'Số ca bảo hành', label: 'Acrylic noline', value: 18 },
    { name: 'Số ca bảo hành', label: 'Acrylic phủ trên MDF chống ẩm', value: 42 },
    { name: 'Số ca bảo hành', label: 'Foli Acrylicung', value: 51 },
    { name: 'Số ca bảo hành', label: 'MFC', value: 27 },
  ],
  [
    { name: 'Giá trị bảo hành', label: 'Acrylic noline', value: 82953041 },
    { name: 'Giá trị bảo hành', label: 'Acrylic phủ trên MDF chống ẩm', value: 47953041 },
    { name: 'Giá trị bảo hành', label: 'Foli Acrylic', value: 59953041 },
    { name: 'Giá trị bảo hành', label: 'MFC', value: 100953041 },
  ],
];

// TỔNG HỢP XỬ LÝ KHIẾU NẠI LỖI THƯỜNG GẶP

export const dataComplainError: ChartType[][] = [
  [
    { name: 'Số ca bảo hành', label: 'Mối, Mọt', value: 53 },
    { name: 'Số ca bảo hành', label: 'Trầy, Bể, Mẻ', value: 12 },
    { name: 'Số ca bảo hành', label: 'Cong Vênh', value: 122 },
    { name: 'Số ca bảo hành', label: 'Lệch màu, Cong vênh, Bề mặt phồng rộp, Bong tróc', value: 48 },
    { name: 'Số ca bảo hành', label: 'Text', value: 8 },
  ],
  [
    { name: 'Giá trị bảo hành', label: 'Mối, Mọt', value: 65953041 },
    { name: 'Giá trị bảo hành', label: 'Trầy, Bể, Mẻ', value: 28953041 },
    { name: 'Giá trị bảo hành', label: 'Cong Vênh', value: 100953041 },
    { name: 'Giá trị bảo hành', label: 'Lệch màu, Cong vênh, Bề mặt phồng rộp, Bong tróc', value: 59953041 },
    { name: 'Giá trị bảo hành', label: 'Text', value: 67953041 },
  ],
];

// THỊ HIẾU KHÁCH HÀNG ĐẾN SHOWROOM

export const dataProductTrendShowroom: ChartType[][] = [
  [
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: 'TD002', value: 8 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: '62000103000', value: 18 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: '61000000058', value: 19 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: 'LK 1149 A9', value: 20 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: '785621325', value: 23 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: 'LF 16624541', value: 24 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: 'LK 5455644', value: 25 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: '62001454221', value: 26 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: '60543245411', value: 27 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: 'LK 265465', value: 38 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: '600000147 A', value: 49 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: 'LK 4456 A', value: 57 },
    { name: 'Số lượt Like SP (Ghé thăm) trên CRM', label: 'MFC - MS 388 EV', value: 95 },
  ],
];

// TỔNG HỢP XUẤT NHẬP TỒN CATALOG
export const dataCatalog: ChartType[][] = [
  [
    { name: 'Tồn kho', label: 'MFC Master', value: 3000 },
    { name: 'Tồn kho', label: 'BST MFC-LK ', value: 120 },
    { name: 'Tồn kho', label: '6100000058', value: 70 },
    { name: 'Tồn kho', label: 'Lk 1149 A9', value: 1700 },
    { name: 'Tồn kho', label: '785621325', value: 500 },
    { name: 'Tồn kho', label: 'LF 16624541', value: 0 },
    { name: 'Tồn kho', label: 'LK 5455644', value: 5600 },
    { name: 'Tồn kho', label: '62001454221', value: 1000 },
    { name: 'Tồn kho', label: 'KingDom Bassic', value: 5900 },
    { name: 'Tồn kho', label: 'Sàn in A4 ver 2.2022', value: 8900 },
    { name: 'Tồn kho', label: 'Acry Master Ver 3.2022', value: 2400 },
    { name: 'Tồn kho', label: 'Arilux Plus Ver 1.2022', value: 7200 },
    { name: 'Tồn kho', label: 'Sàn in A4 ver 2.2022', value: 9300 },
  ],
];

// Cập nhật hoạt động
export const ActivityUpdate: CardDashBoardProps[] = [
  {
    title: 'Ghé thăm',
    value: '884/ 2,380',
    description: 'Số lượng kỳ này/ Kỳ trước',
    color: 'bg-[#1EBD9B]',
    colorDark: 'bg-[#8667D3]',
    colorLight: 'bg-[#02A886]',
    icon: Team,
  },
  {
    title: 'Thăm hỏi khách hàng',
    value: '13/ 313',
    description: 'Số lượng chưa hoàn thành/ Hoàn thành',
    color: 'bg-[#4074B5]',
    colorDark: 'bg-[#4074B5]',
    colorLight: 'bg-[#4074B5]',
    icon: Customer,
  },
  {
    title: 'Nhiệm vụ khác',
    value: '2/ 211',
    description: 'Số lượng chưa hoàn thành/ Hoàn thành',
    color: 'bg-[#F76949]',
    colorDark: 'bg-[#09CCC4]',
    colorLight: 'bg-[#F76949]',
    icon: Mission,
  },
];

// Bảng Thông tin
export const NewsBoard: CardDashBoardProps[] = [
  {
    title: 'khách hàng',
    value: '250,333,333',
    description: 'Tổng số khách hàng trên toàn hệ thống',
    color: 'bg-[#E76F51]',
    colorDark: 'bg-[#2667B2]',
    colorLight: 'bg-[#2096EF]',
    icon: Team,
  },
  {
    title: 'Liên hệ',
    value: '53,516',
    description: 'Tổng số thông tin liên hệ',
    color: 'bg-[#F4A261]',
    colorDark: 'bg-[#09CCC4]',
    colorLight: 'bg-[#F4A261]',
    icon: IdCard,
  },
  {
    title: 'Công việc',
    value: '6,099',
    description: 'Tổng số công việc đang chờ xử lý',
    color: 'bg-[#77BFA3]',
    colorDark: 'bg-[#8667D3]',
    colorLight: 'bg-[#5B6BC1]',
    icon: Phone,
  },
];
