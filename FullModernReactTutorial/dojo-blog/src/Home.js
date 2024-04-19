import { useState, useEffect } from 'react'
import BlogList from './BlogList'
const Home = () => {
  // let name = 'Alice'
  const [reactName, setReactName] = useState('Alice')
  const [age, setAge] = useState(25)

  const hancleClick = (e) => {
    // console.log(e)
    // name = 'Bob'
    if (reactName === 'Bob') {
      setReactName('Alice')
      setAge(age + 1)
    } else {
      setReactName('Bob')
      setAge(age + 2)
    }

    console.log('Hello there!' + reactName)
  }

  const hancleClickAgain = (name, event) => {
    console.log('Hello ' + name + '!')
    // console.log(event)
  }

  const [blogs, setBlogs] = useState([])
  const [name, setName] = useState('Mario')

  useEffect(() => {
    console.log('useEffect ran')
    console.log(blogs)
  }, [name]) //useffect runs every time the component renders

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div className="home">
      <h2>Home page</h2>
      <p>
        {reactName} is {age} old
      </p>
      <button onClick={hancleClick}>Click me!</button>
      <button onClick={(e) => hancleClickAgain('Alice', e)}>
        Click me again!
      </button>
      <hr></hr>
      <button onClick={() => setName('Donald')}>Change Mario</button>
      <p>{name}</p>
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'Alice')}
        title="Alice's blogs"
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default Home
