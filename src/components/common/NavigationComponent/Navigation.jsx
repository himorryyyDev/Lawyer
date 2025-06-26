import styles from './Navigation.module.css'
import navigationItems from './navigationItems'

const Navigation = ({direction, onClose}) => {
  return (
    <ul className={`${styles.navigation__container} ${styles[direction]}`}>
      {navigationItems.map((item) => {
        return (
          <a 
          key={item.link} 
          className={styles.container__item} 
          href={item.link}
          onClick={onClose}
          >
            {item.title}
          </a>
        )
      })}
    </ul>
  )
}

export default Navigation