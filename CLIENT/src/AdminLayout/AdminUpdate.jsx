import React, { useEffect, useState } from 'react'
import { useAuth } from '../Store/Auth'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'

function AdminUpdate() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
    })

    const { authoriztionToken } = useAuth();
    const params = useParams();

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authoriztionToken,
                },
            });
            const data = await response.json();
            // console.log('user', data.data)
            setUser({
                username: data.data.username,
                email: data.data.email,
                phone: data.data.phone
            });
        } catch (error) {
            console.log(error)
        }
    }

    const handleInput = async (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://servicebase-api.vercel.app/api/admin/users/${params.id}/edit`, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: authoriztionToken,
                },
                body: JSON.stringify(user)
            });
            if(response.ok) {
                toast.success("Upated Successfully")
            } else {
                toast.error("User data not updated")
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleUserData()
    }, [])
    return (
        <>
            <section id='login-page'>
                <div className="login-container">

                    <div className="login-form">
                        <h1>Upadte User Data</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='input-fields'>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" onChange={handleInput} value={user.username} placeholder='Your Username'
                                    id='username' required autoComplete='off' />
                            </div>

                            <div className='input-fields'>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" onChange={handleInput} value={user.email} placeholder='Your Email'
                                    id='email' required autoComplete='off' />
                            </div>

                            <div className='input-fields'>
                                <label htmlFor="phone">Phone</label>
                                <input type="text" name="phone" onChange={handleInput} value={user.phone} placeholder='Your Phone'
                                    id='phone' required autoComplete='off' />
                            </div>

                            <button type='submit' className='btn submit-btn'>Update</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminUpdate
