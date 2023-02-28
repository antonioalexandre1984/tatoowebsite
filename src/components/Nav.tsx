import { navData } from '../data'

export function Nav() {
  const { items } = navData;
  return (
    <ul className='flex gap-x-[58px]'>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <a className='link hover:border-b-2 hover:border-dark transition duration-300' href={item.href}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}