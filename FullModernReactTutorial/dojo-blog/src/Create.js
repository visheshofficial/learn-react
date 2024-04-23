import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('alice')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    setIsPending(true)
    fetch('http://localhost:8000/blogs', {
      mode: 'no-cors',
      method: 'POST',
      headers: { content_type: 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('New blog added')
      setIsPending(false)
      navigate('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="alice">Alice</option>
          <option value="bob">Bob</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding blog</button>}
      </form>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <p>Author: {author}</p>
    </div>
  )
}

export default Create
