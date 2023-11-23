import ItemForm from './ItemForm';
import PaymentType from './PaymentType';
import SellersInformationForm from './SellersInformationForm';


const CreatePaymentLink = () => {

  

  
  return (
   <div className='bg-[#fff] p-6 grid gap-y-4'>
    <SellersInformationForm/>
    <ItemForm/>
    <PaymentType/>
   </div>
  );
};

export default CreatePaymentLink;
