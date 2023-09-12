import { useEffect, useState } from 'react'
import services from 'services'
import { ConvertedData } from 'types'
import { convertData, getDistrictList } from 'utils/convert'

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

  const districts = getDistrictList(data)

  return { data, districts }
}

export default useFetchData
