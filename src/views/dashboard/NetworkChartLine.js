import React, { useEffect, useState } from 'react'

import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'
import Cookies from 'js-cookie';

function NetworkChartLine() {

  const [messageData, setMessageData] = useState();
  const groupID = Cookies.get('groupId');


  useEffect(()=>{

    try{

        fetch(`${import.meta.env.VITE_BASE_URL}get_code/${groupID}`)
        .then((data)=>{
            console.log(data);
            return data.json();
        })
        .then((response)=>{
            console.log(response)
            setMessageData(response);
              
        }).catch(err=> console.log(err))
        
        
    }catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error);
        
    }

  },[])


  // Extract month counts from auditDate
  const getMonthMessageCounts = (data) => {
    
    const monthCounts = Array(12).fill(0);

      data && data.forEach((item) => {
      const month = new Date(item.auditDate).getMonth();
      
      monthCounts[month] += 1;
      
    });

    return monthCounts;
  };

  const monthlyMessageCounts = getMonthMessageCounts(messageData);

  return (
    <>
    <div id="chart"></div>
    {
 
    <CChart
        style={{width: '100%'}}
        type="line" 
        data={{
            labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
            datasets: [
            {
                label: "Number of messages per month",
                backgroundColor: `rgba(${getStyle('--cui-primary-rgb')}, .6)`,
                borderColor: getStyle('--cui-primary'),
                pointBackgroundColor: getStyle('--cui-primary'),
                pointBorderColor: "#fff",
                data: monthlyMessageCounts,
                fill: true,
            },
            /*
            {
                label: "AIRTEL",
                backgroundColor: "red",
                borderColor: "red",
                pointBackgroundColor: "red",
                pointBorderColor: "#fff",
                data: [10, 8, 4, 3, 0, 4, 8, 9, 8,5,3,2,0]
            },
            
            {
                label: "TELKOM",
                backgroundColor: "skyblue",
                borderColor: "skyblue",
                pointBackgroundColor: "skyblue",
                pointBorderColor: "#fff",
                data: [0, 2, 3, 4, 0, 4, 6, 4, 0,10,8,5,3]
            },
            {
                label: "FAIBA",
                backgroundColor: "#eedc5b",
                borderColor: "#eedc5b",
                pointBackgroundColor: "#eedc5b",
                pointBorderColor: "#fff",
                data: [3, 2, 2, 3, 4, 5, 3, 4, 6,8,6,5,3]
            },
            */
           ],
        }}
        options={{
           // maintainAspectRatio: false,
            plugins: {
            legend: {
                labels: {
                color: getStyle('--cui-body-color'),
                }
            }
            },
            scales: {
            x: {
                grid: {
                color: getStyle('--cui-border-color-translucent'),
               // drawOnChartArea: false,
                },
                ticks: {
                color: getStyle('--cui-body-color'),
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                color: getStyle('--cui-border-color-translucent'),
                },
               // max: 60,
                ticks: {
                color: getStyle('--cui-body-color'),
                },
            },
            },
            elements: {
            line: {
              tension: 0.4,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3,
            },
          },

        }}
        />
  
    }



    </>
  )
}

export default NetworkChartLine
