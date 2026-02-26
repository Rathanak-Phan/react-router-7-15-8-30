import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Dashboard() {
  const users = [
    {
      id: 1,
      name: "Sokchea",
      gender: "male",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis error iste, suscipit ",
      profile: "https://i.pinimg.com/1200x/84/f4/5e/84f45ebd8a292f2709e469909e154a34.jpg"
    },
    {
      id: 2,
      name: "Sanghak",
      gender: "male",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis error iste, suscipit ",
      profile: "https://i.pinimg.com/736x/b1/22/78/b12278f2752705a60c7ed272db124135.jpg"
    },
    {
      id: 3,
      name: "Sokchea",
      gender: "male",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis error iste, suscipit ",
      profile: "https://i.pinimg.com/1200x/84/f4/5e/84f45ebd8a292f2709e469909e154a34.jpg"
    },
    {
      id: 4,
      name: "Sanghak",
      gender: "male",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis error iste, suscipit ",
      profile: "https://i.pinimg.com/736x/b1/22/78/b12278f2752705a60c7ed272db124135.jpg"
    },

  ]


  return (
    <div className='h-screen flex'>
      {/* side bar */}
      <aside className='w-64 border-r-2'>
        <div className='bg-gray-300 h-16 flex justify-center items-center'>
          <h2 className='text-2xl font-bold'>Dashboard</h2>
        </div>

        <Link to={"/dashboard/user"} className='bg-gray-100 border-b-2 hover:bg-gray-200 border-gray-300 h-16 flex justify-start items-center pl-5'>
          User
        </Link>
        <Link to={"/dashboard/manage"} className='bg-gray-100 border-b-2 hover:bg-gray-200 border-gray-300 h-16 flex justify-start items-center pl-5'>
          Manage
        </Link>
        <Link to={"/dashboard/analytics"} className='bg-gray-100 border-b-2 hover:bg-gray-200 border-gray-300 h-16 flex justify-start items-center pl-5'>
          Analytics
        </Link>
      </aside>

      {/* content */}
      <main className='p-10 w-full'>
        <Outlet context={ users }/>
      </main>
    </div>
  )
}

export default Dashboard