const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      
      {/* Image */}
      <div className="w-full h-80 bg-gray-300 rounded-xl"></div>

      {/* Content */}
      <div className="mt-6 space-y-4">
        
        {/* Title */}
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>

        {/* Category */}
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>

        {/* Price */}
        <div className="h-5 bg-gray-300 rounded w-1/6"></div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <div className="w-32 h-10 bg-gray-300 rounded-lg"></div>
          <div className="w-32 h-10 bg-gray-200 rounded-lg"></div>
        </div>

      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;