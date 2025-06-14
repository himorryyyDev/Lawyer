import footerNavigation from "./footerNavigation"
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <>
      <ul className={styles.main__navigation}>
        {footerNavigation.map((item) => {
          return (
            <a key={item.title} href={item.link} className={styles.navigation__item}>{item.title}</a>
          )
        })}
      </ul>
    </>
  )
}

export default Navigation