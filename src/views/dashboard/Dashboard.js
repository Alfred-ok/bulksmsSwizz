import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import {
  CAlert,
  CContainer,
  CRow,
  CCol,
  CWidgetStatsC,
  CCard,
  CCardBody,
  CCardTitle,
  CCardHeader,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
  cilInfo,
  cilSpeech,
  cilBriefcase,
  cilPeople,
} from '@coreui/icons';

import NetworkChartLine from './NetworkChartLine';
import NetworkPieChart from './NetworkPieChart';
import AdminChartLine from './AdminChartLine';

const Dashboard = () => {
  const [organisation, setOrganisation] = useState();
  const [orgAdmin, setOrgAdmin] = useState();
  const [appNetUser, setAppNetUser] = useState();
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Initial online status
  const groupID = Cookies.get('groupId');
  const role = Cookies.get('role');

  useEffect(() => {
    // Event listeners for connection changes
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (isOnline) {
      fetch(`${import.meta.env.VITE_BASE_URL}get_organisation`)
        .then((datas) => datas.json())
        .then((data) => setOrgAdmin(data))
        .catch((err) => console.log(err));

      fetch(`${import.meta.env.VITE_BASE_URL}org_group_id/${groupID}`)
        .then((datas) => datas.json())
        .then((data) => setOrganisation(data))
        .catch((err) => console.log(err));

      fetch(`${import.meta.env.VITE_BASE_URL}get_User`)
        .then((datas) => datas.json())
        .then((data) => setAppNetUser(data))
        .catch((err) => console.log(err));
    }
  }, [isOnline]); // Refetch data when coming back online

  console.log(orgAdmin && orgAdmin.length)
  console.log(appNetUser && appNetUser.length)
  const offlineAlert = (
    <CAlert color="danger" variant="solid" className="d-flex align-items-center">
      <CIcon icon={cilInfo} className="flex-shrink-0 me-2" width={24} height={24} />
      <div>You are offline. Please check your internet connection.</div>
    </CAlert>
  );

  const nodata = (
    <CRow>
      <CCol xs={12}>
        <CAlert color="primary" variant="solid" className="d-flex align-items-center">
          <CIcon icon={cilInfo} className="flex-shrink-0 me-2" width={24} height={24} />
          <div>There is no data. There is no available activity</div>
        </CAlert>
      </CCol>
    </CRow>
  );

  const renderContent = () => {
    switch (role) {
      case 'User':
        return organisation ? (
          <>
            <CRow>
              {organisation.map((data, index) => (
                <CCol xs={3} key={index}>
                  <CWidgetStatsC
                    style={{ boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)' }}
                    className="mb-3"
                    color={index % 2 ? '' : 'primary'}
                    title={data.org_Name}
                    value={`${data.sms_Units} Units`}
                    progress={{ value: 100 }}
                    icon={<CIcon icon={cilSpeech} height={36} />}
                    inverse={index % 2 === 0}
                  />
                </CCol>
              ))}
            </CRow>
            <CRow className="justify-content-center">
              <CCol xs={9} md={9} sm={9} style={{ marginBottom: '20px' }}>
                <CCard
                  style={{
                    boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
                    border: 'solid 1px rgb(179, 177, 177)',
                  }}
                >
                  <CCardBody>
                    <CCardTitle>
                      <CAlert color="primary" variant="solid" className="d-flex align-items-center" xs={10}>
                        NETWORK ACTIVITY
                      </CAlert>
                    </CCardTitle>
                    <NetworkChartLine />
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={3} md={3} sm={3}>
                <CCard
                  style={{
                    boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
                  }}
                >
                  <CCardHeader
                    style={{
                      backgroundColor: 'rgb(var(--cui-primary-rgb)',
                      color: '#fff',
                    }}
                  >
                    <h6>NETWORK ACTIVITY</h6>
                  </CCardHeader>
                  <NetworkPieChart />
                </CCard>
              </CCol>
            </CRow>
          </>
        ) : (
          nodata
        );
      // Other cases (Admin, default, etc.)...
      case 'Admin':
        return appNetUser && orgAdmin  ? (
          <>
            <CRow>
              
                <CCol xs={3}>
                  <CWidgetStatsC
                    style={{ boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)' }}
                    className="mb-3"
                    color='primary'
                    title="User"
                    value={appNetUser.length}
                    progress={{ value: 100 }}
                    icon={<CIcon icon={cilSpeech} height={36} />}
                    inverse
                  />
                </CCol>
                <CCol xs={3}>
                  <CWidgetStatsC
                    style={{ boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)' }}
                    className="mb-3"
                    title="Admin"
                    value={orgAdmin.length}
                    progress={{ value: 100 }}
                    icon={<CIcon icon={cilSpeech} height={36} />}
                    
                  />
                </CCol>
              
            </CRow>
            <CRow>
              <CCol xs={9} md={9} sm={9}>
                <CCard
                  style={{
                    boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
                  }}
                >
                  <CCardHeader
                    style={{
                      backgroundColor: 'rgb(var(--cui-primary-rgb)',
                      color: '#fff',
                    }}
                  >
                    <h6>NETWORK ACTIVITY</h6>
                  </CCardHeader>
                  <AdminChartLine />
                </CCard>
              </CCol>
            </CRow>
          </>
        ) : (
          nodata
        );
      default:
        return nodata;
    }
  };

  return (
    <CContainer>
      {!isOnline && offlineAlert}
      {isOnline && (orgAdmin || appNetUser || organisation ? renderContent() : nodata)}
    </CContainer>
  );
};

export default Dashboard;
