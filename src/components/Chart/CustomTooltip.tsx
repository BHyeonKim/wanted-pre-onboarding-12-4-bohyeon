import { FC } from 'react'
import { TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { convertDate } from 'utils/convert'

const CustomTooltip: FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const { payload: data } = payload[0]

    return (
      <div>
        <p>{`일시 : ${convertDate(label)}`}</p>
        <p>{`District : ${data.district}`}</p>
        <p>{`Area : ${data.area}`}</p>
        <p>{`Bar : ${data.bar}`}</p>
      </div>
    )
  }

  return null
}

export default CustomTooltip
