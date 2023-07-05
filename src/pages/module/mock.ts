import {
  CircleUser,
  CustomerCircle,
  GlobeEyeCircle,
  IconProps,
  ListUserCircle,
  Project,
  UserExclamationCircle,
  Teams,
  ChartArrowUpRight,
  FileInfomation,
  ListBoardPencilCircle,
  CompetitorManagement,
  ImportWarehouse,
  TransferWarehouse,
  ExportWarehouse,
  MaterialClassification,
  MaterialGroup,
  BoxClose,
  Warehouse,
  BookWithSynchronizeArrows,
  BookWithPlus,
  BookWithClock,
  Building,
  CompanyBranch,
  Computer,
  Mobile,
  UserGroup,
  UserCard,
  ChartMixedLineUpCircle,
  FileWithCog,
  Marketing,
  Letter,
  UserWithBag,
  ClipBoardUserCircle,
  User,
  BookWithCogCircle,
  PhoneVolumeCircle,
  CogWithWrenchCircle,
  CustomerCircles,
  Projects,

} from 'base/ui/components/Icons';

export interface ModuleModel {
  id: string;
  title: string;
  data: Array<{
    title: string;
    childrent: Array<{
      icon: React.FC<IconProps>;
      description: string;
    }>;
  }>;
}

export const moduleItem: Array<ModuleModel> = [
  {
    id: 'Task',
    title: 'Công việc',
    data: [
      {
        title: 'Ghé thăm',
        childrent: [
          {
            icon: User,
            description: 'Ghé thăm',
          },
          {
            icon: GlobeEyeCircle,
            description: 'Thị hiếu khách hàng',
          },
        ],
      },
      {
        title: 'Hoạt động CSKH',
        childrent: [
          {
            icon: CustomerCircles,
            description: 'Thăm hỏi khách hàng',
          },
          {
            icon: UserWithBag,
            description: 'Nhiệm vụ',
          },
        ],
      },
      {
        title: 'Quản lý công việc',
        childrent: [
          {
            icon: Projects,
            description: 'Công việc đã giao',
          },
          {
            icon: ListUserCircle,
            description: 'Công việc được phân công',
          },
          {
            icon: UserExclamationCircle,
            description: 'Công việc đang theo dõi',
          },
        ],
      },
    ],
  },
  {
    id: 'Customer',
    title: 'Khách hàng',
    data: [
      {
        title: 'Thông tin khách hàng',
        childrent: [
          {
            icon: Teams,
            description: 'Khách hàng',
          },
          {
            icon: ClipBoardUserCircle,
            description: 'Liên hệ',
          },
        ],
      },
      {
        title: 'Ghé thăm',
        childrent: [
          {
            icon: User,
            description: 'Ghé thăm',
          },
        ],
      },
      {
        title: 'Hướng dẫn sử dụng',
        childrent: [
          {
            icon: BookWithCogCircle,
            description: 'Khách hàng',
          },
          {
            icon: PhoneVolumeCircle,
            description: 'Liên hệ',
          },
        ],
      },
      {
        title: 'Dữ liệu nền',
        childrent: [
          {
            icon: ChartMixedLineUpCircle,
            description: 'Danh mục dùng chung',
          },
        ],
      },
    ],
  },
  {
    id: 'Project',
    title: 'Dự án',
    data: [
      {
        title: 'Quản lý dự án',
        childrent: [
          {
            icon: ChartArrowUpRight,
            description: 'Báo cáo',
          },
          {
            icon: FileInfomation,
            description: 'Thông tin ban đầu',
          },
          {
            icon: ListBoardPencilCircle,
            description: 'Update dự án',
          },
          {
            icon: CompetitorManagement,
            description: 'Quản lý đối thủ',
          },
        ],
      },
    ],
  },
  {
    id: 'Catalogue',
    title: 'Catalogue',
    data: [
      {
        title: 'Catalogue',
        childrent: [
          {
            icon: ListBoardPencilCircle,
            description: 'Cập nhật tồn kho đầu kỳ',
          },
          {
            icon: ImportWarehouse,
            description: 'Nhập kho',
          },
          {
            icon: TransferWarehouse,
            description: 'Chuyển kho',
          },
          {
            icon: ExportWarehouse,
            description: 'Xuất kho',
          },
        ],
      },
      {
        title: 'Hướng dẫn sử dụng',
        childrent: [
          {
            icon: ListBoardPencilCircle,
            description: 'Cập nhật tồn kho đầu kỳ',
          },
          {
            icon: ImportWarehouse,
            description: 'Nhập kho',
          },
          {
            icon: TransferWarehouse,
            description: 'Chuyển kho',
          },
          {
            icon: ExportWarehouse,
            description: 'Xuất kho',
          },
        ],
      },
      {
        title: 'Sản phẩm',
        childrent: [
          {
            icon: MaterialClassification,
            description: 'Phân loại vật tư',
          },
          {
            icon: MaterialGroup,
            description: 'Nhóm vật tư',
          },
          {
            icon: BoxClose,
            description: 'Sản phẩm',
          },
        ],
      },
      {
        title: 'Dữ liệu nền',
        childrent: [
          {
            icon: Warehouse,
            description: 'Kho',
          },
        ],
      },
    ],
  },
  {
    id: 'Guarantee',
    title: 'XLKN & Bảo hành',
    data: [
      {
        title: 'Bảo hành - Khiếu nại',
        childrent: [
          {
            icon: BookWithCogCircle,
            description: 'Đăng ký bảo hành',
          },
          {
            icon: BookWithSynchronizeArrows,
            description: 'Xử lý khiếu nại',
          },
          {
            icon: CogWithWrenchCircle,
            description: 'Bảo hành',
          },
        ],
      },
      {
        title: 'Hướng dẫn sử dụng',
        childrent: [
          {
            icon: BookWithCogCircle,
            description: 'Đăng ký bảo hành',
          },
          {
            icon: BookWithPlus,
            description: 'Tạo yêu cầu bảo hành',
          },
        ],
      },
      {
        title: 'Sản phẩm',
        childrent: [
          {
            icon: MaterialClassification,
            description: 'Phân loại vật tư',
          },
          {
            icon: MaterialGroup,
            description: 'Nhóm vật tư',
          },
          {
            icon: BoxClose,
            description: 'Sản phẩm',
          },
        ],
      },
      {
        title: 'Dữ liệu nền',
        childrent: [
          {
            icon: BookWithClock,
            description: 'Thời gian bảo hành',
          },
        ],
      },
    ],
  },
  {
    id: 'System',
    title: 'Hệ thống',
    data: [
      {
        title: 'Dữ liệu nền',
        childrent: [
          {
            icon: Building,
            description: 'Công ty',
          },
          {
            icon: CompanyBranch,
            description: 'Chi nhánh',
          },
          {
            icon: Computer,
            description: 'Phân quyền chức năng web',
          },
          {
            icon: Mobile,
            description: 'Phân quyền chức năng mobile',
          },
          {
            icon: UserGroup,
            description: 'Nhóm người dùng',
          },
          {
            icon: CircleUser,
            description: 'Nhân viên',
          },
          {
            icon: UserCard,
            description: 'Tài khoản',
          },
        ],
      },
    ],
  },
  {
    id: 'Development',
    title: 'Development',
    data: [
      {
        title: 'Dữ liệu nền',
        childrent: [
          {
            icon: Computer,
            description: 'Phân quyền chức năng web',
          },
          {
            icon: Mobile,
            description: 'Phân quyền chức năng mobile',
          },
          {
            icon: UserGroup,
            description: 'Nhóm người dùng',
          },

          {
            icon: UserCard,
            description: 'Tài khoản',
          },
        ],
      },
    ],
  },
  {
    id: 'Marketing',
    title: 'Marketing',
    data: [
      {
        title: 'Thông tin khách hàng',
        childrent: [
          {
            icon: Teams,
            description: 'Khách hàng',
          },
          {
            icon: ClipBoardUserCircle,
            description: 'Liên hệ',
          },
        ],
      },
      {
        title: 'Chiến dịch Marketing',
        childrent: [
          {
            icon: ChartMixedLineUpCircle,
            description: 'Nhóm mục tiêu',
          },
          {
            icon: FileWithCog,
            description: 'Quản lý nội dung',
          },
          {
            icon: Marketing,
            description: 'Quản lý chiến dịch',
          },
          {
            icon: Letter,
            description: 'Email Unfollow',
          },
        ],
      },
      {
        title: 'Báo cáo',
        childrent: [
          {
            icon: ListBoardPencilCircle,
            description: 'KH đăng ký nhận bảng tin',
          },
        ],
      },
    ],
  },
];
