// add card shell componenet here

import styled from 'styled-components'

const StyledCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`

const Card = (props) => {
  return <StyledCard className={props.className}>{props.children}</StyledCard>
}

export default Card
