import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

function DeliveryReportBar() {
  return (
    <>
      <CChart
        type="bar"
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'AbsentSubscriber',
              backgroundColor: 'pink',
              data: [8, 5, 6, 3, 1, 4, 9, 0, 4],
            },
            {
              label: 'Delivered To Terminal',
              backgroundColor: 'lightgreen',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
            },
            {
              label: 'Delivered Impossible',
              backgroundColor: 'pink',
              data: [4, 2, 2, 3, 1, 4, 3, 8, 4],
            },
            {
              label: 'Invalid Msisdn',
              backgroundColor: 'grey',
              data: [1, 0, 1, 2, 0, 3, 2, 4, 2],
            },
            {
              label: 'Sender Name Blacklisted',
              backgroundColor: 'pink',
              data: [0, 0, 0, 1, 0, 0, 1, 2, 1],
            },
            {
              label: 'Submitted',
              backgroundColor: 'orange',
              data: [3, 5, 2, 8, 10, 6, 7, 9, 10],
            },
            {
              label: 'Submit_Failed',
              backgroundColor: 'pink',
              data: [0.5, 0, 0, 1, 0, 0, 0, 2, 0],
            },
            {
              label: 'Network Failure',
              backgroundColor: 'pink',
              data: [0.3, 0, 0.2, 0.8, 0, 1, 1, 0, 1],
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

export default DeliveryReportBar