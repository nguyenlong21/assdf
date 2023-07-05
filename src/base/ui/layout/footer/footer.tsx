import React from 'react';
import { BiCopyright } from 'react-icons/bi';

export const Footer = React.memo(() => {
  return (
    <footer className="lg:flex lg:justify-between text-center py-[13px] text-default leading-[22px] text-[#898EA8] px-[16px]">
      <span className="flex items-center font-medium justify-center">
        Copyright <BiCopyright className="mx-1" /> 2023
        <a href="/" className="ml-1 text-[#0070B1]">
          Nguyễn Phi Long
        </a>
        <p className="font-normal mb-0">. All rights reserved.</p>
      </span>
      <span>Version 2.0</span>
    </footer>
  );
});
