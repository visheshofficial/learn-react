export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) {
  const ButtonsContainer = buttonsContainer
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  )
}
/*
In the second case, buttonsContainer might be a string representing a
 HTML tag name. In JSX, tag names must start with a capital letter 
 to distinguish them from HTML tags.

For example, if buttonsContainer is the string 'div', you can't use 
it directly as a JSX component like this: <buttonsContainer />. 
JSX would interpret this as a HTML tag named buttonsContainer, which doesn't exist.

Instead, you assign the string to a variable with a capitalized name:
 const ButtonsContainer = buttonsContainer. Now you can use it as a 
 JSX component: <ButtonsContainer />. JSX interprets this as a HTML div tag,
  because ButtonsContainer holds the value 'div'.
*/
