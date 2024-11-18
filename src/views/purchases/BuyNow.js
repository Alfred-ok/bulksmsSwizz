import { cilCash, cilInfo, cilSend } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CAlert, CButton, CCard, CCardBody, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../Context/AuthProvider'
import Cookies from 'js-cookie';

function BuyNow() {

  const groupID = Cookies.get('groupId');

  const[organisationfetch, setOrganisationfetch] = useState([]);
  const [getOrganisationById, setGetOrganisationById] = useState();
  const [orgId, setOrgId] = useState();
  const [quantitySmsUnit, setQuantitySmsUnit] = useState();

  const {purchaseSmsUnit, setPurchaseSmsUnit} = useContext(AuthContext);
  const {OrganisationDataID, setOrganisationDataID} = useContext(AuthContext);
  const navigate = useNavigate();



  useEffect(()=>{
    try {
   
      fetch(`${import.meta.env.VITE_BASE_URL}org_group_id/${groupID}`)
        .then((datas)=>{
            console.log(datas);
          return datas.json();
        }).then((data)=>{
            console.log(data);
            setOrganisationfetch(data)
        })
        .catch((err)=>{
          console.log(err)
        })

  }catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  }
  },[])


   //fetching data based on organisation Id
   useEffect(()=>{
    try {
   
      fetch(`${import.meta.env.VITE_BASE_URL}get_organisation/${orgId}`)
        .then((datas)=>{
          return datas.json();
        }).then((data)=>{
            console.log(data);
            setGetOrganisationById(
              {
                //id: getOrganisationById.id,
                balance:data.balance,
                smsCost: data.smsCost,
                sms_Units: data.sms_Units,
                accessKey: data.accessKey,
                apiKey: data.apiKey,
                clientId: data.clientId,
                groupID: data.groupID,
                mbcode: data.mbcode,
                org_Code: data.org_Code,
                org_Name: data.org_Name,
                token: data.token,
                url: data.url
              }
            )
            
        })
        .catch((err)=>{
          console.log(err)
        })

      
      //setSuccess(true)
      
  // setShowdashboard(true)

  }catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  }
  },[orgId]);



  const handleSubmit = (event) =>{
    event.preventDefault();

    setPurchaseSmsUnit(
        {
          price: getOrganisationById.smsCost,
          quantity:quantitySmsUnit,
        }
      )


    navigate('/price');
  }

  setOrganisationDataID(orgId)

  return (
    <>
        <CRow>
            <CCol xs={9} style={{margin:"0px auto"}}>
                <CCard className="mb-4" style={{ boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)'}}>
                
                <CCardBody>
                    <CCardTitle>
                    <CAlert color='primary' variant="solid" className="d-flex align-items-center" xs={10} >
                        <CIcon icon={cilCash} className="flex-shrink-0 me-2" width={34} height={34}/>
                        <div><h3>Buy Sms</h3></div>
                    </CAlert>
                    </CCardTitle>
                    <CForm onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Select Sender ID</CFormLabel>
                        <CFormSelect id="exampleFormControlInput1" aria-label="Default select example" value={orgId} onChange={(e)=>setOrgId(e.target.value)} style={{  borderColor: "rgba(71, 71, 212,0.6)" }}> 
                            <option value="">Select Sender Id</option> {/* Default option */}
                                {organisationfetch &&
                                organisationfetch.map((data, index) => (
                                     
                                    <option key={index} value={data.id}>
                                    {data.url}
                                    </option> 
                                ))}
                                
                        </CFormSelect>
                        </div>
                        <div className="mb-3">
                          <CFormLabel htmlFor="exampleFormControlInput1">Sms Balance</CFormLabel>
                          <CFormInput
                              type="text" 
                              id="exampleFormControlInput1"
                              placeholder="Sms Balance"
                              style={{  borderColor: "rgba(71, 71, 212,0.6)" }}
                              value={getOrganisationById && getOrganisationById.balance}
                             
                          />
                        </div>
                        <div className="mb-3">
                          <CFormLabel htmlFor="exampleFormControlInput1">Sms Units Balance</CFormLabel>
                          <CFormInput
                              type="text"
                              id="exampleFormControlInput1"
                              placeholder="Sms Units Balance"
                              style={{  borderColor: "rgba(71, 71, 212,0.6)" }}
                              value={getOrganisationById && getOrganisationById.sms_Units}
                          />
                        </div>
                        <div className="mb-3">
                          <CFormLabel htmlFor="exampleFormControlInput1">Price in Ksh</CFormLabel>
                          <CFormInput
                              type="text" 
                              id="exampleFormControlInput1"
                              placeholder="Price in Ksh"
                              style={{  borderColor: "rgba(71, 71, 212,0.6)" }}
                              value={getOrganisationById && getOrganisationById.smsCost}
                          />
                        </div>
                        <div className="mb-3">
                          <CFormLabel htmlFor="exampleFormControlInput1">Purchase Sms Units</CFormLabel>
                          <CFormInput
                              type="text" 
                              id="exampleFormControlInput1"
                              placeholder="Purchase Sms Units"
                              style={{  borderColor: "rgba(71, 71, 212,0.6)" }}
                              value={quantitySmsUnit}
                              onChange={(e)=>setQuantitySmsUnit(e.target.value)}
                              required
                          />
                        </div>
                        

                        <div className="col-auto">
                            <CButton color="primary" type="submit" className="mb-3">
                                SUBMIT
                            </CButton>
                        </div>
                    </CForm>
                </CCardBody>
                </CCard>
            </CCol>

        </CRow>
    </>
  )
}

export default BuyNow