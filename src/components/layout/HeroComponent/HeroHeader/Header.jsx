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
        <ul className={styles.link__list}>
          {listItems.map((  item) => {
            return (
              <li key={item.id}>
                <a href={item.link} className={styles.list__item}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </header>
    </>
  )
}

export default Header