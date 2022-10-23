import create from 'zustand';

export const useDataStore = create (( set ) => ({
    dataReady: false,
    updateDataReady: (newData ) => set({ dataReady: newData }),
}));