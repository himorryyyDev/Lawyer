import Logo from '../LogoComponent/Logo'
import Line from '../LineComponent/Line'
import styles from './Burger.module.css'
import Navigation from '../NavigationComponent/Navigation'

const Burger = ({onClose, isOpen}) => {
  return(
    <section className={styles.burger__container}>
      <Logo/>
      <Line/>
      <Navigation direction='column'/>
      <div className={styles.button__container}>
        <img className={styles.container__item} src="" alt="" />
      </div>
    </section>
  )
}

export default Burger