import classNames from 'classnames/bind'
import { FC, MouseEventHandler } from 'react'

import styles from './selector.module.scss'

const cx = classNames.bind(styles)

interface SelectorProps {
  selectedDistrict?: string
  districts?: string[]
  setDistrict: (district: string | undefined) => void
}

const Selector: FC<SelectorProps> = ({ setDistrict, selectedDistrict, districts }) => {
  const handleSelectFilter: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.innerText === selectedDistrict) {
      setDistrict(undefined)
      return
    }
    setDistrict(e.currentTarget.innerText)
  }

  return (
    <div className={cx('selector')}>
      {districts &&
        districts.map((district) => (
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
