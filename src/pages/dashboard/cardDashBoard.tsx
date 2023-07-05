import { Team } from 'base/ui/components/Icons';
import { observer } from 'mobx-react';
import React, { memo } from 'react';
import { uiStore } from 'stores/root_store';

export type CardDashBoardProps = {
  color: string;
  colorDark: string;
  colorLight: string;
  title: string;
  value: string;
  description: string;
  icon: React.FC;
};

function CardDashBoard(props: CardDashBoardProps) {
  return (
    <div className={`${uiStore.theme === 'green' ? props.color : uiStore.theme === 'gray' ? props.colorDark : props.colorLight}
     rounded-sm flex pt-4 pb-3 pl-6 pr-[27px] justify-between`}
    >
      <div className="">
        <h3 className="text-white text-title font-medium m-0 uppercase mb-[12px] leading-[18px]">{props.title}</h3>
        <h1 className="text-[28px] text-white font-semibold m-0 leading-[34px] mb-[5px]">{props.value}</h1>
        <p className="text-[14px] font-medium text-white m-0 leading-4">{props.description}</p>
      </div>
      {/* icon */}
      <div className="flex items-center">{<props.icon />}</div>
    </div>
  );
}

export default memo(observer(CardDashBoard));
