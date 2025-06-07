import styles from './Button.module.css'

const Button = ({children, theme, link}) => {
  return (
    <>
    <a href={[link]}>
      <button className={`${styles.button} ${styles[theme] || ''}`}>{children}</button>
    </a>
    </>
  )
}

export default Button