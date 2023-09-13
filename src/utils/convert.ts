import { ConvertedData, MockData } from 'types'

/**
 * convertData 함수는 MockData 타입의 'response' 필드에서 데이터를 가져와서 차트에 맞게 정제된 데이터를 반환합니다.
 *
 * @param {Object} data - MockData 의 'response' 필드로, 변환할 데이터 객체입니다.
 * @returns {ConvertedData[]} - 변환된 데이터 객체의 배열, 각 객체는 date, district, area 및 bar 속성을 포함합니다.
 */
export const convertData = (data: MockData['response']): ConvertedData[] => {
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

/**
 *
 * @param date - 날짜 문자열입니다.
 * @returns - HH:MM:SS 형식의 시간 문자열을 반환합니다.
 */
export const convertDate = (date: string) => {
  const dateObj = new Date(date)

  return `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
}

/**
 * 정제된 데이터에서 지역구 리스트를 추출하는 함수입니다.
 * @param  data - convertData함수의 리턴값입니다.
 * @returns {string[]} - 지역구의 리스트입니다.
 */
export const getDistrictList = (
  data: ConvertedData[] | undefined,
): string[] | undefined => {
  if (!data) return
  const set = new Set<string>()
  for (const districtInfo of data) set.add(districtInfo.district)
  return [...set]
}
