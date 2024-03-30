import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom';
import { FullBlog } from '../components/FullBlog';
import { Spinner } from '../components/Spinner';
import AppBar from '../components/AppBar';
const Blog = () => {
  const {id} = useParams();
  const {loading,blog} = useBlog({
    id : id||""
  });
  if(loading)
  {
    return <div><AppBar></AppBar>
    <div className='h-screen flex flex-col justify-center'>
      <div className='flex justify-center'>
        <Spinner></Spinner>
      </div>
      </div>
    </div>
  }
  return (
    <div>
      <FullBlog blog={blog}></FullBlog>
    </div>
  )
}

export default Blog