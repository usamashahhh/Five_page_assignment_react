import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Services from '../components/Services';
import PageNotFound from '../components/404';

class Navigation extends Component
{
    render()
    {
        return(

            <>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/aboutUs' element={<About/>}></Route>
                    <Route path='/Gallery' element={<Gallery/>}></Route>
                    <Route path='/ContactUs' element={<Contact/>}></Route>
                    <Route path='Services' element={<Services/>}></Route>
                    <Route path='*' element={<PageNotFound/>}></Route>
                </Routes>

            </>

        )
    }
}
export default Navigation;