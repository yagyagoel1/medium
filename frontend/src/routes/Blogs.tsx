import React from 'react'
import BlogCard from '../components/BlogCard'
import AppBar from '../components/AppBar'
import {useBlogs} from '../hooks'

const Blogs = () => {
    const {loading,blogs}= useBlogs()
    if(loading)
    {
        return <div>
            loading
        </div>
    }
  return (
    <div>
        <AppBar></AppBar>
    <div className=' flex justify-center'>
    <div className=''>
        {
            blogs.map(blog=><BlogCard id = {blog.id}authorName={blog.editor.name||"Anonymous"}
            title = {blog.title}
            content = {blog.content}
            publishedDate='2-march-2019'></BlogCard>)
        }
       

    </div>
    </div>
    </div>
  )
}

export default Blogs