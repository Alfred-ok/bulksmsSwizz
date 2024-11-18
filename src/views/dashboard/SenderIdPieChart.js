import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

function SenderIdPieChart() {
  return (
    <>
        <CChart
            style={{ padding: '10px', width: '100%'}}
            type="doughnut"
            data={{
                labels: ['KPILLAR', 'KABIYETSACO', 'SWIZZSOFT', 'NANDFARMERS','KIPSONOIDCS'],
                datasets: [
                {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [10, 80, 20, 10,5,2],
                },
                ],
            }}
            options={{
                plugins: {
                legend: {
                    labels: {
                    color: getStyle('--cui-body-color'),
                    }
                }
                },
            }}
        />
    </>
  )
}

export default SenderIdPieChart