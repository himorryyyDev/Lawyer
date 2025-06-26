import { useState } from 'react'
import styles from './Header.module.css'
import Logo from '../../../common/LogoComponent/Logo'
import Navigation from '../../../common/NavigationComponent/Navigation'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__container}>
          <Logo/>
          <Navigation direction='row'/>
          <button className={styles.button__container}>
            <div className={styles.button__line}></div>
            <div className={styles.button__line}></div>
            <div className={styles.button__line}></div>
          </button>
        </section>
      </header>
    </>
  )
}

export default Header