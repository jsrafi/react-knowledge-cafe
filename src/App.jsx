
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import profile from './assets/profile.png'


function App() {

  const [bookmarks,setBookmarks] = useState([]);
  
  const handleBookmarks = blog =>
  {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>

      <div className='flex justify-between max-w-[1220px] mx-auto mt-8'>
        <h1 className='text-3xl font-bold '>Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>

      <div className='flex max-w-[1200px] mx-auto mt-16'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}

export default App
