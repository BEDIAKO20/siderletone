import React, { useState } from 'react';
import SideMenu from "../components/SideMenu";
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom'; // Rename "Routes" import

import Dashboard from '../components/Dashboard';
import Content from "../components/Content";
import Videos from "../components/Videos";
import Design from "../components/Design";

function Routes() {


const [inactive, setInactive] =useState(false)

  return (
    <>
      <SideMenu onCollapse={(inactive) =>{
        console.log(inactive);
        setInactive(inactive);
      }} />
      <div className={`container ${inactive ? "inactive" : ""}`}>
     
    <BrowserRouter>
     
      <ReactRoutes> {/* Use the renamed "ReactRoutes" identifier */}
      
      <Route path='/' element={<Dashboard />} />
        <Route path='/content' element={<Content />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/design' element={<Design />} />
    
      </ReactRoutes>
    </BrowserRouter>
      </div>
    </>
  
  );
}

export default Routes;
