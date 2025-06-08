import Header from "./HeroHeader/Header"
import styles from './Hero.module.css'
import Button from "../../common/Button/Button"
import Contact from "./HeroHeader/Contact"

const Hero = () => {
  return (
    <>
      <Contact />
      <Header />

      <section className={styles.text__container}>
        <h3 className={styles.subtitle__item}>ОКАЗЫВАЕМ ВЕСЬ КОМПЛЕКС</h3>
        <h1 className={styles.title__item}>ЮРИДИЧЕСКИХ УСЛУГ</h1>
        <p className={styles.info__item}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение.</p>
        <Button theme='primary' link='#'>Наши услуги</Button>
        
        <section className={styles.decoration__container}>
          <img src="/images/sliderNavigation.svg" alt="" />
          <img src="/images/sliderButtons.svg" alt="" />
        </section>
      </section>

      <div className={styles.image__container}>
       <img className={styles.background__image} src='/images/heroBackground.png' alt="" />
      </div>
    </>
  )
}

export default Hero