import React from 'react'
import { Avatar } from './BlogCard'
import { Link } from 'react-router-dom'

const AppBar = () => {
  return (
    <div className='border-b flex justify-between py-4 px-10'>
        <Link className='flex justify-center flex-col cursor-pointer font-bold text-2xl' to={'/blogs'}>Medium</Link>
        <div>
          <Link to={"/publish"}>
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 mr-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Green</button>

</Link>
            <Avatar name="yagya" size="big"></Avatar>
        </div>
    </div>
  )
}

export default AppBar