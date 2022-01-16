import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import NewBlog from '../pages/NewBlog'
import UpdateBlog from '../pages/UpdateBlog'
import Detail from '../pages/Detail'
import PrivateRouter from './PrivateRouter'


 
const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login /> } />
                <Route path="/register" element={<Register /> } />
                <Route path="/" exact element={<Dashboard /> } />
                
                <Route path="/profile" element={
                <PrivateRouter>
                <Profile /> 
                </PrivateRouter>} />
                <Route path="/new-blog" element={
                <PrivateRouter>
                <NewBlog />
                </PrivateRouter> } />
                <Route path="/update-blog" element={
                <PrivateRouter>
                <UpdateBlog />
                </PrivateRouter> } />
                <Route path="/detail" element={
                <PrivateRouter>
                <Detail />
                </PrivateRouter> } />
            </Routes>
        </Router>
    )
}

export default AppRouter
