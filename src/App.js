import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import TableUser from './Pages/Table/TableUser';
const Registration = React.lazy(() => import("./Pages/Resgistration"))
const SignIn = React.lazy(() => import("./Pages/SigIn"))
const NavBar = React.lazy(() => import("./AppBar/NavBar"))
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading ABC</div>}>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<div>Home Page</div>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/table' element ={<TableUser/>}/>
          </Routes>
        </Suspense>
      </Router>

    </div>
  );
}

export default App;
