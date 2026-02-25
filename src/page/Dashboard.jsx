import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='h-screen flex'>
      {/* side bar */}
      <aside className='w-64 border-r-2'>
        <div className='bg-gray-300 h-16 flex justify-center items-center'>
          <h2 className='text-2xl font-bold'>Dashboard</h2>
        </div>

        <div className='bg-gray-100 border-b-2 border-gray-300 h-16 flex justify-start items-center pl-5'>
          User
        </div>
        <div className='bg-gray-100 border-b-2 border-gray-300 h-16 flex justify-start items-center pl-5'>
          Manage
        </div>
        <div className='bg-gray-100 border-b-2 border-gray-300 h-16 flex justify-start items-center pl-5'>
          Analytics
        </div>
      </aside>

      {/* content */}
      <main className='p-10'>
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard