const { create } = require("zustand");

const initialState = Array.from({length: 100}, () => new Array(10).fill(''));

export default useStore = create((set) => ({
    gridCellData: initialState,
    updateCell: (row, col, data) => {
        set((state) => {
            const newGrid = [...state.gridCellData];
            newGrid[row][col] = data;
            return {gridCellData: newGrid}
        })
    },
}))