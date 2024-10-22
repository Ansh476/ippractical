import React from 'react';
import { useParams } from 'react-router-dom';
import { objlist } from '../utils/mockdata'; 

const Cardview = () => {
  const { cardId } = useParams(); 
  const cardData = objlist.find((item) => item.data.id === parseInt(cardId));

  if (!cardData) {
    return <div className="text-center">Card not found</div>;
  }
  
  const { img, name } = cardData.data;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-72 p-4 bg-white shadow-md rounded-lg">
        <img className="h-48 w-full object-cover rounded-lg" src={img} alt={name} />
        <h2 className="text-xl text-center font-semibold mt-4">{name}</h2>
      </div>
    </div>
  );
};

export default Cardview;
