'use client'

import useStore from '@/store/store';
import React, { useState } from 'react'

const Cell = () => {

    const { gridCellData, updateCellData } = useStore();
    const [loadData, setLoadData] = useState(10);

    return (
        <>
            <div className='grid xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3'>
                {
                    gridCellData.slice(0, loadData).map((row, rowIdx) => (
                        row.map((cell, colIdx) => (
                            <input
                                key={`${rowIdx}-${colIdx}`}
                                type="text"
                                value={cell.data}
                                onChange={(e) => updateCellData(rowIdx, colIdx, e.target.value)}
                                className={`border border-gray-300 p-1 ${cell.align} ${cell.fontSize}`}
                            />
                        ))
                    ))
                }
            </div>
            <div className='flex justify-center my-2'>
                {
                    loadData < gridCellData.length && <button
                        onClick={() => setLoadData((prev) => prev + 10)}
                        className='border-2 rounded-md w-max h-max p-2'
                    >
                        Load More
                    </button>
                }
            </div>
        </>
    )
}

export default Cell