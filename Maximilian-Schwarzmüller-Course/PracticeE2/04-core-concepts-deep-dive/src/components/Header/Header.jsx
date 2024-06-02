import './Header.css'
import reactImage from '../../assets/react-core-concepts.png'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const desc = reactDescriptions[getRandomInt(2)]
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  )
}
export default Header
