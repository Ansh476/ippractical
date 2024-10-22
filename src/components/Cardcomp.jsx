import React from 'react';

const Cardcomp = (props) => {
  const { objdata } = props;
  const { img, name } = objdata?.data;

  return (
    <div className='bg-white shadow-md rounded-lg p-4 h-80 w-72'>
      <img src={img} alt={name} className='h-60 w-full object-cover rounded-lg mb-3' />
      <h3 className='text-lg text-center font-semibold'>{name}</h3>
    </div>
  );
};

export default Cardcomp;
