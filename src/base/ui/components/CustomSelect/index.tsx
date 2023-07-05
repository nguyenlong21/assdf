import { Select, SelectProps } from 'antd';
import React from 'react';
import './styles.css';
import { uiStore } from 'stores/root_store';

const CustomSelect: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <Select
      {...props}
      className={
        uiStore.theme +
        ' [&>.ant-select-selector]:rounded-sm [&>.ant-select-selector]:border [&>.ant-select-selector]:border-border [&>.ant-select-selector]:!px-3 text-textColor ' +
        '[&>.ant-select-selector:hover]:!border-primary ' +
        props.className
      }
    />
  );
};

export default CustomSelect;
