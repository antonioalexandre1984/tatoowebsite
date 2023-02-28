import { headerData } from "../data";
import { Nav } from "./Nav";
import { NavMobile } from './NavMobile';
import { Socials } from './Socials';
import { TiThMenuOutline } from 'react-icons/ti';
import { useEffect, useState } from "react";

export function Header() {
  const { logo } = headerData;
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header className={`${isActive
      ? ' h-[100px] lg:h-[110px] shadow-lg'
      : ' h-[120px] lg:h-[150px]'} fixed bg-white left-0 right-0 z-10 max-w-[1440px] container mx-auto`}>
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <a href="">
          <img className='w-[188px] h-[90px]' src={logo} alt="" />
        </a>
        {/* nav initially hidden - show on desktop */}
        <div className="hidden xl:flex">
          <Nav />
        </div>
        {/* nav menu btn - showing by default - hidden on desktop mode */}
        <div
          onClick={() => setIsMobile(!isMobile)}
          className='xl:hidden absolute right-[5%] bg-dark text-white rounded-md p-2 cursor-pointer'>
          <TiThMenuOutline className="text-3xl" />
        </div>
        {/* nav mobile - showing by default - hidden on desktop */}
        <div className={`
        ${isMobile
            ? 'max-h-full' : 'max-h-0'} 
          ${isActive
            ? 'top-[100px] lg:top-[110px]'
            : 'top-[120px] lg:top-[150px]'}
           fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300 `}>
          <NavMobile />
        </div>
        {/* socials icons - initially hidden - show on desktop*/}
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
}