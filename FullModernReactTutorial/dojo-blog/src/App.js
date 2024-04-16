import './App.css'

function App() {
  const title = 'Welcome to new Dojo blog'
  const likes = 50
  const google_site = 'www.google.com'
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        <p>{10}</p>
        <p>{10 + 10}</p>
        <p>{'hello, world'}</p>
        <p>{['this ', 'is ', 'an ', 'array']}</p>

        <a href={google_site}>Google site</a>
      </div>
    </div>
  )
}

export default App
