import React from 'react';
import { uiPresenter, uiStore } from 'stores/root_store';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

const Layout = ({
  header,
  footer,
  sidebar,
  content,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
}) => {
  let theme = uiStore.theme;

  const handleShowSidebar = () => {
    if (uiStore.sidebarOpen) {
      uiPresenter.setSubmenuOpen(
        uiStore,
        toJS(uiStore.submenuOpen.id),
        toJS(uiStore.submenuOpen.childId),
        toJS(uiStore.submenuOpen.active),
        false,
      );
      uiPresenter.setSidebarOpen(uiStore, false);
    } else {
      uiPresenter.setSidebarOpen(uiStore, true);
    }
  };

  return (
    <>
      <div onClick={handleShowSidebar} className={`${uiStore.sidebarOpen ? 'block lg:hidden' : 'hidden'} fixed top-0 left-0 w-full h-full bg-[#00000080] z-[9]`} />
      <div className={`${theme} flex grid-cols-2 relative min-h-screen`}>
        <div className="col-span-1 bg-primary">{sidebar}</div>
        <div className={`w-full overflow-y-auto flex flex-col justify-between ${uiStore.theme === 'gray' ? 'bg-backgroundDark' : 'bg-background'}`}>
          <div className="flex-1">
            <div className="flex flex-col h-full w-full">
              {header}
              <div className="flex-1">
                {content}
              </div>
            </div>
          </div>
          {footer}
        </div>
      </div>
    </>
  );
};

export type LayoutHOC = <T = {}>(Content: React.ComponentType<T>) => React.ComponentType<T>;

export function createLoginLayout() {
  return function withLayout<T = {}>(Content: React.ComponentType<T>) {
    const LayoutApp = observer(Layout);
    return (props: T) => <Layout header={null} footer={null} sidebar={null} content={<Content {...props} />} />;
  };
}

export function createDefaultLayout(
  Header: React.ComponentType,
  Sidebar: React.ComponentType,
  Footer: React.ComponentType,
) {
  return function withLayout<T = {}>(Content: React.ComponentType<T>) {
    const LayoutApp = observer(Layout);
    return (props: T) => (
      <LayoutApp header={<Header />} footer={<Footer />} sidebar={<Sidebar />} content={<Content {...props} />} />
    );
  };
}
