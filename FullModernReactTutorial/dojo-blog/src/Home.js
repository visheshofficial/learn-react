const Home = () => {
  const hancleClick = (e) => {
    console.log(e)
    console.log('Hello there!')
  }

  const hancleClickAgain = (name, event) => {
    console.log('Hello ' + name + '!')
    console.log(event)
  }
  return (
    <div className="home">
      <h2>Home page</h2>
      <button onClick={hancleClick}>Click me!</button>
      <button onClick={(e) => hancleClickAgain('Alice', e)}>
        Click me again!
      </button>
    </div>
  )
}

export default Home
