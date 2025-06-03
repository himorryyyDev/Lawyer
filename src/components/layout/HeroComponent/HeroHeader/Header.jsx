import styles from './Header.module.css'
import listItems from './listItems'

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.logo}>
          <h1>ПРАВОЗАЩИТНИК</h1>
          <p>юридическая компания</p>
        </div>
        <ul>
          {listItems.map((item) => {
            <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </header>
    </>
  )
}

export default Header