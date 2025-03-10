import { PropsWithChildren, ReactElement } from 'react';

type AppHeaderProps = {};

function AppHeader(props: PropsWithChildren<AppHeaderProps>): ReactElement {
  return (
    <nav className="w-full py-3 bg-blue-50 shadow-md ">
      <div className="container flex justify-end place-content-end">
        <ul className="list-none flex gap-4 text-center">
          <li className="flex gap-2">Hello</li>
        </ul>
      </div>
    </nav>
  );
}

export default AppHeader;
