import classNames from 'classnames/bind'
import { FC, MouseEventHandler } from 'react'
import { District } from 'types'

import styles from './selector.module.scss'

const cx = classNames.bind(styles)

const DISTRICT = ['성북구', '강남구', '노원구', '중랑구']

interface SelectorProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  selectedDistrict?: District
}

const Selector: FC<SelectorProps> = ({ onClick, selectedDistrict }) => (
  <div className={cx('selector')}>
    {DISTRICT.map((district) => (
      <button
        className={cx('button', { selected: selectedDistrict === district })}
        key={district}
        onClick={onClick}
      >
        {district}
      </button>
    ))}
  </div>
)

export default Selector
