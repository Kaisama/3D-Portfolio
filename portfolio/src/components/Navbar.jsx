import { Link } from "react-router-dom";
import { useState } from "react";
import { close, logo, menu } from "../assets";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle,setToggle]=useState(false);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link 
          to="/" 
          className="flex items-center gap-2" 
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="object-contain w-11 h-11" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Akshat &nbsp;<span className=" sm:block">Bisht</span>
          </p>
        </Link>
        <ul className="flex-row hidden gap-10 list-none ">
          {navLinks.map((nav) => (
            <li 
              key={nav.id} 
              className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end flex-1 sm:hidden">
            <img src={ toggle ?close:menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-auto"
            onClick={()=>setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-12 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl cursor-po  `}>
            <ul className="flex-row items-center justify-end list-none">
          {navLinks.map((nav) => (
            <li 
              key={nav.id} 
              className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-poppins font-medium cursor-pointer`}
              onClick={() =>{ 
                setToggle(!toggle);
                setActive(nav.title);
            
            }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
