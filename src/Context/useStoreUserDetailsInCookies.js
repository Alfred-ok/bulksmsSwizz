
import Cookies from 'js-cookie';


const useStoreUserDetailsInCookies = (username, role, refreshToken) => {
    Cookies.set('username', username, {
      expires: 7,
      secure: true,
      sameSite: 'Strict',
      path: '/',
    });
    Cookies.set('role', role, {
      expires: 7,
      secure: true,
      sameSite: 'Strict',
      path: '/',
    });
    Cookies.set('refreshToken', refreshToken, {
      expires: 7,
      secure: true,
      sameSite: 'Strict',
      path: '/',
    });
  };


  
  export default useStoreUserDetailsInCookies