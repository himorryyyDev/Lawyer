import certificateList from './certificateList'
import styles from './CertificateModal.module.css'

const CertificateModal = () => {
  return (
    <div className={styles.certificate__container}>
      {certificateList.map((item) => {
        return (
          <div key={item.img} className={styles.container__item}>
            <img src={item.img} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default CertificateModal