
import { CButton, CCard, CCardBody, CCardFooter, CCardTitle, CForm, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableFoot, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthProvider';
import CIcon from '@coreui/icons-react';
import { cilChevronDoubleRight, cilColorBorder } from '@coreui/icons';

function Price() {

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)
    const [quantity, setQuantity] = useState() 

    const {purchaseSmsUnit, setPurchaseSmsUnit} = useContext(AuthContext);

    //adding total
    const total = purchaseSmsUnit.quantity * purchaseSmsUnit.price;
   


    const handleSubmit = (e) => {
        e.preventDefault();
        setVisible(false)
        setPurchaseSmsUnit(
            {
              price: purchaseSmsUnit.price, 
              quantity : quantity,
            }
          )
    }

   

  return (
    <>

    <CCard style={{ boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)' }}>
    <CCardTitle style={{ margin:"20px 20px"}}>
        <div style={{fontSize:"36px"}}>
            Pricing
        </div>     
    </CCardTitle>
                  
    <CCardBody>
        <CTable responsive>
            <CTableHead style={{textAlign:'center'}}>
                <CTableRow color='dark'>
                    <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Total</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody >
                <CTableRow style={{textAlign:'center'}}>
                    <CTableDataCell>{purchaseSmsUnit.price}</CTableDataCell>
                    <CTableDataCell>{purchaseSmsUnit.quantity}</CTableDataCell>
                    <CTableDataCell>{total}</CTableDataCell>
                    <CTableDataCell>
                        <CButton color="primary"  type="submit" style={{width:"100%"}} onClick={() => setVisible(!visible)}>
                        <CIcon icon={cilColorBorder} style={{'--ci-primary-color': 'white'}}/> Edit
                        </CButton>
                    </CTableDataCell>
                </CTableRow>
                 
            </CTableBody>
            <>
                <CButton color="primary"  type="submit" style={{margin:'20px 40px', color:"#fff", width:"30%"}} onClick={()=>navigate('/mpesapayment')} >
                    Checkout <CIcon icon={cilChevronDoubleRight} style={{'--ci-primary-color': 'white'}}/>
                </CButton>
            </>  
        </CTable>
        </CCardBody>
        </CCard>

        <CModal visible={visible} onClose={() => setVisible(false)} aria-labelledby="ToggleBetweenModalsExample1">
            <CModalHeader>
                <CModalTitle id="ToggleBetweenModalsExample1">Edit</CModalTitle>
            </CModalHeader>
            <CModalBody>
            <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Quantity</CFormLabel>
                    <CFormInput
                        type="text" 
                        id="exampleFormControlInput1"
                        placeholder="Purchase Sms Units"
                        style={{  borderColor: "rgba(71, 71, 212,0.6)" }}
                        value={quantity}
                        onChange={(e)=>setQuantity(e.target.value)}
                        required
                    />
                </div>
                <CButton color="primary" type="submit">
                    submit
                </CButton>
            </CForm>
            </CModalBody>
            
        </CModal>

    </>
  );
}

export default Price