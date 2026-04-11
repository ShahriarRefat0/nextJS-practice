const ReviewSkeleton = () => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md animate-pulse">
      
      {/* User */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

        <div className="space-y-2">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-3 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mt-3">
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-4 h-4 bg-gray-200 rounded"></div>
      </div>

      {/* Text */}
      <div className="mt-3 space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-4">
        <div className="h-3 w-20 bg-gray-200 rounded"></div>
        <div className="h-3 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;