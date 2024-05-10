import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Profile = () => {
  return(
    <section>
      <Link to={`/todolist`}>Todolist</Link>
    </section>
  )
}

export default Profile;
