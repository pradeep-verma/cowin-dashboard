import {PieChart, Pie, Legend, Cell} from 'recharts'
import {ChartContainer, ChartTitle} from './styledComponents'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props

  return (
    <ChartContainer>
      <ChartTitle>Vaccination by age</ChartTitle>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByAge}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
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

export default VaccinationByAge
