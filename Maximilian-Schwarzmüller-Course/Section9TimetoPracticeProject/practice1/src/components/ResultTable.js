import styled from 'styled-components'

const StyledTable = styled.table`
  max-width: 50rem;
  margin: 2rem auto;
  padding: 1rem;
  table-layout: fixed;
  border-spacing: 1rem;
  text-align: right;

  & thead {
    font-size: 0.7rem;
    color: #83e6c0;
  }

  & tbody {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.85rem;
    color: #c2e9e0;
  }
`

const formatNumber = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
const ResultTable = (props) => {
  console.log(props)
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => (
          <tr key={index}>
            <td>{item.year}</td>
            <td>{formatNumber.format(item.savingsEndOfYear)}</td>
            <td>{formatNumber.format(item.yearlyInterest)}</td>
            <td>
              {formatNumber.format(
                item.savingsEndOfYear -
                  props.initialInvestment -
                  item.yearlyContribution * item.year
              )}
            </td>
            <td>
              {formatNumber.format(
                props.initialInvestment + item.yearlyContribution * item.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default ResultTable
