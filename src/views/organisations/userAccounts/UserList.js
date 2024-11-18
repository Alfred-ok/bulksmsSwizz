import React, { useState, useEffect } from 'react'
import { CAlert, CButton, CCard, CCardBody, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CImage, CInputGroup, CInputGroupText, CPagination, CPaginationItem, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import { useNavigate } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import { cilCash, cilPlus, cilSearch, cilUser } from '@coreui/icons';
import user from 'src/assets/images/icons8-user-96.png'
import 'ldrs/waveform'

function UserList() {

  const [appNetUser, setAppNetUser ] = useState();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [filteredData, setFilteredData] = useState([]); // Store filtered data
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
    
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const [searchTerm, setSearchTerm] = useState(''); // Search term


  // Search/filter function
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filteredResults = appNetUser.filter((user) =>
      user.names.toLowerCase().includes(searchValue)
    );
    setFilteredData(filteredResults);
  };




  useEffect(()=>{

    setLoading(false)
    try {
   
      fetch(`${import.meta.env.VITE_BASE_URL}get_User`)
        .then((datas)=>{
          return datas.json();
        }).then((data)=>{
            console.log(data);
            setAppNetUser(data)
            setFilteredData(data); // Initialize filtered data
            setLoading(true)
        })
        .catch((err)=>{
          console.log(err)
          setLoading(true)
        })

      
      //setSuccess(true)
      
  // setShowdashboard(true)

  }catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  }
  },[])


    


  

  return (
    <>
         <CCard style={{ boxShadow: "0px 15px 34px 0px rgba(0,0,0,0.2)", marginBottom:'30px', backgroundColor:"rgba(255,255,255,0.7)"}}>
            <CCardBody>
                <CCardTitle style={{ fontSize:"2em" , display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <CAlert color='primary' variant="solid"  style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <div style={{display:"flex", alignItems:"center"}}>
                    {/*<CImage src={user} height={32} style={{marginRight:"5px"}}/>*/}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    <div>Users</div>
                  </div>
                  <CButton variant="outline" color="light" onClick={()=>navigate('/user-registration')} >
                    <CIcon icon={cilPlus} style={{marginRight:"5px"}}/>
                    Register New User
                  </CButton> 
                  </CAlert>
                </CCardTitle>
                  
                {
                      loading && loading ?
                      (
                    <>
                     {/* Search Input */}
                  
                     <CForm className="mb-3">
                    <CInputGroup className="mb-3" style={{width:"60%", margin:"0 auto"}}>
                      <CInputGroupText id="basic-addon1" color='dark' style={{color: "#fff",backgroundColor: "rgb(71, 71, 212)"}}>
                        <CIcon icon={cilSearch}/>
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="searchInput"
                        placeholder="Search by Organisation Name"
                        value={searchTerm}
                        onChange={handleSearch} // Call the handleSearch function when typing
                        style={{borderColor: "rgb(71, 71, 212)"}}
                      />
                      </CInputGroup>
                    </CForm>  
                  <CTable responsive stripedColumns hover borderless>
                    <CTableHead>
                      <CTableRow color='dark' style={{textAlign:'center'}}>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                        <CTableHeaderCell scope="col">organisation</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                        <CTableHeaderCell scope="col">groupID</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    {currentItems && 
                      currentItems.map((data, idx)=>(
                          <CTableBody >
                          <CTableRow color={idx % 2 ? "primary" : ""}>
                            <CTableHeaderCell scope="row">{idx+1}</CTableHeaderCell>
                            <CTableDataCell>{data.names}</CTableDataCell>
                            <CTableDataCell>{data.email}</CTableDataCell>
                            <CTableDataCell>{data.organisation}</CTableDataCell>
                            <CTableDataCell>{data.userName}</CTableDataCell>
                            <CTableDataCell>{data.role}</CTableDataCell>
                            <CTableDataCell>{data.groupID}</CTableDataCell>
                            
                          </CTableRow>    
                        </CTableBody>
                      )) 
                    } 
                  </CTable>
                  <CPagination aria-label="Page navigation example">

                    <CPaginationItem onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                      Previous
                    </CPaginationItem>
                    
                    {[...Array(Math.ceil(appNetUser.length / itemsPerPage))].map((_, idx) => (
                      <CPaginationItem key={idx + 1} active={idx + 1 === currentPage} onClick={() => setCurrentPage(idx + 1)}>
                        {idx + 1}
                      </CPaginationItem>
                    ))}
                    
                    <CPaginationItem onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(appNetUser.length / itemsPerPage)}>
                      Next
                    </CPaginationItem>

                  </CPagination>
                  </>
                    )
                   :
                   (
                    <div style={{display:"flex", justifyContent:"center", alignItems:"end", color:"black", width:"100%", marginTop:'30px'}}>
                             
                            <l-waveform size="35" stroke="3.5" speed="1" color="black" ></l-waveform>
                            <h3 style={{marginLeft:"20px"}}>Loading</h3> 
                    </div>
                   )
                }
                  
            </CCardBody>
        </CCard>
    </>
  )
}

export default UserList
