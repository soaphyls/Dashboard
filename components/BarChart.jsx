
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip,Title,Legend } from 'chart.js'

ChartJS.register(
    CategoryScale, 
    LinearScale,
    BarElement,
    Tooltip,
    Title,
    Legend
    );
const BarChart = () => {
    const [chartData, setChartData] = useState({
            datasets:[],
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() =>{
        setChartData({
            labels:['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets:[
            {
            label: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            borderColor: 'rgb(0, 143, 251)',
            backgroundColor:'rgb(0, 143, 251)'
        },
        {
            label:'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            borderColor: 'rgb(0, 227, 150)',
            backgroundColor:'rgb(0, 227, 150)'
        },
        {
            label: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            borderColor: 'rgb(254, 176, 25)',
            backgroundColor:'rgb(254, 176, 25)'
        },
    ]
        })

        setChartOptions({
            plugins:{
                legend:{position:'top'},
                title:{
                    display:'true',
                    text:'Daily Revenue'
                }
            },
            MaintainAspectRatio: 'false',
            responsive: 'true'
        })

    }, []);
  return (
  <>
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
          <Bar
          data={chartData}
          options={chartOptions}
                
          />
          
          </div>
  </>
  ) 
}

export default BarChart