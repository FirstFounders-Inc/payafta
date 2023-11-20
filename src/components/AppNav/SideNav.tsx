import Logo from '@assets/svg/Logo.svg?react';
import { ADMIN_SIDENAV } from 'constant/sideNav';
import { NavLink, useLocation } from 'react-router-dom';
import LogOutButton from '@assets/icons/power-button.svg?react'
import Avatar from '@assets/svg/avartar.svg?react'

const SideNav = () => {
  const location = useLocation()
  const pathName = location.pathname.split('/')[2]
  return (
    <div className="bg-[#FFFFFF] flex flex-col border-[1px] border-[#F2F2F2] text-[#666666]  h-[680px] rounded-[8px] p-5">
      <div>
        <Logo className="w-[176px] h-[64px]" />
      </div>

      <div className="pt-8 lex flex-col gap-2 ">
        {ADMIN_SIDENAV.map(sidenav => (
          <NavLink
            className="text-[#666666] text-[14px]  font-[400] active:text-[#1F7EAD] active:bg-[#E9F5FB] h-[56px] active:font-[400]  flex items-center gap-3"
            to={sidenav.path}
            key={sidenav.name}
            onClick={e => {
              if (sidenav.disabled) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            {pathName === sidenav.path ? (
              <sidenav.IconBlue />
            ) : (
              <sidenav.Icon />
            )}

            <span className="active:text-[#1F7EAD] text-[#666666]">
              {sidenav.name}
            </span>
          </NavLink>
        ))}
      </div>
      <div className="flex justify-between  items-center py-8 pl-4 mt-auto">
        <div className='flex items-center '>
          <Avatar/>
          <p className='pl-2'>Paul Simeon</p>
        </div>
        <div>
          <LogOutButton/>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
