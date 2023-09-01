import React from 'react'
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const {pathname}  = useLocation();
    console.log(pathname);
  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

export default ScrollToTop
// just render it in your main JSX file 
// just below <BrowserRouter></BrowserRouter> tag