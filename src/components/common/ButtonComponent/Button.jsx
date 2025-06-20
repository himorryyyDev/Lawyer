import styles from './Button.module.css'

const Button = ({children, theme, link, type, onClick}) => {
  return (
    <>
    <a href={link} onClick={(e) => {
      if (onClick) {
        onClick()
      }
    }}>
      <button 
      type={type}
      className={`${styles.button} ${styles[theme] || ''}`}
      >{children}</button>
    </a>
    </>
  )
}

export default Button