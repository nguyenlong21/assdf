import { Input, InputProps } from 'antd';
import React from 'react';
import { Search } from 'base/ui/components/Icons';
import { uiStore } from 'stores/root_store';

export default function CustomInputSearch(props: InputProps) {
  return (
    <Input.Search
      {...props}
      className={
        uiStore.theme +
        ' [&_input]:rounded-l-sm [&_input:hover]:!border-primary/80 [&_input:focus]:!border-primary/80 [&_button]:!rounded-r-sm [&_button]:!bg-transparent [&_button]:!shadow-none [&_button]:!border [&_button]:!border-l-0 [&_button]:!px-2 [&_button]:!border-[#D9D9D9] [&_button:hover]:!border-primary [&_button:hover]:!border-l ' +
        props.className
      }
      enterButton={<Search className="fill-primary" />}
    />
  );
}
