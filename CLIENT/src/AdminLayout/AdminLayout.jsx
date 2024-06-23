import React from 'react'
import { NavLink, Outlet,Navigate } from 'react-router-dom'
import { useAuth } from '../Store/Auth'

function AdminLayout() {
    const {user, isLoading} = useAuth()

    if(isLoading){
        return <h1>Loading....</h1>
    }

    if(!user.isAdmin){
        return <Navigate to="/" />;
    }
  return (
    <>
    <header>
        <div className="admin-controller">
            <div className='admin-heading'>
                <h1>Admin Panel</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/users">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/contacts">Contacts</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/admin/services">Services</NavLink>
                    </li> */}
                </ul>
            </nav>
        </div>
      </header>
    <Outlet />
      
    </>
  )
}

export default AdminLayout
