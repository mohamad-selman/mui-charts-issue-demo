import { BarChart } from '@mui/x-charts'

export default function App() {
  return (
    <BarChart
      height={500}
      layout="horizontal"
      series={[
        { label: "Earnings", data: [35, 44, 24, 34] },
      ]}
      yAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      onAxisClick={(_ev, d) => console.log(d)}
    />
  )
}
