import PageTabs from '@components/shared/PageTabs';
import ItemForm from './ItemForm';
import PaymentType from './PaymentType';
import SellersInformationForm from './SellersInformationForm';
import { useState } from 'react';

const CreatePaymentLink = () => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [_title, setTitle] = useState('All Terminals');
  const terminalTabs = ['All Terminals', 'Assigned Terminals'];
  return (
    <div className="bg-[#fff] p-6 grid gap-y-4">
      <PageTabs tabsHeadsNames={terminalTabs} setCurrentTabName={setTitle} />
      <SellersInformationForm />
      <ItemForm />
      <PaymentType />
    </div>
  );
};

export default CreatePaymentLink;
