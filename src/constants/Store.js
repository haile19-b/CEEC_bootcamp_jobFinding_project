import { create } from "zustand";

export const useDataForPost = create((set)=>({
    itemInfo:{},
    setItemInfo:(newinfo)=>set((state)=>({
        itemInfo:{...newinfo,...state.itemInfo}
    })),
    tempInfo:[],
    setTempInfo:(newtemp)=>set((state)=>({
        tempInfo:[...state.tempInfo,newtemp]
    }))
}))


export const ManageData = (newdata,prev)=>{
    return {...newdata,...prev}
}