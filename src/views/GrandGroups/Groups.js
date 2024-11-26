



import React, { useEffect, useState } from 'react'
import { CAlert, CButton, CCard, CCardBody, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CImage, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CPagination, CPaginationItem, CRow, CSpinner, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'

import { useNavigate } from 'react-router-dom';
import CIcon from '@coreui/icons-react'
import { cilPlus, cilSearch, cilSync } from '@coreui/icons';
import organisationIcon from 'src/assets/images/icons8-organization-96.png'
import 'ldrs/waveform'

import Cookies from 'js-cookie';



function Groups() {

    const [org_data, setOrg_Data] = useState([]);
    const [visible, setVisible] = useState(false);
    const[successUpdate,setSuccessUpdate] = useState(false)
    const [data, setData] = useState({})
    const [tableRefresh, setableRefresh] = useState(false);

    const [loading, setLoading] = useState(false);

     //search
     const [filteredData, setFilteredData] = useState([]); // Store filtered data
     const [searchTerm, setSearchTerm] = useState(''); // Search term

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const groupID = Cookies.get('groupId');

    const [groupContacts, setGroupContacts] = useState({});
    const [groupTotals, setGroupTotals] = useState({});

    

   



    // Search/filter function
      const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchTerm(searchValue);

        const filteredResults = org_data.filter((org) =>
        org.groupName.toLowerCase().includes(searchValue)
        );
        setFilteredData(filteredResults);
      };


    const navigate = useNavigate();

      useEffect(()=>{
        setLoading(false)
        try {
       
            fetch(`${import.meta.env.VITE_BASE_URL}groups/get/${groupID}`)
            .then((datas)=>{
              return datas.json();
            }).then((data)=>{
                console.log(data);
                setOrg_Data(data)
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
      },[tableRefresh])


     // const randomNumber = () => Math.floor(100 + Math.random() * 900);
     

      const handleUpdate = async(e)=>{
        e.preventDefault();


        //loader
        setSuccessUpdate(true)
    
        try {
            
            const response = await fetch(`https://81c9-69-197-145-100.ngrok-free.app/groups/${data.groupId}`, {
                method: 'PUT', // Specify the request method as POST
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                    // Add other headers as necessary
                },
                body: JSON.stringify({  
                  groupName: data.groupName,
                }) // Convert the data to a JSON string for the body 
            });
           
            // Check if the response is okay (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }   
            
            //refresh organisation table
            setableRefresh(!tableRefresh)
    
        }catch (error) {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        }
    
        setSuccessUpdate(false)
       // navigate(0);
        setVisible(!visible)
      }


      useEffect(()=>{
        handleUpdate();
      },[])


      const fetchGroupTotal = async (groupId) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_BASE_URL}group-members/getGroup${groupId}`);
      
          if (!response.ok) {
            throw new Error(`Failed to fetch group members: ${response.status} ${response.statusText}`);
          }
      
          const contentType = response.headers.get('Content-Type');
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            setGroupTotals((prev) => ({
              ...prev,
              [groupId]: data.length || 0, // Store total in state
            }));
          } else {
            setGroupTotals((prev) => ({
              ...prev,
              [groupId]: 0, // Default to 0 for non-JSON responses
            }));
          }
        } catch (error) {
          console.error(`Error fetching total for group ${groupId}:`, error);
          setGroupTotals((prev) => ({
            ...prev,
            [groupId]: 0, // Default to 0 on error
          }));
        }
      };
      
      




      useEffect(() => {
        if (filteredData.length > 0) {
          filteredData.forEach((group) => {
            fetchGroupTotal(group.groupId);
          });
        }
      }, [filteredData]);
      



 


  return (
    <>
         <CCard style={{ boxShadow: "0px 15px 34px 0px rgba(0,0,0,0.2)",marginBottom:'30px', backgroundColor:"rgba(255,255,255,0.7)" }} >
            <CCardBody>
                <CCardTitle style={{ fontSize:"2em" , display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <CAlert color='primary' variant="solid"  style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div>
                    <svg style={{marginRight:"8px"}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                      <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                      <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                    </svg>
                      Groups
                    </div>
                    <CButton variant="outline" color="light" onClick={()=>navigate('/create-new-group')} >
                      <CIcon icon={cilPlus} style={{marginRight:"5px"}}/>
                      Create New Group
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
                        placeholder="Search by group Name"
                        value={searchTerm}
                        onChange={handleSearch} // Call the handleSearch function when typing
                        style={{borderColor: "rgb(71, 71, 212)"}}
                      />
                      </CInputGroup>
                    </CForm>
                      
                  <CTable responsive small hover borderless stripedColumns>
                    <CTableHead>
                      <CTableRow color='dark' style={{textAlign:'center'}}>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Group Name</CTableHeaderCell>
                        <CTableDataCell scope="col">GroupId</CTableDataCell>
                        {/*<CTableDataCell scope="col">organistion Group Code</CTableDataCell>*/}
                        <CTableDataCell scope="col">Total contacts</CTableDataCell>
                        <CTableHeaderCell scope="col">Action</CTableHeaderCell>

                      </CTableRow>
                    </CTableHead>
                    {currentItems && 
                      currentItems.map((data, idx)=>(
                          <CTableBody key={data.groupId}>
                          <CTableRow style={{textAlign:'center'}} color={idx % 2 ? "primary" : ""}>
                            <CTableHeaderCell scope="row">{indexOfFirstItem + idx + 1}</CTableHeaderCell>
                            
                            <CTableDataCell>{data.groupName}</CTableDataCell>
                            <CTableDataCell>{data.groupId}</CTableDataCell>
                            {/*<CTableDataCell>{data.organisationGroup}</CTableDataCell>*/}
                            
                            <CTableDataCell>
                                {groupTotals[data.groupId] !== undefined ? groupTotals[data.groupId] : 'Loading...'}
                            </CTableDataCell>
                            <CTableDataCell>
                              <CButton color="dark" variant='outline' onClick={() => {setVisible(!visible); setData(data) }} style={{display:"flex",alignItems:"center", margin:"2px auto"}}>
                                <CIcon icon={cilSync} style={{marginRight:"5px"}}/> Update
                              </CButton>
                            </CTableDataCell>
                          </CTableRow>    
                        </CTableBody>
                      )) 
                    } 
                  </CTable>
                  <CPagination aria-label="Page navigation example">

                    <CPaginationItem onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                      Previous
                    </CPaginationItem>
                    
                    {[...Array(Math.ceil(org_data.length / itemsPerPage))].map((_, idx) => (
                      <CPaginationItem key={idx + 1} active={idx + 1 === currentPage} onClick={() => setCurrentPage(idx + 1)}>
                        {idx + 1}
                      </CPaginationItem>
                    ))}
                    
                    <CPaginationItem onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(org_data.length / itemsPerPage)}>
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

        







        {/** MODAL UPDATE */}






        <CModal
          backdrop="static"
          visible={visible}
          onClose={() => setVisible(false)}
          aria-labelledby="StaticBackdropExampleLabel"
          
          
        >
            <CModalHeader>
              <CModalTitle id="StaticBackdropExampleLabel">Update</CModalTitle>
            </CModalHeader>

            <CModalBody>

            <CForm onSubmit={handleUpdate}>

                <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Group Name</CFormLabel>
                <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Group Name"
                    onChange={(e)=>setData({...data, groupName: e.target.value})}
                    value={data.groupName}
                />
                </div>

                <div className="col-auto" style={{width:"100%"}}>
                    
                    { 
                     successUpdate  ? 
                            <CButton color="success" type="submit" className="mb-3" disabled style={{width:"100%"}}>
                                <CSpinner as="span" size="sm"/> Updating information ...
                            </CButton>
                          :
                          <CButton color="primary" type="submit" className="mb-3" style={{width:"100%"}}>
                                UPDATE
                          </CButton>

                    }
                    
                </div>
            </CForm>
              
            </CModalBody>
        </CModal>
    </>
  )
}

export default Groups


