export type Data = { id: District; value_area: number; value_bar: number }

export type District = '성북구' | '강남구' | '노원구' | '중랑구'

export type Date = string

export type MockData = {
  type: District
  version: number
  response: {
    [key: Date]: Data
  }
}

export type ConvertedData = {
  date: string
  district: string
  area: number
  bar: number
}
