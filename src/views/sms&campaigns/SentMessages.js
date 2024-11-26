import React, { useEffect, useState } from 'react';
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CPagination,
  CPaginationItem,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import Cookies from 'js-cookie';
import CIcon from '@coreui/icons-react';
import { cilSpeech } from '@coreui/icons';

function SentMessages() {
  const groupID = Cookies.get('groupId');
  const [organisationfetch, setOrganisationfetch] = useState([]);
  const [code, setCode] = useState();
  const [loading, setLoading] = useState(false);
  const [messageData, setMessageData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Date filter states
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Pagination logic
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  // Fetch message data
  useEffect(() => {
    setLoading(false);
    try {
      fetch(`${import.meta.env.VITE_BASE_URL}get_code/${code}`)
        .then((data) => data.json())
        .then((response) => {
          setMessageData(response);
          setFilteredData(response); // Initialize filtered data
          setLoading(true);
        })
        .catch(() => setLoading(true));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [code]);

  // Fetch organisations
  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_BASE_URL}org_group_id/${groupID}`)
        .then((data) => data.json())
        .then((data) => setOrganisationfetch(data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error('Error fetching organisations:', error);
    }
  }, []);

  // Filter data based on date range
  const handleFilter = (e) => {
    e.preventDefault();
    if (fromDate && toDate) {
      const filtered = messageData.filter((msg) => {
        const messageDate = new Date(msg.auditDate); // Assuming `msg.date` exists
        return (
          messageDate >= new Date(fromDate) && messageDate <= new Date(toDate)
        );
      });
      setFilteredData(filtered);
      setCurrentPage(1); // Reset pagination to first page
    } else {
      setFilteredData(messageData); // Reset filter if no date range is specified
    }
  };

  return (
    <>
      <CCard style={{ marginBottom: '30px', boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)' }}>
        <CCardBody>
          <CCardTitle>
            <CAlert color="primary" variant="solid" className="d-flex align-items-center" xs={10}>
              <CIcon icon={cilSpeech} className="flex-shrink-0 me-2" width={34} height={34} />
              <div>
                <h3>Sent Messages</h3>
              </div>
            </CAlert>
          </CCardTitle>

          <div className=" mb-4" style={{maxWidth:"95%", margin:"0 auto"}}>
            <CFormLabel htmlFor="selectOrganisation">Select Organisation</CFormLabel>
            <CFormSelect
              id="selectOrganisation"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ borderColor: 'rgba(71, 71, 212,0.6)'}}
            >
              <option value="">Select Organisation</option>
              {organisationfetch.map((data, index) => (
                <option key={index} value={data.org_Code}>
                  {data.url}
                </option>
              ))}
            </CFormSelect>
          </div>


          <CForm onSubmit={handleFilter} style={{maxWidth:"95%", margin:"0 auto"}}>
            <CRow className="justify-content-center">
              <CCol md={5}>
                <CFormLabel htmlFor="fromDate">From</CFormLabel>
                <CFormInput
                  type="date"
                  id="fromDate"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  style={{ borderColor: 'rgba(71, 71, 212,0.6)' }}
                />
              </CCol>
              <CCol  md={5}>
                <CFormLabel htmlFor="toDate">To</CFormLabel>
                <CFormInput
                  type="date"
                  id="toDate"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  style={{
                        borderColor: 'rgba(71, 71, 212,0.6)'
                    }}
                />
              </CCol>
              <CCol  className="d-flex align-items-end">
                <CButton color="primary" type="submit" className="mt-4" style={{width:"150px"}}>
                  Submit
                </CButton>
              </CCol>
            </CRow>
          </CForm>

          
          {loading ? (
            <>
              <CTable responsive stripedColumns borderless hover small style={{marginTop: '40px'}}>
                <CTableHead>
                  <CTableRow color='dark' style={{ textAlign: 'center', backgroundColor: 'blue' }}>
                    <CTableHeaderCell>Id</CTableHeaderCell>
                    { /*<CTableHeaderCell>Source</CTableHeaderCell> */}
                    <CTableHeaderCell>Destination</CTableHeaderCell>
                    <CTableHeaderCell>Message</CTableHeaderCell>
                    <CTableHeaderCell>Rate</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                {currentData.map((data, idx) => (
                  <CTableBody key={data.id}>
                    <CTableRow style={{ textAlign: 'center' }} color={idx % 2 ? 'primary' : ''}>
                      <CTableHeaderCell>{data.id}</CTableHeaderCell>
                     { /*<CTableDataCell>{data.code}</CTableDataCell> */}
                      <CTableDataCell>{data.phoneNumber}</CTableDataCell>
                      <CTableDataCell>{data.message}</CTableDataCell>
                      <CTableDataCell>{data.msgStatus}</CTableDataCell>
                      <CTableDataCell>{data.sendStatus}</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                ))}
              </CTable>

              <CPagination align="center">
                <CPaginationItem
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </CPaginationItem>
                {[...Array(pageCount)].map((_, i) => (
                  <CPaginationItem
                    key={i}
                    active={i + 1 === currentPage}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </CPaginationItem>
                ))}
                <CPaginationItem
                  disabled={currentPage === pageCount}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </CPaginationItem>
              </CPagination>
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
              <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform>
              <h3 style={{ marginLeft: '20px' }}>Loading</h3>
            </div>
          )}
        </CCardBody>
      </CCard>
    </>
  );
}

export default SentMessages;
