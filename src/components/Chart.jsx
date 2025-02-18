import React from 'react'
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)
export default function Chart({arr=[],days,currency}) {
  // console.log(arr);
  
const prices=[];
const date=[];

for (let index = 0; index < arr.length; index++) {
  // console.log(arr[index][1]);
  // console.log(new Date(arr[index][0]).toTimeString().split(" ")[0]);
  if(days==='24h'){
    prices.push(arr[index][1]);
    date.push(new Date(arr[index][0]).toTimeString().split(' ')[0])
  }else{
    prices.push(arr[index][1]);
    date.push(new Date(arr[index][0]).toDateString())
  }
  // console.log(new Date(arr[index][0]))
}
// const data={

// }
  return (
    <Line options={{
        responsive:true,
    }}
    data={{
        labels:date,
        datasets:[{
            label:`Price in ${currency}`,
            data:prices,
            borderColor:'rgb(235, 16, 63)',
            backgroundColor:'rgba(235, 16, 63,.5)',
        }]
    }}/>
  )
}
