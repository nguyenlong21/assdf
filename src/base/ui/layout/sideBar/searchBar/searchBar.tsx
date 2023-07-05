import React, { useEffect, useState } from 'react';
import { Highlighter, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Link } from 'react-router-dom';
import { ChildMenu, User } from 'services/user_services';
import './searchBar.css';

type ParentMenu = {
  menuId: string;
  menuName: string;
};

const SearchBarInSideBar = () => {
  const data = JSON.parse(localStorage.getItem('user_session') || '{}') as User;
  const childMenu = data.webPermission?.pageModel;
  const parentMenu = data.webPermission?.menuModel;
  const [selected, setSelected] = useState([]);
  const options: ChildMenu[] = childMenu || [];
  const parents: ParentMenu[] = parentMenu;
  const props: any = {};

  switch (selected) {
    default:
      props.renderMenuItemChildren = (selectedItem: ChildMenu, { text }: any) => {
        if (selectedItem.domainConfig === 1) {
          return (
            <a
              onClick={() => {
                window.location.href = `${selectedItem.domainConfigUrl}${selectedItem.pageUrl}`;
              }}
              className="relative font-bold text-[12px]"
              href="#"
              key={selectedItem.menuId}
            >
              <div className={'uppercase'}>
                <Highlighter search={text}>{selectedItem.pageName}</Highlighter>
              </div>
              <div>
                {parents.map((item, index) => {
                  if (item.menuId === selectedItem.menuId)
                    return (
                      <span key={index} className="text-gray-500 font-medium">
                        {item.menuName}
                      </span>
                    );
                })}
              </div>
            </a>
          );
        } else if (selectedItem.domainConfig === 2) {
          return (
            <Link className="relative font-bold text-[12px]" to={selectedItem.pageUrl} key={selectedItem.menuId}>
              <div className={'uppercase'}>
                <Highlighter search={text}>{selectedItem.pageName}</Highlighter>
              </div>
              <div>
                {parents.map((item, index) => {
                  if (item.menuId === selectedItem.menuId)
                    return (
                      <span key={index} className="text-gray-500 font-medium">
                        {item.menuName}
                      </span>
                    );
                })}
              </div>
            </Link>
          );
        }
      };
      break;
  }

  return (
    <>
      <Typeahead
        autoFocus
        {...props}
        className="z-[1] outline-none border-none rounded-sm !bg-third px-4 py-1 mt-[7px] mb-[13px] text-sm"
        id="basic-example"
        labelKey="pageName"
        onChange={setSelected}
        options={options}
        placeholder="Tìm kiếm"
        selected={selected}
        minLength={1}
        inputProps={{
          className:
            '!outline-none text-sm font-normal text-sidebar_item !bg-third rounded-sm leading-6 placeholder:text-sm',
        }}
      />
    </>
  );
};
export default SearchBarInSideBar;
