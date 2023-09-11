import classNames from 'classnames/bind'
import Chart from 'components/Chart'
import Selector from 'components/Selector'
import { MouseEventHandler, useState } from 'react'
import { District } from 'types'

import styles from './chartPage.module.scss'

const cx = classNames.bind(styles)

const ChartPage = () => {
  const [district, setDistrict] = useState<District>()

  const handleSelectFilter: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.innerText === district) {
      setDistrict(undefined)
      return
    }
    setDistrict(e.currentTarget.innerText as District)
  }

  return (
    <div className={cx('page')}>
      <Chart selectedValue={district} setFilter={setDistrict} />
      <Selector selectedDistrict={district} onClick={handleSelectFilter} />
    </div>
  )
}

export default ChartPage
