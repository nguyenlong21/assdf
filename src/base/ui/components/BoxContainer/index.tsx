import React from 'react';

export type BoxContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BoxContainer(props: BoxContainerProps) {
  return (
    <div className="flex-1 pt-[12px] px-4">
      <div className={'bg-white p-[12px] flex flex-col gap-default rounded-[2px] h-full ' + props.className}>
        {props.children}
      </div>
    </div>
  );
}
