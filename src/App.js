
import './App.css';
import AppBarDrawer from './components/AppBar/AppBarDrawer';
import {Home,Urgences,Consultation,Doctors,Hospitals,About,ContactUs} from './items_and_components/Items' ;

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
       <AppBarDrawer />   
       <Routes >
        <Route exact path='/urgences' element={ <Urgences /> } />
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/hospitals' element={ <Hospitals /> } />
        <Route exact path='/consultations' element={ <Consultation /> } />
        <Route exact path='/doctors' element={ <Doctors /> } />
        <Route exact path='/about' element={ <About /> } />
        <Route exact path='/contactus' element={ <ContactUs /> } />
    </Routes>
    </>

  );
}

export default App;
