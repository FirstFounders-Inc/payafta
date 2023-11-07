import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
// import SafePayment from './components/SafePayment';

const Home = () => {
  return (
    <div className="px-[24px] lg:px-[48px] mt-[24px]">
      <Navbar />
      {/* <SafePayment /> */}
      <HowItWorks />
    </div>
  );
};

export default Home;
