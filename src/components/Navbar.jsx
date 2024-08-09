'use client'

import useStore from '@/store/store'
import React from 'react'

const Navbar = () => {

    const { undoData, redoData } = useStore();

    return (
        <nav className='h-12 px-8 bg-emerald-600 text-white flex items-center justify-between'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Spreadsheet</h1>
            <div className='flex gap-4'>
                <button
                    className='border py-1 px-2 rounded-md bg-white text-emerald-600 hover:bg-emerald-600 hover:text-white duration-300'
                    onClick={undoData}
                >
                    Undo
                </button>
                <button
                    className='border py-1 px-2 rounded-md bg-white text-emerald-600 hover:bg-emerald-600 hover:text-white duration-300'
                    onClick={redoData}
                >
                    Redo
                </button>
            </div>
        </nav>
    )
}

export default Navbar