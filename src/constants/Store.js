import { create } from "zustand";

export const useDataForPost = create((set)=>({
    itemInfo:[],
    setItemInfo:(newinfo)=>set((state)=>({
        itemInfo:[...state.itemInfo,newinfo]
    })),
    tempInfo:[],
    setTempInfo:(newtemp)=>set((state)=>({
        tempInfo:[...state.tempInfo,newtemp]
    }))
}))