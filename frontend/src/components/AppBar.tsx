import React from 'react'
import { Avatar } from './BlogCard'

const AppBar = () => {
  return (
    <div className='border-b flex justify-between py-4 px-10'>
        <div className='flex justify-center flex-col'>Medium</div>
        <div>
            <Avatar name="yagya" size="big"></Avatar>
        </div>
    </div>
  )
}

export default AppBar