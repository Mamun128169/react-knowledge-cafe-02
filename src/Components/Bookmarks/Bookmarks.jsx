import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 ">
      <h2 className="text-[#6047EC] text-2xl font-bold py-5 mb-5 pl-4 rounded border border-violet-500 bg-violet-50">
        spent time on read: {readingTime}
      </h2>
      <div className='bg-[#1111110D] p-5 rounded-md'>
        <h2 className="text-2xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>

        <div className="">
          {bookmarks.map((bookmark, idx) => (
            <Bookmark 
            key={idx} 
            bookmark={bookmark}>
            </Bookmark>
          ))}
        </div>
      </div>
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
}

export default Bookmarks
