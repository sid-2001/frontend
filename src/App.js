// Entry Point of the Web Application All the Files are ROUTED Here

// All Depenedencies
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React , { useState } from "react";

// Global Style Sheet
import './Global.scss';

// Components for Routing
import Login from './components/LoginPage/Login';
import DashBoard from "./components/FullDashBoard/DashBoard/DashBoard";
import SensorsMonitor from "./components/FullDashBoard/SensorsMonitor/SensorsMonitor";
import ActivityManager from "./components/FullDashBoard/ActivityManager/ActivityManager";
import Analytics from "./components/FullDashBoard/Analytics/Analytics";
import Alerts from "./components/FullDashBoard/Alerts/Alerts";
import CropHealthMonitor from "./components/FullDashBoard/CropHealthMonitor/CropHealthMonitor";
import CropProfile from "./components/FullDashBoard/CropProfile/CropProfile";

// Context Components
import { SideBarContext } from './Contexts/SideBarContext';
 
function App() {
  // States
  const [sidebarHide , setSidebarHide] = useState(false);

  // Function to collapse state for sidebar
  const updateSideBar = () => {
    if(window.innerWidth < 800) {
      if(sidebarHide === false) {
        setSidebarHide(!sidebarHide);
      }
    }

    else if(window.innerWidth > 800) {
      if(sidebarHide === true) {
        setSidebarHide(!sidebarHide);
      }
    }
  };

  // Side Bar Collapsed state Event Listner
  React.useEffect(() => {
    window.addEventListener("resize", updateSideBar);
    return () => window.removeEventListener("resize", updateSideBar);
  } ,[sidebarHide]);

  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Login/>}></Route>
    
        {/* DashBoard */}
        <Route exact path = "/dashboard" element = {
          <SideBarContext.Provider value={ {sidebarHide , setSidebarHide} }>
            <DashBoard/>
          </SideBarContext.Provider> 
        }></Route>

        {/* Sensors Monitor */}
        <Route exact path = "/sensorsMonitor" element = {
        <SideBarContext.Provider value={ {sidebarHide , setSidebarHide} }>
          <SensorsMonitor/>
        </SideBarContext.Provider>         
        }></Route>

        {/* Analytics */}
        <Route exact path = "/analytics" element = {
          <SideBarContext.Provider value={ {sidebarHide , setSidebarHide} }>
            <Analytics/>
          </SideBarContext.Provider>
        }></Route>

        {/* Activity Manager */}
        <Route exact path = "/activityManger" element = {
          <SideBarContext.Provider value={ {sidebarHide , setSidebarHide} }>
            <ActivityManager/>
          </SideBarContext.Provider>
        }></Route>

        {/* Health Monitor */}
        <Route exact path = "/healthMonitor" element = {
          <SideBarContext.Provider value={ {sidebarHide , setSidebarHide} }>
            <CropHealthMonitor/>
          </SideBarContext.Provider>
        }></Route>

        {/* Crop Profile */}
        <Route exact path = "/cropProfile" element = {
          <SideBarContext.Provider value={ {sidebarHide , setSidebarHide} }>
            <CropProfile/>
          </SideBarContext.Provider>
        }></Route>

        {/* Alerts */}
        <Route exact path = "/alerts" element = {
          <SideBarContext.Provider value={ {sidebarHide , setSidebarHide} }>
            <Alerts/>
          </SideBarContext.Provider>
        }></Route>

      </Routes>
    </Router>
  );
}

export default App;
