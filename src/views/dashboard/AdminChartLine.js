import React, { useEffect, useState } from 'react';
import { CChart } from '@coreui/react-chartjs';
import { getStyle } from '@coreui/utils';

function AdminChartLine() {
  const [orgAdmin, setOrgAdmin] = useState([]);
  const [appNetUser, setAppNetUser] = useState([]);

  useEffect(() => {
    // Fetch orgAdmin data
    try {
      fetch(`${import.meta.env.VITE_BASE_URL}get_organisation`)
        .then((response) => response.json())
      .then((data) =>{ setOrgAdmin(processData(data)); console.log(data)})
        .catch((err) => console.log(err));
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }, []);

  useEffect(() => {
    // Fetch appNetUser data
    try {
      fetch(`${import.meta.env.VITE_BASE_URL}get_User`)
        .then((response) => response.json())
        .then((data) =>{ setAppNetUser(processData(data)); console.log(data)})
        .catch((err) => console.log(err));
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }, []);

  // Helper function to process data into monthly counts
  const processData = (data) => {
    const monthlyCounts = Array(12).fill(0);
    data.forEach((item) => {
      const date = new Date(item.timestamp); // Assuming data has a timestamp field
      const month = date.getMonth(); // 0 = January, 11 = December
      monthlyCounts[month] += 1; // Increment the count for the month
    });
    return monthlyCounts;
  };


  console.log(orgAdmin)
  console.log(appNetUser)

  return (
    <CChart
      style={{ width: '100%' }}
      type="line"
      data={{
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
         
          {
            label: 'App Net User Progress',
            backgroundColor: `rgba(${getStyle('--cui-info-rgb')}, .6)`,
            borderColor: getStyle('--cui-info'),
            pointBackgroundColor: getStyle('--cui-info'),
            pointBorderColor: '#fff',
            data: [5, 10, 15, 25, 30, 35, 45, 40, 50, 65, 75, 85],
            fill: true,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: getStyle('--cui-body-color'),
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: getStyle('--cui-border-color-translucent'),
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
  );
}

export default AdminChartLine;
