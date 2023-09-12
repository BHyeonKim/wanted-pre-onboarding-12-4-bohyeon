import { MOCK_DATA } from 'mocks/mock'
import { ConvertedData, MockData } from 'types'

export const convertData = (data: MockData['response']) => {
  const dataConvertedToArray: ConvertedData[] = []

  for (const date in data) {
    const { id, value_area, value_bar } = MOCK_DATA[date]

    dataConvertedToArray.push({
      date: date,
      district: id,
      area: value_area,
      bar: value_bar,
    })
  }

  return dataConvertedToArray
}

export const convertDate = (date: string) => {
  const dateObj = new Date(date)

  return `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
}
