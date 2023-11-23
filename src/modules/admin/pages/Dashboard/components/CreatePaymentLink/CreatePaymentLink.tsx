import PageTabs from '@components/shared/PageTabs';

import { useState } from 'react';
import Buyer from './Buyer';
import Seller from './Seller';

const CreatePaymentLink = () => {

  const [title, setTitle] = useState('Buyer');
  const terminalTabs = ['Buyer', 'Seller'];
  return (
    <div className="bg-[#fff] p-6 grid gap-y-4">
      <PageTabs tabsHeadsNames={terminalTabs} setCurrentTabName={setTitle} />
      {title === 'Buyer' && <Buyer/>}
      {title === 'Seller' && <Seller />}
     
    </div>
  );
};

export default CreatePaymentLink;
