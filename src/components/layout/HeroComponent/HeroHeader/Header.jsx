import { useState } from 'react'
import styles from './Header.module.css'
import Logo from '../../../common/LogoComponent/Logo'
import Navigation from '../../../common/NavigationComponent/Navigation'
import Burger from '../../../common/BurgerComponent/Burger'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__container} onClose={handleClick}>
          <Logo/>
          <Navigation direction='row'/>
          <button onClick={handleClick} className={styles.button__container}>
            <div className={styles.button__line}></div>
            <div className={styles.button__line}></div>
            <div className={styles.button__line}></div>
          </button>
        </section>
      </header>

      <Burger isOpen={isOpen} onClose={handleClick}/>
    </>
  )
}

export default Header