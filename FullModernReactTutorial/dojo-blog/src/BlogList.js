// const BlogList = (props) => {
//   const blogs = props.blogs
//   console.log(blogs)
//   const title = props.title
const BlogList = ({ blogs, title, handleDelete }) => {
  // Destructuring props in the function signature itself.
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>
            Delete this blog
          </button>
        </div>
      ))}
    </div>
  )
}

export default BlogList
