import React from 'react';
import './header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./Asset 2.png" alt="logo" width={130} height={100} />

         {/* Menu */}
        <div className="flexCenter h-menu">
          <button className=" border border-[#3E64FB] py-1.5 px-2 rounded font-semibold text-[#526ede] hover:bg-[#526ede] hover:text-[#fafafa] duration-300">
            <a href="https://www.touron.in/" target='__blank'>View Our Website</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
