import React, { useEffect, useState } from 'react'
import { useAuth } from '../Store/Auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


function AdminUser() {
  const [users, setUsers] = useState([])
  const { authoriztionToken } = useAuth();

  const navigate = useNavigate();

  const getAllUserData = async () => {
    try {
      const response = await fetch(`https://servicebase-api.vercel.app/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authoriztionToken,
        },
      });

      if (!response.ok) {
        // If response status is not ok, navigate to the unauthorized page
        navigate("/"); // Adjust the route to your unauthorized page
        return; // Stop further execution
      }
  
      const data = await response.json();
      setUsers(data);
      navigate("/admin/users"); // Navigate to the admin users page
  

    } catch (error) {
      console.log(error)
      // navigate("/admin")
    }
  }

  const deleteUser = async(id) => {
    try {
      const response = await fetch(`https://servicebase-api.vercel.app/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authoriztionToken,
        },
      });
      const data = await response.json();
      console.log(`user after delete ${data}`)

      if(response.ok){
        getAllUserData()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUserData()
  }, []);

  return (
    <>
      <section id="admin-panel admin-users-section">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((currUser, index) => {
                    return <tr key={index}>
                      <td>{currUser.username}</td>
                      <td>{currUser.email}</td>
                      <td>{currUser.phone}</td>
                      <td>
                        <Link className='admin-edit-btn' to={`../users/edit/${currUser._id}`}>Edit</Link>

                      </td>
                      <td><button onClick={() => deleteUser(currUser._id)}>Delete</button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>


      </section>

    </>
  )
}

export default AdminUser
