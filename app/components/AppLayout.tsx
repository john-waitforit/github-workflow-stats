import { PropsWithChildren, ReactElement } from 'react';
import AppHeader from './AppHeader';

type AppLayoutProps = {};

function AppLayout({
  children,
}: PropsWithChildren<AppLayoutProps>): ReactElement {
  return (
    <>
      <div className="header">
        <AppHeader />
      </div>
      <div className="container mx-auto">{children}</div>
    </>
  );
}

export default AppLayout;
