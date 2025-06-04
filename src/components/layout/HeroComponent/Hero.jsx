import Header from "./HeroHeader/Header"
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
      <Header />

      <section className={styles.text__container}>
        <h3>ОКАЗЫВАЕМ ВЕСЬ КОМПЛЕКС</h3>
        <h1>ЮРИДИЧЕСКИХ УСЛУГ</h1>
        <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение.</p>
      </section>

      <img  className={styles.background__image} src='/images/heroBackground.png' alt="" />
    </>
  )
}

export default Hero