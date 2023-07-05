import React from 'react';
import { Link } from 'react-router-dom';

export type BreadcrumbProps = {
  itemRender: Array<{
    label: React.ReactNode | string;
    href?: string;
  }>;
};

function CustomBreadcrumb() {
  return (
    <div className="min-h-[56px] w-full flex items-center bg-white p-4 gap-2">
      <Link to={'/'} className="text-base leading-[22px] text-black/40">
        Home
      </Link>
      <span className="text-base leading-[22px] text-black/40">/</span>
    </div>
  );
}

export default CustomBreadcrumb;
