import { ConvertedData, MockData } from 'types'

export const convertData = (data: MockData['response']) => {
  const dataConvertedToArray: ConvertedData[] = []

  for (const date in data) {
    const { id, value_area, value_bar } = data[date]

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

export const getDistrictList = (
  data: ConvertedData[] | undefined,
): string[] | undefined => {
  if (!data) return
  const set = new Set<string>()
  for (const districtInfo of data) set.add(districtInfo.district)
  return [...set]
}
