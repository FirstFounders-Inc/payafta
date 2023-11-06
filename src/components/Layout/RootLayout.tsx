import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <section>
      <aside>Hi</aside>
      <main>{children}</main>
    </section>
  );
};

export default RootLayout;
