import React, { useEffect, useState } from 'react'
import { useAuth } from '../Store/Auth'
import { toast } from 'react-toastify'

function AdminContact() {
  const [contact, setContact] = useState([])
  const { authoriztionToken } = useAuth()

  const getAllUserContact = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authoriztionToken,
        },
      })

      if (!response.ok) {
        res.status(404).json({message: 'Failed to fetch contacts'});
    }

      const data = await response.json();
      // console.log(data)
      
      if(response.ok){
        setContact(data);
      }

      // console.log(contact)
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch contacts. Please try again later.');
    }
  }

  const deleteContact = async(id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/admin/contacts/delete/${id}`, {
        method:"DELETE",
        headers: {
          Authorization: authoriztionToken,
        }
      });

      const data = await response.json();
      console.log(`user after delete ${data}`)

      if(response.ok){
        getAllUserContact()
        toast.success("Contacts deleted successfully")
      
      } else {
        toast.error("Contact does not delete")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUserContact()
  }, [])
  return (
    <>
      <section id="admin-panel admin-users-section">

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  contact.map((currUser, index) => {
                    return <tr key={index}>
                      <td>{currUser.username}</td>
                      <td>{currUser.email}</td>
                      <td>{currUser.message}</td>
                      <td><button onClick={ () => deleteContact(currUser._id)}>Delete</button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
      </section>
    </>
  )
}

export default AdminContact
