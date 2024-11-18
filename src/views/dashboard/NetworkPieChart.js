import React, { useEffect, useState } from 'react'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'
import Cookies from 'js-cookie';

function NetworkPieChart() {

    const [organisation, setOrganisation] = useState([]);
    const groupID = Cookies.get('groupId');

 
    useEffect(()=>{
        try {
       
          fetch(`${import.meta.env.VITE_BASE_URL}org_group_id/${groupID}`)
            .then((datas)=>{
              return datas.json();
            }).then((data)=>{
                console.log(data);
                setOrganisation(data)
            })
            .catch((err)=>{
              console.log(err)
            })
    
            
    
      }catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error);
      }
      },[])
    


  return (
    <>
        <CChart
            style={{ padding: '10px', width: '100%'}}
            type="doughnut"
            data={{
                labels: organisation && organisation.map(data=>data.org_Name),
                datasets: [
                {
                    backgroundColor: [ getStyle('--cui-warning'),getStyle('--cui-primary'), getStyle('--cui-success'),getStyle('--cui-danger')],
                    data: organisation && organisation.map(data=>data.sms_Units),
                },
                ],
            }
            
            
            }
            options={{
                plugins: {
                legend: {
                    labels: {
                    color: getStyle('--cui-primary'),
                    }
                }
                },
            }}
        />
    </>
  )
}

export default NetworkPieChart