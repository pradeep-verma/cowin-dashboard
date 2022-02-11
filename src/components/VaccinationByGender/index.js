import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import {ChartContainer, ChartTitle} from './styledComponents'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props

  return (
    <ChartContainer>
      <ChartTitle>Vaccination by gender</ChartTitle>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
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
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default VaccinationByGender
