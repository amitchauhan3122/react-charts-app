'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChartState {
    activeChart: string;
}

const initialState: ChartState = {
    activeChart: 'Line',
}

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers:{
        setActiveChart:(state, action: PayloadAction<string>) => {
            state.activeChart = action.payload;
        }
    }
})

export const { setActiveChart } = chartSlice.actions;
export default chartSlice.reducer;