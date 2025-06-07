import styles from './Button.module.css'

const Button = ({children, theme, link}) => {
  return (
    <>
    <a href={[link]}>
      <button className={`${styles.Button} ${styles[theme] || ''}`}>{children}</button>
    </a>
    </>
  )
}

export default Button