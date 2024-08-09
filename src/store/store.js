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
    set((state) => {
      if (state.previousData.length === 0) return state;

      const previous = state.previousData[state.previousData.length - 1];
      const newPreviousData = state.previousData.slice(0, -1);

      return {
        gridCellData: previous,
        previousData: newPreviousData,
        forwardData: [state.gridCellData, ...state.forwardData],
      };
    });
  },

  redoData: () => {
    set((state) => {
      if (state.forwardData.length === 0) return state;

      const forward = state.forwardData[0];
      const newForward = state.previousData.slice(1);
      console.log(forward)
      return {
        gridCellData: forward,
        previousData: [...state.previousData, state.gridCellData],
        forwardData: newForward,
      };
    });
  },
}));

export default useStore;
