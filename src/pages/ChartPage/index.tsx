import classNames from 'classnames/bind'
import Chart from 'components/Chart'
import Selector from 'components/Selector'
import useFetchData from 'hooks/useFetchData'
import { useState } from 'react'
import { District } from 'types'

import styles from './chartPage.module.scss'

const cx = classNames.bind(styles)

const ChartPage = () => {
  const [district, setDistrict] = useState<District>()
  const data = useFetchData()

  return (
    <div className={cx('page')}>
      <Chart data={data} selectedValue={district} setFilter={setDistrict} />
      <Selector selectedDistrict={district} setDistrict={setDistrict} />
    </div>
  )
}

export default ChartPage
