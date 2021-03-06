import { cx } from 'styles'
import { NavLink } from 'react-router-dom'

import { SearchIcon24, Favorite1 } from 'assets/svgs/movie'
import styles from './LNB.module.scss'

const LNB = () => {
  return (
    <nav className={styles.lnb}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <button type='button' data-key='Search'>
              <SearchIcon24 />
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/favorites' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <button type='button' data-key='Favorites'>
              <Favorite1 />
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default LNB
