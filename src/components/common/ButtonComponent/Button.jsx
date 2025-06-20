import styles from './Button.module.css'

const Button = ({children, theme, link, onClick}) => {
  return (
    <>
    <a href={link} onClick={(e) => {
      if (onClick) {
        onClick()
      }
    }}>
      <button 
      className={`${styles.button} ${styles[theme] || ''}`}
      >{children}</button>
    </a>
    </>
  )
}

export default Button