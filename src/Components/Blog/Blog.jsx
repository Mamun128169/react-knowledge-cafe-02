import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {

  const {id, title, author, author_img, cover, posted_date, reading_time, hashtags} = blog;

  return (
    <div className='mb-10'>
      <div>
        <img  className='w-full rounded-md' src={cover} alt={title} />
      </div>
      <div className='flex justify-between items-center mt-6 '>
        <div className='flex items-center gap-5'>
            <img className='w-14' src= {author_img} alt= {`author ${author}`} />
            <div>
                <h2 className='text-2xl font-bold'>{author}</h2>
                <p className='text-base font-semibold text-[#11111199]'>{posted_date}</p>
            </div>
        </div>
        <div className='mb-4 flex gap-2 items-center text-xl text-blue-950'>
            <span className='text-[#11111199] text-right font-medium text-xl'>{`0${reading_time} min read`}</span>
            <button title='Add Bookmark' 
            className='text-2xl text-cyan-700'
            onClick={() => handleBookmark(blog)}>
                <FaBookmark></FaBookmark>
            </button>
        </div>
      </div>
      <h1 className="text-[#111] text-4xl font-bold mt-4">{title}</h1>
      <div className='flex gap-2 text-[#11111199] mt-4 mb-4 font-semibold' >
        {
            hashtags.map((hash, idx) => <h3 key={idx}>{hash}</h3>)
        }
      </div>
      <button 
      onClick={() => handleMarkAsRead(reading_time, id)}
      className='text-xl text-violet-700 underline font-semibold cursor-pointer'>
        Mark as read
      </button>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog
