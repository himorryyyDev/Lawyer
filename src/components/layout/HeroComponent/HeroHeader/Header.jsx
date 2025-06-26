import { useState } from 'react'
import styles from './Header.module.css'
import navigationItems from './navigationItems'
import Logo from '../../../common/LogoComponent/Logo'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__container}>
          <Logo/>
          <ul className={styles.link__list}>
            {navigationItems.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.link} className={styles.list__item}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
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