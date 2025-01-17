
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import profile from './assets/profile.png'

function App() {


  return (
    <>

      <div className='flex justify-between w-[90%] mx-auto mt-8'>
        <h1 className='text-3xl font-bold '>Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>

      <div className='flex w-[88%] mx-auto mt-16'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
