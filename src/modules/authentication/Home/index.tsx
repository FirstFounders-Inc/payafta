// import HowItWorks from './components/HowItWorks';
import BuyerProtection from './components/BuyerProtection';
import Navbar from './components/Navbar';
// import SafePayment from './components/SafePayment';

const Home = () => {
  return (
    <div className="px-[24px] lg:px-[48px] mt-[24px]">
      <Navbar />
      {/* <SafePayment /> */}
      {/* <HowItWorks /> */}
      <BuyerProtection />
    </div>
  );
};

export default Home;
