'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  LineChart as LineIcon,
  BarChart3,
  PieChart as PieIcon,
  Circle,
  Radar,
  Waves,
  ScatterChart,
} from 'lucide-react';
import '@/lib/chartConfig';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setActiveChart } from '@/store/slices/chartSlice';

const LineChart = dynamic(() => import('@/components/charts/LineChart'), { ssr: false });
const BarChart = dynamic(() => import('@/components/charts/BarChart'), { ssr: false });
const PieChart = dynamic(() => import('@/components/charts/PieChart'), { ssr: false });
const DoughnutChart = dynamic(() => import('@/components/charts/DoughnutChart'), { ssr: false });
const RadarChart = dynamic(() => import('@/components/charts/RadarChart'), { ssr: false });
const AreaChart = dynamic(() => import('@/components/charts/AreaChart'), { ssr: false });
const ScatterPlotChart = dynamic(() => import('@/components/charts/ScatterPlotChart'), { ssr: false });

const chartComponents = [
  { id: 'Line', label: 'Line Chart', icon: LineIcon, Component: LineChart },
  { id: 'Bar', label: 'Bar Chart', icon: BarChart3, Component: BarChart },
  { id: 'Pie', label: 'Pie Chart', icon: PieIcon, Component: PieChart },
  { id: 'Doughnut', label: 'Doughnut Chart', icon: Circle, Component: DoughnutChart },
  { id: 'Radar', label: 'Radar Chart', icon: Radar, Component: RadarChart },
  { id: 'Area', label: 'Area Chart', icon: Waves, Component: AreaChart },
  { id: 'Scatter', label: 'Scatter Plot', icon: ScatterChart, Component: ScatterPlotChart },
];

export default function ChartsDashboard() {
  const dispatch = useAppDispatch();
  const activeChart = useAppSelector((state) => state.chart.activeChart);

  const ActiveChartComponent = chartComponents.find(c => c.id === activeChart)?.Component;

  return (
    <div className="min-h-screen p-4 sm:p-8 flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      <aside className="w-52 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mr-4 sticky top-4 self-start">
        <h2 className="text-lg font-bold mb-4">Charts</h2>
        <ul className="flex flex-col gap-2">
          {chartComponents.map((chart) => (
            <li key={chart.id}>
              <button
                onClick={() => dispatch(setActiveChart(chart.id))}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  activeChart === chart.id
                    ? 'bg-blue-100 dark:bg-blue-700/30 text-blue-700 dark:text-blue-300 font-semibold'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <chart.icon className="w-4 h-4" />
                {chart.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
        <motion.div
          key={activeChart}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {ActiveChartComponent && <ActiveChartComponent />}
        </motion.div>
      </main>
    </div>
  );
}