import React from 'react';

const Navbar = () => {
  return (
    <nav className='h-14 w-full bg-black fixed top-0 left-0 shadow-md z-10'>
      <div className='max-w-7xl mx-auto px-8 flex justify-between items-center h-full'>
        <div className="text-white text-lg font-semibold">MyApp</div>
        <ul className='flex space-x-8 text-white'>
          <li className='hover:text-gray-400 cursor-pointer'>Home</li>
          <li className='hover:text-gray-400 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
