
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './routes/Signup'
import Signin from './routes/Signin'
import Blog from './routes/Blog'
import Blogs from './routes/Blogs'
import {Publish} from './routes/Publish'


function App() {

  return (
    <>
   
    <BrowserRouter>
    <Routes>
      
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/signin" element={<Signin></Signin>}></Route>
      
      <Route path="/blog/:id" element={<Blog></Blog>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/publish" element={<Publish></Publish>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
