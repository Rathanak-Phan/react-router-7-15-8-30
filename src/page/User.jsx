import React from 'react'
import { useOutletContext } from 'react-router-dom'

function User() {
  const users = useOutletContext();

  return (
    <div className='w-full px-25'>
      <li className='flex justify-between bg-gray-200 p-4'>
        <p>ID</p>
        <p>Name</p>
        <p>Gender</p>
        <p>Action</p>
      </li>
      { users.map((item) =>(
        <li key={item.id} className='flex justify-between bg-gray-50 border-b-2 border-gray-300 p-4'>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.gender}</p>
          <p>Views</p>
        </li>
      )) }
    </div>
  )
}

export default User