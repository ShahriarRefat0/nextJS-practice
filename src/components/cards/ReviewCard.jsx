import Image from "next/image";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
      
      {/* User Info */}
      <div className="flex items-center gap-3">
        {/* <img
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full object-cover"
        /> */}

<Image
 width={54}
 height={56}
  src={review.photo} 
  alt="user" 
  className="w-14 h-14 rounded-full object-cover border"/>

        <div>
          <h3 className="font-semibold text-gray-800">{review.user}</h3>
          <p className="text-sm text-gray-500">{review.email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mt-3">
        {Array(review.rating)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mt-3">{review.review}</p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        
        {/* Date */}
        <span>
          {new Date(review.date).toLocaleDateString()}
        </span>

        {/* Likes */}
        <span>
          ❤️ {review.likes.length} Likes
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;