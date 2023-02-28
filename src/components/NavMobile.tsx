import { navData } from '../data';
import { Socials } from './Socials';


export function NavMobile() {
  //destructuring nav data
  const { items } = navData;

  return (
    <div className="w-full h-full flex-col justify-evenly overflow-hidden bg-[#dbdbdb]]">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-6">
        {items.map((item, index) => {
          return (
            <li key={index} className="">
              <a href={item.href} className="text-2xl font-primary">{item.name}</a>
            </li>
          );
        })}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </div>
  );
}