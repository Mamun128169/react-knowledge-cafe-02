import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import { addToLS } from './Utilities/cartBookmarks'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = blog => {
    // console.log("add to bookmark!");
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
    addToLS(blog.id);

  }
 
  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    
    //Removing from bookmarks
    console.log(id);
    const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remaining);
  }

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className='md:flex mt-8 mb-10 gap-6'>
        <Blogs 
        handleBookmark={handleBookmark}
        handleMarkAsRead={handleMarkAsRead}>
        </Blogs>

        <Bookmarks 
        bookmarks={bookmarks}
        handleMarkAsRead={handleMarkAsRead}
        readingTime={readingTime}>
        </Bookmarks>
      </div>
    </div>
  )
}

export default App
