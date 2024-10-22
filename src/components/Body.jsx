import React, { useState, useEffect } from 'react';
import { objlist } from '../utils/mockdata';
import { Link } from 'react-router-dom';
import Cardcomp from './Cardcomp';

const Body = () => {
  const [listofobj, setlistofobj] = useState(objlist);  
  const [searchtext, setsearchtext] = useState("");      
  const [filteredList, setFilteredList] = useState(objlist);  

  useEffect(() => {
    if (searchtext === "") {
      setFilteredList(listofobj);  
    } else {
      const filteredObj = listofobj.filter((obj) =>
        obj.data.name.toLowerCase().includes(searchtext.toLowerCase())
      );
      setFilteredList(filteredObj); 
    }
  }, [searchtext, listofobj]);

  return (
    <div className='h-screen px-10 py-6'>
      <div className='mb-6'>
        <label htmlFor="search" className='mr-2'>Search:</label>
        <input
          type="text"
          className='border-black border-2 text-black px-2 py-1 rounded-md'
          id='search'
          value={searchtext}
          onChange={(e) => setsearchtext(e.target.value)}
        />
      </div>
      <div className='flex flex-wrap gap-8 justify-center'>
        {filteredList.map((obj) => (
          <Link to={`/card/${obj.data.id}`} key={obj.data.id}>
            <Cardcomp objdata={obj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
