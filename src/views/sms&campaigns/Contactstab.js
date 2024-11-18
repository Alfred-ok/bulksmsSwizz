import { CAlert, CButton, CCard, CCardBody, CCardTitle, CFormInput, CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilWarning } from '@coreui/icons'

function Contactstab() {
    const [activeKey, setActiveKey] = useState(1)
  return (

    <div>
            <CCard className="mb-4">
                <CCardBody>
                <h6 style={{padding:'10px 0px'}}>Get Contacts From:</h6>
                <CCardTitle>
                <CNav variant="pills" role="tablist">
                    <CNavItem>
                        <CNavLink
                        href="#!"
                        active={activeKey === 1}
                        onClick={() => setActiveKey(1)}
                        >
                        Groups
                    </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                        href="#!"
                        active={activeKey === 2}
                        onClick={() => setActiveKey(2)}
                        >
                        File
                        </CNavLink>
                    </CNavItem>
                </CNav>
                </CCardTitle>
                
                <CTabContent>
                    <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                        <CAlert color="warning" className="d-flex align-items-center">
                            <CIcon icon={cilWarning} className="flex-shrink-0 me-2" width={24} height={24} />
                            <div>No Contact Groups found</div>
                        </CAlert>
                    </CTabPane>
                    <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                        <div className="mb-3">
                            <CFormInput type="file" id="formFileMultiple"  multiple />
                        </div>
                        <CButton color="primary" type="submit" className="mb-3">
                                Upload
                        </CButton>
                    </CTabPane>
            </CTabContent>

            </CCardBody>
            </CCard>
            
           
    </div>
  )
}

export default Contactstab