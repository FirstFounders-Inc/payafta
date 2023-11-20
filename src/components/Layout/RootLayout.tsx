import SideNav from '@components/AppNav/SideNav';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <section className="grid grid-cols-[260px_1fr] h-screen overflow-auto bg-[#f9f9f9] p-6">
      <aside className=" h-[680px] sticky top-0">
        <SideNav />
      </aside>
      <main className=" h-screen grid auto-rows-max-auto overflow-auto">
        {children}
      </main>
    </section>
  );
};

export default RootLayout;
