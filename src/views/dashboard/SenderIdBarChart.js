import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

function SenderIdBarChart() {
  return (
    <>
        <CChart
        type="bar"
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'KPILLAR',
              backgroundColor: 'skyblue',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
            },
            {
              label: 'KABIYETSACO',
              backgroundColor: 'lightgreen',
              data: [20, 30, 42, 50, 80, 40, 70, 60, 40],
            },
            {
              label: 'SWIZZSOFT',
              backgroundColor: 'yellow',
              data: [5, 10, 20, 15, 5, 8, 30, 20, 40],
            },
            {
              label: 'NANDFARMERS',
              backgroundColor: 'brown',
              data: [2, 5, 10, 5, 5, 2, 6, 4, 3],
            },
            {
              label: 'KIPSONOIDCS',
              backgroundColor: 'purple',
              data: [1, 2, 1, 7, 8, 2, 5, 0, 1],
            },
          ],
        }}
        labels="months"
        options={{
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
              },
              ticks: {
                color: getStyle('--cui-body-color'),
              },
            },
            y: {
              grid: {
                color: getStyle('--cui-border-color-translucent'),
              },
              ticks: {
                color: getStyle('--cui-body-color'),
              },
            },
          },
        }}
/>
    </>
  )
}

export default SenderIdBarChart