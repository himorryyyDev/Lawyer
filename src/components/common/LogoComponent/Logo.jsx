import styles from './Logo.module.css'

const Logo = () => {
  return (
    <a href='#' className={styles.logo__container}>
      <h1 className={styles.container__title}>ПРАВОЗАЩИТНИК</h1>
      <p className={styles.container__description}>юридическая компания</p>
    </a>
  )
}

export default Logo