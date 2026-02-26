import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

function Profile() {
    const { id } = useParams();
    const { users } = useOutletContext();

    const user = users.find((u) => u.id == Number(id));

    if (!user){
        return (
            <div>User not found</div>
        )
    }

    return (
        <div>
            <div className='w-64 h-64'>
                <img src={user.profile} alt="" className='rounded-full'/>
            </div>
            {user.name}
        </div>
    )
}

export default Profile