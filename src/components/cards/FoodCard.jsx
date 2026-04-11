// src/components/FoodCard.jsx

import Link from "next/link";
import CardButton from "../buttons/CardButton";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
    
      {/* Image */}
      <img
        src={food.foodImg}
        alt={food.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg text-black font-semibold">{food.title}</h2>
        <p className="text-gray-500 text-sm">{food.category}</p>

        {/* Price */}
        <p className="text-blue-600 font-bold mt-2">
          ৳ {food.price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <CardButton food={food}></CardButton>

          <Link
            href={`/foods/${food.id}`}
            className="flex-1 text-gray-500 text-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
          >
            View Details
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default FoodCard;