import styles from './CategoryButton.module.css'

export default function CategoryButton({ image, title, color = '#fff', clickHandler = null }) {
  return (
    <div className={styles.category} style={{ background: color }} onClick={clickHandler}>
      {image && <img className={styles.image} src={`/categories/${image}`} alt={''} />}
      {title}
    </div>
  )
}