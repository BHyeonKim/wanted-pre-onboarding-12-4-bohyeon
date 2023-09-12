import { FC } from 'react'
import {
  Area,
  Bar,
  Cell,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart'
import { ConvertedData } from 'types'
import getColor from 'utils/color'
import { convertDate } from 'utils/convert'

import CustomTooltip from '../CustomTooltip'

interface ChartProps {
  selectedValue?: string
  setFilter: (district: string | undefined) => void
  data: ConvertedData[] | undefined
}

const ACCENT_COLOR = '#3b5bdb'

const Chart: FC<ChartProps> = ({ selectedValue, setFilter, data }) => {
  const handleClickChart: CategoricalChartFunc = ({ activePayload }) => {
    if (!activePayload || !activePayload.length) return
    const {
      payload: { district },
    } = activePayload[0]
    if (district === selectedValue) {
      setFilter(undefined)
      return
    }
    setFilter(district)
  }

  return (
    <ResponsiveContainer height={400}>
      <ComposedChart data={data} onClick={handleClickChart}>
        <XAxis dataKey="date" tickFormatter={(value: string) => convertDate(value)} />
        <YAxis dataKey="bar" yAxisId="bar" />
        <YAxis dataKey="area" orientation="right" yAxisId="area" />
        <Legend />
        <Bar barSize={10} dataKey="bar" yAxisId="bar">
          {data &&
            data.map((entry) => (
              <Cell
                fill={
                  entry.district === selectedValue
                    ? ACCENT_COLOR
                    : getColor(entry.district)
                }
                key={entry.date}
              />
            ))}
        </Bar>
        <Area dataKey="area" type="monotone" yAxisId="area" />
        <Tooltip content={<CustomTooltip />} />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default Chart
