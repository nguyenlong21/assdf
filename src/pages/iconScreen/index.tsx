import { Breadcrumb, message } from 'antd';
import BoxContainer from 'base/ui/components/BoxContainer';
import React from 'react';
import * as Icons from 'base/ui/components/Icons';

function createIconScreen() {
  return (
    <div className="mt-[2px] flex flex-col h-full">
      <div className="min-h-[56px] flex flex-col w-full bg-white px-4 py-[12px] gap-default">
        <div className="flex items-center justify-between">
          <Breadcrumb
            className="[&_ol_li:last-child]:font-medium [&_ol_li:last-child]:text-dark [&_ol_li:last-child]:text-[17px] [&_ol]:items-center"
            items={[
              {
                title: 'Home',
                href: '/'
              },

              {
                title: 'Icons',
              },
            ]}
          />
          <div className="flex gap-[6px]"></div>
        </div>
      </div>
      <BoxContainer>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,_1fr))] gap-4 ">
          <Item title="Bars">
            <Icons.Bars className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="BarsSort">
            <Icons.BarsSort className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ArrowDown">
            <Icons.ArrowDown className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ChevronDown">
            <Icons.ChevronDown className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ChevronUp">
            <Icons.ChevronUp className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="LayerGroup">
            <Icons.LayerGroup className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ArrowRightFromCircle">
            <Icons.ArrowRightFromCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="SynchronizeArrows">
            <Icons.SynchronizeArrows className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ArrowUpRightFromSquareThin">
            <Icons.ArrowUpRightFromSquareThin className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ArrowUpRightFromSquare">
            <Icons.ArrowUpRightFromSquare className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Location">
            <Icons.Location className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="IdCard">
            <Icons.IdCard className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Phone">
            <Icons.Phone className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Time">
            <Icons.Time className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CircleCheck">
            <Icons.CircleCheck className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Calendar">
            <Icons.Calendar className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Download">
            <Icons.Download className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Upload">
            <Icons.Upload className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Database">
            <Icons.Database className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Plus">
            <Icons.Plus className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Search">
            <Icons.Search className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Filter">
            <Icons.Filter className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Print">
            <Icons.Print className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Thumbtack">
            <Icons.Thumbtack className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Profile">
            <Icons.Profile className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ClipboardUser">
            <Icons.ClipboardUser className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="UserHeadset">
            <Icons.UserHeadset className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="RectangleHistoryCircleUser">
            <Icons.RectangleHistoryCircleUser className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="UserExclamation">
            <Icons.UserExclamation className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Category">
            <Icons.Category className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Cog">
            <Icons.Cog className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CogOutline">
            <Icons.CogOutline className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CircleCog">
            <Icons.CircleCog className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CogWithWrench">
            <Icons.CogWithWrench className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Book">
            <Icons.Book className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="BookWithCog">
            <Icons.BookWithCog className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ClipboardListCheck">
            <Icons.ClipboardListCheck className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ChartLineUp">
            <Icons.ChartLineUp className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="FileChartColumn">
            <Icons.FileChartColumn className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ChartLoaction">
            <Icons.ChartLoaction className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ChartBullhorn">
            <Icons.ChartBullhorn className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ChartMixed">
            <Icons.ChartMixed className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="MarketingGroup">
            <Icons.MarketingGroup className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Bullhorn">
            <Icons.Bullhorn className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Chat">
            <Icons.Chat className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="PhoneVolume">
            <Icons.PhoneVolume className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="FileInvoice">
            <Icons.FileInvoice className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Mission">
            <Icons.Mission className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Team">
            <Icons.Team className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Customer">
            <Icons.Customer className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Bell">
            <Icons.Bell className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="BoxOpen">
            <Icons.BoxOpen className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="BoxClose">
            <Icons.BoxClose className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ChartMixedLineUpCircle">
            <Icons.ChartMixedLineUpCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ChartArrowUpRight">
            <Icons.ChartArrowUpRight className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="BookWithSynchronizeArrows">
            <Icons.BookWithSynchronizeArrows className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="BookBookmarkCircle">
            <Icons.BookBookmarkCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="BookWithPlus">
            <Icons.BookWithPlus className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="BookWithClock">
            <Icons.BookWithClock className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="BookWithCogCircle">
            <Icons.BookWithCogCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="FileWithCog">
            <Icons.FileWithCog className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CogWithWrenchCircle">
            <Icons.CogWithWrenchCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CustomerCircle">
            <Icons.CustomerCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CustomerCircles">
            <Icons.CustomerCircles className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Project">
            <Icons.Project className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Projects">
            <Icons.Projects className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="FolderOpen">
            <Icons.FolderOpen className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="TotalRevennue">
            <Icons.TotalRevennue className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Marketing">
            <Icons.Marketing className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="System">
            <Icons.System className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Teams">
            <Icons.Teams className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CircleUser">
            <Icons.CircleUser className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="User">
            <Icons.User className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ClipboardListCircle">
            <Icons.ClipboardListCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="WrenchCircle">
            <Icons.WrenchCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="NewCircle">
            <Icons.NewCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ListBoardPencilCircle">
            <Icons.ListBoardPencilCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="RotateCircle">
            <Icons.RotateCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ListTimeCircle">
            <Icons.ListTimeCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CheckCircle">
            <Icons.CheckCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="GlobeEyeCircle">
            <Icons.GlobeEyeCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ListUserCircle">
            <Icons.ListUserCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="UserExclamationCircle">
            <Icons.UserExclamationCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="UserGroup">
            <Icons.UserGroup className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="UserCard">
            <Icons.UserCard className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="UserWithBag">
            <Icons.UserWithBag className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ClipBoardUserCircle">
            <Icons.ClipBoardUserCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="FileInfomation">
            <Icons.FileInfomation className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CompetitorManagement">
            <Icons.CompetitorManagement className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ImportWarehouse">
            <Icons.ImportWarehouse className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="TransferWarehouse">
            <Icons.TransferWarehouse className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="ExportWarehouse">
            <Icons.ExportWarehouse className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="MaterialClassification">
            <Icons.MaterialClassification className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="MaterialGroup">
            <Icons.MaterialGroup className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Warehouse">
            <Icons.Warehouse className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Building">
            <Icons.Building className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="CompanyBranch">
            <Icons.CompanyBranch className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Computer">
            <Icons.Computer className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Mobile">
            <Icons.Mobile className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="Letter">
            <Icons.Letter className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="PhoneVolumeCircle">
            <Icons.PhoneVolumeCircle className="!fill-[#011627]" width="25" />
          </Item>
          <Item title="EnglandFlag">
            <Icons.EnglandFlag className="!fill-[#011627]" width="25" />
          </Item>
        </div>
      </BoxContainer>
    </div>
  );
}

function Item({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(title);
        message.success('Coppied "' + title + '" to clipboard.');
      }}
      className="flex flex-col gap-2"
    >
      <div className="w-full h-16 rounded-sm shadow-box flex justify-center items-center">{children}</div>
      <span className="text-[11px] text-black font-medium text-center block w-full overflow-hidden">{title}</span>
    </div>
  );
}

export default createIconScreen;
