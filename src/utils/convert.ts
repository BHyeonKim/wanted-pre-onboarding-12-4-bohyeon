import { MOCK_DATA } from 'mocks/mock'

export const convertData = () => {
  const data: { date: string; district: string; area: number; bar: number }[] = []

  for (const date in MOCK_DATA) {
    const { id, value_area, value_bar } = MOCK_DATA[date]

    data.push({
      date: date,
      district: id,
      area: value_area,
      bar: value_bar,
    })
  }

  return data
}

export const convertDate = (date: string) => {
  const dateObj = new Date(date)

  return `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
}
