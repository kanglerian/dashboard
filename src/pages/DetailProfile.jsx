import React from 'react'
import { Link } from 'react-router-dom'

const DetailProfile = () => {
  return (
    <main className="bg-black">
      <nav className='container mx-auto'>
        <Link to={`/`} className='text-white text-sm'>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Kembali</span>
        </Link>
      </nav>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo vel mollitia animi voluptas dignissimos eum iusto voluptates laboriosam similique. Fugiat laboriosam labore perspiciatis quia, omnis vel adipisci commodi non aspernatur!</p>
    </main>
  )
}

export default DetailProfile