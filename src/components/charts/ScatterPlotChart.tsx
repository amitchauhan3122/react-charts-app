'use client';
import React, {memo} from 'react';
import { Scatter } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const ScatterChart = () => {
    const options = {
        scales: {
            y: {
            beginAtZero: true,
            },
        },
    };

    // const data = {
    //     datasets: [
    //         {
    //             label: 'A dataset',
    //             data: Array.from({ length: 100 }, () => ({
    //                 x: faker.number.int({ min: -100, max: 100 }),
    //                 y: faker.number.int({ min: -100, max: 100 }),
    //             })),
    //             backgroundColor: 'rgba(255, 99, 132, 1)',
    //         },
    //     ],
    // };

    const data = useSelector((state: RootState) => state.chart.data.Scatter);

    return <Scatter options={options} data={data} />;
 
 }
 
 export default memo(ScatterChart);