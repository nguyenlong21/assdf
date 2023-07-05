import { Collapse, CollapseProps } from 'antd';
import React from 'react';
import { ChevronUp } from '../Icons';

const { Panel } = Collapse;

interface CollapseWrapperProps extends CollapseProps {
  children: React.ReactNode;
  title: string;
  customClassName?: string;
  headerColor?: string;
  titleClassName?: string;
}

function CollapseWrapper(props: CollapseWrapperProps) {
  return (
    <Collapse
      {...props}
      defaultActiveKey={['1']}
      expandIconPosition={'end'}
      expandIcon={({ isActive }) => <ChevronUp className={`${isActive ? '' : 'rotate-180'} !fill-black/40`} />}
      bordered={props.bordered === undefined ? false : props.bordered}
      className={
        '!rounded-[3px] shadow-box bg-white h-fit ' +
        `${props.bordered
          ? ' [&_.ant-collapse-content]:!border-t-0  [&_.ant-collapse-item]:border-b-[#F0F0F0] border-[#F0F0F0] '
          : ''
        }` +
        props.headerColor +
        ' ' +
        props.customClassName
      }
    >
      <Panel
        header={
          <h2 className={'text-title font-semibold text-textColor m-0 ' + props.titleClassName}>{props.title}</h2>
        }
        key="1"
        className={'!rounded-[3px]'}
      >
        {props.children}
      </Panel>
    </Collapse>
  );
}

export default CollapseWrapper;
