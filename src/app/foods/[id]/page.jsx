// src/app/food/[id]/page.jsx

import Link from "next/link";

export function generateStaticParams() {
  return [{ id: '52975' }, { id: '52911' }, { id: '52826' }]
}

const getSingleFood = async (id)=>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)
const data = await res.json();

return data.details || data.food || null;
}

const FoodDetailsPage = async ({ params }) => {
  const {id} = await params;

const food = await getSingleFood(id);
if (!food) {
    return <h2>Food not found</h2>
}
  return (
    <div className="max-w-5xl mx-auto p-6">
      
      {/* Image */}
      <img
        src={food.foodImg}
        alt={food.title}
        className="w-full h-80 object-cover rounded-xl"
      />

      {/* Content */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{food.title}</h1>
        <p className="text-gray-500 mt-2">{food.category}</p>

        <p className="text-blue-600 text-xl font-semibold mt-3">
          ৳ {food.price}
        </p>

        {/* Description (fake যদি না থাকে) */}
        <p className="mt-4 text-gray-700">
          Delicious {food.title} from our kitchen. Freshly made and full of taste!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Add to Cart
          </button>

          <Link href={'/foods'} className="border px-6 py-2 rounded-lg hover:bg-gray-100">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;