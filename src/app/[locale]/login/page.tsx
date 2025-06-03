'use client'

import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/users", { name, email })
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='Hello'
          required />
      </div>
      <div>
        <label>Email</label>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Hello'
          required />
      </div>
      <button
        type='submit'
        
      >
        Create User
      </button>
    </form>
  )
}
