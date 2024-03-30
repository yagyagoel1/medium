import axios from 'axios';
import  { useEffect, useState } from 'react'
import { BACKEND_URL } from '../config';
 export interface BlogInput{
    content : string,
    title : string,
    id : string,
    editor: {
        name : string
    }
 }
 const useBlog = ({id}:{id:string})=>{
    const [loading,setLoading]= useState(true);
    const [blog,setBlog]=useState<BlogInput[]>([]);

    useEffect(()=>{
        axios.get( `${BACKEND_URL}/api/v1/blog/${id}`,{
            headers :{
                Authorization : localStorage.getItem("token")
            } })
        .then(response=>{
            setBlog(response.data.blog);
            setLoading(false);

        })
    },[])
  return {
    loading,
    blog
  }

 }
const useBlogs = () => {
    const [loading,setLoading]= useState(true);
    const [blogs,setBlogs]=useState<BlogInput[]>([]);

    useEffect(()=>{
        axios.get( `${BACKEND_URL}/api/v1/blog/bulk`,{
            headers :{
                Authorization : localStorage.getItem("token")
            } })
        .then(response=>{
            setBlogs(response.data.blog);
            setLoading(false);

        })
    },[])
  return {
    loading,
    blogs
  }
}

export  {useBlogs,useBlog}