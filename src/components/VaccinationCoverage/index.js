import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import {ChartContainer, ChartTitle} from './styledComponents'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <ChartContainer>
      <ChartTitle>Vaccination Coverage</ChartTitle>

      <BarChart
        width={1000}
        height={300}
        data={last7DaysVaccination}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 20,
            fontSize: 14,
            fontFamily: 'Roboto',
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose1"
          fill="#5a8dee"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="Dose2"
          fill="#f54394"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  )
}

export default VaccinationCoverage
