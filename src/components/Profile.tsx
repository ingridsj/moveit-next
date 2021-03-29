import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className= { styles.profileContainer}>
      <img src="https://github.com/ingridsj.png" alt="Ingrid Almeida"/>
      <div>
        <strong>Ingrid Almeida</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}