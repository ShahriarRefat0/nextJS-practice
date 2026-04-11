"use client"
import React from 'react';

const InputSearch = () => {
    
    const handleSubmit =(e)=>{
e.preventDefault()
const form = e.target;
const value = form.search.value;
console.log(value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                name='search' type="text" className='px-1 py-3 border border-gray-500 rounded-2xl w-2xl' placeholder='Enter Food Name' />
                <button className='bg-amber-300 text-black rounded-xl py-2 px-3'>Search</button>
            </form>
        </div>
    );
};

export default InputSearch;