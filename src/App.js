import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import About from './pages/About'
import Service from './pages/Service';
import Contact from './pages/Contact';
import Error from './pages/Error404'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Header />} />
                <Route exact path='/home' element={<Header />} />
                <Route exact path='/about' element={<About />}/>
                <Route exact path='/services' element={<Service />}/>
                <Route exact path='/contact' element={<Contact />}/>
                <Route exact path='/*' element={<Error />}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
