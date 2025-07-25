'use client';
import React, {memo} from 'react';
import { Radar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const RadarChart = () => {
    // const data = {
    //     labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    //     datasets: [
    //         {
    //         label: '# of Votes',
    //         data: [2, 9, 3, 5, 2, 3],
    //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //         borderColor: 'rgba(255, 99, 132, 1)',
    //         borderWidth: 1,
    //         },
    //     ],
    // };

    const data = useSelector((state: RootState) => state.chart.data.Radar);

    return <Radar data={data} />;
 
 }
 
 export default memo(RadarChart);