import classNames from 'classnames/bind'
import { FC, MouseEventHandler } from 'react'
import { District } from 'types'

import styles from './selector.module.scss'

const cx = classNames.bind(styles)

const DISTRICT = ['성북구', '강남구', '노원구', '중랑구']

interface SelectorProps {
  selectedDistrict?: District
  setDistrict: (district: District | undefined) => void
}

const Selector: FC<SelectorProps> = ({ setDistrict, selectedDistrict }) => {
  const handleSelectFilter: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.innerText === selectedDistrict) {
      setDistrict(undefined)
      return
    }
    setDistrict(e.currentTarget.innerText as District)
  }

  return (
    <div className={cx('selector')}>
      {DISTRICT.map((district) => (
        <button
          className={cx('button', { selected: selectedDistrict === district })}
          key={district}
          onClick={handleSelectFilter}
        >
          {district}
        </button>
      ))}
    </div>
  )
}

export default Selector
