import Navbar from './components/Navbar';
import SafePayment from './components/SafePayment';

const Home = () => {
  return (
    <div className="px-[24px] md:px-[48px] mt-[24px]">
      <Navbar />
      <SafePayment />
    </div>
  );
};

export default Home;
