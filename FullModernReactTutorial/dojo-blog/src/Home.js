import { useState } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'
const Home = () => {
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

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs')
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

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {blogs && (
        <BlogList
          blogs={blogs}
          title="All blogs" /*handleDelete={handleDelete} */
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === 'Alice')}
          title="Alice's blogs"
          // handleDelete={handleDelete}
        />
      )}
    </div>
  )
}

export default Home
