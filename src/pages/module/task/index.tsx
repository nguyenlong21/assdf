import * as Icon from 'base/ui/components/Icons';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { moduleItem, ModuleModel } from '../mock';
import ThemeConfig from 'pages/dashboard/changeTheme';
import { uiStore } from 'stores/root_store';

export const createTask = () => {
  document.title = 'Công việc - iCRM System';

  return observer(() => {
    const { id } = useParams();
    // Lưu vị trí của color
    // nếu số lượng item lớn hơn số màu thì quay ngược lại màu số 0
    let colorIndex = 0;
    const colors = [
      { backgroundColor: '#F0FDFE', border: '#C5EFF5', color: '#0BA0C7' },
      { backgroundColor: '#EEFFF8', border: '#C1EAE0', color: '#1EBD9B' },
      { backgroundColor: '#F3F7FF', border: '#B9E4F8', color: '#4074B5' },
      { backgroundColor: '#F8FCE7', border: '#DEE8B4', color: '#8E9A5D' },
      { backgroundColor: '#FFF9EA', border: '#FFE8AC', color: '#E3B724' },
      { backgroundColor: '#FFF7F0', border: '#FFE0C6', color: '#F76949' },
      { backgroundColor: '#FFF4F4', border: '#FFDDDD', color: '#CA6B8D' },
      { backgroundColor: '#F4F0FF', border: '#E6DCFF', color: '#7352C7' },
    ];
    const colorsThemeDark = [
      { backgroundColor: '#F2F5F7', border: '#E3E3E4', color: '#354A5F' },
      { backgroundColor: '#F3F9FF', border: '#D7E9FD', color: '#2667B2' },
      { backgroundColor: '#EEFFF8', border: '#C1EAE0', color: '#1EBD9B' },
      { backgroundColor: '#F8FCE7', border: '#DEE8B4', color: '#8E9A5D' },
      { backgroundColor: '#FAF8ED', border: '#EFEAC7', color: '#ABA680' },
      { backgroundColor: '#FCF1F0', border: '#F9DEDD', color: '#E49794' },
      { backgroundColor: '#FCF6FB', border: '#ECDFEB', color: '#975F93' },
      { backgroundColor: '#F4F0FF', border: '#E6DCFF', color: '#8667D3' },
    ];
    // lấy id trên url để render giao diện
    const [dataRender, setDataRender] = useState<ModuleModel>();
    // const dataRender = moduleItem.find((item) => item.id === id);
    useEffect(() => {
      setDataRender(moduleItem.find((item) => item.id === id));
    }, [id]);

    return (
      <div className="mt-[2px] flex flex-col h-full">
        <div className="min-h-[56px] w-full flex items-center bg-white p-4 gap-2">
          <Link to={'/'} className="text-base leading-[22px] text-black/40">
            Home
          </Link>
          <span className="text-base leading-[22px] text-black/40">/</span>
          <span className="text-[17px] font-medium text-dark leading-6">{dataRender ? dataRender.title : ''}</span>
        </div>
        {/* Thay đổi theme */}
        <ThemeConfig />
        <div className="flex-1 pt-[12px] px-4">
          <div className="bg-white py-2 px-[12px] flex flex-col gap-default rounded-[2px] h-full">
            {dataRender &&
              dataRender.data.map((item, index) => (
                <div className="" key={index}>
                  <div className="bg-[#F0F2F4] px-[12px] py-2 rounded-t-[2px]">
                    <span className="text-base font-semibold text-dark">{item.title}</span>
                  </div>
                  <div className="pt-[12px] px-[12px] grid grid-cols-4 gap-[12px]">
                    {item.childrent.map((chilItem, idx) => {
                      return (
                        <Link to={''} key={idx}>
                          <div
                            style={{
                              backgroundColor: uiStore.theme === 'gray' ? colorsThemeDark[colorIndex].backgroundColor : colors[colorIndex].backgroundColor,
                              borderColor: uiStore.theme === 'gray' ? colorsThemeDark[colorIndex].border : colors[colorIndex].border,
                            }}
                            className={`min-h-[108px] border rounded flex flex-col justify-center items-center gap-[6px]`}
                          >
                            <chilItem.icon width="48" height="48" style={{ fill: uiStore.theme === 'gray' ? colorsThemeDark[colorIndex].color : colors[colorIndex].color }} />
                            <span className="text-base font-medium text-dark">{chilItem.description}</span>
                          </div>
                          <div className="hidden">
                            {colorIndex === colors.length - 1 ? (colorIndex = 0) : colorIndex++}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  });
};
