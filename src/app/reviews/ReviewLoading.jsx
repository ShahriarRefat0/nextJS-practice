import FoodCardSkeleton from '@/components/skeletons/FoodCardSkeleton ';
import ReviewSkeleton from '@/components/skeletons/ReviewSkeleton';
import { Hind_Siliguri } from 'next/font/google';
import React from 'react';


const ReviewLoading = () => {
    return (
        
        <div className='grid grid-cols-3 gap-5'>
            {
                [...Array(9)].map((_, index)=> (<ReviewSkeleton key={index}></ReviewSkeleton>))
            }
        </div>
    );
};

export default ReviewLoading;