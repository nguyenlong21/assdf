import React, { memo, useEffect, useState } from 'react';
import { Button, ButtonProps } from 'antd';
import { uiStore } from 'stores/root_store';

function CustomButton(props: ButtonProps) {
  const [type, setType] = useState('');
  const [color, setColor] = useState(props.color !== undefined ? props.color : 'primary');
  useEffect(() => {
    const checkType = () => {
      switch (props.type) {
        case 'primary':
          setType(
            `${!props.color && '!bg-primary'} text-white border-primary hover:!text-white ${props.color === undefined ? 'hover:!bg-primary/80' : 'hover:opacity-80'
            } `,
          );
          break;
        default:
          setType('text-dark hover:!text-primary hover:!border-primary ');
      }
    };
    checkType();
  }, []);

  return (
    <Button
      {...props}
      className={
        uiStore.theme +
        ' rounded-sm text-default [&_div]:!shadow-none flex gap-2 px-3 items-center justify-center ' +
        type +
        ' ' +
        props.className
      }
      style={{ background: color, borderColor: color, ...props.style }}
    >
      {props.children}
    </Button>
  );
}

export default memo(CustomButton);
