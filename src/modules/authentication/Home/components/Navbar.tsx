import Logo from '@assets/svg/Logo.svg';
const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img src={Logo} alt="company logo" />
      </div>
      <div className="flex gap-6">
        <button className="border-[2px] border-[#333333] rounded-[48px] px-[18px] flex items-center py-2">
          Login
        </button>
        <button className="hidden md:block rounded-[48px] px-[18px] bg-[#03045B] text-[#fff]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
