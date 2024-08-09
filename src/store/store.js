const { create } = require("zustand");

const initialState = Array.from({ length: 100 }, () =>
  new Array(10).fill({
    data: "",
    validation: null,
    align: "text-left",
    fontSize: "text-sm",
  })
);

const useStore = create((set) => ({
  gridCellData: initialState,
  previousData: [],
  forwardData: [],

  updateCellData: (row, col, data) => {
    set((state) => {
      const newGrid = [...state.gridCellData];
      const cell = newGrid[row][col];

      const newPrevious = [...state.previousData, state.gridCellData];
      newGrid[row][col] = { ...cell, data };

      return {
        gridCellData: newGrid,
        previousData: newPrevious,
        forwardData: [],
      };
    });
  },

  formatData: (row, col, format) => {
    set((state) => {
      const newGrid = [...state.gridCellData];
      newGrid[row][col] = { ...newGrid[row][col], ...format };
      return { gridCellData: newGrid };
    });
  },

  undoData: () => {
    set((state) => {});
  },

  redoData: () => {
    set((state) => {});
  },
}));

export default useStore;
