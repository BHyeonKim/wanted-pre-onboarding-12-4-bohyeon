import { useEffect, useState } from 'react'
import services from 'services'
import { ConvertedData } from 'types'
import { convertData } from 'utils/convert'

const useFetchData = () => {
  const [data, setData] = useState<ConvertedData[]>()

  const fetchData = async () => {
    const { data: responseData } = await services.getData()
    const convertedData = convertData(responseData.response)
    setData(convertedData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return data
}

export default useFetchData
