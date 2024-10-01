"use client"

import {useEffect, useRef} from 'react'
import {Chart} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS,

    CategoryScale,
LinearScale,
PointElement,
BarElement,
Title,
Tooltip,
Legend

} from 'chart.js'
ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend); 

export default function BarChart({charData}:any){
    const chartRef = useRef(null)
return(
    <>
    <div style={{marginTop: '5px'}}>
    <Bar 
     data={charData} 
     options={{
       responsive: true,
       maintainAspectRatio: false,
       plugins: {
         legend: {
           display: true,
        //    position: windowWidth < 768 ? 'bottom' : 'right',
         },
       },
     }}
    //  style={{ height: windowWidth < 768 ? '250px' : '400px' }}    
    />
    </div>
    
    </>
)





}

{/* <Bar 
data={{
    labels: ['grocries','Bill','Transport','luxuries','others'],
    datasets:[
        {
            label: 'Expense',
            data: [1200,300,150,100,50],
            backgroundColor: [
                'red',
                'blue',
                'yrllow',
                'orange',
                'purple',
            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black',

            ],
            borderWidth: 1,
        }
    ]
}}/> */}











// "use client";

// import { useEffect, useRef } from 'react';
// import { Chart } from 'chart.js/auto';

// const PieChart: React.FC = () => {
//     const chartRef = useRef<HTMLCanvasElement | null | any>(null);

//     useEffect(() => {
//         let newChart: Chart | null |any = null;

//         if (chartRef.current) {
//             if (chartRef.current.chart) {
//                 chartRef.current.chart.destroy();
//             }
//             const context = chartRef.current.getContext("2d");
//             if (context) {
//                 newChart = new Chart(context, {
//                     type: 'pie',
//                     data: {
//                         labels: ['Red', 'Blue', 'Yellow'],
//                         datasets: [
//                             {
//                                 label: 'My First Dataset',
//                                 data: [300, 50, 100],
//                                 backgroundColor: ['red', 'blue', 'yellow'],
//                                 hoverOffset: 4,
//                             },
//                         ],
//                     },
//                     options: {
//                         responsive: true,
//                         plugins: {
//                             legend: {
//                                 position: 'top',
//                             },
//                             tooltip: {
//                                 callbacks: {
//                                     label: (tooltipItem) => {
//                                         const label = tooltipItem.label || '';
//                                         const value = tooltipItem.raw || 0;
//                                         return `${label}: ${value}`;
//                                     },
//                                 },
//                             },
//                         },
//                     },
//                 });
//             }
//         }

//         // Store the chart instance in the ref for later use
//         if (chartRef.current) {
//             (chartRef.current as any).chart = newChart; // Type assertion
//         }

//         // Cleanup function to destroy the chart on component unmount
//         return () => {
//             if (newChart) {
//                 newChart.destroy();
//             }
//         };
//     }, []);

//     return (
//         <div>
//             <canvas ref={chartRef}></canvas>
//         </div>
//     );
// };

// export default PieChart;










