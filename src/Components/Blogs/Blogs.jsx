import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleBookmark,handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('BlogData.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
  }, [])

  // console.log(blogs);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog 
        key={blog.id}
        blog={blog}
        handleBookmark={handleBookmark}
        handleMarkAsRead={handleMarkAsRead}>
        </Blog>
      ))}
    </div>
  )
}

Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blogs;
