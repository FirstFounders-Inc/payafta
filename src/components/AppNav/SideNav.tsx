import Logo from '@assets/svg/Logo.svg?react';

const SideNav = () => {
  return (
    <div className="bg-[#F2F2F2] flex flex-col border-[1px] border-[#F2F2F2] text-[#334155]  h-[680px] rounded-[8px] p-5">
      <div>
        <Logo className="w-[176px] h-[64px]" />
      </div>
    </div>
  );
};

export default SideNav;
