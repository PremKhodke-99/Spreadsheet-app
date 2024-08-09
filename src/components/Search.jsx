'use client'

import React, { useState } from 'react'

const Search = () => {

    const [searchValue, setSearchValue] = useState();

    return (
        <div className='my-3 flex justify-center'>
            <input
                type="text"
                placeholder='Search...'
                value={searchValue}
                className='border-2 border-gray-300 py-1 px-2 lg:w-96 md:w-72 sm:w-40 rounded-md'
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    )
}

export default Search