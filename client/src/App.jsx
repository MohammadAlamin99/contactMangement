import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import ApplicationPage from './pages/ApplicationPage';

function App() {
 
  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage/>}/>
                <Route path="/AddContacts" element={<ApplicationPage/>}/>
            </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
