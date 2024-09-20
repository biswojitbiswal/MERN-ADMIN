import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import Error from './components/Error/Error'
import Logout from './components/Logout/Logout'
import AdminLayout from './AdminLayout/AdminLayout'
import AdminUser from './AdminLayout/AdminUser'
import AdminContact from './AdminLayout/AdminContact'
import AdminUpdate from './AdminLayout/AdminUpdate'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='' element={<Layout />}>
  //       <Route path='/' element={<Home />} />
  //       <Route path='about' element={<About />} />
  //       <Route path='contact' element={<Contact />} />
  //       <Route path='services' element={<Services />} />
  //       <Route path='register' element={<Registration />} />
  //       <Route path='login' element={<Login />} />
  //       <Route path='logout' element={<Logout />} />
  //       <Route path='admin' element={<AdminLayout />} >
  //         <Route path='users' element={<AdminUser />} />
  //         <Route path='contacts' element={<AdminContact />} />
  //         <Route path='users/:id/edit' element={<AdminUpdate />} />
  //       </Route>
  //       <Route path='*' element={<Error />} />
  //     </Route>
  //   )
  // )

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/admin' element={<AdminLayout />} />
        <Route path='/admin/users' element={<AdminUser />} />         
        <Route path='/admincontacts' element={<AdminContact />} />
        <Route path='/admin/users/:id/edit' element={<AdminUpdate />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
