import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark
  return (
    <div>
      <div className="text-lg font-semibold bg-white p-4 rounded mt-4 mb-4 shadow">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
}

export default Bookmark
