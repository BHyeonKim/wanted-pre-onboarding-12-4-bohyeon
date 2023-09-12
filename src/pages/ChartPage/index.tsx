import classNames from 'classnames/bind'
import Chart from 'components/Chart'
import Selector from 'components/Selector'
import useFetchData from 'hooks/useFetchData'
import { useState } from 'react'

import styles from './chartPage.module.scss'

const cx = classNames.bind(styles)

const ChartPage = () => {
  const [district, setDistrict] = useState<string>()
  const { data, districts } = useFetchData()

  return (
    <div className={cx('page')}>
      <Chart data={data} selectedValue={district} setFilter={setDistrict} />
      <Selector
        districts={districts}
        selectedDistrict={district}
        setDistrict={setDistrict}
      />
    </div>
  )
}

export default ChartPage
