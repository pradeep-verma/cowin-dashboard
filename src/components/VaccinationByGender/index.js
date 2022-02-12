import {PieChart, Pie, Legend, Cell} from 'recharts'
import {ChartContainer, ChartTitle} from './styledComponents'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props

  return (
    <ChartContainer>
      <ChartTitle>Vaccination by gender</ChartTitle>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="60%"
          data={vaccinationByGender}
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          wrapperStyle={{
            fontSize: 14,
            fontFamily: 'Roboto',
          }}
        />
      </PieChart>
    </ChartContainer>
  )
}

export default VaccinationByGender
