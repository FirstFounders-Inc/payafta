
import Button from '@components/shared/Button';
import ItemForm from '../ItemForm';
import PaymentType from '../PaymentType';
import SellersInformationForm from '../SellersInformationForm';


const Buyer = () => {
  return (
    <div>
      <SellersInformationForm />
      <ItemForm />
      <PaymentType />
      <div className='flex items-center justify-center pt-4'>
        <Button disabled className='px-12 rounded-[48px] py-[12px] text-[#fff]'>Create Payment Link</Button>
      </div>
    </div>
  );
};

export default Buyer;
