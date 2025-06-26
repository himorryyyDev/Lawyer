import Logo from '../LogoComponent/Logo'
import Line from '../LineComponent/Line'
import styles from './Burger.module.css'
import Navigation from '../NavigationComponent/Navigation'

const Burger = ({isOpen, onClose}) => {
  if (!isOpen) return null

  return (
    <section className={styles.burger__container}>
      <div className={styles.container__header}>
        <Logo/>
        <div onClick={onClose} className={styles.button__container}>
          <img className={styles.container__item} src="/images/closeButton.svg" alt="" />
        </div>
      </div>
      <Line/>
      <Navigation direction='column' onClose={onClose}/>
    </section>
  )
}

export default Burger