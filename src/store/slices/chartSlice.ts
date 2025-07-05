'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker';

interface ChartDataset {
  label: string;
  data: number[] |{ x: number; y: number }[];
  borderColor?: string | string[];
  backgroundColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
}

interface ChartData {
  labels?: string[];
  datasets: ChartDataset[];
}


interface ChartState {
    activeChart: string;
    data: Record<string, ChartData>
}

const LineChartlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const LineChartData = {
    labels:LineChartlabels,
    datasets: [
        {
            label: 'Dataset 1',
            data: LineChartlabels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: LineChartlabels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
}

const BarChartlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const BarChartlabelsData = {
    labels:BarChartlabels,
    datasets: [
        {
            label: 'Dataset 1',
            data: BarChartlabels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: BarChartlabels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const PieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const DoughnutChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const RadarChartData = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
        {
        label: '# of Votes',
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        },
    ],
};


const AreaChartData = {
    labels: LineChartlabels,
    datasets: [
        {
        fill: true,
        label: 'Dataset 2',
        data: LineChartlabels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const ScatterChartData = {
    datasets: [
        {
            label: 'A dataset',
            data: Array.from({ length: 100 }, () => ({
                x: faker.number.int({ min: -100, max: 100 }),
                y: faker.number.int({ min: -100, max: 100 }),
            })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};

const initialState: ChartState = {
    activeChart: 'Line',
    data: {
        Line:LineChartData,
        Bar:BarChartlabelsData,
        Pie: PieChartData,
        Doughnut:DoughnutChartData,
        Radar: RadarChartData,
        Area: AreaChartData,
        Scatter: ScatterChartData

    }
}

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers:{
        setActiveChart:(state, action: PayloadAction<string>) => {
            state.activeChart = action.payload;
        },
        updateChartData: (state, action: PayloadAction<{ chartId: string; data: ChartData }>) => {
            state.data[action.payload.chartId] = action.payload.data;
        }
    }
})

export const { setActiveChart, updateChartData } = chartSlice.actions;
export default chartSlice.reducer;