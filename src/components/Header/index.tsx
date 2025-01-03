import logo from '/logo.svg'
import LocationIcon from '../../assets/location-icon.svg'
import { Carrinho } from '../Carrinho'
import styles from './Header.module.css'

export function Header() {
  return (
    <div>
      <header className={styles.headerContainer}>
        <img src={logo} alt="Logo" />
        <div className={styles.actions}>
          <div className={styles.location}>
            <img src={LocationIcon} alt="" />
            <span>Marília, SP</span>
          </div>
          <Carrinho />
        </div>
      </header>
    </div>
  )
}