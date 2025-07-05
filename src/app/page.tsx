'use client';
import dynamic from 'next/dynamic';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     BarElement,
//     ArcElement,
//     RadialLinearScale,
//     Filler,
//     Tooltip,
//     Legend
// } from 'chart.js';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { LineChart as LineIcon, BarChart3, PieChart as PieIcon , Circle, Radar, Waves, ScatterChart } from 'lucide-react';
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Filler, Tooltip, Legend);
import '@/lib/chartConfig';

const LineChart = dynamic(()=> import('@/components/charts/LineChart'), { ssr: false });
const BarChart = dynamic (() => import('@/components/charts/BarChart'), { ssr: false });
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
export default function ChartsDashboard () {
  const [activeChart, setActiveChart] = useState(chartComponents[0].id);
  const ActiveChartComponent = chartComponents.find(c => c.id === activeChart)?.Component;
  return (
    <>
      {/* <div className="min-h-screen p-8 sm:p-20 bg-gray-50">
        <main className="flex flex-col gap-8 items-center">
          <h1 className="text-3xl font-bold mb-4 text-center">Charts Demo App</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <LineChart />
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <BarChart />
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <PieChart />
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <DoughnutChart />
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <RadarChart />
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <AreaChart />
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm sm:col-span-2 lg:col-span-1">
              <ScatterPlotChart />
            </div>

          </div>
        </main>
      </div> */}
      {/* <div className="min-h-screen p-8 sm:p-20 bg-gray-50">
        <main className="flex flex-col gap-8 items-center">
          <h1 className="text-3xl font-bold mb-4 text-center">Charts Demo App</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {chartComponents.map((chart, index) => (
              <motion.div
                key={chart.id}
                className="bg-white p-4 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <chart.Component />
              </motion.div>
            ))}
          </div>
        </main>
      </div> */}
      <div className="min-h-screen p-4 sm:p-8 flex bg-gray-50">
        <aside className="w-52 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mr-4 sticky top-4 self-start">
          <h2 className="text-lg font-bold mb-4">Charts</h2>
          <ul className="flex flex-col gap-2">
            {chartComponents.map(chart => (
              <li key={chart.id}>
                <button
                  onClick={() => setActiveChart(chart.id)}
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
    </>
  )
}
